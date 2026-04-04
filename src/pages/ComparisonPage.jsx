import { CTASection, SectionHeader, CheckIcon } from "../components/UI";
import { IMAGES } from "../images";
import { Dumbbell, MessageCircle, Heart, FlaskConical, Zap, Target, Rocket, Lock } from "lucide-react";

const DARK_BG = { backgroundColor: "#2e1a32" };
const MID_BG  = { backgroundColor: "#47294c" };

const rows = [
  {f:"Custom Workout Programs",sc:true,tc:true,mb:false,pt:true},{f:"Nutrition & Macro Tracking",sc:true,tc:false,mb:false,pt:true},
  {f:"In-app Messaging",sc:true,tc:true,mb:false,pt:true},{f:"Automated Messaging",sc:true,tc:false,mb:false,pt:false},
  {f:"Payment Processing",sc:true,tc:true,mb:true,pt:true},{f:"Session Packs & Discounts",sc:true,tc:true,mb:true,pt:true},
  {f:"Multi-coach Management",sc:true,tc:false,mb:true,pt:false},{f:"Multi-branch Support",sc:true,tc:false,mb:true,pt:false},
  {f:"Auto Lead Allocation",sc:true,tc:false,mb:false,pt:false},{f:"Role & Access Management",sc:true,tc:false,mb:true,pt:false},
  {f:"Client Challenges & Gamification",sc:true,tc:false,mb:false,pt:false},{f:"Female Health Tracker",sc:true,tc:false,mb:false,pt:false},
  {f:"Apple Health / Google Fit Sync",sc:true,tc:false,mb:false,pt:true},{f:"Lab Integration",sc:true,tc:false,mb:false,pt:false},
  {f:"WhatsApp Integration",sc:true,tc:false,mb:false,pt:false},{f:"SSO for Enterprises",sc:true,tc:false,mb:true,pt:false},
  {f:"Dedicated Success Manager",sc:true,tc:false,mb:false,pt:false},{f:"Personalised Onboarding",sc:true,tc:false,mb:false,pt:false},
  {f:"Mobile App (iOS & Android)",sc:true,tc:true,mb:true,pt:true},
];

const diff = [
  { icon: Dumbbell,       t:"Workout + Nutrition in One",     d:"The only platform combining workout programming and nutrition tracking in a single, unified coaching experience." },
  { icon: MessageCircle,  t:"Native WhatsApp Automation",      d:"Reach clients where they already are with native WhatsApp automation—no third-party tools, no workarounds." },
  { icon: Heart,          t:"Female Health Tracker",           d:"Holistic coaching made possible with a female health tracker no other coaching platform offers." },
  { icon: FlaskConical,   t:"Lab Integration",                 d:"For coaches who work with clinical health data, lab results now live alongside every client profile." },
  { icon: Zap,            t:"Automated Lead Allocation",       d:"New enquiries are assigned to the right coach automatically. Your business keeps moving without you." },
  { icon: Target,         t:"Dedicated Success Manager",       d:"A dedicated CSM focused on your growth—not a ticket queue. Real support from someone who knows your business." },
  { icon: Rocket,         t:"Personalised Onboarding",         d:"Guided setup with a specialist ensures you're live and confident from day one—never left to figure it out alone." },
  { icon: Lock,           t:"Enterprise-grade Security",       d:"SSO and role-based access control that scales seamlessly from solo coaches to national organisations." },
];

const vsArr = [
  { name:"TrueCoach",     verdict:"Great for workout delivery. Falls short on nutrition tracking, automated messaging, multi-coach management, and business automation.",     score:rows.filter(r=>r.tc).length },
  { name:"Mindbody",      verdict:"Strong for class bookings and memberships. Lacks nutrition tracking, automated client engagement, and one-on-one coaching workflows.",      score:rows.filter(r=>r.mb).length },
  { name:"PTDistinction", verdict:"Capable workout and nutrition programming tool. Missing multi-branch management, WhatsApp integration, auto lead allocation, and enterprise security.", score:rows.filter(r=>r.pt).length },
];

const scScore = rows.filter(r => r.sc).length;

export default function ComparisonPage({ navigate }) {
  return (
    <div className="pt-16">

      {/* ── HERO ── */}
      <section
        className="py-24 border-b h-[80vh] flex items-center"
        style={{ backgroundColor: "#1c0f1f", borderColor: "#ede8f0" }}
      >
        <div className="max-w-3xl mx-auto px-4 text-center ">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 bg-[#816f7d]"
            style={{  color: "#47294c" }}
          >
            Comparison
          </span>
          <h1 className="font-display text-5xl sm:text-6xl mb-5 leading-tight" style={{ color: "#faf4fc" }}>
            SmartCoach360<br />
            <span style={{ color: "#47294c" }}>vs the Rest</span>
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#7b6880" }}>
            Many coaching platforms excel in one area but leave critical gaps elsewhere. SmartCoach360 was designed as a complete, end-to-end platform—coaching delivery and business operations built to work together.
          </p>
         
        </div>
      </section>

      {/* ── FEATURE TABLE ── */}
      <section className="py-20" style={{ backgroundColor: "#f7f3f8" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3" style={{ backgroundColor: "rgba(71,41,76,0.08)", color: "#47294c" }}>Feature Comparison</span>
            <h2 className="font-display text-4xl" style={{ color: "#1c0f1f" }}>See Every Feature Side by Side</h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border shadow-lg" style={{ borderColor: "#ede8f0" }}>
            <table className="w-full min-w-[580px]" style={{ backgroundColor: "#fff" }}>
              <thead>
                <tr>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-widest w-2/5" style={{ backgroundColor: "#f7f3f8", color: "#7b6880" }}>Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-white" style={{ backgroundColor: "#47294c" }}>
                    SmartCoach360
                  </th>
                  {["TrueCoach","Mindbody","PTDistinction"].map(h => (
                    <th key={h} className="px-6 py-4 text-center text-xs font-bold uppercase tracking-widest" style={{ backgroundColor: "#f7f3f8", color: "#7b6880" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => {
                  const exclusive = row.sc && !row.tc && !row.mb && !row.pt;
                  return (
                    <tr
                      key={i}
                      className="border-b transition-colors"
                      style={{ borderColor: "#f0eaf4", backgroundColor: i % 2 !== 0 ? "#faf8fb" : "#fff" }}
                    >
                      <td className="px-6 py-3.5 text-sm font-medium" style={{ color: "#3a2540" }}>
                        <span className="flex items-center gap-2.5">
                          {exclusive && (
                            <span
                              className="text-xs font-bold px-1.5 py-0.5 rounded-md flex-shrink-0"
                              style={{ backgroundColor: "rgba(71,41,76,0.1)", color: "#47294c" }}
                            >
                              Only us
                            </span>
                          )}
                          {row.f}
                        </span>
                      </td>
                      {[row.sc, row.tc, row.mb, row.pt].map((v, j) => (
                        <td
                          key={j}
                          className="px-6 py-3.5 text-center"
                          style={j === 0 ? { backgroundColor: i % 2 !== 0 ? "rgba(71,41,76,0.06)" : "rgba(71,41,76,0.04)" } : {}}
                        >
                          {v
                            ? <span className="inline-flex items-center justify-center w-7 h-7 rounded-full" style={{ backgroundColor: j === 0 ? "#47294c" : "#eee8f2" }}>
                                <CheckIcon className={`w-3.5 h-3.5 ${j === 0 ? "text-white" : "text-brand-boss"}`} />
                              </span>
                            : <span className="inline-flex items-center justify-center w-7 h-7 rounded-full text-sm" style={{ backgroundColor: "#f5f5f5", color: "#ccc" }}>—</span>}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr style={{ backgroundColor: "#47294c" }}>
                  <td className="px-6 py-4 text-sm font-bold" style={{ color: "rgba(255,255,255,0.6)" }}>Total Features</td>
                  {[scScore, rows.filter(r=>r.tc).length, rows.filter(r=>r.mb).length, rows.filter(r=>r.pt).length].map((n, j) => (
                    <td key={j} className="px-6 py-4 text-center">
                      <span className={`font-display ${j === 0 ? "text-2xl text-white" : "text-lg"}`} style={{ color: j === 0 ? "#fff" : "rgba(255,255,255,0.45)" }}>
                        {n}/{rows.length}
                      </span>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="text-xs mt-3 flex items-center gap-1.5" style={{ color: "#a891b0" }}>
            <span className="inline-block px-1.5 py-0.5 rounded text-xs font-bold" style={{ backgroundColor: "rgba(71,41,76,0.1)", color: "#47294c" }}>Only us</span>
            marks features exclusive to SmartCoach360
          </p>
        </div>
      </section>

      {/* ── 8 REASONS ── */}
      <section className="py-24" style={{ backgroundColor: "#f7f3f8" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: "rgba(71,41,76,0.1)", color: "#47294c" }}
            >
              Why SmartCoach360
            </span>
            <h2 className="font-display text-4xl sm:text-5xl" style={{ color: "#1c0f1f" }}>
              8 Reasons Coaches<br />Switch to SmartCoach360
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-3xl overflow-hidden border" style={{ borderColor: "#ddd4e4", backgroundColor: "#ddd4e4" }}>
            {diff.map((d, i) => (
              <div
                key={i}
                className="group relative p-7 flex flex-col gap-4 transition-all duration-300"
                style={{ backgroundColor: "#fff" }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "#faf6fc"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "#fff"}
              >
                {/* Ghost number */}
                <div
                  className="absolute top-4 right-5 font-display text-5xl font-bold leading-none select-none pointer-events-none"
                  style={{ color: "rgba(71,41,76,0.05)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm"
                  style={{ backgroundColor: "rgba(71,41,76,0.08)", border: "1px solid rgba(71,41,76,0.12)" }}
                >
                  <d.icon size={22} color="#47294c" strokeWidth={1.75} />
                </div>

                <div>
                  <h3
                    className="font-semibold text-sm mb-2 leading-snug"
                    style={{ color: "#1c0f1f" }}
                  >
                    {d.t}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "#7b6880" }}
                  >
                    {d.d}
                  </p>
                </div>

                {/* Bottom accent line on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 group-hover:opacity-100 opacity-0"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(71,41,76,0.35), transparent)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HEAD-TO-HEAD ── */}
      <section className="py-20" style={{ backgroundColor: "#1c0f1f" }}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: "rgba(255,255,255,0.07)", color: "#faf4fc" }}
            >
              Head-to-Head
            </span>
            <h2 className="font-display text-4xl sm:text-5xl" style={{ color: "#f0e8f4" }}>Deep-Dive Breakdowns</h2>
          </div>

          <div className="space-y-4">
            {vsArr.map((comp, i) => (
              <div
                key={i}
                className="rounded-3xl p-8 border transition-all duration-300 hover:border-opacity-60"
                style={{ backgroundColor: "rgba(71,41,76,0.2)", borderColor: "rgba(120,80,130,0.25)" }}
              >
                <div className="flex flex-wrap items-center justify-between gap-6">
                  {/* Left: name + verdict */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-xl mb-3" style={{ color: "#e8d9ee" }}>
                      SmartCoach360 vs <span style={{ color: "#c4a8cc" }}>{comp.name}</span>
                    </h3>
                    <p className="text-sm leading-relaxed max-w-xl" style={{ color: "#9b87a4" }}>
                      {comp.verdict}
                    </p>
                  </div>

                  {/* Right: score pills */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <div
                      className="rounded-2xl px-5 py-4 text-center border"
                      style={{ backgroundColor: "rgba(71,41,76,0.3)", borderColor: "rgba(120,80,130,0.3)" }}
                    >
                      <p className="text-xs mb-1" style={{ color: "#7b6880" }}>{comp.name}</p>
                      <p className="font-display text-2xl" style={{ color: "#7b6880" }}>{comp.score}/{rows.length}</p>
                    </div>
                    <div
                      className="text-center text-xs font-bold uppercase tracking-widest"
                      style={{ color: "#7b6880" }}
                    >
                      vs
                    </div>
                    <div
                      className="rounded-2xl px-5 py-4 text-center"
                      style={{ backgroundColor: "#47294c", border: "1px solid rgba(200,170,212,0.2)" }}
                    >
                      <p className="text-xs mb-1" style={{ color: "#c4a8cc" }}>SmartCoach360</p>
                      <p className="font-display text-2xl" style={{ color: "#fff" }}>{scScore}/{rows.length}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection navigate={navigate} />
    </div>
  );
}