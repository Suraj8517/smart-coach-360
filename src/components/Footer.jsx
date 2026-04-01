const LINKS = {
  Product:   ["Features", "Integrations", "Pricing", "Mobile App", "Security"],
  Solutions: ["Personal Trainers", "Gym Owners", "Nutrition Coaches", "Enterprise"],
  Resources: ["Case Studies", "Blog", "Help Centre", "Webinars"],
  Company:   ["About", "Careers", "Contact", "Privacy", "Terms"],
};

export default function Footer({ navigate }) {
  return (
    <footer style={{ backgroundColor: "#2e1a32" }} className="text-brand-silver">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          <div className="lg:col-span-1">
            <button onClick={() => navigate("home")} className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-brand-boss-mid flex items-center justify-center">
                <svg className="w-5 h-5 text-brand-lilac" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <span className="font-display text-lg text-brand-lilac-100">
                SmartCoach<span className="text-brand-lilac-300">360</span>
              </span>
            </button>
            <p className="text-sm leading-relaxed text-brand-fedora-lt mb-6">
              The all-in-one coaching platform built for fitness professionals who want to scale.
            </p>
            <div className="flex gap-2">
              {["𝕏", "in", "📸"].map((s, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-xl bg-brand-boss/60 hover:bg-brand-boss-mid flex items-center justify-center text-xs text-brand-silver hover:text-brand-lilac transition-all">
                  {s}
                </a>
              ))}
            </div>
          </div>
          {Object.entries(LINKS).map(([cat, links]) => (
            <div key={cat}>
              <h4 className="text-brand-lilac-100 font-semibold text-sm mb-4">{cat}</h4>
              <ul className="space-y-3">
                {links.map(l => (
                  <li key={l}>
                    <a href="#" className="text-sm text-brand-fedora-lt hover:text-brand-lilac-100 transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-brand-boss/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-fedora">© {new Date().getFullYear()} SmartCoach360. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs text-brand-fedora">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
