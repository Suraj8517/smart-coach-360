import { Target, Zap, RefreshCw, ShieldCheck, Handshake } from "lucide-react";

const valuesData = [
  { Icon: Target,     title: "Coach-first Thinking",       text: "Every feature starts with one question: does this make life genuinely easier for a coach or their clients? If not, we go back to the drawing board.", n: "01" },
  { Icon: Zap,        title: "Simplicity at Scale",         text: "Powerful for large organisations with hundreds of coaches. Simple enough for a solo trainer to pick up on day one.", n: "02" },
  { Icon: RefreshCw,  title: "Continuous Improvement",      text: "We don't just ship features and move on. We listen, take feedback seriously, and keep improving based on real-world use.", n: "03" },
  { Icon: ShieldCheck, title: "Data Security",              text: "Our customers trust us with their most sensitive business and client data. Every architecture decision, every access control, every data policy is built around that trust.", n: "04" },
  { Icon: Handshake,  title: "Partnership, Not Just Software", text: "We're not just a tool in your tech stack. We're invested in the growth of every coaching business on our platform. Our onboarding, support, and roadmap reflect that long-term commitment.", n: "05" },
];

export const Values = () => (
  <section className="bg-[#faf7fc] py-24 relative overflow-hidden">
    <div className="absolute top-[-1px] left-0 right-0 h-px"
      style={{ background: "linear-gradient(90deg,transparent 0%,#e8e0ed 30%,#e8e0ed 70%,transparent 100%)" }} />

    <div className="max-w-[1200px] mx-auto px-12 max-sm:px-5">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-16">
        <div>
          <span className="inline-block text-[0.67rem] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-4 bg-[#f0eaf3] text-[#7b4e87] border border-[#ddd4e4]">
            What We Stand For
          </span>
          <h2 className="sc-fd text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.1] text-[#1c0f1f]">
            Five principles that <em className="italic text-[#47294c]">shape</em><br />everything we build
          </h2>
        </div>
        <p className="sc-fb text-[0.9375rem] leading-[1.75] text-[#8a7490] max-w-[380px]">
          From the first line of code to the support call, every decision at SmartCoach360 comes back to these values.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {valuesData.map(({ Icon, title, text, n }, i) => {
          const isLast = i === valuesData.length - 1 && valuesData.length % 2 !== 0;
          return (
            <div key={n} className={`bv-card relative rounded-[20px] p-8 bg-white border border-[#e8e0ed] overflow-hidden transition-all duration-300${isLast ? " md:col-span-2 md:max-w-[50%] md:mx-auto md:w-full" : ""}`}>
              <div className="bv-accent" />
              <div className="absolute top-0 right-0 w-20 h-20 rounded-[0_20px_0_80px] pointer-events-none"
                style={{ background: "linear-gradient(135deg,transparent 50%,rgba(160,108,176,0.06) 50%)" }} />

              <div className="w-12 h-12 rounded-[14px] mb-5 flex items-center justify-center bg-[#f0eaf3] border border-[#e0d4e8] relative z-[1]">
                <Icon size={20} strokeWidth={1.75} className="text-[#7b4e87]" />
              </div>

              <h3 className="sc-fd text-[1.125rem] text-[#1c0f1f] mb-3 leading-[1.25] relative z-[1]">{title}</h3>
              <p className="sc-fb text-[0.8125rem] leading-[1.72] text-[#8a7490] relative z-[1]">{text}</p>
              <span className="absolute bottom-6 right-7 sc-fd text-[3.5rem] leading-none text-[rgba(160,108,176,0.08)] pointer-events-none select-none italic">{n}</span>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);