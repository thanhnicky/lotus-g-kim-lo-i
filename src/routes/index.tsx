import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import logoLotus from "../assets/logo-lotus-paint-35325.jpg";
import colorPaletteImage from "../assets/bang-mau-son-gia-go-tren-sat-lotus.png";
import heroGate from "../assets/hero-gate.jpg";
import appRailing from "../assets/app-railing.jpg";
import appFence from "../assets/app-fence.jpg";
import appPergola from "../assets/app-pergola.jpg";
import appDoor from "../assets/app-door.jpg";
import appFrame from "../assets/app-frame.jpg";
import appLouver from "../assets/app-louver.jpg";
import appKhungKeoThep from "../assets/khung-keo-thep-gia-go-lotus.jpg";
import beforeChanBanSat from "../assets/before-chan-ban-sat.jpg";
import afterChanBanSat from "../assets/after-chan-ban-sat.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const ZALO_URL = "https://zalo.me/0943966662";
const HOTLINE = "0943 966 662";

const serif = "'Playfair Display', serif";

function LandingPage() {
  const [selectedCombos, setSelectedCombos] = useState<Record<string, { small: number; large: number }>>({
    "Combo tiết kiệm": { small: 0, large: 0 },
    "Combo thông dụng": { small: 0, large: 0 },
    "Combo cao cấp 2K": { small: 0, large: 0 },
  });

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <Hero />
      <TrustBar />
      <Problem />
      <Solution />
      <Applications />
      <Benefits />
      <BeforeAfter />
      <Process />
      <ColorPalette />
      <Combos selectedCombos={selectedCombos} setSelectedCombos={setSelectedCombos} />
      <LeadForm selectedCombos={selectedCombos} />
      <Feedback />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

/* ---------- Header ---------- */
function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#top" className="flex items-center gap-2">
          <img src={logoLotus} alt="Sơn Lotus Logo" className="h-12 w-12 rounded-md object-contain" />
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <a href="#ung-dung" className="hover:text-primary">Ứng dụng</a>
          <a href="#bang-mau" className="hover:text-primary">Bảng màu</a>
          <a href="#combo" className="hover:text-primary">Combo</a>
          <a href="#tu-van" className="hover:text-primary">Tư vấn</a>
          <a href="#faq" className="hover:text-primary">FAQ</a>
        </nav>
        <a
          href={ZALO_URL}
          className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 md:inline-flex"
        >
          Nhắn Zalo tư vấn
        </a>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 md:grid-cols-2 md:gap-12 md:px-6 md:py-16 lg:py-20">
        <div>
          <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
            Sơn Lotus · Hệ giả gỗ chuyên cho kim loại
          </span>
          <h1
            className="mt-4 text-3xl font-bold leading-tight md:text-5xl lg:text-6xl"
            style={{ fontFamily: serif }}
          >
            Sơn giả gỗ trên kim loại <span className="text-primary">Lotus</span> – Biến cổng sắt,
            lan can, hàng rào thành bề mặt vân gỗ sang trọng
          </h1>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Giải pháp hoàn thiện bề mặt kim loại với hiệu ứng gỗ đẹp mắt, phù hợp cho nhiều hạng
            mục nội ngoại thất. Dễ chọn màu, dễ đặt hàng, dễ nhắn Zalo để được tư vấn đúng hệ sơn.
          </p>

          <ul className="mt-6 space-y-2 text-sm md:text-base">
            {[
              "Phù hợp nhiều hạng mục kim loại",
              "Hiệu ứng vân gỗ đẹp, tăng giá trị thẩm mỹ",
              "Hỗ trợ tư vấn đúng hệ sơn qua Zalo",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-primary" />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={ZALO_URL}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-md transition hover:bg-primary/90"
            >
              <ZaloIcon className="h-5 w-5" />
              Nhắn Zalo để được tư vấn
            </a>
            <a
              href="#bang-mau"
              className="inline-flex items-center justify-center rounded-lg border-2 border-primary bg-background px-6 py-4 text-base font-semibold text-primary transition hover:bg-secondary"
            >
              Xem bảng màu & đặt hàng
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span>Hotline: <strong className="text-foreground">{HOTLINE}</strong></span>
            <span>·</span>
            <span>Tư vấn miễn phí 8h–20h</span>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5">
            <img
              src={heroGate}
              alt="Cổng sắt sơn giả gỗ Lotus hiệu ứng vân gỗ sang trọng"
              width={1920}
              height={1080}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-3 hidden rounded-xl bg-background p-3 shadow-lg ring-1 ring-border md:block">
            <div className="flex items-center gap-3">
              <img src={appDoor} alt="Cửa sắt giả gỗ" className="h-16 w-16 rounded-md object-cover" loading="lazy" />
              <div className="text-xs">
                <div className="font-semibold">Hơn 200+ công trình</div>
                <div className="text-muted-foreground">Cổng, lan can, pergola...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Trust Bar ---------- */
function TrustBar() {
  const items = [
    "Dùng cho nhiều bề mặt kim loại",
    "Hiệu ứng gỗ đẹp, sang hơn",
    "Hỗ trợ chọn đúng hệ sơn",
    "Tư vấn nhanh qua Zalo",
  ];
  return (
    <section className="border-y border-border bg-secondary/50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 py-5 md:grid-cols-4 md:gap-6 md:px-6 md:py-6">
        {items.map((t) => (
          <div key={t} className="flex items-start gap-2 text-sm font-medium md:items-center">
            <CheckIcon className="h-5 w-5 flex-none text-primary" />
            <span>{t}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Problem ---------- */
function Problem() {
  const pains = [
    "Cổng sắt hoặc lan can nhìn cứng và thô",
    "Muốn đẹp như gỗ nhưng không muốn dùng gỗ thật",
    "Không biết sơn giả gỗ trên kim loại có phù hợp không",
    "Sợ chọn sai màu hoặc sai hệ sơn",
    "Muốn được tư vấn nhanh trước khi mua",
  ];
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Vấn đề thường gặp</span>
          <h2
            className="mt-2 text-2xl font-bold leading-tight md:text-4xl"
            style={{ fontFamily: serif }}
          >
            Bề mặt kim loại bền – nhưng thường thiếu cảm giác sang và ấm như gỗ
          </h2>
          <p className="mt-3 text-muted-foreground">
            Nhiều khách hàng muốn cổng, hàng rào, lan can đẹp như gỗ tự nhiên nhưng vẫn giữ độ bền của
            kim loại. Đây là lý do hệ sơn giả gỗ Lotus được lựa chọn.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((p, i) => (
            <div
              key={p}
              className="rounded-xl border border-border bg-card p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-bold text-primary">
                {i + 1}
              </div>
              <p className="mt-3 text-sm font-medium leading-relaxed md:text-base">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Solution ---------- */
function Solution() {
  const items = [
    {
      t: "Hoàn thiện bề mặt theo phong cách vân gỗ",
      d: "Hệ sơn giả gỗ Lotus giúp kim loại lên màu vân gỗ tự nhiên, sống động.",
    },
    {
      t: "Tăng thẩm mỹ cho công trình",
      d: "Mang cảm giác ấm, sang trọng – phù hợp nhà phố, biệt thự, resort.",
    },
    {
      t: "Dùng được nội thất & ngoại thất",
      d: "Có hệ sơn phủ bảo vệ riêng cho ngoài trời, chống nắng và thời tiết.",
    },
    {
      t: "Tư vấn đúng quy trình & combo",
      d: "Đội ngũ Lotus hỗ trợ chọn combo phù hợp theo từng hạng mục.",
    },
  ];
  return (
    <section className="bg-secondary/40 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Giải pháp Lotus</span>
          <h2 className="mt-2 text-2xl font-bold leading-tight md:text-4xl" style={{ fontFamily: serif }}>
            Lotus giúp kim loại mang vẻ đẹp ấm và sang của gỗ
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.t} className="rounded-xl bg-background p-6 shadow-sm ring-1 ring-border">
              <CheckIcon className="h-6 w-6 text-primary" />
              <h3 className="mt-3 text-base font-semibold">{it.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Applications ---------- */
function Applications() {
  const apps = [
    { img: heroGate, t: "Cổng sắt giả gỗ" },
    { img: appFence, t: "Hàng rào sắt giả gỗ" },
    { img: appRailing, t: "Lan can giả gỗ" },
    { img: appFrame, t: "Khung thép trang trí" },
    { img: appDoor, t: "Cửa sắt giả gỗ" },
    { img: appPergola, t: "Pergola / mái hiên" },
    { img: appLouver, t: "Lam sắt trang trí" },
    { img: appKhungKeoThep, t: "Khung kèo thép giả gỗ" },
  ];
  return (
    <section id="ung-dung" className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Ứng dụng thực tế</span>
            <h2 className="mt-2 text-2xl font-bold leading-tight md:text-4xl" style={{ fontFamily: serif }}>
              Phù hợp nhiều hạng mục kim loại nội & ngoại thất
            </h2>
          </div>
          <a href={ZALO_URL} className="text-sm font-semibold text-primary hover:underline">
            Gửi ảnh hạng mục qua Zalo →
          </a>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {apps.map((a) => (
            <figure key={a.t} className="group overflow-hidden rounded-xl bg-card shadow-sm ring-1 ring-border">
              <div className="aspect-square overflow-hidden">
                <img
                  src={a.img}
                  alt={a.t}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="px-3 py-3 text-sm font-semibold md:text-base">{a.t}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Benefits ---------- */
function Benefits() {
  const items = [
    "Đẹp như gỗ nhưng trên nền kim loại bền bỉ",
    "Tăng tính thẩm mỹ cho cổng, hàng rào, lan can",
    "Cảm giác sang trọng, ấm hơn kim loại sơn màu thường",
    "Phù hợp nhiều phong cách kiến trúc: tân cổ điển, hiện đại, resort",
    "Tư vấn đúng hệ sơn theo từng hạng mục cụ thể",
    "Dễ phối với cửa gỗ, đá tự nhiên và nội thất ấm",
  ];
  return (
    <section className="bg-[oklch(0.95_0.02_75)] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Lợi ích</span>
            <h2 className="mt-2 text-2xl font-bold leading-tight md:text-4xl" style={{ fontFamily: serif }}>
              Vì sao chọn hiệu ứng giả gỗ trên kim loại?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Kết hợp độ bền của kim loại và vẻ đẹp ấm áp của gỗ. Một lựa chọn thông minh cho công
              trình muốn nâng tầm thẩm mỹ mà vẫn giữ tính thực tế.
            </p>
            <a
              href={ZALO_URL}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              <ZaloIcon className="h-4 w-4" /> Nhắn Zalo để được tư vấn
            </a>
          </div>
          <ul className="grid gap-3">
            {items.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-lg bg-background p-4 shadow-sm ring-1 ring-border"
              >
                <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-primary" />
                <span className="text-sm md:text-base">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Before / After ---------- */
function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Trước & sau</span>
          <h2 className="mt-2 text-2xl font-bold leading-tight md:text-4xl" style={{ fontFamily: serif }}>
            Sự thay đổi rõ rệt sau khi hoàn thiện giả gỗ Lotus
          </h2>
          <p className="mt-3 text-muted-foreground">
            Kéo thanh trượt để so sánh sự khác biệt trước và sau khi sơn giả gỗ.
          </p>
        </div>
        <div className="mt-8 mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            {/* After image (background) */}
            <img
              src={afterChanBanSat}
              alt="Sau khi sơn giả gỗ"
              className="aspect-[4/3] w-full object-cover"
            />
            {/* Before image (foreground with clipping) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={beforeChanBanSat}
                alt="Trước khi sơn giả gỗ"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            {/* Slider handle */}
            <div
              className="absolute inset-y-0 w-1 bg-white cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
                <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
            </div>
            {/* Labels */}
            <span className="absolute left-4 top-4 rounded bg-foreground/80 px-3 py-1 text-xs font-bold text-background">
              TRƯỚC
            </span>
            <span className="absolute right-4 top-4 rounded bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
              SAU
            </span>
            {/* Hidden slider input */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="absolute inset-0 w-full cursor-ew-resize opacity-0"
            />
          </div>
          <div className="mt-6 text-center">
            <a href={ZALO_URL} className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-md transition hover:bg-primary/90">
              Tư vấn hạng mục tương tự →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Color Palette ---------- */
const COLORS = [
  { name: "Teak", hex: "#a0633a" },
  { name: "Walnut", hex: "#5b3a22" },
  { name: "Cánh gián", hex: "#7a3b1a" },
  { name: "Sồi sáng", hex: "#c89466" },
  { name: "Cherry", hex: "#8a3324" },
  { name: "Gỗ đỏ đậm", hex: "#4a1d12" },
];

function ColorPalette() {
  return (
    <section id="bang-mau" className="bg-secondary/40 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Bảng màu</span>
          <h2 className="mt-2 text-2xl font-bold leading-tight md:text-4xl" style={{ fontFamily: serif }}>
            Chọn tông gỗ phù hợp cho hạng mục của bạn
          </h2>
          <p className="mt-3 text-muted-foreground">
            Các tông gỗ phổ biến được khách hàng Lotus lựa chọn nhiều nhất. Xem bảng màu chi tiết và
            gửi cho chúng tôi để nhận tư vấn đúng combo.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <img
            src={colorPaletteImage}
            alt="Bảng màu sơn giả gỗ trên kim loại Lotus"
            className="w-full max-w-5xl rounded-2xl shadow-lg"
          />
        </div>
        <div className="mt-8 text-center">
          <a
            href="#tu-van"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-md transition hover:bg-primary/90"
          >
            Đặt hàng / Nhận tư vấn
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Process ---------- */
function Process() {
  const steps = [
    { n: 1, t: "Xử lý bề mặt kim loại", d: "Làm sạch, đánh nhám, loại bỏ gỉ và dầu mỡ." },
    { n: 2, t: "Sơn lót chống gỉ tạo màu nền Lotus", d: "Bám dính tốt, chống gỉ và làm nền cho vân gỗ." },
    { n: 3, t: "Dùng cọ quét tạo vân gỗ tự nhiên", d: "Thợ Lotus tạo vân gỗ sống động theo từng loại gỗ." },
    { n: 4, t: "Phủ bảo vệ hoàn thiện ngoài trời", d: "Lớp phủ bảo vệ chống tia UV, chống thời tiết." },
  ];
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Quy trình</span>
          <h2 className="mt-2 text-2xl font-bold leading-tight md:text-4xl" style={{ fontFamily: serif }}>
            4 bước thi công sơn giả gỗ Lotus trên kim loại
          </h2>
          <p className="mt-3 text-muted-foreground">
            Quy trình đúng giúp bề mặt kim loại lên vân gỗ đẹp, bám tốt và bền hơn khi sử dụng thực tế.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground">
                {s.n}
              </div>
              <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Bước {s.n}
              </div>
              <h3 className="mt-1 text-base font-bold leading-snug">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Combos ---------- */
function Combos({ selectedCombos, setSelectedCombos }: { selectedCombos: Record<string, { small: number; large: number }>; setSelectedCombos: React.Dispatch<React.SetStateAction<Record<string, { small: number; large: number }>>>; }) {

  const combos = [
    {
      name: "Combo tiết kiệm",
      tag: "Cơ bản",
      desc: "Sơn lót kim loại + sơn phủ màu giả gỗ kim loại.",
      items: ["Sơn lót kim loại", "Sơn phủ màu giả gỗ"],
      prices: { small: 515000, large: 2350000 },
      highlight: false,
    },
    {
      name: "Combo thông dụng",
      tag: "Phổ biến nhất",
      desc: "Sơn lót kim loại + sơn phủ màu giả gỗ + sơn phủ trong suốt bảo vệ ngoài trời.",
      items: ["Sơn lót kim loại", "Sơn phủ màu giả gỗ", "Sơn phủ bảo vệ ngoài trời"],
      prices: { small: 751000, large: 3420000 },
      highlight: true,
    },
    {
      name: "Combo cao cấp 2K",
      tag: "Bền cao cấp",
      desc: "Sơn lót kim loại + sơn phủ màu giả gỗ + sơn phủ trong suốt 2K bảo vệ ngoài trời.",
      items: ["Sơn lót kim loại", "Sơn phủ màu giả gỗ", "Sơn phủ 2K bảo vệ cao cấp"],
      prices: { small: 888000, large: 4050000 },
      highlight: false,
    },
  ];

  const formatPrice = (price: number) => {
    return (price / 1000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ".000 đ";
  };

  const updateQuantity = (comboName: string, size: "small" | "large", value: number) => {
    setSelectedCombos(prev => ({
      ...prev,
      [comboName]: {
        ...prev[comboName],
        [size]: Math.max(0, value),
      },
    }));
  };

  const getComboTotal = (comboName: string) => {
    const combo = combos.find(c => c.name === comboName);
    if (!combo) return 0;
    const selected = selectedCombos[comboName];
    return (selected.small * combo.prices.small) + (selected.large * combo.prices.large);
  };

  const getTotalPrice = () => {
    return combos.reduce((total, combo) => {
      const selected = selectedCombos[combo.name];
      return total + (selected.small * combo.prices.small) + (selected.large * combo.prices.large);
    }, 0);
  };
  return (
    <section id="combo" className="bg-secondary/40 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Combo sản phẩm</span>
          <h2 className="mt-2 text-2xl font-bold leading-tight md:text-4xl" style={{ fontFamily: serif }}>
            Chọn combo phù hợp với hạng mục của bạn
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {combos.map((c) => (
            <div
              key={c.name}
              className={`relative flex flex-col rounded-2xl bg-background p-6 shadow-sm ring-1 transition ${
                c.highlight ? "ring-2 ring-primary md:scale-[1.03]" : "ring-border"
              }`}
            >
              {c.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground">
                  Phổ biến nhất
                </span>
              )}
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">{c.tag}</div>
              <h3 className="mt-1 text-xl font-bold" style={{ fontFamily: serif }}>{c.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-secondary/50 p-3">
                  <div>
                    <div className="text-sm font-medium">Combo nhỏ (1kg mỗi loại)</div>
                    <div className="text-xs text-muted-foreground">{formatPrice(c.prices.small)}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateQuantity(c.name, "small", selectedCombos[c.name].small - 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="0"
                      value={selectedCombos[c.name].small}
                      onChange={(e) => updateQuantity(c.name, "small", parseInt(e.target.value) || 0)}
                      className="w-12 rounded-md border border-input bg-background px-2 py-1 text-center text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => updateQuantity(c.name, "small", selectedCombos[c.name].small + 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-secondary/50 p-3">
                  <div>
                    <div className="text-sm font-medium">Combo lớn (5kg mỗi loại)</div>
                    <div className="text-xs text-muted-foreground">{formatPrice(c.prices.large)}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateQuantity(c.name, "large", selectedCombos[c.name].large - 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="0"
                      value={selectedCombos[c.name].large}
                      onChange={(e) => updateQuantity(c.name, "large", parseInt(e.target.value) || 0)}
                      className="w-12 rounded-md border border-input bg-background px-2 py-1 text-center text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => updateQuantity(c.name, "large", selectedCombos[c.name].large + 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      +
                    </button>
                  </div>
                </div>
                {getComboTotal(c.name) > 0 && (
                  <div className="flex items-center justify-between rounded-lg bg-primary/10 p-3">
                    <span className="text-sm font-semibold">Tổng:</span>
                    <span className="text-lg font-bold text-primary">{formatPrice(getComboTotal(c.name))}</span>
                  </div>
                )}
              </div>
              <ul className="mt-5 space-y-2 text-sm">
                {c.items.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-primary" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {getTotalPrice() > 0 && (
          <div className="mt-8 rounded-2xl border-2 border-primary bg-secondary/50 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">Tổng giá trị đơn hàng</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Định mức Combo nhỏ 1kg ~ 5m²; Combo lớn loại 5kg là 25m²
                </p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary">{formatPrice(getTotalPrice())}</div>
                <p className="mt-1 text-xs text-muted-foreground">
                  * Giá trên chưa bao gồm phí vận chuyển
                </p>
              </div>
            </div>
            <a
              href="#tu-van"
              className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-4 text-base font-bold text-primary-foreground shadow-md transition hover:bg-primary/90"
            >
              Tiếp tục điền thông tin đặt hàng
            </a>
          </div>
        )}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Chưa chắc chọn combo nào?{" "}
          <a href={ZALO_URL} className="font-semibold text-primary hover:underline">
            Nhắn Zalo gửi ảnh hạng mục
          </a>{" "}
          để được tư vấn nhanh.
        </p>
      </div>
    </section>
  );
}

/* ---------- Lead Form ---------- */
function LeadForm({ selectedCombos }: { selectedCombos: Record<string, { small: number; large: number }> }) {
  const navigate = useNavigate();
  const [comboColors, setComboColors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "online">("cod");

  const comboPrices: Record<string, { small: number; large: number }> = {
    "Combo tiết kiệm": { small: 515000, large: 2350000 },
    "Combo thông dụng": { small: 751000, large: 3420000 },
    "Combo cao cấp 2K": { small: 888000, large: 4050000 },
  };

  const colorOptions = ["Chưa chọn", "LPCP14.LWF1018", "LMCP0.LWF103", "LPCP4.LWF101", "LPCP8.LWF103", "LPCP0.LWF1017", "LPCP0.LWF101", "LPCP0.LWF1012", "LPCP8.LWFF2", "LPCP0.LWF1013"];

  const formatPrice = (price: number) => {
    return (price / 1000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ".000 đ";
  };

  const getTotalPrice = () => {
    const basePrice = Object.entries(selectedCombos).reduce((total, [comboName, quantities]) => {
      const combo = comboPrices[comboName];
      if (!combo) return total;
      return total + (quantities.small * combo.small) + (quantities.large * combo.large);
    }, 0);
    
    // Apply 10% discount for online payment
    if (paymentMethod === "online") {
      return basePrice * 0.9;
    }
    return basePrice;
  };

  const getBasePrice = () => {
    return Object.entries(selectedCombos).reduce((total, [comboName, quantities]) => {
      const combo = comboPrices[comboName];
      if (!combo) return total;
      return total + (quantities.small * combo.small) + (quantities.large * combo.large);
    }, 0);
  };

  const getSelectedItems = () => {
    const items: { name: string; quantity: number; size: string; key: string }[] = [];
    Object.entries(selectedCombos).forEach(([comboName, quantities]) => {
      if (quantities.small > 0) items.push({ name: comboName, quantity: quantities.small, size: "nhỏ", key: `${comboName}-small` });
      if (quantities.large > 0) items.push({ name: comboName, quantity: quantities.large, size: "lớn", key: `${comboName}-large` });
    });
    return items;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const phone = formData.get("phone") as string;
    const name = formData.get("name") as string;
    const address = formData.get("address") as string;
    const note = formData.get("note") as string;

    // Validate color selection for all selected combos
    const selectedItems = getSelectedItems();
    for (const item of selectedItems) {
      const color = comboColors[item.key];
      if (!color || color === "Chưa chọn") {
        alert(`Vui lòng chọn màu cho ${item.name} (${item.size})`);
        return;
      }
    }

    // Set loading state
    setIsSubmitting(true);

    // Prepare order data
    const orderData = {
      selectedCombos,
      comboColors,
      name,
      phone,
      address,
      note,
      paymentMethod,
      totalPrice: getTotalPrice(),
    };

    // Save order data to sessionStorage
    sessionStorage.setItem("orderData", JSON.stringify(orderData));

    // Send data to Google Apps Script
    try {
      await fetch("https://script.google.com/macros/s/AKfycbz9APlANR5iSSEFE9lvjo06P2FzSRH_I_-1QUXRFLsQENotaMKVJ9AVseFgXWYgFSj3/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
    } catch (error) {
      console.error("Error sending data to Google Sheets:", error);
      setIsSubmitting(false);
      return;
    }

    // Navigate to thank-you page
    navigate({ to: "/thank-you/$phone", params: { phone } });
  };

  return (
    <section id="tu-van" className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Đặt hàng ngay</span>
            <h2 className="mt-2 text-2xl font-bold leading-tight md:text-4xl" style={{ fontFamily: serif }}>
              Hoàn tất đơn hàng – Lotus giao hàng tận nơi
            </h2>
            <p className="mt-3 text-muted-foreground">
              Điền thông tin giao hàng, chúng tôi sẽ xác nhận đơn và giao sơn đến tận tay bạn trong thời gian ngắn nhất.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-6 grid gap-4 rounded-2xl bg-card p-5 ring-1 ring-border md:p-6"
            >
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Họ và tên" name="name" required placeholder="Nguyễn Văn A" />
                  <Field label="Số điện thoại" name="phone" required type="tel" placeholder="09xx xxx xxx" />
                </div>
                <Field label="Địa chỉ giao hàng" name="address" required placeholder="Số nhà, đường, phường/xã, quận/huyện, thành phố" />
                <Field label="Ghi chú" name="note" placeholder="Yêu cầu độ bóng hay mờ của lớp phủ trong suốt" />
                {getTotalPrice() > 0 && (
                  <div className="rounded-xl border-2 border-primary bg-secondary/50 p-5">
                    <h4 className="mb-4 text-base font-bold text-primary">Thông tin đơn hàng</h4>
                    <div className="space-y-3 text-sm">
                      {getSelectedItems().map((item) => (
                        <div key={item.key} className="rounded-lg bg-background p-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">{item.name} ({item.size}) x{item.quantity}</span>
                          </div>
                          <div>
                            <label className="mb-1 block text-xs text-muted-foreground">Mã màu giả gỗ:</label>
                            <select
                              value={comboColors[item.key] || "Chưa chọn"}
                              onChange={(e) => setComboColors(prev => ({ ...prev, [item.key]: e.target.value }))}
                              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20"
                            >
                              {colorOptions.map(color => (
                                <option key={color} value={color}>{color}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      ))}
                      <div className="mt-4 flex items-center justify-between border-t-2 border-primary pt-4">
                        <span className="text-lg font-bold">Thành tiền:</span>
                        <div className="text-right">
                          {paymentMethod === "online" && (
                            <span className="text-sm text-muted-foreground line-through mr-2">
                              {formatPrice(getBasePrice())}
                            </span>
                          )}
                          <span className="text-2xl font-bold text-primary">
                            {formatPrice(getTotalPrice())}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground">
                      * Giá trên chưa bao gồm phí vận chuyển và có thể thay đổi tùy theo diện tích thực tế.
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Định mức Combo nhỏ 1kg ~ 5m²; Combo lớn loại 5kg là 25m²
                    </p>
                  </div>
                )}
                <div className="mt-4 rounded-xl border-2 border-primary bg-secondary/50 p-4">
                  <h4 className="mb-3 text-sm font-bold text-primary">Hình thức thanh toán</h4>
                  <div className="space-y-3">
                    <label className="flex cursor-pointer items-start gap-3 rounded-lg bg-background p-3 ring-1 ring-border transition hover:ring-primary">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={paymentMethod === "cod"}
                        onChange={(e) => setPaymentMethod(e.target.value as "cod" | "online")}
                        className="mt-1 h-4 w-4"
                      />
                      <div>
                        <span className="font-semibold">COD - Thanh toán khi nhận hàng</span>
                      </div>
                    </label>
                    <label className="flex cursor-pointer items-start gap-3 rounded-lg bg-background p-3 ring-1 ring-border transition hover:ring-primary">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="online"
                        checked={paymentMethod === "online"}
                        onChange={(e) => setPaymentMethod(e.target.value as "cod" | "online")}
                        className="mt-1 h-4 w-4"
                      />
                      <div>
                        <span className="font-semibold">Chuyển khoản Online</span>
                        <p className="mt-1 text-xs text-primary">Miễn phí giao hàng và giảm 10%</p>
                      </div>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-4 text-base font-bold text-primary-foreground shadow-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="mr-2 h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Đang xử lý...
                    </>
                  ) : (
                    "Xác nhận đặt hàng"
                  )}
                </button>
                <p className="text-xs text-muted-foreground">
                  Bằng cách đặt hàng, bạn đồng ý để Lotus liên hệ xác nhận đơn hàng và giao hàng.
                </p>
              </form>
          </div>

          <aside className="lg:col-span-2">
            <div className="sticky top-24 rounded-2xl bg-[oklch(0.25_0.04_50)] p-6 text-background shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0068FF] text-white">
                  <ZaloIcon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider opacity-80">Tư vấn nhanh nhất</div>
                  <div className="text-lg font-bold">Nhắn Zalo Lotus</div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed opacity-90">
                Gửi ảnh hạng mục qua Zalo để được tư vấn đúng hệ sơn, đúng combo và bảng màu phù hợp.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 h-4 w-4 flex-none text-[#f0c98a]" /> Phản hồi nhanh trong giờ làm việc</li>
                <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 h-4 w-4 flex-none text-[#f0c98a]" /> Tư vấn đúng hệ theo từng hạng mục</li>
                <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 h-4 w-4 flex-none text-[#f0c98a]" /> Báo giá rõ ràng, hướng dẫn kỹ thuật chi tiết </li>
              </ul>
              <a
                href={ZALO_URL}
                className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-[#0068FF] px-5 py-3 text-sm font-bold text-white hover:bg-[#0056d6]"
              >
                <ZaloIcon className="h-4 w-4" /> Gửi ảnh qua Zalo
              </a>
              <div className="mt-4 border-t border-white/15 pt-4 text-sm">
                Hotline: <strong>{HOTLINE}</strong>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string; }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold">{label}{required && <span className="text-primary"> *</span>}</span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}

function SelectField({ id, label, name, options, onChange }: { id?: string; label: string; name: string; options: string[]; onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void; }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold">{label}</span>
      <select
        id={id}
        name={name}
        defaultValue={options[0]}
        onChange={onChange}
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}

/* ---------- Feedback ---------- */
function Feedback() {
  const projects = [
    { img: afterChanBanSat, item: "Chân bàn sắt cafe", color: "Vàng-Nâu", area: "TP.HCM", quote: "Mình bất ngờ về độ hoàn thiện về màu sắc, khách đến ai cũng tưởng gỗ thật." },
    { img: appRailing, item: "Lan can ban công", color: "Teak", area: "Bình Dương", quote: "Tư vấn qua Zalo nhanh, chọn đúng combo nên thi công gọn." },
    { img: appPergola, item: "Pergola sân vườn", color: "Vàng nhạt", area: "Đồng Nai", quote: "Vân gỗ tự nhiên, dùng ngoài trời gần 3 năm vẫn đẹp như mới." },
    { img: afterChanBanSat, item: "Chân bàn sắt cafe", color: "Vàng-Nâu", area: "TP.HCM", quote: "Mình bất ngờ về độ hoàn thiện về màu sắc, khách đến ai cũng tưởng gỗ thật." },
    { img: appRailing, item: "Lan can ban công", color: "Teak", area: "Bình Dương", quote: "Tư vấn qua Zalo nhanh, chọn đúng combo nên thi công gọn." },
    { img: appPergola, item: "Pergola sân vườn", color: "Vàng nhạt", area: "Đồng Nai", quote: "Vân gỗ tự nhiên, dùng ngoài trời gần 3 năm vẫn đẹp như mới." },
  ];
  return (
    <section className="bg-secondary/40 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Công trình thực tế</span>
          <h2 className="mt-2 text-2xl font-bold leading-tight md:text-4xl" style={{ fontFamily: serif }}>
            Khách hàng & công trình đã hoàn thiện cùng Lotus
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {projects.map((p, i) => (
            <article key={i} className="overflow-hidden rounded-xl bg-background ring-1 ring-border shadow-sm">
              <img src={p.img} alt={p.item} loading="lazy" width={1024} height={1024} className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <p className="text-sm italic text-foreground">“{p.quote}”</p>
                <dl className="mt-4 grid grid-cols-3 gap-2 text-xs">
                  <div><dt className="text-muted-foreground">Hạng mục</dt><dd className="font-semibold">{p.item}</dd></div>
                  <div><dt className="text-muted-foreground">Màu</dt><dd className="font-semibold">{p.color}</dd></div>
                  <div><dt className="text-muted-foreground">Khu vực</dt><dd className="font-semibold">{p.area}</dd></div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const faqs = [
    { q: "Sơn giả gỗ trên kim loại có bền không?", a: "Khi thi công đúng quy trình và dùng đủ lớp phủ bảo vệ, hệ sơn giả gỗ Lotus có độ bền cao, bám dính tốt trên kim loại và giữ được màu lâu." },
    { q: "Có dùng ngoài trời được không?", a: "Có. Combo thông dụng và combo cao cấp 2K có lớp phủ bảo vệ chuyên dụng cho ngoài trời, chống tia UV và thời tiết." },
    { q: "Phù hợp với những hạng mục nào?", a: "Cổng sắt, hàng rào, lan can, khung thép trang trí, cửa sắt, mái hiên, pergola, lam sắt và các chi tiết kim loại nội ngoại thất." },
    { q: "Tôi chưa biết chọn combo nào thì làm sao?", a: "Bạn chỉ cần nhắn Zalo gửi ảnh hạng mục và mô tả nhu cầu, Lotus sẽ tư vấn combo phù hợp." },
    { q: "Có những màu gỗ nào để lựa chọn?", a: "Các tông phổ biến gồm: Teak, Walnut, Cánh gián, Sồi sáng, Cherry, Gỗ đỏ đậm và nhiều màu khác theo yêu cầu." },
    { q: "Tôi có thể gửi ảnh công trình để được tư vấn không?", a: "Hoàn toàn có thể. Gửi ảnh hạng mục qua Zalo là cách nhanh nhất để Lotus chọn đúng hệ sơn cho bạn." },
    { q: "Mua lẻ có được không?", a: "Có. Lotus hỗ trợ cả khách lẻ và khách công trình. Vui lòng nhắn Zalo để được báo giá nhanh." },
    { q: "Có hỗ trợ tư vấn qua Zalo không?", a: "Có. Tư vấn Zalo là kênh chính, giúp bạn được hỗ trợ nhanh và đúng nhu cầu nhất." },
  ];
  return (
    <section id="faq" className="py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Câu hỏi thường gặp</span>
        <h2 className="mt-2 text-2xl font-bold leading-tight md:text-4xl" style={{ fontFamily: serif }}>
          Bạn đang băn khoăn điều gì?
        </h2>
        <div className="mt-6 divide-y divide-border rounded-2xl bg-card ring-1 ring-border">
          {faqs.map((f, i) => (
            <details key={i} className="group p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-start justify-between gap-4 text-base font-semibold">
                <span>{f.q}</span>
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-secondary text-primary transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCTA() {
  return (
    <section className="bg-[oklch(0.25_0.04_50)] py-14 text-background md:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
        <h2 className="text-2xl font-bold leading-tight md:text-4xl" style={{ fontFamily: serif }}>
          Bạn muốn đặt hàng nhanh hay cần tư vấn đúng hệ sơn cho hạng mục kim loại của mình?
        </h2>
        <p className="mt-4 text-sm opacity-85 md:text-base">
          Đội ngũ Lotus sẵn sàng hỗ trợ – chọn cách liên hệ thuận tiện nhất cho bạn.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={ZALO_URL} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0068FF] px-7 py-4 text-base font-bold text-white hover:bg-[#0056d6]">
            <ZaloIcon className="h-5 w-5" /> Nhắn Zalo ngay
          </a>
          <a href="#tu-van" className="inline-flex items-center justify-center rounded-lg bg-background px-7 py-4 text-base font-bold text-foreground hover:bg-secondary">
            Điền form nhận tư vấn
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.025_50)] py-10 text-background/85">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3 md:px-6">
        <div>
          <div className="flex items-center gap-2">
            <img src={logoLotus} alt="Sơn Lotus Logo" className="h-12 w-12 rounded-md object-contain" />
          </div>
          <p className="mt-3 text-sm opacity-80 leading-relaxed">
            Giải pháp sơn giả gỗ chuyên cho cổng sắt, hàng rào, lan can, pergola và chi tiết kim loại.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="text-sm font-bold uppercase tracking-wider">Liên hệ</h4>
          <ul className="mt-3 space-y-2">
            <li>Hotline: <strong>{HOTLINE}</strong></li>
            <li>Zalo: <a href={ZALO_URL} className="underline">{HOTLINE}</a></li>
            <li>Email: sales@sonlotus.vn</li>
            <li>Website: www.sonlotus.vn</li>
            <li>Địa chỉ: 99/5 Đường XTT26-1, Ấp 2, Xã Bà Điểm, TP.HCM</li>
          </ul>
        </div>
        <div className="text-sm">
          <h4 className="text-sm font-bold uppercase tracking-wider">Liên kết nhanh</h4>
          <ul className="mt-3 space-y-2">
            <li><a href="#ung-dung" className="hover:underline">Ứng dụng</a></li>
            <li><a href="#bang-mau" className="hover:underline">Bảng màu</a></li>
            <li><a href="#combo" className="hover:underline">Combo</a></li>
            <li><a href="#tu-van" className="hover:underline">Đặt hàng / Tư vấn</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl px-4 text-xs opacity-60 md:px-6">
        © {new Date().getFullYear()} CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI DỊCH VỤ BÍCH TRANG. MST: 0313351528.
      </div>
    </footer>
  );
}

/* ---------- Sticky Mobile CTA ---------- */
function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-2 shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.2)] backdrop-blur md:hidden">
      <a href={ZALO_URL} className="flex items-center justify-center gap-2 rounded-lg bg-[#0068FF] px-4 py-3 text-sm font-bold text-white">
        <ZaloIcon className="h-4 w-4" /> Nhắn Zalo
      </a>
      <a href="#tu-van" className="flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-bold text-primary-foreground">
        Đặt hàng
      </a>
    </div>
  );
}

/* ---------- Icons ---------- */
function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.12" />
      <path d="M6 10.5l2.5 2.5L14 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ZaloIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.06 2 11.07c0 2.74 1.37 5.18 3.5 6.83-.1.83-.46 2.04-.5 2.13-.06.18.13.34.31.27.13-.05 1.79-.79 2.6-1.18 1.27.4 2.65.62 4.09.62 5.52 0 10-4.06 10-9.07S17.52 2 12 2zm-3.7 11.3H6.1c-.2 0-.36-.16-.36-.36 0-.08.03-.16.08-.22l1.94-2.5H6.18c-.2 0-.36-.16-.36-.36s.16-.36.36-.36h2.13c.2 0 .36.16.36.36 0 .08-.03.16-.08.22l-1.94 2.5H8.3c.2 0 .36.16.36.36s-.16.36-.36.36zm1.6 0c-.2 0-.36-.16-.36-.36V10c0-.2.16-.36.36-.36s.36.16.36.36v2.94c0 .2-.16.36-.36.36zm4.2 0h-.06c-.16 0-.3-.1-.34-.26l-.18-.5h-1.46l-.18.5c-.05.16-.18.26-.34.26h-.06c-.24 0-.4-.24-.31-.46l1.18-3.06c.06-.14.2-.24.36-.24s.3.1.36.24l1.18 3.06c.09.22-.07.46-.31.46zm4 0h-2c-.2 0-.36-.16-.36-.36V10c0-.2.16-.36.36-.36s.36.16.36.36v2.58h1.64c.2 0 .36.16.36.36s-.16.36-.36.36zM12.5 11.7l.46-1.26.46 1.26h-.92z"/>
    </svg>
  );
}
