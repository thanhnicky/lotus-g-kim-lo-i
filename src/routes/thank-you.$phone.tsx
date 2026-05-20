import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { QRCodeSVG } from "qrcode.react";

export const Route = createFileRoute("/thank-you/$phone")({
  component: ThankYou,
});

function ThankYou() {
  const { phone } = Route.useParams();
  const navigate = useNavigate();

  // Get order data from sessionStorage (stored during form submission)
  const orderData = JSON.parse(sessionStorage.getItem("orderData") || "{}");

  const formatPrice = (price: number) => {
    return (price / 1000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ".000 đ";
  };

  const comboPrices: Record<string, { small: number; large: number }> = {
    "Combo tiết kiệm": { small: 515000, large: 2350000 },
    "Combo thông dụng": { small: 751000, large: 3420000 },
    "Combo cao cấp 2K": { small: 888000, large: 4050000 },
  };

  const getBasePrice = () => {
    if (!orderData.selectedCombos) return 0;
    return Object.entries(orderData.selectedCombos).reduce((total, [comboName, quantities]: [string, any]) => {
      const combo = comboPrices[comboName];
      if (!combo) return total;
      return total + (quantities.small * combo.small) + (quantities.large * combo.large);
    }, 0);
  };

  const getTotalPrice = () => {
    if (orderData.totalPrice) return orderData.totalPrice;
    return getBasePrice();
  };

  const getSelectedItems = () => {
    if (!orderData.selectedCombos) return [];
    const items: { name: string; quantity: number; size: string; color: string }[] = [];
    Object.entries(orderData.selectedCombos).forEach(([comboName, quantities]: [string, any]) => {
      if (quantities.small > 0) items.push({ 
        name: comboName, 
        quantity: quantities.small, 
        size: "nhỏ",
        color: orderData.comboColors?.[`${comboName}-small`] || "Chưa chọn"
      });
      if (quantities.large > 0) items.push({ 
        name: comboName, 
        quantity: quantities.large, 
        size: "lớn",
        color: orderData.comboColors?.[`${comboName}-large`] || "Chưa chọn"
      });
    });
    return items;
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="rounded-2xl border-2 border-primary/30 bg-secondary/50 p-8 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Đặt hàng thành công!
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Cảm ơn bạn đã tin tưởng và đặt hàng sản phẩm của Lotus.
          </p>
          <p className="mt-2 text-muted-foreground">
            Chúng tôi sẽ liên hệ xác nhận đơn hàng qua số điện thoại <strong>{phone}</strong> trong vòng 30 phút.
          </p>

          {getSelectedItems().length > 0 && (
            <div className="mt-8 rounded-xl bg-background p-6 text-left">
              <h2 className="mb-4 text-lg font-bold text-primary">Tóm tắt đơn hàng</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Họ và tên:</span>
                  <span className="font-medium">{orderData.name || "-"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Số điện thoại:</span>
                  <span className="font-medium">{phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Địa chỉ:</span>
                  <span className="font-medium">{orderData.address || "-"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Hình thức thanh toán:</span>
                  <span className="font-medium">{orderData.paymentMethod === "online" ? "Chuyển khoản Online" : "COD - Thanh toán khi nhận hàng"}</span>
                </div>
                <div className="mt-4 border-t border-border pt-4">
                  <h3 className="mb-3 font-semibold">Sản phẩm đã đặt:</h3>
                  {getSelectedItems().map((item, idx) => (
                    <div key={idx} className="mb-2 flex justify-between">
                      <span className="text-muted-foreground">{item.name} ({item.size}) x{item.quantity}</span>
                      <span className="text-xs text-muted-foreground">Màu: {item.color}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-between border-t-2 border-primary pt-4">
                  <span className="text-lg font-bold">Tổng tiền:</span>
                  <span className="text-2xl font-bold text-primary">{formatPrice(getTotalPrice())}</span>
                </div>
              </div>
            </div>
          )}

          {getTotalPrice() > 0 && (
            <div className="mt-8 rounded-xl bg-background p-6 text-left">
              <h2 className="mb-4 text-lg font-bold text-primary">Quét mã QR để thanh toán</h2>
              <div className="flex flex-col items-center gap-4">
                <div className="rounded-lg border-2 border-border p-4 bg-white">
                  <img
                    src={`https://img.vietqr.io/image/EIB-211014851223910-compact2.png?amount=${getTotalPrice()}&addInfo=Thanh toan don hang - ${phone}`}
                    alt="QR Code thanh toán"
                    className="h-48 w-48"
                  />
                </div>
                <div className="text-center text-sm">
                  <p className="font-semibold">Ngân hàng Eximbank</p>
                  <p className="text-muted-foreground">Số tài khoản: 211014851223910</p>
                  <p className="text-muted-foreground">CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI DỊCH VỤ BÍCH TRANG</p>
                  <p className="mt-2 text-xs text-muted-foreground">Số tiền: {formatPrice(getTotalPrice())}</p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => navigate({ to: "/" })}
              className="inline-flex items-center justify-center rounded-lg border-2 border-primary bg-background px-6 py-3 text-base font-semibold text-primary transition hover:bg-secondary"
            >
              Về trang chủ
            </button>
            <a
              href="https://zalo.me/0943966662"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-md transition hover:bg-primary/90"
            >
              Nhắn Zalo theo dõi đơn hàng
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
