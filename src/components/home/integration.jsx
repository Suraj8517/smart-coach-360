import React, { useRef } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { IMAGES } from "../../images";

const STYLES = `
  @keyframes marquee-left {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes marquee-right {
    0%   { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
  @keyframes float-slow {
    0%,100% { transform: translateY(0px) scale(1); }
    50%      { transform: translateY(-10px) scale(1.02); }
  }
  @keyframes blob-drift {
    0%,100% { transform: translate(-50%,-50%) scale(1); }
    50%      { transform: translate(-50%,-50%) scale(1.12) translate(8px,-6px); }
  }
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes fade-up {
    from { opacity:0; transform:translateY(18px); }
    to   { opacity:1; transform:translateY(0); }
  }
  .int-fade-up   { animation: fade-up 0.6s ease both; }
  .int-d1 { animation-delay:0.05s; }
  .int-d2 { animation-delay:0.15s; }
  .int-d3 { animation-delay:0.25s; }
  .int-d4 { animation-delay:0.35s; }

  .int-marquee-l { animation: marquee-left  28s linear infinite; }
  .int-marquee-r { animation: marquee-right 22s linear infinite; }

  /* Card glow on hover */
  .int-tile {
    position: relative;
    transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.28s ease;
    cursor: default;
  }
  .int-tile::before {
    content: '';
    position: absolute; inset: 0;
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.25s;
    background: radial-gradient(circle at 50% 0%, rgba(160,108,176,0.25), transparent 70%);
    pointer-events: none;
  }
  .int-tile:hover { transform: translateY(-6px) scale(1.04); }
  .int-tile:hover::before { opacity: 1; }
  .int-tile:hover .int-tile-shadow {
    box-shadow: 0 16px 40px rgba(71,41,76,0.18);
  }

  /* Pause marquee on hover */
  .int-strip:hover .int-marquee-l,
  .int-strip:hover .int-marquee-r { animation-play-state: paused; }
`;

const INTEGRATIONS = [
  { 
    name: "WhatsApp",        
    bg: "rgba(92,57,100,0.10)",  
    border: "rgba(92,57,100,0.25)",  
    logo: IMAGES.whatsapp 
  },
  { 
    name: "Zoom",            
    bg: "rgba(92,57,100,0.14)",  
    border: "rgba(92,57,100,0.30)",  
    logo: IMAGES.zoom 
  },
  { 
    name: "MS Teams",        
    bg: "rgba(92,57,100,0.18)",  
    border: "rgba(92,57,100,0.35)",  
    logo: IMAGES.teams 
  },
  { 
    name: "Google Sheets",   
    bg: "rgba(92,57,100,0.22)",  
    border: "rgba(92,57,100,0.40)",  
    logo: IMAGES.gsheets 
  },
  { 
    name: "Google Forms",    
    bg: "rgba(92,57,100,0.12)",  
    border: "rgba(92,57,100,0.28)",  
    logo: IMAGES.gforms 
  },
  { 
    name: "Apple Health",    
    bg: "rgba(92,57,100,0.16)",  
    border: "rgba(92,57,100,0.32)",  
    logo: IMAGES.apple 
  },
  { 
    name: "Google Fit",      
    bg: "rgba(92,57,100,0.20)",  
    border: "rgba(92,57,100,0.36)",  
    logo: IMAGES.gfit 
  },
  { 
    name: "Lab Integration", 
    bg: "rgba(92,57,100,0.24)",  
    border: "rgba(92,57,100,0.45)",  
    logo: IMAGES.lab,
    badge: "New" 
  },
  { 
    name: "Telephony",       
    bg: "rgba(92,57,100,0.18)",  
    border: "rgba(92,57,100,0.34)",  
    logo: IMAGES.telephony 
  },
];

const ROW_1 = [...INTEGRATIONS.slice(0, 5), ...INTEGRATIONS.slice(0, 5)]; 
const ROW_2 = [...INTEGRATIONS.slice(4),    ...INTEGRATIONS.slice(4)];

function Tile({ name, bg, border, logo, badge }) {
  return (
    <div
      className="int-tile flex-shrink-0 flex flex-col items-center gap-2.5 rounded-2xl p-4 border w-[110px]"
      style={{ background: bg, borderColor: border }}
    >
      
      <div
        className="int-tile-shadow w-12 h-12 rounded-xl bg-white flex items-center justify-center transition-all duration-300"
        style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
      >
        <img src={logo} alt={name} className="w-7 h-7 object-contain" />
      </div>
    
    </div>
  );
}

function MarqueeStrip({ items, direction = "left" }) {
  return (
    <div className="int-strip overflow-hidden w-full py-1">
      <div className={`flex gap-3 w-max ${direction === "left" ? "int-marquee-l" : "int-marquee-r"}`}>
        {items.map((t, i) => <Tile key={i} {...t} />)}
      </div>
    </div>
  );
}

export default function Integration({ navigate }) {
  

  return (
    <section className="relative py-24 overflow-hidden bg-brand-lilac border-y border-[#e8e0ed]">
      <style>{STYLES}</style>
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%", left: "25%",
          width: 360, height: 300,
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(71,41,76,0.08) 0%, transparent 70%)",
          filter: "blur(48px)",
          animation: "blob-drift 13s ease-in-out infinite reverse",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.045]"
        style={{
          backgroundImage: "radial-gradient(circle, #a06cb0 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="flex items-center gap-3 mb-5 int-fade-up int-d1">
              <div
                className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] px-3 py-1.5 rounded-full"
                style={{ background: "rgba(71,41,76,0.1)", color: "#47294c" }}
              >
                <Zap size={11} strokeWidth={2.5} />
                Integrations
              </div>
            </div>

            <h2
              className="font-display text-[clamp(2.2rem,4vw,3.2rem)] leading-[1.1] text-[#1c0f1f] mb-5 int-fade-up int-d2"
            >
              Works with the tools<br />
              you{" "}
              <em
                className="not-italic"
                style={{
                  background: "linear-gradient(135deg,#47294c 0%,#a06cb0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                already use
              </em>
            </h2>

            <p className="text-[#5c4862] text-[1.0625rem] leading-[1.78] mb-8 max-w-[440px] int-fade-up int-d3">
              Connect SmartCoach360 to your favourite apps and keep everything in sync, no switching, no manual exports.
            </p>

            

            {/* CTA */}
            <div className="int-fade-up int-d4">
              <button
                onClick={() => navigate("/integrations")}
                className="group inline-flex items-center gap-2.5 text-sm font-semibold text-white px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  background: "linear-gradient(135deg,#a06cb0 0%,#47294c 100%)",
                  boxShadow: "0 4px 18px rgba(71,41,76,0.3)",
                }}
              >
                View all integrations
                <ArrowRight
                  size={15}
                  strokeWidth={2.2}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </button>
            </div>
          </div>

          <div className="relative">

            <div
              className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: "linear-gradient(90deg,#faf4fc,transparent)" }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: "linear-gradient(270deg,#faf7fc,transparent)" }}
            />


            <div className="flex flex-col gap-4 py-4">
              <MarqueeStrip items={ROW_1} direction="left" />
              <MarqueeStrip items={ROW_2} direction="right" />
                            <MarqueeStrip items={ROW_1} direction="left" />

            </div>

            <div className="flex justify-center mt-5">
              <span
                className="text-xs font-semibold px-4 py-1.5 rounded-full"
                style={{
                  background: "rgba(71,41,76,0.07)",
                  color: "#8a7490",
                  border: "1px solid rgba(71,41,76,0.1)",
                }}
              >
                15+ integrations
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}