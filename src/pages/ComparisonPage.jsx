import { CTASection, SectionHeader, CheckIcon } from "../components/UI";
import { IMAGES } from "../images";

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
  {icon:"🏆",t:"Workout + Nutrition in One",d:"The only platform with both workout programming AND nutrition tracking built together."},
  {icon:"💬",t:"Native WhatsApp Automation",d:"The only coaching CRM with native WhatsApp automation—reach clients where they already are."},
  {icon:"💜",t:"Female Health Tracker",d:"A female health tracker no other coaching platform offers for holistic coaching."},
  {icon:"🧬",t:"Lab Integration",d:"Lab integration for coaches who work with clinical health data."},
  {icon:"⚡",t:"Automated Lead Allocation",d:"Fully automated lead allocation—your business keeps moving without you."},
  {icon:"🎯",t:"Dedicated Success Manager",d:"A dedicated CSM focused on your growth, not just a support ticket system."},
  {icon:"🚀",t:"Personalised Onboarding",d:"Guided setup with a specialist—you're never left to figure it out alone."},
  {icon:"🔐",t:"Enterprise-grade Security",d:"SSO and role-based access scaling from solo coaches to national organisations."},
];

const vsArr = [
  {name:"TrueCoach",good:"Workout delivery",bad:"Nutrition tracking, automated messaging, multi-coach management, business automation",score:rows.filter(r=>r.tc).length},
  {name:"Mindbody",good:"Class bookings & memberships",bad:"Nutrition tracking, automated engagement, one-on-one coaching workflows",score:rows.filter(r=>r.mb).length},
  {name:"PTDistinction",good:"Workout & nutrition programming",bad:"Multi-branch management, WhatsApp integration, auto lead allocation, enterprise security",score:rows.filter(r=>r.pt).length},
];

export default function ComparisonPage({ navigate }) {
  return (
    <div className="pt-16">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage:`url(${IMAGES.yoga})`, backgroundSize:"cover", backgroundPosition:"center" }} />
        <div className="absolute inset-0" style={{ background:"linear-gradient(135deg,rgba(28,15,31,0.93) 0%,rgba(71,41,76,0.75) 100%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <span className="section-tag" style={{ backgroundColor:"rgba(71,41,76,0.5)", color:"#e8d9ee" }}>Comparison</span>
          <h1 className="font-display text-5xl sm:text-6xl text-brand-lilac mb-5 leading-tight">SmartCoach360 vs the Rest</h1>
          <p className="text-brand-silver text-lg leading-relaxed">Many coaching platforms excel in one area but leave critical gaps elsewhere. SmartCoach360 was designed as a complete, end-to-end platform—coaching delivery and business operations built to work together.</p>
        </div>
      </section>

      {/* Feature table */}
      <section className="py-20 bg-brand-lilac">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader tag="Feature Comparison" title="See Every Feature Side by Side" />
          <div className="overflow-x-auto rounded-3xl border border-brand-silver-xl shadow-lg">
            <table className="w-full bg-brand-lilac min-w-[580px]">
              <thead>
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-brand-fedora-dk bg-brand-lilac-100 rounded-tl-3xl w-2/5">Feature</th>
                  <th className="p-4 text-center font-bold text-brand-lilac text-sm" style={MID_BG}>SmartCoach360</th>
                  {["TrueCoach","Mindbody","PTDistinction"].map(h=>(
                    <th key={h} className="p-4 text-center text-sm font-semibold text-brand-fedora-dk bg-brand-lilac-100">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row,i)=>{
                  const exclusive = row.sc && !row.tc && !row.mb && !row.pt;
                  return (
                    <tr key={i} className={`border-b border-brand-silver-xl hover:bg-brand-lilac-100/50 transition-colors ${i%2!==0?"bg-brand-lilac-100/40":""}`}>
                      <td className="p-4 text-sm text-brand-fedora-dk font-medium">
                        <span className="flex items-center gap-2">
                          {exclusive && <span className="w-1.5 h-1.5 rounded-full bg-brand-boss flex-shrink-0" title="SC360 exclusive"/>}
                          {row.f}
                        </span>
                      </td>
                      {[row.sc,row.tc,row.mb,row.pt].map((v,j)=>(
                        <td key={j} className={`p-4 text-center ${j===0?"bg-brand-lilac-100":""}`}>
                          {v
                            ? <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-brand-lilac-200"><CheckIcon className="w-4 h-4 text-brand-boss"/></span>
                            : <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-brand-silver-xl text-brand-silver text-base">—</span>}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr style={MID_BG} className="rounded-b-3xl">
                  <td className="p-4 text-sm font-bold text-brand-lilac-200">Total Features</td>
                  {[rows.filter(r=>r.sc).length,rows.filter(r=>r.tc).length,rows.filter(r=>r.mb).length,rows.filter(r=>r.pt).length].map((n,j)=>(
                    <td key={j} className={`p-4 text-center font-bold ${j===0?"text-brand-lilac text-2xl font-display":"text-brand-silver"}`}>{n}/{rows.length}</td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="text-xs text-brand-fedora mt-3 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-boss"/>
            Features with a dot are exclusive to SmartCoach360
          </p>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-20 bg-brand-lilac-100 border-y border-brand-silver-xl">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader tag="Why SmartCoach360" title="8 Reasons Coaches Switch to SmartCoach360" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {diff.map((d,i)=>(
              <div key={i} className="card p-6">
                <div className="text-3xl mb-4">{d.icon}</div>
                <h3 className="font-semibold text-brand-black text-sm mb-2">{d.t}</h3>
                <p className="text-brand-fedora text-xs leading-relaxed">{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Head-to-head */}
      <section className="py-20" style={DARK_BG}>
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeader tag="Head-to-Head" title="Deep-Dive Breakdowns" light />
          <div className="space-y-5">
            {vsArr.map((comp,i)=>(
              <div key={i} className="rounded-3xl p-8 hover:border-brand-boss-mid transition-colors border" style={{ backgroundColor:"rgba(71,41,76,0.25)", borderColor:"rgba(92,54,99,0.4)" }}>
                <div className="flex flex-wrap items-start justify-between gap-6">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-2xl text-brand-lilac-100 mb-3">SmartCoach360 vs {comp.name}</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="rounded-2xl p-4" style={{ backgroundColor:"rgba(71,41,76,0.4)" }}>
                        <p className="text-xs font-bold text-brand-silver uppercase tracking-wide mb-1">What They Do Well</p>
                        <p className="text-sm text-brand-lilac-200">{comp.good}</p>
                      </div>
                      <div className="rounded-2xl p-4 bg-rose-950/50 border border-rose-900/30">
                        <p className="text-xs font-bold text-rose-400 uppercase tracking-wide mb-1">Where They Fall Short</p>
                        <p className="text-sm text-rose-300">{comp.bad}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 flex-shrink-0">
                    <div className="rounded-2xl p-4 text-center border" style={{ backgroundColor:"rgba(71,41,76,0.35)", borderColor:"rgba(92,54,99,0.4)" }}>
                      <p className="text-xs text-brand-silver mb-1">{comp.name}</p>
                      <p className="font-display text-3xl text-brand-silver">{comp.score}/{rows.length}</p>
                    </div>
                    <div className="rounded-2xl p-4 text-center" style={MID_BG}>
                      <p className="text-xs text-brand-lilac-200 mb-1">SmartCoach360</p>
                      <p className="font-display text-3xl text-brand-lilac">{rows.filter(r=>r.sc).length}/{rows.length}</p>
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
