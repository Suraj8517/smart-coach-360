import React, { useEffect, useRef, useState } from "react";

// ─── Mouse parallax hook ──────────────────────────────────────────────────────
function useMouseParallax() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const fn = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setPos({
        x: (e.clientX - cx) / cx,   // -1 → +1
        y: (e.clientY - cy) / cy,
      });
    };
    window.addEventListener("mousemove", fn, { passive: true });
    return () => window.removeEventListener("mousemove", fn);
  }, []);
  return pos;
}

// ─── Scroll parallax (background drift) ──────────────────────────────────────
function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const fn = () => setY(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return y;
}

// ─── Mount-ready hook (fires one tick after mount so CSS transitions trigger) ─
function useMounted(delay = 60) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), delay);
    return () => clearTimeout(t);
  }, []);
  return ready;
}

export default function Hero({ DARK_BG, IMAGES, navigate }) {
  const url = typeof import.meta !== "undefined" && import.meta.env
    ? import.meta.env.VITE_CALENDLY_LINK
    : "#";

  const mouse   = useMouseParallax();
  const scrollY = useScrollY();
  const ready   = useMounted(80);

  // stagger helpers
  const item = (delay) => ({
    opacity:   ready ? 1 : 0,
    transform: ready ? "translateY(0px)" : "translateY(28px)",
    transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}s,
                 transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  });

  // parallax helpers
  const px = (factor) => `translate(${mouse.x * factor}px, ${mouse.y * factor}px)`;

  return (
    <section
      className="relative min-h-[92vh] flex items-center overflow-hidden"
      style={DARK_BG}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${IMAGES?.background})`,
          backgroundSize: "cover",
          backgroundPosition: "60% center",
          transform: `translateY(${scrollY * 0.18}px) scale(1.08)`,
          transition: "transform 0.1s linear",
          willChange: "transform",
        }}
      />

      {/* ── Gradient overlays ── */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(18,9,21,0.98) 0%, rgba(36,18,42,0.92) 42%, rgba(60,32,68,0.55) 68%, rgba(71,41,76,0.10) 100%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 15% 50%, rgba(100,55,110,0.18) 0%, transparent 70%)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(18,9,21,0.85) 0%, rgba(18,9,21,0.3) 55%, transparent 95%)" }} />

      {/* ── Noise texture ── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "180px",
        }}
      />

     

      

  

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-24">
        <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-center">
          <div className="max-w-2xl">

            {/* Trust badge */}
            <div style={item(0.1)}>
              <span
                className="inline-flex items-center gap-2.5 text-xs font-bold px-4 py-2 rounded-full mb-8 border"
                style={{
                  color: "rgba(220,190,240,0.9)",
                  backgroundColor: "rgba(71,41,76,0.5)",
                  borderColor: "rgba(120,80,140,0.6)",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 0 20px rgba(130,80,150,0.15), inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "rgba(200,160,230,0.9)" }} />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: "#c9a8d6" }} />
                </span>
                #1 Software for Coaches
              </span>
            </div>

            {/* Headline */}
            <div style={item(0.22)}>
              <h1
                className="font-display mb-7 leading-[1.03] tracking-tight"
                style={{
                  color: "#faf4fc",
                  fontSize: "clamp(2.6rem,5.5vw,4.25rem)",
                }}
              >
                Run Your Coaching
                <br />
                Business on{" "}
                <em
                  className="not-italic"
                  style={{
                    background: "linear-gradient(135deg, #d4a8e8 0%, #b87fd4 40%, #9b5fc0 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  One Platform
                </em>
              </h1>
            </div>

            {/* Body */}
            <div style={item(0.35)}>
              <p
                className="leading-relaxed mb-10 max-w-lg"
                style={{ color: "rgba(180,150,200,0.8)", fontSize: "clamp(0.95rem,1.3vw,1.0625rem)", lineHeight: 1.75 }}
              >
                Stop juggling apps. Manage clients, programmes, nutrition, payments, and messages—all in one place built for coaches who want to scale.
              </p>
            </div>

            {/* CTAs */}
            <div style={item(0.46)}>
              <div className="flex flex-col sm:flex-row gap-3.5 mb-14">
                <button
                  onClick={() => window.open(url, "_blank")}
                  className="group relative overflow-hidden inline-flex items-center gap-2.5 font-bold text-base rounded-2xl px-7 py-3.5 transition-all duration-300 hover:scale-[1.03]"
                  style={{
                    background: "linear-gradient(135deg, #e8d5f5 0%, #d4a8e8 100%)",
                    color: "#1c0f1f",
                    boxShadow: "0 4px 24px rgba(180,120,220,0.3), 0 1px 0 rgba(255,255,255,0.15) inset",
                  }}
                >
                  {/* Shine sweep */}
                  <span
                    className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)" }}
                  />
                  Book a Free Demo
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <button
                  onClick={() => navigate && navigate("/solutions")}
                  className="inline-flex items-center gap-2.5 font-semibold px-7 py-3.5 rounded-2xl border transition-all duration-300 hover:scale-[1.02] group"
                  style={{
                    color: "rgba(210,180,240,0.9)",
                    borderColor: "rgba(120,80,140,0.5)",
                    backdropFilter: "blur(4px)",
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = "rgba(71,41,76,0.4)"; e.currentTarget.style.borderColor = "rgba(120,80,140,0.8)"; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.borderColor = "rgba(120,80,140,0.5)"; }}
                >
                  <span
                    className="flex items-center justify-center w-7 h-7 rounded-full group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: "rgba(130,80,150,0.3)" }}
                  >
                    <svg className="w-3.5 h-3.5 translate-x-px" fill="currentColor" viewBox="0 0 24 24" style={{ color: "#c9a8d6" }}>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  See How It Works
                </button>
              </div>
            </div>

            {/* Social proof avatars */}
            <div style={item(0.58)}>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {["#9b6dbd","#7a4fa0","#c49ad6","#5e3880"].map((bg, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-bold text-white"
                      style={{ backgroundColor: bg, borderColor: "rgba(28,15,31,0.8)" }}
                    >
                      {["JK","AL","MR","SP"][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    {[...Array(5)].map((_,i) => (
                      <svg key={i} className="w-3 h-3" fill="#fbbf24" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs" style={{ color: "rgba(150,120,170,0.8)" }}>
                    Loved by <span style={{ color: "rgba(210,180,240,0.9)", fontWeight: 500 }}>2,400+</span> coaches
                  </p>
                </div>
              </div>
            </div>

          </div>{/* /left col */}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: ready ? 0.6 : 0,
          transition: "opacity 1s ease 1.2s",
        }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium" style={{ color: "rgba(130,80,150,0.6)" }}>Scroll</span>
        <div className="w-px h-10 relative overflow-hidden rounded-full" style={{ backgroundColor: "rgba(130,80,150,0.2)" }}>
          <div
            className="absolute top-0 w-full rounded-full"
            style={{
              height: "40%",
              background: "linear-gradient(to bottom, rgba(180,130,210,0.8), transparent)",
              animationName: "scrollDrop",
              animationDuration: "1.8s",
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
            }}
          />
        </div>
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes scrollDrop {
          0%   { transform: translateY(-100%); opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateY(260%); opacity: 0; }
        }
        @keyframes floatDot {
          0%, 100% { transform: translateY(0px) scale(1);   opacity: 0.5; }
          50%       { transform: translateY(-14px) scale(1.3); opacity: 1;   }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%;   }
          50%       { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
}