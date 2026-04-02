import React from 'react'
import { IMAGES } from '../../images';
export default function Integration() {
  return (

    <section className="py-20 bg-brand-lilac border-y border-brand-silver-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
    
          {/* LEFT — heading */}
          <div>
            <span className="section-tag">Integrations</span>
            <h2 className="font-display text-4xl sm:text-5xl text-brand-black leading-tight mt-3 mb-5">
              Works with the tools<br />
              you{" "}
              <em
                className="not-italic"
                style={{
                  background: "linear-gradient(135deg, #47294c 0%, #9b6dbd 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                already use
              </em>
            </h2>
            <p className="text-brand-fedora text-lg leading-relaxed mb-8">
              Connect SmartCoach360 to your favourite apps and keep everything in sync — no switching, no manual exports.
            </p>
            <div className="flex items-baseline gap-2 mb-10">
              <span className="font-display text-4xl text-brand-boss">15+</span>
              <span className="text-sm text-brand-fedora">native integrations</span>
            </div>
            <button
              onClick={() => navigate("integrations")}
              className="btn-primary"
            >
              View all integrations
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
    
          {/* RIGHT — 3×3 grid */}
         <div>
  <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
    {[
      { name: "WhatsApp",        bg: "rgba(37,211,102,0.10)",  border: "rgba(37,211,102,0.2)",  logo: IMAGES.whatsapp },
      { name: "Zoom",            bg: "rgba(43,141,255,0.10)",  border: "rgba(43,141,255,0.2)",  logo: IMAGES.zoom },
      { name: "MS Teams",        bg: "rgba(0,120,212,0.10)",   border: "rgba(0,120,212,0.2)",   logo: IMAGES.teams },
      { name: "Google Sheets",   bg: "rgba(52,168,83,0.10)",   border: "rgba(52,168,83,0.2)",   logo: IMAGES.gsheets },
      { name: "Google Forms",    bg: "rgba(66,133,244,0.10)",  border: "rgba(66,133,244,0.2)",  logo: IMAGES.gforms },
      { name: "Apple Health",    bg: "rgba(255,61,0,0.08)",    border: "rgba(255,61,0,0.18)",   logo: IMAGES.apple },
      { name: "Google Fit",      bg: "rgba(66,133,244,0.10)",  border: "rgba(66,133,244,0.2)",  logo: IMAGES.gfit },
      { name: "Lab Integration", bg: "rgba(71,41,76,0.08)",    border: "rgba(71,41,76,0.2)",    logo: IMAGES.lab, badge: "New" },
      { name: "Telephony",       bg: "rgba(255,171,0,0.10)",   border: "rgba(255,171,0,0.22)",  logo: IMAGES.telephony },
    ].map((t, i) => (
      <div
        key={i}
        className="relative flex flex-col items-center gap-2 rounded-2xl p-4 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
        style={{
          background: t.bg,
          borderColor: t.border,
        }}
      >
        {/* Badge */}
        {t.badge && (
          <span
            className="absolute -top-2 -right-2 text-[10px] px-2 py-0.5 rounded-full font-semibold"
            style={{
              background: "#47294c",
              color: "#e8d5f5",
            }}
          >
            {t.badge}
          </span>
        )}

        {/* Icon */}
        <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:scale-105 transition">
          <img src={t.logo} alt={t.name} className="w-6 h-6 object-contain" />
        </div>

        {/* Label */}
        <span className="text-xs font-medium text-center leading-tight text-brand-fedora-dk">
          {t.name}
        </span>
      </div>
    ))}
  </div>

  {/* Footer text */}
  <p className="text-sm text-center text-brand-fedora-dk mt-6 opacity-70">
    and many more....
  </p>
</div>
    
        </div>
      </div>
    </section>
  )
}
