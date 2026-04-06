const url =import.meta.env.VITE_CALENDLY_LINK;
export const CTA = ({onOpenContactForm}) => (
  <section className="relative overflow-hidden bg-[#1c0f1f] py-24">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[360px] pointer-events-none"
      style={{ background: "radial-gradient(ellipse at 50% 0%,rgba(71,41,76,.55) 0%,transparent 70%)", filter: "blur(52px)" }} />
    <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
      style={{ backgroundImage: "linear-gradient(rgba(200,160,220,1) 1px,transparent 1px),linear-gradient(90deg,rgba(200,160,220,1) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />

    <div className="relative z-10 text-center max-w-[760px] mx-auto px-6">
      <span className="inline-block text-[0.67rem] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full bg-[rgba(71,41,76,0.6)] text-[#c9a8d6] border border-[rgba(129,69,140,0.35)] mb-5">
        Our Commitment
      </span>
      <h2 className="sc-fd text-[clamp(2rem,4vw,3rem)] leading-[1.1] text-[#faf4fc] mb-5">
        Building the Future of<br />
        <span className="text-brand-lilac-300">Fitness Coaching</span>
      </h2>
      <p className="sc-fb text-[1rem] leading-[1.75] text-[#8a7490] mb-10">
        Every fitness coach—whether you're training your first client or managing a team of fifty—deserves enterprise-quality tools that are genuinely easy to use. SmartCoach360 will always be shaped by the people who use it.
      </p>
      <div className="flex flex-wrap gap-3.5 justify-center">
        <button onClick={() => window.open(url, "_blank")} className="px-7 py-3.5 rounded-xl bg-[#a06cb0] text-white text-[0.875rem] font-semibold border-none cursor-pointer transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
          style={{ boxShadow: "0 4px 20px rgba(160,108,176,.35)" }}>
          Book a Demo
        </button>
        <button onClick={onOpenContactForm} className="px-7 py-3.5 rounded-xl bg-transparent text-[#c9a8d6] text-[0.875rem] font-semibold border border-white/15 cursor-pointer transition-all duration-200 hover:border-[rgba(160,108,176,0.5)] hover:-translate-y-0.5">
          Talk to Our Team
        </button>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px"
      style={{ background: "linear-gradient(90deg,transparent,rgba(162,122,175,.2),transparent)" }} />
  </section>
);