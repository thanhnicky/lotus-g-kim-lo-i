import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoLotus from "../assets/logo-lotus-paint-35325.jpg";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const Route = createFileRoute("/thank-you-son-gia-go-kim-loai")({
  component: ThankYou,
});

const ZALO_URL = "https://zalo.me/0943966662";

function ThankYou() {
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState<any>({});
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = JSON.parse(sessionStorage.getItem("orderData") || "{}");
      setOrderData(data);

      const params = new URLSearchParams(window.location.search);
      setPhone(params.get("phone") || data.phone || "");

      // Push conversion event to GTM dataLayer
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: "purchase",
        transaction_id: data.orderId || data.phone || params.get("phone") || "",
        value: data.totalPrice || 0,
        currency: "VND",
        payment_method: data.paymentMethod || "cod",
      });
    }
  }, []);

  const getOrderTime = () => {
    if (orderData.orderTime) return new Date(orderData.orderTime).toLocaleString('vi-VN');
    return new Date().toLocaleString('vi-VN');
  };

  const formatPrice = (price: number) => {
    return Math.floor(price).toLocaleString("vi-VN") + " đ";
  };

  const comboPrices: Record<string, { small: number; large: number }> = {
    "Combo hạng mục nhỏ": { small: 515000, large: 2350000 },
    "Combo ngoại thất": { small: 751000, large: 3420000 },
    "Combo 2K cao cấp": { small: 888000, large: 4050000 },
  };

  const getBasePrice = () => {
    if (!orderData.selectedCombos) return 0;
    return Object.entries(orderData.selectedCombos).reduce((total, [comboName, quantities]: [string, any]) => {
      const combo = comboPrices[comboName];
      if (!combo) return total;
      return total + quantities.small * combo.small + quantities.large * combo.large;
    }, 0);
  };

  const getTotalPrice = () => {
    if (orderData.totalPrice) return orderData.totalPrice;
    return getBasePrice();
  };

  const getSelectedItems = () => {
    // Use object versions if available, otherwise fall back to string parsing
    const selectedCombos = orderData.selectedCombosObj || {};
    const comboColors = orderData.comboColorsObj || {};
    
    if (!selectedCombos || Object.keys(selectedCombos).length === 0) return [];
    const items: { name: string; quantity: number; size: string; color: string }[] = [];

    Object.entries(selectedCombos).forEach(([comboName, quantities]: [string, any]) => {
      if (quantities.small > 0) {
        items.push({
          name: comboName,
          quantity: quantities.small,
          size: "nhỏ",
          color: comboColors?.[`${comboName}-small`] || "Chưa chọn",
        });
      }

      if (quantities.large > 0) {
        items.push({
          name: comboName,
          quantity: quantities.large,
          size: "lớn",
          color: comboColors?.[`${comboName}-large`] || "Chưa chọn",
        });
      }
    });

    return items;
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal antialiased font-sans py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="rounded-2xl border-2 border-clay/30 bg-sand/50 p-8 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-clay/10">
            <svg className="h-10 w-10 text-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold md:text-4xl font-serif">
            Đặt hàng thành công!
          </h1>

          <p className="mt-4 text-lg text-walnut/70">
            Cảm ơn bạn đã tin tưởng và đặt hàng sản phẩm của Lotus.
          </p>

          <p className="mt-2 text-walnut/60">
            Chúng tôi sẽ liên hệ xác nhận đơn hàng qua số điện thoại <strong className="text-charcoal">{phone || "của bạn"}</strong> trong vòng 30 phút.
          </p>

          {getSelectedItems().length > 0 && (
            <div className="mt-8 rounded-xl bg-cream p-6 text-left">
              <h2 className="mb-4 text-lg font-bold text-clay">Tóm tắt đơn hàng</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-walnut/60">Mã đơn hàng:</span>
                  <span className="font-medium text-charcoal">#{orderData.orderId || "Đang xử lý"}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-walnut/60">Thời gian đặt:</span>
                  <span className="font-medium text-charcoal">{getOrderTime()}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-walnut/60">Họ và tên:</span>
                  <span className="font-medium text-charcoal">{orderData.name || "-"}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-walnut/60">Số điện thoại:</span>
                  <span className="font-medium text-charcoal">{phone || "-"}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-walnut/60">Địa chỉ:</span>
                  <span className="font-medium text-charcoal">{orderData.address || "-"}</span>
                </div>

                {orderData.note && (
                  <div className="flex justify-between">
                    <span className="text-walnut/60">Ghi chú:</span>
                    <span className="font-medium text-charcoal">{orderData.note}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-walnut/60">Hình thức thanh toán:</span>
                  <span className="font-medium text-charcoal">
                    {orderData.paymentMethod === "online"
                      ? "Chuyển khoản Online"
                      : "COD - Thanh toán khi nhận hàng"}
                  </span>
                </div>

                <div className="mt-4 border-t border-walnut/15 pt-4">
                  <h3 className="mb-3 font-semibold text-charcoal">Sản phẩm đã đặt:</h3>

                  {getSelectedItems().map((item, idx) => (
                    <div key={idx} className="mb-2 flex justify-between">
                      <span className="text-walnut/60">
                        {item.name} ({item.size}) x{item.quantity}
                      </span>
                      <span className="text-xs text-walnut/60">Màu: {item.color}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex justify-between border-t-2 border-clay pt-4">
                  <span className="text-lg font-bold text-charcoal">Tổng tiền:</span>
                  <span className="text-2xl font-bold text-clay">{formatPrice(getTotalPrice())}</span>
                </div>
              </div>
            </div>
          )}

          {getTotalPrice() > 0 && (
            <div className="mt-8 rounded-xl bg-cream p-6 text-left">
              <h2 className="mb-4 text-lg font-bold text-clay">Quét mã QR để thanh toán</h2>

              <div className="flex flex-col items-center gap-4">
                <div className="rounded-lg border-2 border-walnut/20 bg-white p-4">
                  <img
                    src={`https://img.vietqr.io/image/EIB-211014851223910-compact2.png?amount=${getTotalPrice()}&addInfo=Thanh toan don hang - ${phone}`}
                    alt="QR Code thanh toán"
                    className="h-48 w-48"
                  />
                </div>

                <div className="text-center text-sm">
                  <p className="font-semibold text-charcoal">Ngân hàng Eximbank</p>
                  <p className="text-walnut/60">Số tài khoản: 211014851223910</p>
                  <p className="text-walnut/60">
                    CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI DỊCH VỤ BÍCH TRANG
                  </p>
                  <p className="mt-2 text-xs text-walnut/50">
                    Số tiền: {formatPrice(getTotalPrice())}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => navigate({ to: "/" })}
              className="inline-flex items-center justify-center rounded-lg border-2 border-clay bg-cream px-6 py-3 text-base font-semibold text-clay transition hover:bg-sand"
            >
              Về trang chủ
            </button>

            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-clay px-6 py-3 text-base font-semibold text-cream shadow-md transition hover:bg-walnut"
            >
              Nhắn Zalo theo dõi đơn hàng
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}