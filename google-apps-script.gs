// Google Apps Script for handling order submissions
// Copy this code to your Google Apps Script editor

// Sheet and Email Configuration
const SHEET_NAME = "Đơn hàng";
const SPREADSHEET_ID = "19gxrWlXeR9mzxMQ-d25h1ZQCj93yzL6xGgHzeCHqRDA"; // Replace with your Google Sheet ID (from URL: /d/XXXXX/edit)
const EMAIL_RECIPIENT = "nguyenxuanthanh2009@gmail.com"; // Change to your email
const EMAIL_SUBJECT = "Đơn hàng mới - Sơn Lotus";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Get or create the sheet
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      // Set up headers
      sheet.appendRow([
        "Thời gian",
        "Họ và tên",
        "Số điện thoại",
        "Địa chỉ giao hàng",
        "Ghi chú",
        "Hình thức thanh toán",
        "Chi tiết đơn hàng",
        "Tổng giá trị"
      ]);
      // Format header row
      sheet.getRange(1, 1, 1, 8).setFontWeight("bold").setBackground("#4CAF50").setFontColor("white");
    }
    
    // Format payment method for display
    const paymentMethodDisplay = data.paymentMethod === "cod" 
      ? "COD - Thanh toán khi nhận hàng" 
      : "Chuyển khoản Online";
    
    // Format order details
    const orderDetails = formatOrderDetails(data.selectedCombos, data.comboColors);
    
    // Format total price
    const totalPrice = formatPrice(data.totalPrice);
    
    // Append data to sheet
    sheet.appendRow([
      new Date(),
      data.name || "",
      data.phone || "",
      data.address || "",
      data.note || "",
      paymentMethodDisplay,
      orderDetails,
      totalPrice
    ]);
    
    // Send email notification
    sendEmailNotification(data, paymentMethodDisplay, orderDetails, totalPrice);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error("Error processing order:", error);
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function formatOrderDetails(selectedCombos, comboColors) {
  const details = [];
  
  Object.entries(selectedCombos).forEach(([comboName, quantities]) => {
    if (quantities.small > 0) {
      const key = `${comboName}-small`;
      const color = comboColors[key] || "Chưa chọn";
      details.push(`${comboName} (nhỏ) x${quantities.small} - Màu: ${color}`);
    }
    if (quantities.large > 0) {
      const key = `${comboName}-large`;
      const color = comboColors[key] || "Chưa chọn";
      details.push(`${comboName} (lớn) x${quantities.large} - Màu: ${color}`);
    }
  });
  
  return details.length > 0 ? details.join("\n") : "Không có sản phẩm";
}

function formatPrice(price) {
  return (price / 1000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ".000 đ";
}

function sendEmailNotification(data, paymentMethodDisplay, orderDetails, totalPrice) {
  const orderItems = [];
  
  Object.entries(data.selectedCombos).forEach(([comboName, quantities]) => {
    if (quantities.small > 0) {
      const key = `${comboName}-small`;
      const color = data.comboColors[key] || "Chưa chọn";
      orderItems.push(`• ${comboName} (nhỏ) x${quantities.small} - Màu: ${color}`);
    }
    if (quantities.large > 0) {
      const key = `${comboName}-large`;
      const color = data.comboColors[key] || "Chưa chọn";
      orderItems.push(`• ${comboName} (lớn) x${quantities.large} - Màu: ${color}`);
    }
  });
  
  const htmlBody = `
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #2E7D32; border-bottom: 2px solid #2E7D32; padding-bottom: 10px;">📦 Đơn hàng mới - Sơn Lotus</h2>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
            <h3 style="margin-top: 0; color: #2E7D32;">Thông tin khách hàng</h3>
            <p><strong>Họ và tên:</strong> ${data.name || "Chưa cung cấp"}</p>
            <p><strong>Số điện thoại:</strong> ${data.phone || "Chưa cung cấp"}</p>
            <p><strong>Địa chỉ giao hàng:</strong> ${data.address || "Chưa cung cấp"}</p>
            <p><strong>Ghi chú:</strong> ${data.note || "Không có"}</p>
            <p><strong>Hình thức thanh toán:</strong> <span style="color: #2E7D32; font-weight: bold;">${paymentMethodDisplay}</span></p>
          </div>
          
          <div style="margin: 15px 0;">
            <h3 style="color: #2E7D32;">Chi tiết đơn hàng</h3>
            ${orderItems.length > 0 ? orderItems.map(item => `<p style="margin: 5px 0;">${item}</p>`).join("") : "<p>Không có sản phẩm</p>"}
          </div>
          
          <div style="background-color: #e8f5e9; padding: 15px; border-radius: 5px; margin: 15px 0; text-align: right;">
            <h3 style="margin-top: 0; color: #2E7D32;">Tổng giá trị: ${totalPrice}</h3>
            ${data.paymentMethod === "online" ? "<p style='color: #d32f2f; font-size: 14px;'>* Đã áp dụng giảm giá 10% cho thanh toán online</p>" : ""}
          </div>
          
          <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
            <p>Thời gian đặt hàng: ${new Date().toLocaleString("vi-VN")}</p>
            <p>Liên hệ khách hàng qua Zalo: <a href="https://zalo.me/${data.phone}">${data.phone}</a></p>
          </div>
        </div>
      </body>
    </html>
  `;
  
  MailApp.sendEmail({
    to: EMAIL_RECIPIENT,
    subject: EMAIL_SUBJECT,
    htmlBody: htmlBody
  });
}

// Set up the web app
function doGet() {
  return ContentService.createTextOutput("Sơn Lotus Order Form API is running. Use POST to submit orders.")
    .setMimeType(ContentService.MimeType.TEXT);
}
