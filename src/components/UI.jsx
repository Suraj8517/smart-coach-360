export function CTASection({ navigate }) {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-[2.5rem] px-8 py-20 text-center" style={{ backgroundColor: "#2e1a32" }}>
          <div
            className="absolute inset-0 opacity-15"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1400&q=60&fit=crop)", backgroundSize: "cover", backgroundPosition: "center" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(46,26,50,0.9) 0%, rgba(71,41,76,0.75) 100%)" }} />
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: "#816f7d" }} />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: "#c3b9b7" }} />
          <div className="relative z-10">
            <span className="section-tag !bg-brand-boss/60 !text-brand-lilac-200 mb-6">Get Started Today</span>
            <h2 className="font-display text-4xl sm:text-5xl text-brand-lilac mb-5 leading-tight">
              Ready to Change the Way<br className="hidden sm:block" /> You Coach?
            </h2>
            <p className="text-brand-silver text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Start with a complimentary 20-minute demo tailored to your business. No obligation, no hard sell—just a clear look at how SmartCoach360 fits your workflow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-cream font-bold text-base shadow-xl">
                Book Your Free Demo
              </button>
              <button className="inline-flex items-center gap-2 text-brand-lilac-100 font-semibold px-7 py-3.5 rounded-2xl border-2 border-brand-boss-mid hover:bg-brand-boss/50 transition-all">
                Explore the Platform
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ tag, title, subtitle, light = false }) {
  return (
    <div className="text-center mb-14">
      <span className={`section-tag ${light ? "!text-brand-lilac-200" : ""}`} style={light ? { backgroundColor: "rgba(71,41,76,0.5)", color: "#e8d9ee" } : {}}>
        {tag}
      </span>
      <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-600 mb-5 leading-tight ${light ? "text-brand-lilac" : "text-brand-black"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl mx-auto leading-relaxed text-lg ${light ? "text-brand-silver" : "text-brand-fedora"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function CheckIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
    </svg>
  );
}
