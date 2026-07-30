import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect, useRef, useCallback } from "react";
import logoLotus from "../assets/optimized/logo-150w.webp";
import { trackZaloClick } from "../utils/analytics";
import colorPaletteImage from "../assets/optimized/bang-mau-1080w.webp";
import heroGate from "../assets/son-gia-go-tren-cong-sat-lotus.jpeg";
import hero640w from "../assets/optimized/hero-640w.webp";
import hero750w from "../assets/optimized/hero-750w.webp";
import hero828w from "../assets/optimized/hero-828w.webp";
import hero1080w from "../assets/optimized/hero-1080w.webp";
import hero1200w from "../assets/optimized/hero-1200w.webp";
import hero1920w from "../assets/optimized/hero-1920w.webp";
import appRailing from "../assets/app-railing.jpg";
import appFence from "../assets/optimized/hang-rao-640w.webp";
import appPergola from "../assets/optimized/app-pergola-640w.webp";
import appDoor from "../assets/optimized/app-door-640w.webp";
import appFrame from "../assets/khung-sat-son-gia-go-mau-dep.jpeg";
import appLouver from "../assets/khung-sat-son-gia-go-lotus.jpeg";
import appKhungKeoThep from "../assets/optimized/khung-keo-640w.webp";
import sonChanBanSatGiaGo from "../assets/son-chan-ban-sat-gia-go.jpg";
import cuaCongSatGiaGo from "../assets/cua-cong-sat-gia-go.jpg";
import beforeGate from "../assets/before-chan-ban-sat.jpg";
import afterGate from "../assets/son-chan-ban-sat-gia-go.jpg";
import banGheSatGiaGoNgoaiTroi from "../assets/optimized/ban-ghe-640w.webp";
import sonSatGiaGoGianHoa from "../assets/optimized/gian-hoa-640w.webp";
import satGiaGoAshLotus from "../assets/optimized/sat-ash-640w.webp";
import bangMau1080w from "../assets/optimized/bang-mau-1080w.webp";
import bangMau1200w from "../assets/optimized/bang-mau-1200w.webp";
import bangMau1920w from "../assets/optimized/bang-mau-1920w.webp";

export const Route = createFileRoute("/")({ component: LandingPage });

const ZALO_URL = "https://zalo.me/0943966662";
const HOTLINE = "0943 966 662";

function LandingPage() {
  const [selectedCombos, setSelectedCombos] = useState<Record<string, { small: number; large: number }>>({
    "Combo hạng mục nhỏ": { small: 0, large: 0 },
    "Combo ngoại thất": { small: 0, large: 0 },
    "Combo 2K cao cấp": { small: 0, large: 0 },
  });
  const [showStickyBar, setShowStickyBar] = useState(false);
  
  // Intent Engine State
  const [intentState, setIntentState] = useState({
    pageType: "b2c_fakewood_metal" as const,
    intentScore: 0,
    currentIntent: "explorer" as "explorer" | "considering" | "price_ready" | "hot_lead",
    selectedPackage: null as "500g" | "1kg" | null,
    selectedColor: null as string | null,
    intentEvents: [] as Array<{ name: string; timestamp: number; meta?: any }>,
    promptDismissed: false,
    timeOnPage: 0,
    maxScrollDepth: 0,
    viewedColorSection: false,
    viewedProjectSection: false,
    reachedComboSection: false,
    comboSectionRevisits: 0,
    lastComboSectionVisit: 0 as number | null,
  });

  // Helper: Track intent event
  const trackIntentEvent = useCallback((name: string, meta?: any) => {
    console.log(`[Intent Engine] Event: ${name}`, meta || "");
    setIntentState(prev => ({
      ...prev,
      intentEvents: [...prev.intentEvents, { name, timestamp: Date.now(), meta }]
    }));
  }, []);

  // Helper: Add intent score
  const addIntentScore = useCallback((points: number, reason: string) => {
    console.log(`[Intent Engine] Score +${points}: ${reason}`);
    setIntentState(prev => {
      const newScore = prev.intentScore + points;
      return { ...prev, intentScore: newScore };
    });
  }, []);

  // Helper: Update intent state based on score
  const updateIntentState = useCallback(() => {
    setIntentState(prev => {
      let newIntent: "explorer" | "considering" | "price_ready" | "hot_lead" = "explorer";
      if (prev.intentScore >= 12) newIntent = "hot_lead";
      else if (prev.intentScore >= 8) newIntent = "price_ready";
      else if (prev.intentScore >= 4) newIntent = "considering";
      
      if (newIntent !== prev.currentIntent) {
        console.log(`[Intent Engine] Intent changed: ${prev.currentIntent} -> ${newIntent} (score: ${prev.intentScore})`);
      }
      return { ...prev, currentIntent: newIntent };
    });
  }, []);

  // Track time on page
  useEffect(() => {
    const timer = setInterval(() => {
      setIntentState(prev => {
        const newTime = prev.timeOnPage + 1;
        // Time on page > 20s => +1
        if (newTime === 20) {
          addIntentScore(1, "Time on page > 20s");
          updateIntentState();
        }
        return { ...prev, timeOnPage: newTime };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [addIntentScore, updateIntentState]);

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 300);
      
      const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      setIntentState(prev => {
        const newMaxDepth = Math.max(prev.maxScrollDepth, scrollDepth);
        // Scroll depth > 35% => +1
        if (newMaxDepth > 35 && prev.maxScrollDepth <= 35) {
          addIntentScore(1, "Scroll depth > 35%");
          updateIntentState();
        }
        return { ...prev, maxScrollDepth: newMaxDepth };
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [addIntentScore, updateIntentState]);

  // Track section visibility using Intersection Observer
  // NOTE: this effect must only run ONCE on mount. It previously depended on
  // `intentState` (an object that changes every second via the timeOnPage
  // timer and on every scroll event), which caused the IntersectionObserver
  // to be destroyed and recreated dozens/hundreds of times per second,
  // blocking the main thread and making the page laggy / unresponsive
  // (and causing Chrome extensions like Tag Assistant to hang).
  useEffect(() => {
    const sections = {
      colors: document.querySelector('[data-section="colors"]'),
      projects: document.querySelector('[data-section="projects"]'),
      combo: document.querySelector('[data-section="combo"]'),
      order: document.querySelector('[data-section="order"]'),
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target as HTMLElement;
            const sectionType = section.dataset.section;

            if (sectionType === "colors") {
              setIntentState(prev => {
                if (prev.viewedColorSection) return prev;
                return { ...prev, viewedColorSection: true };
              });
              trackIntentEvent("viewed_color_section");
              addIntentScore(2, "Viewed color section");
              updateIntentState();
            }

            if (sectionType === "projects") {
              setIntentState(prev => {
                if (prev.viewedProjectSection) return prev;
                return { ...prev, viewedProjectSection: true };
              });
              trackIntentEvent("viewed_project_section");
              addIntentScore(1, "Viewed real project section");
              updateIntentState();
            }

            if (sectionType === "combo" || sectionType === "order") {
              setIntentState(prev => {
                if (!prev.reachedComboSection) {
                  trackIntentEvent("reached_combo_section");
                  addIntentScore(4, "Reached combo/order section");
                  updateIntentState();
                  return { ...prev, reachedComboSection: true, lastComboSectionVisit: Date.now() };
                }
                const timeSinceLastVisit = prev.lastComboSectionVisit ? Date.now() - prev.lastComboSectionVisit : Infinity;
                if (timeSinceLastVisit > 5000) {
                  trackIntentEvent("revisited_combo_section");
                  addIntentScore(3, "Revisited combo/order section");
                  updateIntentState();
                  return { ...prev, comboSectionRevisits: prev.comboSectionRevisits + 1, lastComboSectionVisit: Date.now() };
                }
                return prev;
              });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    Object.values(sections).forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Track CTA clicks
  const handleCTAClick = useCallback((ctaType: string, meta?: any) => {
    trackIntentEvent(`cta_click_${ctaType}`, meta);

    // Track Zalo click event for GA4
    if (ctaType === "zalo" || ctaType === "hero_zalo") {
      if (typeof window !== "undefined" && window.gtag) {
        console.log('Sending zalo_click event to GA4', { ctaType });
        window.gtag('event', 'zalo_click', {
          'event_category': 'engagement',
          'event_label': 'son_gia_go_kim_loai',
          'cta_type': ctaType
        });
      } else {
        console.log('gtag not available', { ctaType, hasGtag: typeof window !== "undefined" && !!window.gtag });
      }
    }

    switch (ctaType) {
      case "hero_zalo":
        addIntentScore(5, "Click Zalo CTA");
        break;
      case "hero_combo":
        addIntentScore(3, "Click hero 'Xem Combo' CTA");
        break;
      case "view_combo":
        addIntentScore(3, "Click 'Xem combo' CTA");
        break;
      case "place_order":
        addIntentScore(4, "Click 'Đặt hàng' CTA");
        break;
      case "select_package":
        addIntentScore(4, "Select package (500g/1kg)");
        setIntentState(prev => ({ ...prev, selectedPackage: meta?.package || null }));
        break;
      case "select_color":
        setIntentState(prev => ({ ...prev, selectedColor: meta?.color || null }));
        break;
    }
    updateIntentState();
  }, [trackIntentEvent, addIntentScore, updateIntentState]);

  useEffect(() => {
    if (showStickyBar) {
      document.body.style.paddingBottom = "70px";
    } else {
      document.body.style.paddingBottom = "0";
    }
    return () => {
      document.body.style.paddingBottom = "0";
    };
  }, [showStickyBar]);
  return (
    <div className="min-h-screen bg-cream text-charcoal antialiased font-sans">
      <Header />
      <main>
        <Hero />
        <TrustBar />
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
      </main>
      <Footer />
      <StickyMobileCTA showStickyBar={showStickyBar} />
    </div>
  );
}

/* ── Header ─────────────────────────────────────────── */
function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-walnut/15 bg-cream/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3 md:px-12">
        <a href="#top">
          <img src={logoLotus} alt="Sơn Lotus" className="h-9 w-auto object-contain" width={150} height={50} loading="lazy" decoding="async" />
        </a>
        <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.22em] text-walnut/65 md:flex">
          {[["#ung-dung","Ứng dụng"],["#bang-mau","Bảng màu"],["#combo","Combo"],["#tu-van","Tư vấn"],["#faq","FAQ"]].map(([h,l]) => (
            <a key={h} href={h} className="transition hover:text-charcoal">{l}</a>
          ))}
        </nav>
        <a href={ZALO_URL} data-cta="zalo" onClick={() => trackZaloClick("navbar")} className="hidden text-[11px] uppercase tracking-[0.22em] text-clay border-b border-clay pb-0.5 transition hover:text-walnut hover:border-walnut md:block">
          Nhắn Zalo tư vấn
        </a>
      </div>
    </header>
  );
}

/* ── Hero ────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="top" data-section="hero" className="border-b border-walnut/10 bg-gradient-to-br from-cream via-cream to-sand/30">
      <div className="mx-auto max-w-[1400px] px-5 pt-10 pb-14 md:px-12 md:pt-14 md:pb-20">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 flex flex-col md:col-span-6 lg:col-span-5">
            <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/55">Lotus · Hoàn thiện bề mặt kim loại</span>
            <h1 className="mt-5 font-serif text-[42px] leading-[1.05] tracking-tight text-charcoal sm:text-[52px] md:text-[56px] lg:text-[64px]">
              Cổng, hàng rào, lam<br />
              nhìn như gỗ thật<br />
              <em className="not-italic text-clay">mà vẫn bền kim loại.</em>
            </h1>
            <p className="mt-5 max-w-md text-[14px] leading-relaxed text-walnut/70">
              Lotus giả gỗ trên kim loại: vân gỗ sắc nét, ấm, sang — giữ độ bền sắt, không lo cong vênh hay mối mọt.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4">
              <a href={ZALO_URL} data-cta="hero_zalo" onClick={() => trackZaloClick("hero")} className="inline-flex items-center justify-center gap-3 bg-clay px-6 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-cream transition hover:bg-walnut sm:px-7 shadow-lg shadow-clay/20">
                Gửi ảnh hạng mục kim loại qua Zalo <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a href="#combo" data-cta="hero_combo" onClick={() => handleCTAClick("hero_combo")} className="inline-flex items-center justify-center gap-3 border border-clay px-6 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-clay transition hover:bg-clay hover:text-cream sm:px-7">
                Xem Combo & Đặt Hàng Ngay <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-4 text-center text-[11px] text-walnut/50">
              ✓ Cam kết đổi trả 7 ngày · Giao hàng toàn quốc · Tư vấn miễn phí
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1.5 border-t border-walnut/15 pt-4 text-[10px] uppercase tracking-[0.22em] text-walnut/50">
              <span>Vân gỗ sắc nét, tự nhiên</span>
              <span className="text-walnut/25">/</span>
              <span>Bám dính tốt trên kim loại</span>
              <span className="text-walnut/25">/</span>
              <span>Bền ngoài trời 5+ năm</span>
            </div>
          </div>
          <figure className="col-span-12 md:col-span-6 lg:col-span-7">
            <div className="relative overflow-hidden rounded-lg shadow-2xl shadow-walnut/10">
              <img 
                src={hero640w}
                alt="Cổng sắt sơn giả gỗ Lotus" 
                className="aspect-[4/3] w-full object-cover md:aspect-[16/10] transition-transform duration-700 hover:scale-[1.01]" 
                width={1920} 
                height={1080} 
                fetchPriority="high" 
                decoding="async"
                srcSet={`${hero640w} 640w, ${hero750w} 750w, ${hero828w} 828w, ${hero1080w} 1080w, ${hero1200w} 1200w, ${hero1920w} 1920w`}
                sizes="(max-width: 640px) 100vw, (max-width: 750px) 100vw, (max-width: 828px) 100vw, (max-width: 1080px) 100vw, (max-width: 1200px) 100vw, 1920px"
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-walnut/45">
              <span>Cổng sắt hoàn thiện giả gỗ · Lotus</span>
              <span>— 001</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ── Trust Bar ────────────────────────────────────────── */
function TrustBar() {
  return (
    <section className="border-t border-walnut/10 bg-[#f5f0ea]">
      <div className="mx-auto max-w-[1400px] px-5 py-10 md:px-12 md:py-14">
        <div className="grid grid-cols-3 gap-8 md:gap-12">
          <div className="col-span-3 text-center md:col-span-1">
            <div className="font-serif text-[42px] leading-none text-charcoal sm:text-[48px] md:text-[56px]">500+</div>
            <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-walnut/60">công trình hoàn thiện</div>
          </div>
          <div className="col-span-3 text-center md:col-span-1">
            <div className="font-serif text-[42px] leading-none text-charcoal sm:text-[48px] md:text-[56px]">5+ năm</div>
            <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-walnut/60">bền ngoài trời</div>
          </div>
          <div className="col-span-3 text-center md:col-span-1">
            <div className="font-serif text-[42px] leading-none text-charcoal sm:text-[48px] md:text-[56px]">7 ngày</div>
            <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-walnut/60">đổi trả nếu sai màu</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Applications ─────────────────────────────────────── */
function Applications() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="ung-dung" ref={sectionRef} data-section="applications" className="border-t border-walnut/10 bg-gradient-to-br from-cream via-cream to-sand/20">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-12 md:py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/55">02 — Ứng dụng</span>
            <h2 className="mt-5 font-serif text-[34px] leading-tight text-charcoal sm:text-4xl md:text-5xl">
              Những hạng mục kim loại<br />hoàn thiện giả gỗ đẹp nhất.
            </h2>
          </div>
          <a href={ZALO_URL} data-cta="zalo" onClick={() => trackZaloClick("applications")} className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-clay transition hover:text-walnut">
            Gửi ảnh hạng mục kim loại qua Zalo <ArrowRightIcon className="h-3.5 w-3.5" />
          </a>
        </div>

        {isVisible && (
          <>
            {/* 1 large + 4 small */}
            <div className="mt-14 grid grid-cols-12 gap-3 md:gap-5">
              <figure className="col-span-12 md:col-span-7 group">
                <div className="relative overflow-hidden rounded-lg shadow-lg shadow-walnut/10">
                  <img 
                    src={appPergola} 
                    alt="Pergola kim loại sơn giả gỗ" 
                    loading="lazy" 
                    className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.02]" 
                    width={1600} 
                    height={1200} 
                    decoding="async"
                    srcSet={`${appPergola} 640w, ${appPergola} 750w, ${appPergola} 828w, ${appPergola} 1080w, ${appPergola} 1200w`}
                    sizes="(max-width: 640px) 100vw, (max-width: 750px) 100vw, (max-width: 828px) 100vw, (max-width: 1080px) 100vw, (max-width: 1200px) 100vw, 1920px"
                  />
                </div>
                <figcaption className="mt-3 flex items-baseline justify-between border-t border-walnut/15 pt-3">
                  <span className="font-serif text-[18px] text-charcoal">Pergola / giàn mái kim loại</span>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-walnut/45">Ngoại thất</span>
                </figcaption>
              </figure>
              <div className="col-span-12 grid grid-cols-2 gap-3 md:col-span-5 md:gap-5">
                {[
                  { img: heroGate, label: "Cổng sắt", ctx: "Ngoại thất", srcSet: `${heroGate} 640w, ${heroGate} 750w, ${heroGate} 828w` },
                  { img: appFence, label: "Hàng rào", ctx: "Sân vườn", srcSet: `${appFence} 640w, ${appFence} 750w, ${appFence} 828w` },
                  { img: appLouver, label: "Lam che nắng", ctx: "Mặt dựng", srcSet: `${appLouver} 640w, ${appLouver} 750w, ${appLouver} 828w` },
                  { img: appRailing, label: "Lan can, tay vịn", ctx: "Cầu thang", srcSet: `${appRailing} 640w, ${appRailing} 750w, ${appRailing} 828w` },
                ].map((a) => (
                  <figure key={a.label} className="group">
                    <div className="relative overflow-hidden rounded-lg shadow-md shadow-walnut/8">
                      <img 
                        src={a.img} 
                        alt={a.label} 
                        loading="lazy" 
                        className="aspect-square w-full object-cover transition duration-700 group-hover:scale-[1.02]" 
                        width={800} 
                        height={800} 
                        decoding="async"
                        srcSet={a.srcSet}
                        sizes="(max-width: 640px) 100vw, (max-width: 750px) 100vw, (max-width: 828px) 100vw, 1920px"
                      />
                    </div>
                    <figcaption className="mt-2 flex items-baseline justify-between border-t border-walnut/12 pt-2">
                      <span className="text-[13px] font-medium text-charcoal">{a.label}</span>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-walnut/40">{a.ctx}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            {/* 3 equal */}
            <div className="mt-5 grid grid-cols-3 gap-3 md:gap-5">
              {[
                { img: appKhungKeoThep, label: "Khung kèo thép", ctx: "Kết cấu nội thất", srcSet: `${appKhungKeoThep} 640w, ${appKhungKeoThep} 750w, ${appKhungKeoThep} 828w, ${appKhungKeoThep} 1080w` },
                { img: appDoor, label: "Cửa sắt / pano cửa", ctx: "Khung mặt tiền", srcSet: `${appDoor} 640w, ${appDoor} 750w, ${appDoor} 828w, ${appDoor} 1080w` },
                { img: appFrame, label: "Khung trang trí", ctx: "Chi tiết kiến trúc", srcSet: `${appFrame} 640w, ${appFrame} 750w, ${appFrame} 828w` },
              ].map((a) => (
                <figure key={a.label} className="group col-span-3 md:col-span-1">
                  <div className="relative overflow-hidden rounded-lg shadow-md shadow-walnut/8">
                    <img 
                      src={a.img} 
                      alt={a.label} 
                      loading="lazy" 
                      className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.02]" 
                      width={1024} 
                      height={768} 
                      decoding="async"
                      srcSet={a.srcSet}
                      sizes="(max-width: 640px) 100vw, (max-width: 750px) 100vw, (max-width: 828px) 100vw, (max-width: 1080px) 100vw, 1920px"
                    />
                  </div>
                  <figcaption className="mt-3 flex items-baseline justify-between border-t border-walnut/15 pt-3">
                    <span className="font-serif text-[16px] text-charcoal">{a.label}</span>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-walnut/45">{a.ctx}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

/* ── Why Statement ────────────────────────────────────── */
function WhyStatement() {
  const points = [
    { n: "01", t: "Cổng, hàng rào nhìn như gỗ thật", d: "Từ khoảng nhìn thông thường, bề mặt tạo cảm giác gần gỗ thật hơn hẳn sơn kim loại thường." },
    { n: "02", t: "Bền hơn gỗ thật ở nhiều trường hợp", d: "Không lo cong vênh, mối mọt, bạc màu. Giữ độ bền kim loại, chịu nắng mưa tốt hơn." },
    { n: "03", t: "Ít lo gỉ sét, bong tróc", d: "Hệ lớp đúng kỹ thuật: primer chuyên dụng, lớp bảo vệ ngoài trời chống UV, chống ẩm." },
    { n: "04", t: "Nhìn cao cấp hơn sơn đen/xám", d: "Thay vì sơn đen nhìn cứng như nhà xưởng, giả gỗ giúp mặt tiền ấm hơn, sang hơn." },
  ];
  return (
    <section className="border-t border-walnut/10 bg-charcoal text-cream">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-12 md:py-24">
        <div className="grid grid-cols-12 gap-x-8 gap-y-10">
          <div className="col-span-12 md:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-cream/80">03 — Vì sao chọn giả gỗ</span>
            <h2 className="mt-5 font-serif text-[34px] leading-tight sm:text-4xl md:text-5xl">
              Giữ độ chắc<br />của kim loại.<br /><em className="not-italic text-clay">Đưa bề mặt<br />về phía gỗ.</em>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 md:pt-2">
            <p className="font-serif text-[20px] leading-[1.65] text-cream md:text-[22px]">
              Kim loại bền nhưng lạnh. Lotus giả gỗ giữ kết cấu sắt, chỉ thay đổi bề mặt: ấm hơn, sang hơn, gần gỗ.
            </p>
            <ul className="mt-14 divide-y divide-cream/15 border-t border-cream/15">
              {points.map((b) => (
                <li key={b.n} className="flex gap-8 py-7">
                  <span className="mt-0.5 w-10 shrink-0 font-serif text-[3rem] leading-none text-clay/60 sm:text-[3.5rem]">{b.n}</span>
                  <div>
                    <div className="font-serif text-[19px] text-cream">{b.t}</div>
                    <p className="mt-2 text-[14px] leading-relaxed text-cream/90">{b.d}</p>
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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} data-section="before-after" className="border-t border-walnut/10">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-12 md:py-24">
        <div className="grid grid-cols-12 gap-x-8 gap-y-10">
          <div className="col-span-12 md:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/55">04 — Trước & Sau</span>
            <h2 className="mt-5 font-serif text-[34px] leading-tight text-charcoal sm:text-4xl md:text-5xl">
              Chân bàn sắt<br />thành giả gỗ<br /><em className="not-italic text-clay">ấm, sang hơn.</em>
            </h2>
            <p className="mt-6 max-w-xs text-[14px] leading-relaxed text-walnut/70">
              Trước: chân bàn sắt nhìn lạnh, thiếu ấm. Sau: chân bàn giả gỗ nhìn như gỗ thật, hợp nội thất phòng khách hơn.
            </p>
            <a href={ZALO_URL} data-cta="zalo" onClick={() => trackZaloClick("before_after")} className="mt-8 inline-flex items-center gap-2 border-b border-walnut/35 pb-0.5 text-[11px] uppercase tracking-[0.22em] text-walnut transition hover:text-clay hover:border-clay">
              Gửi ảnh hạng mục kim loại qua Zalo <ArrowRightIcon className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="col-span-12 md:col-span-8">
            {isVisible && (
              <div className="relative select-none overflow-hidden">
                <img src={afterGate} alt="Sau hoàn thiện giả gỗ" className="aspect-[4/3] w-full object-cover" width={1600} height={1200} loading="lazy" decoding="async" />
                <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
                  <img src={beforeGate} alt="Trước hoàn thiện" className="aspect-[4/3] w-full object-cover" width={1600} height={1200} loading="lazy" decoding="async" />
                </div>
                <div className="pointer-events-none absolute inset-y-0 w-px bg-cream/60" style={{ left: `${pos}%` }} />
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-10 w-10 cursor-ew-resize items-center justify-center bg-cream shadow" style={{ left: `${pos}%` }}>
                  <svg className="h-5 w-5 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
                  </svg>
                </div>
                <input type="range" min="0" max="100" value={pos} onChange={(e) => setPos(Number(e.target.value))} className="absolute inset-0 w-full cursor-ew-resize opacity-0" />
                <div className="pointer-events-none absolute bottom-4 left-5 text-[11px] uppercase tracking-[0.25em] text-cream/75">Trước</div>
                <div className="pointer-events-none absolute bottom-4 right-5 text-[11px] uppercase tracking-[0.25em] text-cream/75">Sau</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Process ──────────────────────────────────────────── */
function Process() {
  const steps = [
    { n: "01", t: "Xử lý bề mặt", d: "Làm sạch, loại bỏ gỉ sét, tạo nhám — nền bám tốt cho các lớp sau." },
    { n: "02", t: "Lót kim loại", d: "Primer chuyên dụng cho thép, mạ kẽm, nhôm — chống gỉ từ bên trong." },
    { n: "03", t: "Tạo vân gỗ", d: "Phủ màu nền, cọ vân gỗ theo tông được chọn — vân sắc nét, tự nhiên." },
    { n: "04", t: "Bảo vệ ngoài trời", d: "Lớp phủ trong suốt chống UV, chống ẩm — bền nắng mưa nhiều năm." },
  ];
  return (
    <section className="border-t border-walnut/10 bg-sand/40">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-12 md:py-24">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/55">05 — Hệ lớp</span>
            <h2 className="mt-5 font-serif text-[34px] leading-tight text-charcoal sm:text-4xl md:text-5xl">
              Bốn bước.<br />Một hệ hoàn<br />thiện bài bản.
            </h2>
            <p className="mt-6 max-w-xs text-[14px] leading-relaxed text-walnut/60">
              Không phải quét một lớp màu. Đây là hệ lớp bài bản cho từng loại kim loại và điều kiện phơi nắng.
            </p>
          </div>
          <div className="col-span-12 md:col-span-8 md:pl-4">
            <ol>
              {steps.map((s, i) => (
                <li key={s.n} className={`flex gap-6 py-8 md:gap-10 ${i > 0 ? "border-t border-walnut/15" : ""}`}>
                  <span className="mt-0.5 w-10 shrink-0 font-serif text-[3rem] leading-none text-clay/45 sm:text-[3.5rem]">{s.n}</span>
                  <div className="pt-1">
                    <h3 className="font-serif text-[20px] leading-tight text-charcoal sm:text-[24px]">{s.t}</h3>
                    <p className="mt-2.5 text-[14px] leading-relaxed text-walnut/70">{s.d}</p>
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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="bang-mau" ref={sectionRef} data-section="colors" className="border-t border-walnut/10">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-12 md:py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/55">06 — Bảng màu</span>
            <h2 className="mt-5 font-serif text-[34px] leading-tight text-charcoal sm:text-4xl md:text-5xl">
              Chọn tông gỗ<br />phù hợp công trình.
            </h2>
          </div>
          <a href={ZALO_URL} data-cta="zalo" onClick={() => trackZaloClick("color_palette_header")} className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-clay transition hover:text-walnut">
            Gửi ảnh hạng mục kim loại qua Zalo <ArrowRightIcon className="h-3.5 w-3.5" />
          </a>
        </div>
        {isVisible && (
          <div className="mt-12">
            <img 
              src={colorPaletteImage} 
              alt="Bảng màu sơn giả gỗ trên kim loại Lotus" 
              className="w-full" 
              loading="lazy" 
              width={2400} 
              height={1200} 
              decoding="async"
              srcSet={`${bangMau1080w} 1080w, ${bangMau1200w} 1200w, ${bangMau1920w} 1920w`}
              sizes="(max-width: 1080px) 100vw, (max-width: 1200px) 100vw, 1920px"
            />
          </div>
        )}
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
    { name: "Combo hạng mục nhỏ", tag: "Trong nhà", desc: "Cho cổng, hàng rào nhỏ ít nắng mưa. Sơn lót + sơn phủ màu giả gỗ.", items: ["Sơn lót kim loại", "Sơn phủ màu giả gỗ"], prices: { small: 515000, large: 2350000 }, highlight: false },
    { name: "Combo ngoại thất", tag: "Ngoài trời", desc: "Cho cổng, hàng rào, lam phơi nắng mưa bình thường. Sơn lót + sơn phủ màu + lớp bảo vệ ngoài trời.", items: ["Sơn lót kim loại", "Sơn phủ màu giả gỗ", "Sơn phủ bảo vệ ngoài trời"], prices: { small: 751000, large: 3420000 }, highlight: true },
    { name: "Combo 2K cao cấp", tag: "Khu vực biển", desc: "Cho hạng mục gần biển, nắng gắt hoặc cần độ bóng cao. Sơn lót + sơn phủ màu + lớp 2K bảo vệ.", items: ["Sơn lót kim loại", "Sơn phủ màu giả gỗ", "Sơn phủ 2K bảo vệ cao cấp"], prices: { small: 888000, large: 4050000 }, highlight: false },
  ];
  const fmt = (p: number) => Math.floor(p).toLocaleString("vi-VN") + " đ";
  const upd = (name: string, size: "small" | "large", v: number) =>
    setSelectedCombos(prev => ({ ...prev, [name]: { ...prev[name], [size]: Math.max(0, v) } }));
  const comboTotal = (name: string) => { const c = combos.find(x => x.name === name)!; const s = selectedCombos[name]; return s.small * c.prices.small + s.large * c.prices.large; };
  const total = () => combos.reduce((t, c) => { const s = selectedCombos[c.name]; return t + s.small * c.prices.small + s.large * c.prices.large; }, 0);

  return (
    <section id="combo" data-section="combo" className="border-t border-walnut/10 bg-sand/40">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-12 md:py-24">
        <div>
          <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/55">07 — Combo sản phẩm</span>
          <h2 className="mt-5 font-serif text-[34px] leading-tight text-charcoal sm:text-4xl md:text-5xl">Chọn combo<br />phù hợp hạng mục.</h2>
          <p className="mt-4 text-[13px] text-walnut/60">
            Chưa chắc combo nào phù hợp?{" "}
            <a href={ZALO_URL} data-cta="zalo" onClick={() => trackZaloClick("combo")} className="text-clay underline-offset-4 hover:underline">Gửi ảnh hạng mục kim loại qua Zalo</a> để được tư vấn.
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
              <p className="mt-4 text-[11px] italic text-walnut/50">
                {c.name === "Combo hạng mục nhỏ" && "Đủ cho ~5–8m² (cổng đơn, hàng rào ngắn)"}
                {c.name === "Combo ngoại thất" && "Đủ cho ~25–30m² (1 cổng đôi tiêu chuẩn)"}
                {c.name === "Combo 2K cao cấp" && "Đủ cho ~20–25m² (khu biển, pergola, lam mặt tiền)"}
              </p>
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
                <div className="mt-2">
                  <span className="inline-block bg-clay px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-cream">
                    Chuyển khoản: giảm thêm 10%
                  </span>
                </div>
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
              <p className="mt-1 text-[11px] text-walnut/70">Nhỏ 1kg ≈ 5m² · Lớn 5kg ≈ 25m² · Chưa bao gồm phí vận chuyển</p>
            </div>
            <a href="#tu-van" data-cta="place_order" onClick={() => handleCTAClick("place_order")} className="inline-flex items-center gap-3 bg-clay px-7 py-4 text-[12px] uppercase tracking-[0.18em] text-cream transition hover:bg-walnut">
              Điền thông tin đặt hàng <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        )}
        <p className="mt-4 text-[12px] text-walnut/70">Combo lớn (5kg mỗi loại) đủ cho ~25–30m² bề mặt, tương đương 1 cổng đôi tiêu chuẩn.</p>
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
    "Combo hạng mục nhỏ": { small: 515000, large: 2350000 },
    "Combo ngoại thất": { small: 751000, large: 3420000 },
    "Combo 2K cao cấp": { small: 888000, large: 4050000 },
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
    navigate({ to: `/thank-you-son-gia-go-kim-loai?phone=${phone}` });
  };

  return (
    <section id="tu-van" data-section="order" className="border-t border-walnut/10">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-12 md:py-24">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/55">08 — Tư vấn & Đặt hàng</span>
            <h2 className="mt-5 font-serif text-[34px] leading-tight text-charcoal sm:text-4xl">Gửi ảnh cổng, hàng rào<br /><em className="not-italic text-clay">để gợi ý đúng hệ lớp.</em></h2>
            <p className="mt-6 text-[14px] leading-relaxed text-walnut/60">
              Gửi ảnh hạng mục kim loại qua Zalo — Lotus tư vấn màu, hệ lớp và combo phù hợp trước khi bạn chốt.
            </p>
            <a href={ZALO_URL} data-cta="zalo" onClick={() => trackZaloClick("color_palette")} className="mt-8 inline-flex items-center gap-3 bg-[#0068FF] px-7 py-4 text-[12px] uppercase tracking-[0.18em] text-white transition hover:bg-[#0056d6]">
              <ZaloIcon className="h-5 w-5" /> Gửi ảnh hạng mục kim loại qua Zalo
            </a>
            <div className="mt-5 border-t border-walnut/15 pt-5 text-[12px] text-walnut/55">
              Hotline: <strong className="text-charcoal">{HOTLINE}</strong><br />Hạng mục lớn: gửi ảnh + kích thước để tính định mức chi tiết.
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="border border-walnut/20 p-6 md:p-8">
              <div className="mb-6 text-[11px] uppercase tracking-[0.25em] text-walnut/55">Dành cho hạng mục nhỏ đã chọn xong combo và màu</div>
              <p className="mb-6 text-[12px] text-walnut/70">Chưa chắc màu hoặc hệ lớp? Gửi ảnh qua Zalo ở trên trước.</p>
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
                          <label htmlFor={`color-${item.key}`} className="mb-1 block text-[10px] uppercase tracking-[0.15em] text-walnut/50">Mã màu giả gỗ</label>
                          <select id={`color-${item.key}`} value={comboColors[item.key] || "Chưa chọn"} onChange={e => setComboColors(p => ({ ...p, [item.key]: e.target.value }))} className="w-full border border-walnut/25 bg-cream px-3 py-2 text-[13px] outline-none focus:border-clay">
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
                    <p className="text-[11px] text-walnut/60">* Chưa bao gồm phí vận chuyển</p>
                  </div>
                )}
                <div>
                  <div className="mb-3 text-[11px] uppercase tracking-[0.22em] text-walnut/55">Hình thức thanh toán</div>
                  <div className="space-y-2">
                    {[{v:"cod",l:"COD — Thanh toán khi nhận hàng"},{v:"online",l:"Chuyển khoản Online — Miễn phí ship, giảm 10%"}].map(opt => (
                      <label key={opt.v} className="flex cursor-pointer items-center gap-3 border border-walnut/20 p-3 transition hover:border-clay">
                        <input type="radio" id={`payment-${opt.v}`} name="paymentMethod" value={opt.v} checked={paymentMethod === opt.v} onChange={e => setPaymentMethod(e.target.value as "cod" | "online")} className="h-4 w-4 accent-clay" />
                        <span className="text-[13px]">{opt.l}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <button type="submit" disabled={isSubmitting} className="mt-2 inline-flex w-full items-center justify-center gap-3 bg-clay py-4 text-[12px] uppercase tracking-[0.18em] text-cream transition hover:bg-walnut disabled:opacity-50">
                  {isSubmitting ? "Đang xử lý..." : "Xác nhận đặt hàng"}
                </button>
                <p className="text-[12px] text-walnut/70">Cam kết đổi trả 7 ngày nếu sai màu.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FField({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  const fieldId = `field-${name}`;
  return (
    <div className="block">
      <label htmlFor={fieldId} className="mb-1.5 block text-[11px] uppercase tracking-[0.18em] text-walnut/60">{label}{required && <span className="ml-0.5 text-clay">*</span>}</label>
      <input id={fieldId} type={type} name={name} required={required} placeholder={placeholder} className="w-full border border-walnut/25 bg-cream px-4 py-3 text-[14px] outline-none placeholder:text-walnut/25 focus:border-clay" />
    </div>
  );
}

/* ── Projects ─────────────────────────────────────────── */
function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    { img: appKhungKeoThep, label: "Khung kèo thép giả gỗ", detail: "Tông Gõ đỏ · TP.HCM", srcSet: `${appKhungKeoThep} 640w, ${appKhungKeoThep} 750w, ${appKhungKeoThep} 828w, ${appKhungKeoThep} 1080w` },
    { img: cuaCongSatGiaGo, label: "Cửa cổng sắt giả gỗ", detail: "Tông Vàng-đỏ · Đồng Nai", srcSet: `${cuaCongSatGiaGo} 640w, ${cuaCongSatGiaGo} 750w, ${cuaCongSatGiaGo} 828w` },
    { img: sonChanBanSatGiaGo, label: "Chân bàn sắt giả gỗ", detail: "Tông Teak · Bình Dương", srcSet: `${sonChanBanSatGiaGo} 640w, ${sonChanBanSatGiaGo} 750w, ${sonChanBanSatGiaGo} 828w` },
    { img: banGheSatGiaGoNgoaiTroi, label: "Bàn ghế outdoor sắt giả gỗ", detail: "Tông Vàng-Nâu · Bình Dương", srcSet: `${banGheSatGiaGoNgoaiTroi} 640w, ${banGheSatGiaGoNgoaiTroi} 750w, ${banGheSatGiaGoNgoaiTroi} 828w, ${banGheSatGiaGoNgoaiTroi} 1080w` },
    { img: sonSatGiaGoGianHoa, label: "Giàn hoa công viên", detail: "Tông Nâu-đỏ · Bình Dương", srcSet: `${sonSatGiaGoGianHoa} 640w, ${sonSatGiaGoGianHoa} 750w, ${sonSatGiaGoGianHoa} 828w` },
    { img: satGiaGoAshLotus, label: "Bàn ghế cafe sắt giả gỗ", detail: "Tông Nâu-đen · Đồng Nai", srcSet: `${satGiaGoAshLotus} 640w, ${satGiaGoAshLotus} 750w, ${satGiaGoAshLotus} 828w, ${satGiaGoAshLotus} 1080w` },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} data-section="projects" className="border-t border-walnut/10 bg-sand/40">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-12 md:py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/55">09 — Công trình thực tế</span>
            <h2 className="mt-5 font-serif text-[34px] leading-tight text-charcoal sm:text-4xl md:text-5xl">Hoàn thiện thật.<br />Vật liệu thật.</h2>
          </div>
          <a href={ZALO_URL} data-cta="zalo" onClick={() => trackZaloClick("projects")} className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-clay transition hover:text-walnut">
            Gửi ảnh hạng mục kim loại qua Zalo <ArrowRightIcon className="h-3.5 w-3.5" />
          </a>
        </div>
        {isVisible && (
          <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:gap-6">
            {projects.map((p, i) => (
              <figure key={i} className="group">
                <div className="overflow-hidden">
                  <img 
                    src={p.img} 
                    alt={p.label} 
                    loading="lazy" 
                    className={`w-full object-cover transition duration-700 group-hover:scale-[1.02] ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"}`} 
                    width={1024} 
                    height={768} 
                    decoding="async"
                    srcSet={p.srcSet}
                    sizes="(max-width: 640px) 100vw, (max-width: 750px) 100vw, (max-width: 828px) 100vw, (max-width: 1080px) 100vw, 1920px"
                  />
                </div>
                <figcaption className="mt-3 border-t border-walnut/15 pt-3">
                  <div className="font-serif text-[16px] text-charcoal">{p.label}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-walnut/45">{p.detail}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
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
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-12 md:py-24">
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
                <p className="mt-3 text-[14px] leading-relaxed text-walnut/70">{f.a}</p>
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
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-12 md:py-24">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-8">
            <span className="text-[11px] uppercase tracking-[0.3em] text-cream/60">Bắt đầu</span>
            <h2 className="mt-5 font-serif text-[36px] leading-tight sm:text-5xl md:text-[54px]">
              Chưa chắc combo nào? Gửi ảnh —<br />
              <em className="not-italic text-clay">Lotus tư vấn ngay, miễn phí.</em>
            </h2>
            <p className="mt-6 max-w-xl text-[14px] leading-relaxed text-cream/90">
              Chụp ảnh hạng mục cần hoàn thiện, gửi qua Zalo. Lotus xem và gợi ý đúng màu, đúng hệ lớp — trước khi bạn chốt mua.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href={ZALO_URL} data-cta="zalo" onClick={() => trackZaloClick("final_cta")} className="inline-flex items-center gap-3 bg-[#0068FF] px-7 py-4 text-[12px] uppercase tracking-[0.18em] text-white transition hover:bg-[#0056d6]">
                <ZaloIcon className="h-5 w-5" /> Gửi ảnh hạng mục kim loại qua Zalo
              </a>
              <a href="#tu-van" data-cta="view_combo" onClick={() => handleCTAClick("view_combo")} className="inline-flex items-center gap-3 bg-white px-7 py-4 text-[12px] uppercase tracking-[0.18em] text-charcoal transition hover:bg-cream">
                Xem Combo & Đặt Ngay →
              </a>
            </div>
            <p className="mt-6 text-center text-[11px] text-cream/50">
              ✓ Cam kết đổi trả 7 ngày nếu sai màu · Không ép mua · Tư vấn thật
            </p>
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
            <img src={logoLotus} alt="Sơn Lotus" className="h-9 w-auto object-contain opacity-80" width={150} height={50} loading="lazy" decoding="async" />
            <p className="mt-4 text-[12px] leading-relaxed text-cream/70">Giải pháp sơn giả gỗ chuyên cho cổng sắt, hàng rào, lan can, pergola và chi tiết kim loại.</p>
          </div>
          <div className="text-[12px]">
            <h4 className="mb-4 text-[10px] uppercase tracking-[0.25em] text-cream/35">Liên hệ</h4>
            <ul className="space-y-2 text-cream/70">
              <li>Hotline: <strong className="text-cream/90">{HOTLINE}</strong></li>
              <li>Zalo: <a href={ZALO_URL} data-cta="zalo" onClick={() => trackZaloClick("footer")} className="text-cream/90 hover:text-cream">{HOTLINE}</a></li>
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
        <div className="mt-10 border-t border-cream/8 pt-8 text-[11px] text-cream/50">
          © {new Date().getFullYear()} CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI DỊCH VỤ BÍCH TRANG. MST: 0313351528.
        </div>
      </div>
    </footer>
  );
}

/* ── Sticky Mobile CTA ────────────────────────────────── */
function StickyMobileCTA({ showStickyBar }: { showStickyBar: boolean }) {
  return (
    <div
      id="sticky-zalo-bar"
      className={`fixed inset-x-0 bottom-0 z-[9999] grid grid-cols-2 gap-2 px-4 pb-safe bg-clay pt-3 transition-opacity duration-300 md:hidden ${showStickyBar ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 12px)" }}
    >
      <a
        href={ZALO_URL}
        data-cta="zalo"
        onClick={() => trackZaloClick("sticky")}
        className="flex items-center justify-center gap-2 bg-white px-3 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-clay transition hover:bg-cream"
      >
        Nhắn Zalo
      </a>
      <a
        href="#combo"
        data-cta="view_combo"
        onClick={() => handleCTAClick("view_combo")}
        className="flex items-center justify-center gap-2 bg-white px-3 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-clay transition hover:bg-cream"
      >
        Xem combo
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
