import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import logoLotus from "../assets/logo-lotus-paint-35325.jpg";
import colorPaletteImage from "../assets/bang-mau-son-gia-go-tren-sat-lotus.png";
import heroGate from "../assets/son-gia-go-tren-cong-sat-lotus.jpeg";
import appRailing from "../assets/app-railing.jpg";
import appFence from "../assets/hang-rao-son-gia-go-lotus.jpeg";
import appPergola from "../assets/app-pergola.jpg";
import appDoor from "../assets/sua-sat-son-gia-go-dep-lotus.jpeg";
import appFrame from "../assets/khung-sat-son-gia-go-mau-dep.jpeg";
import appLouver from "../assets/khung-sat-son-gia-go-lotus.jpeg";
import appKhungKeoThep from "../assets/khung-keo-thep-gia-go-lotus.jpg";
import sonChanBanSatGiaGo from "../assets/son-chan-ban-sat-gia-go.jpg";
import cuaCongSatGiaGo from "../assets/cua-cong-sat-gia-go.jpg";
import beforeGate from "../assets/before-chan-ban-sat.jpg";
import afterGate from "../assets/son-chan-ban-sat-gia-go.jpg";
import banGheSatGiaGoNgoaiTroi from "../assets/ban-ghe-sat-gia-go-ngoai-troi.jpg";
import sonSatGiaGoGianHoa from "../assets/son-sat-gia-go-gian-hoa.jpg";
import satGiaGoAshLotus from "../assets/sat-gia-go-ash-lotus.jpg";

export const Route = createFileRoute("/")({ component: LandingPage });

const ZALO_URL = "https://zalo.me/0943966662";
const HOTLINE = "0943 966 662";

function LandingPage() {
  const [selectedCombos, setSelectedCombos] = useState<Record<string, { small: number; large: number }>>({
    "Combo tiết kiệm": { small: 0, large: 0 },
    "Combo thông dụng": { small: 0, large: 0 },
    "Combo cao cấp 2K": { small: 0, large: 0 },
  });
  return (
    <div className="min-h-screen bg-cream text-charcoal antialiased font-sans">
      <Header />
      <Hero />
      <Applications />
      <WhyStatement />
      <BeforeAfter />
      <Process />
      <ColorPalette />
      <Combos selectedCombos={selectedCombos} setSelectedCombos={setSelectedCombos} />
      <LeadForm selectedCombos={selectedCombos} />
      <Projects />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

/* ── Header ─────────────────────────────────────────── */
function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-walnut/15 bg-cream/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3 md:px-12">
        <a href="#top">
          <img src={logoLotus} alt="Sơn Lotus" className="h-9 w-auto object-contain" />
        </a>
        <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.22em] text-walnut/65 md:flex">
          {[["#ung-dung","Ứng dụng"],["#bang-mau","Bảng màu"],["#combo","Combo"],["#tu-van","Tư vấn"],["#faq","FAQ"]].map(([h,l]) => (
            <a key={h} href={h} className="transition hover:text-charcoal">{l}</a>
          ))}
        </nav>
        <a href={ZALO_URL} className="hidden text-[11px] uppercase tracking-[0.22em] text-clay border-b border-clay pb-0.5 transition hover:text-walnut hover:border-walnut md:block">
          Nhắn Zalo tư vấn
        </a>
      </div>
    </header>
  );
}

/* ── Hero ────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="top" className="border-b border-walnut/10 bg-gradient-to-br from-cream via-cream to-sand/30">
      <div className="mx-auto max-w-[1400px] px-5 pt-10 pb-14 md:px-12 md:pt-16 md:pb-24">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 flex flex-col md:col-span-5 lg:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/55">Lotus · Hoàn thiện bề mặt kim loại</span>
            <h1 className="mt-6 font-serif text-[42px] leading-[1.05] tracking-tight text-charcoal sm:text-[52px] md:text-[60px] lg:text-[70px]">
              Kim loại<br />
              mang vẻ đẹp<br />
              <em className="not-italic text-clay">gỗ tự nhiên.</em>
            </h1>
            <p className="mt-7 max-w-md text-[14px] leading-relaxed text-walnut/70">
              Hệ sơn giả gỗ Lotus biến cổng sắt, hàng rào, lam che nắng, pergola và khung kim loại thành bề mặt có vân gỗ đẹp, ấm, sang — bền ngoài trời nhiều năm.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href={ZALO_URL} className="inline-flex items-center gap-3 bg-clay px-6 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-cream transition hover:bg-walnut sm:px-7 shadow-lg shadow-clay/20">
                Gửi ảnh hạng mục qua Zalo <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a href="#ung-dung" className="text-[12px] font-medium uppercase tracking-[0.18em] text-walnut underline-offset-8 hover:underline">
                Xem ứng dụng thực tế
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-1.5 border-t border-walnut/15 pt-6 text-[10px] uppercase tracking-[0.22em] text-walnut/50">
              <span>Bền 5+ năm ngoài trời</span>
              <span className="text-walnut/25">/</span>
              <span>Hệ lớp đúng kỹ thuật</span>
              <span className="text-walnut/25">/</span>
              <span>Tư vấn theo công trình thật</span>
            </div>
          </div>
          <figure className="col-span-12 md:col-span-7 lg:col-span-8">
            <div className="relative overflow-hidden rounded-lg shadow-2xl shadow-walnut/10">
              <img src={heroGate} alt="Cổng sắt sơn giả gỗ Lotus" className="aspect-[4/3] w-full object-cover md:aspect-[16/10] transition-transform duration-700 hover:scale-[1.01]" width={1920} height={1080} />
            </div>
            <figcaption className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-walnut/45">
              <span>Cổng sắt hoàn thiện giả gỗ · Lotus</span>
              <span>— 001</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ── Applications ─────────────────────────────────────── */
function Applications() {
  return (
    <section id="ung-dung" className="border-t border-walnut/10 bg-gradient-to-br from-cream via-cream to-sand/20">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/55">02 — Ứng dụng</span>
            <h2 className="mt-5 font-serif text-[34px] leading-tight text-charcoal sm:text-4xl md:text-5xl">
              Kim loại nào cũng có thể<br />mang vẻ đẹp gỗ.
            </h2>
          </div>
          <a href={ZALO_URL} className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-clay transition hover:text-walnut">
            Gửi ảnh hạng mục để tư vấn <ArrowRightIcon className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* 1 large + 4 small */}
        <div className="mt-14 grid grid-cols-12 gap-3 md:gap-5">
          <figure className="col-span-12 md:col-span-7 group">
            <div className="relative overflow-hidden rounded-lg shadow-lg shadow-walnut/10">
              <img src={appPergola} alt="Pergola kim loại sơn giả gỗ" loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.02]" width={1600} height={1200} />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between border-t border-walnut/15 pt-3">
              <span className="font-serif text-[18px] text-charcoal">Pergola / giàn mái kim loại</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-walnut/45">Ngoại thất</span>
            </figcaption>
          </figure>
          <div className="col-span-12 grid grid-cols-2 gap-3 md:col-span-5 md:gap-5">
            {[
              { img: heroGate, label: "Cổng sắt", ctx: "Ngoại thất" },
              { img: appFence, label: "Hàng rào", ctx: "Sân vườn" },
              { img: appLouver, label: "Lam che nắng", ctx: "Mặt dựng" },
              { img: appRailing, label: "Lan can, tay vịn", ctx: "Cầu thang" },
            ].map((a) => (
              <figure key={a.label} className="group">
                <div className="relative overflow-hidden rounded-lg shadow-md shadow-walnut/8">
                  <img src={a.img} alt={a.label} loading="lazy" className="aspect-square w-full object-cover transition duration-700 group-hover:scale-[1.02]" width={800} height={800} />
                </div>
                <figcaption className="mt-2 flex items-baseline justify-between border-t border-walnut/12 pt-2">
                  <span className="text-[13px] font-medium text-charcoal">{a.label}</span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-walnut/40">{a.ctx}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* 3 equal */}
        <div className="mt-5 grid grid-cols-3 gap-3 md:gap-5">
          {[
            { img: appKhungKeoThep, label: "Khung kèo thép", ctx: "Kết cấu nội thất" },
            { img: appDoor, label: "Cửa sắt / pano cửa", ctx: "Khung mặt tiền" },
            { img: appFrame, label: "Khung trang trí", ctx: "Chi tiết kiến trúc" },
          ].map((a) => (
            <figure key={a.label} className="group col-span-3 md:col-span-1">
              <div className="relative overflow-hidden rounded-lg shadow-md shadow-walnut/8">
                <img src={a.img} alt={a.label} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.02]" width={1024} height={768} />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between border-t border-walnut/15 pt-3">
                <span className="font-serif text-[16px] text-charcoal">{a.label}</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-walnut/45">{a.ctx}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Why Statement ────────────────────────────────────── */
function WhyStatement() {
  const points = [
    { n: "01", t: "Vân gỗ thuyết phục", d: "Lớp hoàn thiện tạo chiều sâu và vân gỗ tự nhiên. Người xem không dễ nhận ra đây là kim loại." },
    { n: "02", t: "Bám dính đúng kỹ thuật", d: "Primer phù hợp cho thép, mạ kẽm, nhôm, inox — đảm bảo độ bám lâu dài trên từng loại nền kim loại." },
    { n: "03", t: "Phù hợp ngoại thất", d: "Lớp phủ bảo vệ chịu UV, chịu ẩm, bền nhiều năm trên cổng, hàng rào, lam, giàn ngoài trời." },
    { n: "04", t: "Cảm giác ấm hơn cho công trình", d: "Thay đổi tone vật liệu từ công nghiệp lạnh về gần nội ngoại thất ấm, có chiều sâu và kiến trúc hơn." },
  ];
  return (
    <section className="border-t border-walnut/10 bg-charcoal text-cream">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32">
        <div className="grid grid-cols-12 gap-x-8 gap-y-10">
          <div className="col-span-12 md:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-cream/60">03 — Vì sao chọn giả gỗ</span>
            <h2 className="mt-5 font-serif text-[34px] leading-tight sm:text-4xl md:text-5xl">
              Giữ độ chắc<br />của kim loại.<br /><em className="not-italic text-clay">Đưa bề mặt<br />về phía gỗ.</em>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 md:pt-2">
            <p className="font-serif text-[20px] leading-[1.65] text-cream/90 md:text-[22px]">
              Cổng sắt, hàng rào, lam, pergola — kim loại bền nhưng lạnh. Hệ sơn giả gỗ Lotus không thay vật liệu, không phá kết cấu. Nó chỉ thay đổi bề mặt — theo hướng ấm hơn, sang hơn, gần với ngôn ngữ gỗ và kiến trúc hơn.
            </p>
            <ul className="mt-14 divide-y divide-cream/15 border-t border-cream/15">
              {points.map((b) => (
                <li key={b.n} className="flex gap-8 py-7">
                  <span className="mt-0.5 shrink-0 text-[10px] uppercase tracking-[0.25em] text-clay">{b.n}</span>
                  <div>
                    <div className="font-serif text-[19px] text-cream">{b.t}</div>
                    <p className="mt-2 text-[13px] leading-relaxed text-cream/75">{b.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Before / After ───────────────────────────────────── */
function BeforeAfter() {
  const [pos, setPos] = useState(50);
  return (
    <section className="border-t border-walnut/10">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32">
        <div className="grid grid-cols-12 gap-x-8 gap-y-10">
          <div className="col-span-12 md:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/55">04 — Trước & Sau</span>
            <h2 className="mt-5 font-serif text-[34px] leading-tight text-charcoal sm:text-4xl md:text-5xl">
              Sắt thô<br />thành bề mặt<br /><em className="not-italic text-clay">có chiều sâu.</em>
            </h2>
            <p className="mt-6 max-w-xs text-[14px] leading-relaxed text-walnut/60">
              Cùng cấu kiện. Cùng kích thước. Chỉ khác lớp hoàn thiện — cảm giác hoàn toàn khác biệt.
            </p>
            <a href={ZALO_URL} className="mt-8 inline-flex items-center gap-2 border-b border-walnut/35 pb-0.5 text-[11px] uppercase tracking-[0.22em] text-walnut transition hover:text-clay hover:border-clay">
              Tư vấn hạng mục tương tự <ArrowRightIcon className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="relative select-none overflow-hidden">
              <img src={afterGate} alt="Sau hoàn thiện giả gỗ" className="aspect-[4/3] w-full object-cover" width={1600} height={1200} />
              <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
                <img src={beforeGate} alt="Trước hoàn thiện" className="aspect-[4/3] w-full object-cover" width={1600} height={1200} />
              </div>
              <div className="pointer-events-none absolute inset-y-0 w-px bg-cream/60" style={{ left: `${pos}%` }} />
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-10 w-10 cursor-ew-resize items-center justify-center bg-cream shadow" style={{ left: `${pos}%` }}>
                <svg className="h-5 w-5 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
                </svg>
              </div>
              <input type="range" min="0" max="100" value={pos} onChange={(e) => setPos(Number(e.target.value))} className="absolute inset-0 w-full cursor-ew-resize opacity-0" />
              <div className="pointer-events-none absolute bottom-4 left-5 text-[10px] uppercase tracking-[0.25em] text-cream/75">Trước</div>
              <div className="pointer-events-none absolute bottom-4 right-5 text-[10px] uppercase tracking-[0.25em] text-cream/75">Sau</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Process ──────────────────────────────────────────── */
function Process() {
  const steps = [
    { n: "01", t: "Chuẩn bị bề mặt", d: "Vệ sinh sạch, loại bỏ dầu mỡ và gỉ sét. Đánh nhám hoặc xử lý bề mặt tạo độ bám phù hợp cho kim loại." },
    { n: "02", t: "Lớp lót kim loại", d: "Primer chuyên dụng cho thép, mạ kẽm, nhôm hoặc inox — tạo nền bám dính và chống gỉ từ bên trong." },
    { n: "03", t: "Tạo màu nền & vân gỗ", d: "Phủ màu nền, sau đó dùng kỹ thuật cọ tạo vân gỗ sống động theo từng loại gỗ được chọn." },
    { n: "04", t: "Phủ bảo vệ hoàn thiện", d: "Lớp phủ trong suốt chống UV, chống ẩm — đóng rắn bề mặt và bảo vệ vân gỗ bền theo thời gian." },
  ];
  return (
    <section className="border-t border-walnut/10 bg-sand/40">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/55">05 — Hệ lớp</span>
            <h2 className="mt-5 font-serif text-[34px] leading-tight text-charcoal sm:text-4xl md:text-5xl">
              Bốn bước.<br />Một hệ hoàn<br />thiện bài bản.
            </h2>
            <p className="mt-6 max-w-xs text-[14px] leading-relaxed text-walnut/60">
              Không phải quét một lớp màu. Đây là một finish system được thiết kế cho từng loại kim loại và điều kiện sử dụng.
            </p>
          </div>
          <div className="col-span-12 md:col-span-8 md:pl-4">
            <ol>
              {steps.map((s, i) => (
                <li key={s.n} className={`flex gap-6 py-8 md:gap-10 ${i > 0 ? "border-t border-walnut/15" : ""}`}>
                  <span className="mt-0.5 w-10 shrink-0 font-serif text-[3rem] leading-none text-clay/45 sm:text-[3.5rem]">{s.n}</span>
                  <div className="pt-1">
                    <h3 className="font-serif text-[20px] leading-tight text-charcoal sm:text-[24px]">{s.t}</h3>
                    <p className="mt-2.5 text-[13px] leading-relaxed text-walnut/58">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-2 border-t border-walnut/15 pt-6 font-serif text-[15px] italic text-walnut/40">
              Đúng hệ lớp — bề mặt bám tốt, giữ màu lâu và bền ngoài trời nhiều năm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Color Palette ────────────────────────────────────── */
function ColorPalette() {
  return (
    <section id="bang-mau" className="border-t border-walnut/10">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/55">06 — Bảng màu</span>
            <h2 className="mt-5 font-serif text-[34px] leading-tight text-charcoal sm:text-4xl md:text-5xl">
              Chọn tông gỗ<br />phù hợp công trình.
            </h2>
          </div>
          <a href={ZALO_URL} className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-clay transition hover:text-walnut">
            Gửi ảnh để được tư vấn màu <ArrowRightIcon className="h-3.5 w-3.5" />
          </a>
        </div>
        <div className="mt-12">
          <img src={colorPaletteImage} alt="Bảng màu sơn giả gỗ trên kim loại Lotus" className="w-full" loading="lazy" width={2400} height={1200} />
        </div>
        <p className="mt-6 text-[13px] leading-relaxed text-walnut/55">
          Các tông phổ biến: Teak, Walnut, Cánh gián, Sồi sáng, Cherry, Gỗ đỏ đậm và nhiều màu theo yêu cầu. Gửi ảnh công trình qua Zalo để được tư vấn màu cụ thể.
        </p>
      </div>
    </section>
  );
}

/* ── Combos ───────────────────────────────────────────── */
function Combos({ selectedCombos, setSelectedCombos }: {
  selectedCombos: Record<string, { small: number; large: number }>;
  setSelectedCombos: React.Dispatch<React.SetStateAction<Record<string, { small: number; large: number }>>>;
}) {
  const combos = [
    { name: "Combo tiết kiệm", tag: "Cơ bản", desc: "Sơn lót kim loại + sơn phủ màu giả gỗ.", items: ["Sơn lót kim loại", "Sơn phủ màu giả gỗ"], prices: { small: 515000, large: 2350000 }, highlight: false },
    { name: "Combo thông dụng", tag: "Phổ biến nhất", desc: "Sơn lót + sơn phủ màu giả gỗ + lớp phủ bảo vệ ngoài trời.", items: ["Sơn lót kim loại", "Sơn phủ màu giả gỗ", "Sơn phủ bảo vệ ngoài trời"], prices: { small: 751000, large: 3420000 }, highlight: true },
    { name: "Combo cao cấp 2K", tag: "Bền cao cấp", desc: "Sơn lót + sơn phủ màu giả gỗ + lớp phủ 2K cao cấp ngoài trời.", items: ["Sơn lót kim loại", "Sơn phủ màu giả gỗ", "Sơn phủ 2K bảo vệ cao cấp"], prices: { small: 888000, large: 4050000 }, highlight: false },
  ];
  const fmt = (p: number) => Math.floor(p).toLocaleString("vi-VN") + " đ";
  const upd = (name: string, size: "small" | "large", v: number) =>
    setSelectedCombos(prev => ({ ...prev, [name]: { ...prev[name], [size]: Math.max(0, v) } }));
  const comboTotal = (name: string) => { const c = combos.find(x => x.name === name)!; const s = selectedCombos[name]; return s.small * c.prices.small + s.large * c.prices.large; };
  const total = () => combos.reduce((t, c) => { const s = selectedCombos[c.name]; return t + s.small * c.prices.small + s.large * c.prices.large; }, 0);

  return (
    <section id="combo" className="border-t border-walnut/10 bg-sand/40">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32">
        <div>
          <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/55">07 — Combo sản phẩm</span>
          <h2 className="mt-5 font-serif text-[34px] leading-tight text-charcoal sm:text-4xl md:text-5xl">Chọn combo<br />phù hợp hạng mục.</h2>
          <p className="mt-4 text-[13px] text-walnut/60">
            Chưa chắc combo nào phù hợp?{" "}
            <a href={ZALO_URL} className="text-clay underline-offset-4 hover:underline">Nhắn Zalo gửi ảnh hạng mục</a> để được tư vấn.
          </p>
        </div>
        <div className="mt-14 border border-walnut/15 grid md:grid-cols-3 md:divide-x md:divide-walnut/15">
          {combos.map((c) => (
            <div key={c.name} className={`relative flex flex-col p-6 bg-cream ${c.highlight ? "outline outline-2 outline-clay -outline-offset-2" : ""}`}>
              {c.highlight && <span className="absolute -top-px left-6 bg-clay px-3 py-0.5 text-[10px] uppercase tracking-[0.2em] text-cream">Phổ biến nhất</span>}
              <div className="text-[10px] uppercase tracking-[0.25em] text-clay">{c.tag}</div>
              <h3 className="mt-2 font-serif text-[22px] text-charcoal">{c.name}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-walnut/60">{c.desc}</p>
              <ul className="mt-5 space-y-1.5 border-t border-walnut/12 pt-4">
                {c.items.map(item => <li key={item} className="flex items-center gap-2 text-[12px] text-walnut/70"><span className="h-px w-3 bg-clay/55 shrink-0" />{item}</li>)}
              </ul>
              <div className="mt-6 space-y-3 border-t border-walnut/12 pt-4">
                {(["small", "large"] as const).map(size => (
                  <div key={size} className="flex items-center justify-between">
                    <div>
                      <div className="text-[12px] font-medium text-charcoal">{size === "small" ? "Nhỏ · 1kg mỗi loại" : "Lớn · 5kg mỗi loại"}</div>
                      <div className="text-[11px] text-walnut/50">{fmt(c.prices[size])}{size === "large" && <span className="ml-1.5 text-clay text-[10px]">Tiết kiệm 18%</span>}</div>
                    </div>
                    <QtyCtrl value={selectedCombos[c.name][size]} onChange={v => upd(c.name, size, v)} />
                  </div>
                ))}
                {comboTotal(c.name) > 0 && (
                  <div className="flex items-center justify-between border-t border-walnut/12 pt-3">
                    <span className="text-[12px] text-walnut">Tổng combo</span>
                    <span className="font-serif text-[18px] text-clay">{fmt(comboTotal(c.name))}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {total() > 0 && (
          <div className="mt-8 flex flex-col items-start justify-between gap-5 border border-walnut/20 p-6 md:flex-row md:items-center">
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-walnut/55">Tổng đơn hàng</div>
              <div className="mt-1 font-serif text-[32px] text-clay">{fmt(total())}</div>
              <p className="mt-1 text-[11px] text-walnut/45">Nhỏ 1kg ≈ 5m² · Lớn 5kg ≈ 25m² · Chưa bao gồm phí vận chuyển</p>
            </div>
            <a href="#tu-van" className="inline-flex items-center gap-3 bg-clay px-7 py-4 text-[12px] uppercase tracking-[0.18em] text-cream transition hover:bg-walnut">
              Điền thông tin đặt hàng <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        )}
        <p className="mt-4 text-[12px] text-walnut/45">Combo lớn (5kg mỗi loại) đủ cho ~25–30m² bề mặt, tương đương 1 cổng đôi tiêu chuẩn.</p>
      </div>
    </section>
  );
}

function QtyCtrl({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div className="flex items-center gap-1">
      <button type="button" onClick={() => onChange(value - 1)} className="flex h-7 w-7 items-center justify-center border border-walnut/25 text-walnut transition hover:border-clay hover:text-clay text-[16px]">−</button>
      <input type="number" min="0" value={value} onChange={e => onChange(parseInt(e.target.value) || 0)} className="w-10 border-b border-walnut/25 bg-transparent py-0.5 text-center text-[13px] outline-none focus:border-clay" />
      <button type="button" onClick={() => onChange(value + 1)} className="flex h-7 w-7 items-center justify-center border border-walnut/25 text-walnut transition hover:border-clay hover:text-clay text-[16px]">+</button>
    </div>
  );
}

/* ── Lead Form ────────────────────────────────────────── */
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
  const colorOptions = ["Chưa chọn","LPCP14.LWF1018","LMCP0.LWF103","LPCP4.LWF101","LPCP8.LWF103","LPCP0.LWF1017","LPCP0.LWF101","LPCP0.LWF1012","LPCP8.LWFF2","LPCP0.LWF1013"];
  const fmt = (p: number) => Math.floor(p).toLocaleString("vi-VN") + " đ";

  const getBase = () => Object.entries(selectedCombos).reduce((t, [n, q]) => {
    const c = comboPrices[n]; return c ? t + q.small * c.small + q.large * c.large : t;
  }, 0);
  const getTotal = () => { const b = getBase(); return paymentMethod === "online" ? b * 0.9 : b; };

  const getItems = () => {
    const items: { name: string; quantity: number; size: string; key: string }[] = [];
    Object.entries(selectedCombos).forEach(([n, q]) => {
      if (q.small > 0) items.push({ name: n, quantity: q.small, size: "nhỏ", key: `${n}-small` });
      if (q.large > 0) items.push({ name: n, quantity: q.large, size: "lớn", key: `${n}-large` });
    });
    return items;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const phone = fd.get("phone") as string;
    const name = fd.get("name") as string;
    const address = fd.get("address") as string;
    const note = fd.get("note") as string;
    for (const item of getItems()) {
      if (!comboColors[item.key] || comboColors[item.key] === "Chưa chọn") { alert(`Vui lòng chọn màu cho ${item.name} (${item.size})`); return; }
    }
    setIsSubmitting(true);
    const selStr = Object.entries(selectedCombos).map(([n, q]) => `${n}: nhỏ ${q.small}, lớn ${q.large}`).join("; ");
    const colStr = Object.entries(comboColors).map(([k, c]) => { const [cn, s] = k.split('-'); return `${cn} ${s === 'small' ? 'nhỏ' : 'lớn'}: ${c}`; }).join("; ");
    const orderId = `ORD${Date.now().toString().slice(-8)}`;
    const orderData = { source: "kll-v1", orderId, orderTime: new Date().toISOString(), selectedCombos: selStr, comboColors: colStr, name, phone, address, note, paymentMethod, totalPrice: getTotal() };
    sessionStorage.setItem("orderData", JSON.stringify({ ...orderData, selectedCombosObj: selectedCombos, comboColorsObj: comboColors }));
    try {
      await fetch("https://script.google.com/macros/s/AKfycbyv7gIgwksqqalJhhqqUp8KUGCM9r0LEu6LtRd8wuGE86lmFHQGXZGJp8gHWNzBaC_T/exec", { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(orderData) });
    } catch (err) { console.error(err); setIsSubmitting(false); return; }
    navigate({ to: `/thank-you?phone=${phone}` });
  };

  return (
    <section id="tu-van" className="border-t border-walnut/10">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/55">08 — Tư vấn & Đặt hàng</span>
            <h2 className="mt-5 font-serif text-[34px] leading-tight text-charcoal sm:text-4xl">Gửi ảnh<br />hạng mục<br /><em className="not-italic text-clay">qua Zalo.</em></h2>
            <p className="mt-6 text-[14px] leading-relaxed text-walnut/60">
              Gửi ảnh cổng, hàng rào, lam, hoặc hạng mục kim loại để được gợi ý màu giả gỗ, hệ lớp và cách thi công phù hợp — miễn phí.
            </p>
            <a href={ZALO_URL} className="mt-8 inline-flex items-center gap-3 bg-[#0068FF] px-7 py-4 text-[12px] uppercase tracking-[0.18em] text-white transition hover:bg-[#0056d6]">
              <ZaloIcon className="h-5 w-5" /> Nhắn Zalo ngay
            </a>
            <div className="mt-5 border-t border-walnut/15 pt-5 text-[12px] text-walnut/55">
              Hotline: <strong className="text-charcoal">{HOTLINE}</strong><br />Phản hồi trong 15 phút · Tư vấn 8h–20h
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="border border-walnut/20 p-6 md:p-8">
              <div className="mb-6 text-[11px] uppercase tracking-[0.25em] text-walnut/55">Hoặc đặt hàng trực tuyến</div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <FField label="Họ và tên" name="name" required placeholder="Nguyễn Văn A" />
                  <FField label="Số điện thoại" name="phone" required type="tel" placeholder="09xx xxx xxx" />
                </div>
                <FField label="Địa chỉ giao hàng" name="address" required placeholder="Số nhà, đường, phường/xã, quận/huyện, thành phố" />
                <FField label="Ghi chú" name="note" placeholder="Yêu cầu độ bóng hay mờ của lớp phủ" />
                {getTotal() > 0 && (
                  <div className="border border-walnut/15 p-5 space-y-4">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-walnut/55">Đơn hàng</div>
                    {getItems().map(item => (
                      <div key={item.key} className="space-y-2">
                        <div className="text-[13px] font-medium">{item.name} ({item.size}) ×{item.quantity}</div>
                        <div>
                          <label className="mb-1 block text-[10px] uppercase tracking-[0.15em] text-walnut/50">Mã màu giả gỗ</label>
                          <select value={comboColors[item.key] || "Chưa chọn"} onChange={e => setComboColors(p => ({ ...p, [item.key]: e.target.value }))} className="w-full border border-walnut/25 bg-cream px-3 py-2 text-[13px] outline-none focus:border-clay">
                            {colorOptions.map(c => <option key={c}>{c}</option>)}
                          </select>
                        </div>
                      </div>
                    ))}
                    <div className="flex items-center justify-between border-t border-walnut/15 pt-3">
                      <span className="text-[13px] font-medium">Thành tiền</span>
                      <div>
                        {paymentMethod === "online" && <span className="mr-2 text-[11px] line-through text-walnut/35">{fmt(getBase())}</span>}
                        <span className="font-serif text-[24px] text-clay">{fmt(getTotal())}</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-walnut/40">* Chưa bao gồm phí vận chuyển</p>
                  </div>
                )}
                <div>
                  <div className="mb-3 text-[11px] uppercase tracking-[0.22em] text-walnut/55">Hình thức thanh toán</div>
                  <div className="space-y-2">
                    {[{v:"cod",l:"COD — Thanh toán khi nhận hàng"},{v:"online",l:"Chuyển khoản Online — Miễn phí ship, giảm 10%"}].map(opt => (
                      <label key={opt.v} className="flex cursor-pointer items-center gap-3 border border-walnut/20 p-3 transition hover:border-clay">
                        <input type="radio" name="paymentMethod" value={opt.v} checked={paymentMethod === opt.v} onChange={e => setPaymentMethod(e.target.value as "cod" | "online")} className="h-4 w-4 accent-clay" />
                        <span className="text-[13px]">{opt.l}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <button type="submit" disabled={isSubmitting} className="mt-2 inline-flex w-full items-center justify-center gap-3 bg-clay py-4 text-[12px] uppercase tracking-[0.18em] text-cream transition hover:bg-walnut disabled:opacity-50">
                  {isSubmitting ? "Đang xử lý..." : "Xác nhận đặt hàng"}
                </button>
                <p className="text-[12px] text-walnut/50">Cam kết đổi trả 7 ngày nếu sai màu.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FField({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] uppercase tracking-[0.18em] text-walnut/60">{label}{required && <span className="ml-0.5 text-clay">*</span>}</span>
      <input type={type} name={name} required={required} placeholder={placeholder} className="w-full border border-walnut/25 bg-cream px-4 py-3 text-[14px] outline-none placeholder:text-walnut/25 focus:border-clay" />
    </label>
  );
}

/* ── Projects ─────────────────────────────────────────── */
function Projects() {
  const projects = [
    { img: appKhungKeoThep, label: "Khung kèo thép giả gỗ", detail: "Tông Gõ đỏ · TP.HCM" },
    { img: cuaCongSatGiaGo, label: "Cửa cổng sắt giả gỗ", detail: "Tông Vàng-đỏ · Đồng Nai" },
    { img: sonChanBanSatGiaGo, label: "Chân bàn sắt giả gỗ", detail: "Tông Teak · Bình Dương" },
    { img: banGheSatGiaGoNgoaiTroi, label: "Bàn ghế outdoor sắt giả gỗ", detail: "Tông Vàng-Nâu · Bình Dương" },
    { img: sonSatGiaGoGianHoa, label: "Giàn hoa công viên", detail: "Tông Nâu-đỏ · Bình Dương" },
    { img: satGiaGoAshLotus, label: "Bàn ghế cafe sắt giả gỗ", detail: "Tông Nâu-đen · Đồng Nai" },
  ];
  return (
    <section className="border-t border-walnut/10 bg-sand/40">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/55">09 — Công trình thực tế</span>
            <h2 className="mt-5 font-serif text-[34px] leading-tight text-charcoal sm:text-4xl md:text-5xl">Hoàn thiện thật.<br />Vật liệu thật.</h2>
          </div>
          <a href={ZALO_URL} className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-clay transition hover:text-walnut">
            Tư vấn công trình tương tự <ArrowRightIcon className="h-3.5 w-3.5" />
          </a>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:gap-6">
          {projects.map((p, i) => (
            <figure key={i} className="group">
              <div className="overflow-hidden">
                <img src={p.img} alt={p.label} loading="lazy" className={`w-full object-cover transition duration-700 group-hover:scale-[1.02] ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"}`} width={1024} height={768} />
              </div>
              <figcaption className="mt-3 border-t border-walnut/15 pt-3">
                <div className="font-serif text-[16px] text-charcoal">{p.label}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-walnut/45">{p.detail}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ──────────────────────────────────────────────── */
function FAQ() {
  const faqs = [
    { q: "Sơn giả gỗ trên kim loại có bền không?", a: "Khi thi công đúng quy trình và dùng đủ lớp phủ bảo vệ, hệ sơn giả gỗ Lotus có độ bền cao, bám dính tốt trên kim loại và giữ được màu lâu." },
    { q: "Có dùng ngoài trời được không?", a: "Có. Combo thông dụng và combo cao cấp 2K có lớp phủ bảo vệ chuyên dụng cho ngoài trời, chống tia UV và thời tiết." },
    { q: "Phù hợp với những hạng mục nào?", a: "Cổng sắt, hàng rào, lan can, khung thép trang trí, cửa sắt, mái hiên, pergola, lam sắt và các chi tiết kim loại nội ngoại thất." },
    { q: "Tôi chưa biết chọn combo nào thì làm sao?", a: "Bạn chỉ cần nhắn Zalo gửi ảnh hạng mục và mô tả nhu cầu, Lotus sẽ tư vấn combo phù hợp." },
    { q: "Có những màu gỗ nào để lựa chọn?", a: "Các tông phổ biến: Teak, Walnut, Cánh gián, Sồi sáng, Cherry, Gỗ đỏ đậm và nhiều màu khác theo yêu cầu." },
    { q: "Tôi có thể gửi ảnh công trình để được tư vấn không?", a: "Hoàn toàn có thể. Gửi ảnh hạng mục qua Zalo là cách nhanh nhất để Lotus chọn đúng hệ sơn." },
    { q: "Mua lẻ có được không?", a: "Có. Lotus hỗ trợ cả khách lẻ và khách công trình. Nhắn Zalo để được báo giá nhanh." },
  ];
  return (
    <section id="faq" className="border-t border-walnut/10">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/55">10 — FAQ</span>
            <h2 className="mt-5 font-serif text-[34px] leading-tight text-charcoal sm:text-4xl">Câu hỏi<br />thường gặp.</h2>
          </div>
          <div className="col-span-12 md:col-span-8 divide-y divide-walnut/12">
            {faqs.map((f, i) => (
              <details key={i} className="group py-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[15px] font-medium text-charcoal">
                  <span>{f.q}</span>
                  <span className="mt-0.5 shrink-0 text-[18px] leading-none text-walnut/35 transition group-open:rotate-45 group-open:text-clay">+</span>
                </summary>
                <p className="mt-3 text-[13px] leading-relaxed text-walnut/60">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Final CTA ────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="border-t border-walnut/10 bg-charcoal text-cream">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-8">
            <span className="text-[11px] uppercase tracking-[0.3em] text-cream/60">Bắt đầu</span>
            <h2 className="mt-5 font-serif text-[36px] leading-tight sm:text-5xl md:text-[54px]">
              Gửi ảnh hạng mục kim loại —<br />
              <em className="not-italic text-clay">nhận tư vấn màu và hệ lớp</em><br />
              ngay hôm nay.
            </h2>
            <p className="mt-6 max-w-xl text-[14px] leading-relaxed text-cream/80">
              Đội Lotus tư vấn theo ảnh thực tế: gợi ý màu giả gỗ phù hợp, combo đúng nhu cầu, hướng dẫn thi công từng bước.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href={ZALO_URL} className="inline-flex items-center gap-3 bg-[#0068FF] px-7 py-4 text-[12px] uppercase tracking-[0.18em] text-white transition hover:bg-[#0056d6]">
                <ZaloIcon className="h-5 w-5" /> Nhắn Zalo ngay
              </a>
              <a href="#tu-van" className="inline-flex items-center gap-3 border border-cream/45 px-7 py-4 text-[12px] uppercase tracking-[0.18em] text-cream/90 transition hover:border-cream hover:text-cream">
                Đặt hàng trực tuyến
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ───────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-walnut/15 bg-charcoal text-cream/65">
      <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img src={logoLotus} alt="Sơn Lotus" className="h-9 w-auto object-contain brightness-0 invert opacity-80" />
            <p className="mt-4 text-[12px] leading-relaxed text-cream/45">Giải pháp sơn giả gỗ chuyên cho cổng sắt, hàng rào, lan can, pergola và chi tiết kim loại.</p>
          </div>
          <div className="text-[12px]">
            <h4 className="mb-4 text-[10px] uppercase tracking-[0.25em] text-cream/35">Liên hệ</h4>
            <ul className="space-y-2 text-cream/55">
              <li>Hotline: <strong className="text-cream/80">{HOTLINE}</strong></li>
              <li>Zalo: <a href={ZALO_URL} className="text-cream/80 hover:text-cream">{HOTLINE}</a></li>
              <li>Email: sales@sonlotus.vn</li>
              <li>Website: www.sonlotus.vn</li>
              <li>99/5 Đường XTT26-1, Ấp 2, Xã Bà Điểm, TP.HCM</li>
            </ul>
          </div>
          <div className="text-[12px]">
            <h4 className="mb-4 text-[10px] uppercase tracking-[0.25em] text-cream/35">Liên kết</h4>
            <ul className="space-y-2">
              {[["#ung-dung","Ứng dụng thực tế"],["#bang-mau","Bảng màu sơn giả gỗ"],["#combo","Combo sản phẩm"],["#tu-van","Tư vấn & Đặt hàng"]].map(([h,l]) => (
                <li key={h}><a href={h} className="text-cream/45 hover:text-cream/80 transition">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-cream/8 pt-8 text-[10px] text-cream/30">
          © {new Date().getFullYear()} CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI DỊCH VỤ BÍCH TRANG. MST: 0313351528.
        </div>
      </div>
    </footer>
  );
}

/* ── Sticky Mobile CTA ────────────────────────────────── */
function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-walnut/20 bg-cream/98 backdrop-blur-sm md:hidden">
      <a href={ZALO_URL} className="flex items-center justify-center gap-2 bg-[#0068FF] py-4 text-[11px] uppercase tracking-[0.18em] font-medium text-white">
        <ZaloIcon className="h-4 w-4" /> Nhắn Zalo
      </a>
      <a href="#tu-van" className="flex items-center justify-center py-4 text-[11px] uppercase tracking-[0.18em] font-medium text-charcoal">
        Đặt hàng
      </a>
    </div>
  );
}

/* ── Icons ────────────────────────────────────────────── */
function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ZaloIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.06 2 11.07c0 2.74 1.37 5.18 3.5 6.83-.1.83-.46 2.04-.5 2.13-.06.18.13.34.31.27.13-.05 1.79-.79 2.6-1.18 1.27.4 2.65.62 4.09.62 5.52 0 10-4.06 10-9.07S17.52 2 12 2zm-3.7 11.3H6.1c-.2 0-.36-.16-.36-.36 0-.08.03-.16.08-.22l1.94-2.5H6.18c-.2 0-.36-.16-.36-.36s.16-.36.36-.36h2.13c.2 0 .36.16.36.36 0 .08-.03.16-.08.22l-1.94 2.5H8.3c.2 0 .36.16.36.36s-.16.36-.36.36zm1.6 0c-.2 0-.36-.16-.36-.36V10c0-.2.16-.36.36-.36s.36.16.36.36v2.94c0 .2-.16.36-.36.36zm4.2 0h-.06c-.16 0-.3-.1-.34-.26l-.18-.5h-1.46l-.18.5c-.05.16-.18.26-.34.26h-.06c-.24 0-.4-.24-.31-.46l1.18-3.06c.06-.14.2-.24.36-.24s.3.1.36.24l1.18 3.06c.09.22-.07.46-.31.46zm4 0h-2c-.2 0-.36-.16-.36-.36V10c0-.2.16-.36.36-.36s.36.16.36.36v2.58h1.64c.2 0 .36.16.36.36s-.16.36-.36.36zM12.5 11.7l.46-1.26.46 1.26h-.92z" />
    </svg>
  );
}
