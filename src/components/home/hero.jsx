import React from 'react'
export default function hero({DARK_BG,IMAGES}) {
  return (
          <section
      className="relative min-h-[92vh] flex items-center overflow-hidden"
      style={DARK_BG}
    >
      <div
        className="absolute inset-0 transition-transform duration-700"
        style={{
          backgroundImage: `url(${IMAGES.heroCoach})`,
          backgroundSize: "cover",
          backgroundPosition: "60% center",
        }}
      />
    
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(18,9,21,0.98) 0%, rgba(36,18,42,0.92) 42%, rgba(60,32,68,0.55) 68%, rgba(71,41,76,0.10) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 15% 50%, rgba(100,55,110,0.18) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(18,9,21,0.85) 0%, rgba(18,9,21,0.3) 55%, transparent 95%)",
        }}
      />
    
      
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "180px",
        }}
      />
    
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(180,130,210,0.4) 30%, rgba(200,150,230,0.6) 50%, rgba(180,130,210,0.4) 70%, transparent 100%)",
        }}
      />
    
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-24">
        <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-center">
    
          {/* ── LEFT: Main content ── */}
          <div className="max-w-2xl">
    
            {/* Trust badge */}
            <span
              className="inline-flex items-center gap-2.5 text-brand-lilac-200 text-xs font-bold px-4 py-2 rounded-full mb-8 border border-brand-boss-mid/60 fade-up"
              style={{
                backgroundColor: "rgba(71,41,76,0.5)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 0 20px rgba(130,80,150,0.15), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-lilac-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-lilac-300" />
              </span>
              Trusted by coaches worldwide
            </span>
    
            {/* Headline */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-[4.25rem] text-brand-lilac leading-[1.03] tracking-tight mb-7 fade-up fade-up-1">
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
            <p className="text-brand-silver/80 md:text-base sm:text-xl leading-relaxed mb-10 max-w-lg fade-up fade-up-2">
              Stop juggling apps. Manage clients, programmes, nutrition, payments, and messages, all in one place built for coaches who want to scale.
            </p>
    
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3.5 mb-14 fade-up fade-up-3">
              <button
                className="btn-cream font-bold text-base shadow-2xl group relative overflow-hidden"
                style={{ paddingLeft: "1.75rem", paddingRight: "1.75rem" }}
              >
                
                <span
                  className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                  }}
                />
                Book a Free Demo
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
    
              <button
                onClick={() => navigate("casestudies")}
                className="inline-flex items-center gap-2.5 text-brand-lilac-100 font-semibold px-7 py-3.5 rounded-2xl border border-brand-boss-mid/50 hover:border-brand-boss-mid/80 hover:bg-brand-boss/40 transition-all duration-200 group"
                style={{ backdropFilter: "blur(4px)" }}
              >
                <span
                  className="flex items-center justify-center w-7 h-7 rounded-full group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: "rgba(130,80,150,0.3)" }}
                >
                  <svg className="w-3.5 h-3.5 text-brand-lilac-300 translate-x-px" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                See How It Works
              </button>
            </div>
    
           
            <div className="flex items-center gap-4 fade-up fade-up-4">
              <div className="flex -space-x-2">
                {["#9b6dbd", "#7a4fa0", "#c49ad6", "#5e3880"].map((bg, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[rgba(28,15,31,0.8)] flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ backgroundColor: bg }}
                  >
                    {["JK", "AL", "MR", "SP"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-brand-fedora-lt text-xs">
                  Loved by <span className="text-brand-lilac-200 font-medium">2,400+</span> coaches
                </p>
              </div>
            </div>
          </div>
    
    
        </div>
      </div>
    
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-brand-fedora-lt/50 text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
        <div className="w-px h-10 relative overflow-hidden rounded-full" style={{ backgroundColor: "rgba(130,80,150,0.2)" }}>
          <div
            className="absolute top-0 w-full rounded-full"
            style={{
              height: "40%",
              background: "linear-gradient(to bottom, rgba(180,130,210,0.8), transparent)",
              animation: "scrollDrop 1.8s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    
      <style>{`
        @keyframes scrollDrop {
          0% { transform: translateY(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(260%); opacity: 0; }
        }
      `}</style>
    </section>
  )
}
