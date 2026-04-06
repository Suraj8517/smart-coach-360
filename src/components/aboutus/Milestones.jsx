import { Rocket, Users, UserCheck, Zap, Plug, Smartphone, Building2 } from "lucide-react";

const milestones = [
  { icon: Rocket, label: "Platform Launch", ach: "SmartCoach360 goes live for fitness professionals worldwide" },
  { icon: Users, label: "10,000+ Coaches", ach: "Coaches and trainers across the globe using the platform daily" },
  { icon: UserCheck, label: "500,000+ Clients Managed", ach: "Half a million client success stories and counting" },
  { icon: Zap, label: "40+ Features Released", ach: "Built entirely around real coaching workflows and feedback" },
  { icon: Plug, label: "15+ Integrations", ach: "Connecting every corner of the fitness tech ecosystem" },
  { icon: Smartphone, label: "Mobile App Launch", ach: "Full iOS and Android apps for coaches and clients" },
  { icon: Building2, label: "Enterprise Tier Released", ach: "Multi-branch, SSO, and dedicated support for large organisations" },
];

const accent = [
  "from-[#3d1a45] to-[#2a1130]",
  "from-[#3a1842] to-[#28102e]",
  "from-[#38174010] to-[#28102e]",
];

export const Milestones = () => (
  <section className="bg-[#faf7fc] py-24">
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;600&family=DM+Sans:wght@300;400;500&display=swap');
      .ms-card { transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease; }
      .ms-card:hover { transform: translateY(-4px); border-color: rgba(160,108,176,0.35) !important; box-shadow: 0 16px 48px rgba(46,26,50,0.13), 0 2px 8px rgba(46,26,50,0.07) !important; }
      .ms-card:hover .ms-icon-wrap { background: rgba(130,60,148,0.18) !important; }
      .ms-card.featured { grid-column: span 2; }
      .ms-serif { font-family: 'Cormorant Garamond', serif; }
      .ms-sans { font-family: 'DM Sans', sans-serif; }
      @media (max-width: 640px) { .ms-card.featured { grid-column: span 1; } }
    `}</style>

    <div className="max-w-[960px] mx-auto px-6 ms-sans">

      {/* Header */}
      <div className="text-center mb-14">
        <span className="inline-flex items-center gap-2 text-[0.63rem] font-medium uppercase tracking-[0.2em] px-4 py-1.5 rounded-full bg-[rgba(100,50,120,0.08)] text-[#7b4e87] border border-[rgba(160,108,176,0.22)]">
          <span className="w-[5px] h-[5px] rounded-full bg-[#a06cb0]" />
          Our Journey
        </span>
        <h2 className="ms-serif text-[clamp(2rem,3.5vw,2.8rem)] font-light text-[#1c0f1f] mt-4 leading-[1.1] tracking-[-0.01em]">
          Milestones <em style={{ fontStyle:"italic", background:"linear-gradient(135deg,#b87fd0,#7b4e87)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>So Far</em>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
        {milestones.map(({ icon: Icon, label, ach }, i) => {
          const featured = i === 0;
          return (
            <div
              key={label}
              className={`ms-card relative flex flex-col gap-4 p-6 rounded-2xl bg-white border border-[rgba(160,108,176,0.15)] overflow-hidden${featured ? " ms-card featured" : ""}`}
              style={{ boxShadow: "0 2px 16px rgba(46,26,50,0.06), 0 1px 3px rgba(46,26,50,0.04)" }}
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(160,108,176,0.10) 0%, transparent 70%)" }} />

              <div className="flex items-start justify-between gap-3">
                <div
                  className="ms-icon-wrap flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
                  style={{ background: "rgba(130,60,148,0.10)", transition: "background 0.28s ease" }}
                >
                  <Icon size={18} strokeWidth={1.6} color="#9a5eb0" />
                </div>
                <span className="text-[0.58rem] font-medium uppercase tracking-[0.16em] text-[rgba(140,100,160,0.6)] mt-1 text-right leading-tight">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div>
                <p className="ms-serif text-[1.25rem] font-semibold text-[#2e1a32] leading-[1.2] mb-2">{label}</p>
                <p className="text-[0.84rem] font-light leading-[1.72] text-[#8a7490]">{ach}</p>
              </div>

              <div className="absolute bottom-0 left-8 right-8 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(160,108,176,0.25), transparent)" }} />
            </div>
          );
        })}
      </div>
    </div>
  </section>
);