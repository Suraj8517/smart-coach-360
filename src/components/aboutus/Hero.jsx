import React from "react";

const STATS = [
  { v: "10K+", l: "Coaches Worldwide" },
  { v: "500K+", l: "Clients Managed" },
  { v: "40+", l: "Features Released" },
  { v: "15+", l: "Integrations" },
];

export const Hero = () => (
  <section className="relative overflow-hidden bg-[#150d18] flex flex-col items-center px-6 py-24 text-center min-h-[520px]">

    {/* Orbs */}
    <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[680px] h-[480px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(130,60,148,.55) 0%, rgba(90,30,110,.25) 40%, transparent 70%)", filter: "blur(40px)", animation: "drift1 9s ease-in-out infinite" }} />
    <div className="absolute -bottom-20 -right-24 w-[420px] h-[340px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(ellipse at 70% 70%, rgba(100,40,130,.30) 0%, transparent 65%)", filter: "blur(50px)", animation: "drift2 12s ease-in-out infinite" }} />
    <div className="absolute top-[30%] -left-20 w-[300px] h-[260px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(80,30,100,.22) 0%, transparent 70%)", filter: "blur(44px)", animation: "drift3 15s ease-in-out infinite" }} />
    <div className="absolute top-[10%] right-[8%] w-[180px] h-[180px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(180,100,200,.12) 0%, transparent 70%)", filter: "blur(28px)", animation: "drift1 7s ease-in-out infinite reverse" }} />

    {/* Noise grain */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "180px 180px" }} />

    {/* Hairlines */}
    <div className="absolute top-0 left-[10%] right-[10%] h-px pointer-events-none"
      style={{ background: "linear-gradient(90deg, transparent, rgba(190,130,210,.35), transparent)" }} />
    <div className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
      style={{ background: "linear-gradient(90deg, transparent, rgba(162,100,180,.18), transparent)" }} />

    {/* Keyframes */}
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');
      @keyframes drift1 { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-18px)} }
      @keyframes drift2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-22px)} }
      @keyframes drift3 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(14px)} }
      @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
      @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.7)} }
      .fade-up { animation: fadeUp 0.9s ease both; }
      .d1 { animation-delay: 0.1s; }
      .d2 { animation-delay: 0.2s; }
      .d3 { animation-delay: 0.3s; }
      .d4 { animation-delay: 0.4s; }
      .badge-dot { animation: pulse 2.4s ease-in-out infinite; }
      .hero-title { font-family: 'Cormorant Garamond', serif; }
      .hero-body { font-family: 'DM Sans', sans-serif; }
      .stat-shimmer::before {
        content: ''; position: absolute; top: 0; left: 10%; right: 10%; height: 0.5px;
        background: linear-gradient(90deg, transparent, rgba(210,160,230,.45), transparent);
      }
      .stat-card:hover { background: rgba(255,255,255,.07); border-color: rgba(200,160,220,.30); transform: translateY(-3px); }
      .title-gradient {
        font-style: italic; font-weight: 400;
        background: linear-gradient(135deg, #d4a8e8 0%, #b070cc 50%, #d4a8e8 100%);
        -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
      }
    `}</style>

    {/* Content */}
    <div className="relative z-10 max-w-[780px] hero-body">

      {/* Badge */}
      <div className="fade-up d1 inline-flex items-center gap-2 text-[0.64rem] font-medium uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-7 bg-[rgba(100,50,120,0.28)] border border-[rgba(180,110,200,0.30)] text-[#c8a0d8]">
        <span className="badge-dot w-[5px] h-[5px] rounded-full bg-[#b87fd0] shadow-[0_0_6px_rgba(190,130,210,0.7)]" />
        About Us
      </div>

      {/* Title */}
      <h1 className="fade-up d2 hero-title font-light leading-[1.07] text-[#f5eef8] tracking-[-0.01em] mb-5"
        style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.1rem)" }}>
        Built by Fitness Professionals,<br />
        <span className="title-gradient">for Fitness Professionals</span>
      </h1>

      {/* Subtitle */}
      <p className="fade-up d3 font-light leading-[1.82] text-[rgba(180,150,195,0.7)] max-w-[600px] mx-auto mb-14"
        style={{ fontSize: "clamp(0.9rem, 1.4vw, 1rem)" }}>
        SmartCoach360 was founded with a clear purpose: to give fitness professionals an enterprise-quality platform purpose-built for coaching—without the compromises required by generic business software.
      </p>

      {/* Stats */}
      <div className="fade-up d4 flex flex-wrap justify-center gap-3">
        {STATS.map(({ v, l }) => (
          <div key={l}
            className="stat-card stat-shimmer relative flex flex-col items-center px-8 py-5 rounded-[18px] min-w-[130px] bg-white/[0.04] border border-[rgba(200,160,220,0.15)] transition-all duration-300 cursor-default overflow-hidden">
            <span className="hero-title text-[2.1rem] font-semibold text-[#d0a8e2] leading-none tracking-[-0.02em]">{v}</span>
            <span className="text-[0.64rem] font-medium text-[rgba(140,100,160,0.8)] mt-1.5 tracking-[0.05em] uppercase">{l}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);