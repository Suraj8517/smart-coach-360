import React from 'react'
const steps = [
  { num: "01", title: "Book a Demo",          desc: "A free 20-minute walkthrough tailored to your business." },
  { num: "02", title: "Set Up Your Platform", desc: "Hands-on onboarding—branding, programs, payments configured." },
  { num: "03", title: "Onboard Your Clients", desc: "Invite clients, assign programmes, and start from day one." },
  { num: "04", title: "Grow Your Business",   desc: "Automations handle ops—you stay focused on coaching." },
];
export default function HowItWorks() {
  return (
    <section className="py-24 bg-brand-lilac">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-14">
          <div>
            <span className="section-tag">How It Works</span>
            <h2 className="font-display text-4xl sm:text-5xl text-brand-black leading-tight mt-3">
              Up and Running in<br />{" "}
              <em
                className="not-italic"
                style={{
                  background: "linear-gradient(135deg,#47294c 0%,#a06cb0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >4 Simple Steps</em>
            </h2>
          </div>
          <div>
            <p className="text-brand-fedora text-lg leading-relaxed">
              From your first demo to fully automated operations—our onboarding team is with you every step of the way.
            </p>
           
          </div>
        </div>
    
        <div className="flex items-start mb-8">
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center border-2 z-10"
                  style={{ background: "#47294c", borderColor: "#47294c" }}
                >
                  <span className="text-xs font-semibold text-brand-lilac">{s.num}</span>
                </div>
                <span className="text-xs font-medium mt-2 text-center w-20 text-brand-fedora-dk">
                  {s.title}
                </span>
              </div>
    
              {i < steps.length - 1 && (
                <div className="flex-1 mt-[22px] rounded-full relative overflow-hidden" style={{ height: "3px", background: "rgba(71,41,76,0.15)" }}>
                  <div
                    className="absolute inset-y-0 left-0 w-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #47294c 0%, #9b6dbd 50%, #47294c 100%)",
                      backgroundSize: "200% 100%",
                      animation: `lineShimmer 2s linear infinite`,
                      animationDelay: `${i * 0.4}s`,
                    }}
                  />
                  {/* Moving dot */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                    style={{
                      background: "#c49ad6",
                      animation: `dotTravel 2s linear infinite`,
                      animationDelay: `${i * 0.4}s`,
                    }}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
    
        {/* Step cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div
              key={i}
              className="bg-brand-lilac-100 rounded-2xl border border-brand-silver-xl p-5 flex flex-col gap-3 hover:border-brand-boss/40 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-brand-lilac font-display text-sm font-semibold flex-shrink-0"
                style={{ background: "#47294c" }}
              >
                {s.num}
              </div>
              <h3 className="font-display text-base text-brand-black">{s.title}</h3>
              <p className="text-brand-fedora text-sm leading-relaxed flex-1">{s.desc}</p>
            </div>
          ))}
        </div>
    
        <style>{`
          @keyframes lineShimmer {
            0%   { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
          @keyframes dotTravel {
            0%   { left: 0%;   opacity: 0; }
            5%   { opacity: 1; }
            95%  { opacity: 1; }
            100% { left: 100%; opacity: 0; }
          }
        `}</style>
      </div>
    </section>
  )
}
