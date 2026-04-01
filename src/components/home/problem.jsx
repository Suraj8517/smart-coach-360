import React from 'react'
const problems = [
  "Client details spread across email, spreadsheets, and WhatsApp—follow-ups constantly missed.",
  "Hours every week chasing invoices and manually tracking session packs instead of coaching.",
  "Scheduling in one app, messaging in another, nutrition in a third—the constant switching drains you.",
  "Clients drift and cancel because check-ins and progress tracking aren't consistent.",
  "Growth stalls—not from lack of demand, but because admin has eaten your capacity.",
];
export default function Problem() {
  return (
    <section className="py-28 relative overflow-hidden bg-brand-lilac">

  <div className="relative z-10 2xl:max-w-7xl max-w-6xl mx-auto px-5 sm:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <span className="section-tag mb-6">
          The Problem We Solve
        </span>
        <h2 className="font-display text-4xl sm:text-5xl text-brand-black leading-tight mb-6">
          Does Any of This Sound Familiar?
        </h2>
        <p className="text-brand-fedora text-lg leading-relaxed mb-10">
          You entered coaching to drive transformation—not to manage a patchwork of tools. As your client base grows, these challenges compound.
        </p>
        <button onClick={() => navigate("usecases")} className="btn-primary group">
          See How We Solve It
          <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="space-y-3">
        {problems.map((p, i) => (
          <div
            key={i}
            className="flex items-start gap-4 rounded-2xl px-5 py-4 border border-brand-silver-xl hover:border-brand-lilac-300 hover:shadow-sm transition-all duration-200 bg-brand-lilac"
          >
            <div
              className="w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center"
              style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}
            >
              <svg className="w-4 h-4 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <p className="text-brand-fedora-dk text-sm leading-relaxed">{p}</p>
          </div>
        ))}

        {/* Resolution badge */}
        <div
          className="flex items-center gap-3 rounded-2xl px-5 py-4 mt-2 border"
          style={{
            background: "rgba(71,41,76,0.06)",
            borderColor: "rgba(71,41,76,0.18)",
          }}
        >
          <div
            className="w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center"
            style={{ background: "rgba(71,41,76,0.12)", border: "1px solid rgba(71,41,76,0.25)" }}
          >
            <svg className="w-4 h-4 text-brand-boss" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-brand-boss text-sm font-semibold">SmartCoach360 removes all of the above</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
