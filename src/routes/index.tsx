import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroGate from "../assets/hero-gate.jpg";
import appRailing from "../assets/app-railing.jpg";
import appFence from "../assets/app-fence.jpg";
import appPergola from "../assets/app-pergola.jpg";
import appDoor from "../assets/app-door.jpg";
import appFrame from "../assets/app-frame.jpg";
import appLouver from "../assets/app-louver.jpg";
import beforeGate from "../assets/before-gate.jpg";
import afterGate from "../assets/after-gate.jpg";
import beforeRailing from "../assets/before-railing.jpg";
import afterRailing from "../assets/after-railing.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const ZALO_URL = "https://zalo.me/0000000000";
const HOTLINE = "0909 000 000";

const serif = "'Playfair Display', serif";

function LandingPage() {
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
      <ColorPalette />
      <Process />
      <Combos />
      <LeadForm />
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
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">
            L
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold tracking-wide">SƠN LOTUS</div>
            <div className="text-[11px] text-muted-foreground">Giả gỗ trên kim loại</div>
          </div>
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
  const pairs = [
    { b: beforeGate, a: afterGate, label: "Cổng sắt – màu Walnut" },
    { b: beforeRailing, a: afterRailing, label: "Lan can – màu Teak" },
  ];
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Trước & sau</span>
          <h2 className="mt-2 text-2xl font-bold leading-tight md:text-4xl" style={{ fontFamily: serif }}>
            Sự thay đổi rõ rệt sau khi hoàn thiện giả gỗ Lotus
          </h2>
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {pairs.map((p) => (
            <div key={p.label} className="overflow-hidden rounded-2xl bg-card ring-1 ring-border shadow-sm">
              <div className="grid grid-cols-2">
                <BAImage src={p.b} tag="TRƯỚC" alt={`Trước - ${p.label}`} />
                <BAImage src={p.a} tag="SAU" alt={`Sau - ${p.label}`} highlight />
              </div>
              <div className="flex items-center justify-between px-4 py-3 text-sm">
                <span className="font-semibold">{p.label}</span>
                <a href={ZALO_URL} className="font-semibold text-primary hover:underline">
                  Tư vấn hạng mục tương tự →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BAImage({ src, tag, alt, highlight }: { src: string; tag: string; alt: string; highlight?: boolean }) {
  return (
    <div className="relative">
      <img src={src} alt={alt} loading="lazy" width={1024} height={1024} className="aspect-square w-full object-cover" />
      <span
        className={`absolute left-2 top-2 rounded px-2 py-1 text-[11px] font-bold tracking-wider ${
          highlight ? "bg-primary text-primary-foreground" : "bg-foreground/80 text-background"
        }`}
      >
        {tag}
      </span>
    </div>
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
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <section id="bang-mau" className="bg-secondary/40 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Bảng màu</span>
          <h2 className="mt-2 text-2xl font-bold leading-tight md:text-4xl" style={{ fontFamily: serif }}>
            Chọn tông gỗ phù hợp cho hạng mục của bạn
          </h2>
          <p className="mt-3 text-muted-foreground">
            Các tông gỗ phổ biến được khách hàng Lotus lựa chọn nhiều nhất. Chọn màu yêu thích và
            gửi cho chúng tôi để nhận tư vấn đúng combo.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {COLORS.map((c) => {
            const active = selected === c.name;
            return (
              <button
                key={c.name}
                onClick={() => {
                  setSelected(c.name);
                  const colorInput = document.getElementById("form-color") as HTMLSelectElement | null;
                  if (colorInput) colorInput.value = c.name;
                  document.getElementById("tu-van")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`group overflow-hidden rounded-xl bg-background text-left shadow-sm ring-1 transition ${
                  active ? "ring-2 ring-primary" : "ring-border hover:ring-primary/50"
                }`}
              >
                <div className="h-24 w-full" style={{ backgroundColor: c.hex }} />
                <div className="px-3 py-3">
                  <div className="text-sm font-bold">{c.name}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{c.hex.toUpperCase()}</div>
                  <div className="mt-3 inline-flex items-center text-xs font-semibold text-primary">
                    Chọn màu này →
                  </div>
                </div>
              </button>
            );
          })}
        </div>
        {selected && (
          <p className="mt-4 text-sm text-foreground">
            Đã chọn màu: <strong>{selected}</strong>. Cuộn xuống mục tư vấn để gửi thông tin.
          </p>
        )}
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
function Combos() {
  const combos = [
    {
      name: "Combo tiết kiệm",
      tag: "Cơ bản",
      desc: "Sơn lót kim loại + sơn phủ màu giả gỗ kim loại.",
      items: ["Sơn lót kim loại", "Sơn phủ màu giả gỗ"],
      highlight: false,
    },
    {
      name: "Combo thông dụng",
      tag: "Phổ biến nhất",
      desc: "Sơn lót kim loại + sơn phủ màu giả gỗ + sơn phủ trong suốt bảo vệ ngoài trời.",
      items: ["Sơn lót kim loại", "Sơn phủ màu giả gỗ", "Sơn phủ bảo vệ ngoài trời"],
      highlight: true,
    },
    {
      name: "Combo cao cấp 2K",
      tag: "Bền cao cấp",
      desc: "Sơn lót kim loại + sơn phủ màu giả gỗ + sơn phủ trong suốt 2K bảo vệ ngoài trời.",
      items: ["Sơn lót kim loại", "Sơn phủ màu giả gỗ", "Sơn phủ 2K bảo vệ cao cấp"],
      highlight: false,
    },
  ];
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
              <ul className="mt-5 space-y-2 text-sm">
                {c.items.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-primary" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <a
                  href="#tu-van"
                  onClick={() => {
                    setTimeout(() => {
                      const el = document.getElementById("form-combo") as HTMLSelectElement | null;
                      if (el) el.value = c.name;
                    }, 50);
                  }}
                  className={`flex w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition ${
                    c.highlight
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border-2 border-primary text-primary hover:bg-secondary"
                  }`}
                >
                  Chọn combo này
                </a>
              </div>
            </div>
          ))}
        </div>
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
function LeadForm() {
  const [sent, setSent] = useState(false);
  return (
    <section id="tu-van" className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Đặt hàng / Tư vấn</span>
            <h2 className="mt-2 text-2xl font-bold leading-tight md:text-4xl" style={{ fontFamily: serif }}>
              Gửi thông tin – Lotus tư vấn đúng hệ sơn cho bạn
            </h2>
            <p className="mt-3 text-muted-foreground">
              Điền nhanh thông tin bên dưới, đội ngũ Lotus sẽ liên hệ lại trong giờ làm việc.
            </p>

            {sent ? (
              <div className="mt-6 rounded-xl border border-primary/30 bg-secondary p-6 text-center">
                <h3 className="text-lg font-bold text-primary">Đã nhận thông tin của bạn!</h3>
                <p className="mt-2 text-sm">
                  Lotus sẽ gọi lại sớm. Bạn có thể nhắn Zalo ngay để được tư vấn nhanh hơn.
                </p>
                <a
                  href={ZALO_URL}
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
                >
                  <ZaloIcon className="h-4 w-4" /> Mở Zalo ngay
                </a>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="mt-6 grid gap-4 rounded-2xl bg-card p-5 ring-1 ring-border md:p-6"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Họ và tên" name="name" required placeholder="Nguyễn Văn A" />
                  <Field label="Số điện thoại" name="phone" required type="tel" placeholder="09xx xxx xxx" />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Hạng mục cần sơn" name="item" placeholder="VD: cổng sắt, lan can..." />
                  <Field label="Diện tích ước tính (m²)" name="area" placeholder="VD: 12" />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <SelectField id="form-color" label="Màu gỗ quan tâm" name="color"
                    options={["Chưa chọn", ...COLORS.map((c) => c.name)]} />
                  <SelectField id="form-combo" label="Combo quan tâm" name="combo"
                    options={["Chưa chọn", "Combo tiết kiệm", "Combo thông dụng", "Combo cao cấp 2K"]} />
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-4 text-base font-bold text-primary-foreground shadow-md hover:bg-primary/90"
                >
                  Đặt hàng / Nhận tư vấn
                </button>
                <p className="text-xs text-muted-foreground">
                  Bằng cách gửi, bạn đồng ý để Lotus liên hệ tư vấn về sản phẩm.
                </p>
              </form>
            )}
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
                <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 h-4 w-4 flex-none text-[#f0c98a]" /> Báo giá rõ ràng, không ép mua</li>
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

function SelectField({ id, label, name, options }: { id?: string; label: string; name: string; options: string[]; }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold">{label}</span>
      <select
        id={id}
        name={name}
        defaultValue={options[0]}
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
    { img: afterGate, item: "Cổng sắt", color: "Walnut", area: "TP.HCM", quote: "Cổng nhà mình nhìn ấm hơn hẳn, khách đến ai cũng tưởng gỗ thật." },
    { img: appRailing, item: "Lan can ban công", color: "Teak", area: "Bình Dương", quote: "Tư vấn qua Zalo nhanh, chọn đúng combo nên thi công gọn." },
    { img: appPergola, item: "Pergola sân vườn", color: "Cánh gián", area: "Đồng Nai", quote: "Vân gỗ tự nhiên, dùng ngoài trời gần 1 năm vẫn đẹp." },
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
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">L</div>
            <div>
              <div className="text-sm font-bold tracking-wide">SƠN LOTUS</div>
              <div className="text-[11px] opacity-70">Hệ giả gỗ trên kim loại</div>
            </div>
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
            <li>Website: sonlotus.vn</li>
            <li>Địa chỉ: [Cập nhật địa chỉ Lotus]</li>
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
        © {new Date().getFullYear()} Sơn Lotus. Mọi thông tin liên hệ vui lòng cập nhật chính thức.
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
