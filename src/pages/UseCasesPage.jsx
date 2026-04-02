import { CTASection, SectionHeader, CheckIcon } from "../components/UI";
import { IMAGES } from "../images";

const DARK_BG = { backgroundColor: "#2e1a32" };
const MID_BG  = { backgroundColor: "#47294c" };

const audiences = [
  { title:"Personal Trainers", tagline:"Spend Less Time on Admin. More Time Actually Coaching.", desc:"Your time is a high-value asset. When it's absorbed by manual tasks and disconnected tools, delivery and growth both suffer. SmartCoach360 standardises your operations so you can focus on coaching outcomes.", img:IMAGES.ptMale, emoji:"🏋️",
    challenges:["Tracking client progress across spreadsheets and handwritten notes","Chasing payments and manually tracking session packs","Sending plans through WhatsApp or email every week","Clients drifting because follow-ups aren't consistent","Hitting a client ceiling because operations can't scale"],
    solutions:[{title:"Custom Programs for Every Client",desc:"Build your workout library once, assign personalised programs instantly."},{title:"Nutrition & Macro Tracking",desc:"Set personalised nutrition targets and track adherence from one dashboard."},{title:"Client Messaging, Without Extra Admin",desc:"Automated check-ins and video calls keep clients engaged without manual work."},{title:"Effortless Payment Management",desc:"Session packs and discounts configured once and running automatically."},{title:"Progress at a Glance",desc:"Clean dashboard shows compliance, progress and assessments for every client."},{title:"Your Business in Your Pocket",desc:"Full platform access on iOS and Android."}]},
  { title:"Gym Owners & Studios", tagline:"Run Your Entire Gym From One Powerful Platform.", desc:"Running a gym requires visibility across coaches, clients, classes, memberships, and revenue. SmartCoach360 provides a single operational view—so you can standardise delivery, reduce overhead, and make decisions with real-time insight.", img:IMAGES.gymOwner, emoji:"🏢",
    challenges:["Coordinating multiple coaches manually with no central view","Inconsistent client experiences depending on which coach they work with","Class scheduling scattered across different systems","Slow, error-prone billing and membership management","No easy way to track revenue across the whole business"],
    solutions:[{title:"Multi-coach & Branch Management",desc:"Assign coaches to clients and track performance across every location."},{title:"Consistent Client Experience",desc:"Master programmes ensure every coach delivers the same quality."},{title:"Classes, Appointments & Calendar Sync",desc:"Schedule classes, sync calendars, and avoid double-bookings."},{title:"Business Dashboards & Reporting",desc:"Real-time view of revenue, retention, and coach performance."},{title:"Automated Billing & Memberships",desc:"Session packs and recurring memberships managed automatically."},{title:"Role & Access Management",desc:"Precise access for coaches, managers, and reception."}]},
  { title:"Nutrition & Wellness Coaches", tagline:"Deliver Personalised Nutrition at Scale. Keep Clients Accountable.", desc:"Nutrition coaching is deeply personal work. Getting it right requires consistent monitoring, personalised planning, and ongoing client accountability. SmartCoach360 gives you the tools to do that for more clients than you ever thought possible.", img:IMAGES.nutritionCoach, emoji:"🥗",
    challenges:["Manually creating individual meal plans one by one","No reliable way to know if clients are following their plan","Tracking health data across multiple apps and spreadsheets","Clients going quiet between check-in calls","Struggling to grow without compromising coaching quality"],
    solutions:[{title:"Personalised Meal Plans & Recipes",desc:"Create a library, then assign customised programmes quickly."},{title:"Macro & Nutrition Goal Tracking",desc:"Track daily intake in real time—no waiting for weekly check-ins."},{title:"Compliance Monitoring",desc:"See which clients need a nudge across your entire client base."},{title:"Female Health Tracker",desc:"Track hormonal cycles alongside nutrition for holistic coaching."},{title:"Health & Activity Integration",desc:"Sync Apple Health and Google Fit for reality-based coaching."},{title:"Automated Check-ins",desc:"Daily/weekly automated messages keep clients accountable."}]},
  { title:"Large Fitness Organisations", tagline:"Enterprise Tools to Manage, Scale, and Automate.", desc:"When you're running multiple locations, managing large coaching teams, and serving thousands of clients, disconnected systems get expensive fast. SmartCoach360 provides enterprise-grade infrastructure built for the fitness industry.", img:IMAGES.largeOrg, emoji:"🏆",
    challenges:["No single system connecting all branches, teams, and coaching data","Service quality varies by location or coach","Manual lead allocation creating slow response times","Difficulty controlling data access across a large team","No bird's-eye view of organisational performance"],
    solutions:[{title:"Multi-branch & Team Management",desc:"Manage every branch from one central dashboard with consistent workflows."},{title:"Automated Lead & Client Allocation",desc:"New enquiries assigned to the right coach automatically."},{title:"Role Management & Access Control",desc:"Granular permissions for every team level and role."},{title:"Organisation-wide Dashboards",desc:"Real-time view of stats, performance, and revenue across every branch."},{title:"SSO & Enterprise Security",desc:"Single Sign-On keeps team access secure and centralised."},{title:"Bulk Upload & Onboarding",desc:"Onboard hundreds of clients and coaches at once."}]},
];

const compRows=[
  {f:"Custom Programs",pt:true,gym:true,nut:true,ent:true},{f:"Nutrition Tracking",pt:true,gym:true,nut:true,ent:true},
  {f:"Client Messaging",pt:true,gym:true,nut:true,ent:true},{f:"Payment Processing",pt:true,gym:true,nut:true,ent:true},
  {f:"Team Management",pt:false,gym:true,nut:false,ent:true},{f:"Multi-branch Support",pt:false,gym:true,nut:false,ent:true},
  {f:"Auto Lead Allocation",pt:false,gym:true,nut:false,ent:true},{f:"Role & Access Control",pt:false,gym:true,nut:false,ent:true},
  {f:"SSO & Enterprise Security",pt:false,gym:false,nut:false,ent:true},{f:"Dedicated Success Manager",pt:false,gym:true,nut:false,ent:true},
];

export default function UseCasesPage({ navigate }) {
  return (
    <div className="pt-16">

      {/* ── HERO: plain, no background image ── */}
      <section className="py-24 bg-brand-lilac border-b border-brand-silver-xl">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
            style={{ backgroundColor:"rgba(71,41,76,0.1)", color:"#47294c" }}>
            Solutions
          </span>
          <h1 className="font-display text-5xl sm:text-6xl text-brand-black mb-5 leading-tight">
            Built for Every Kind of<br />
            <span style={{ color:"#47294c" }}>Fitness Professional</span>
          </h1>
          <p className="text-brand-fedora text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you coach one-on-one, run a gym, deliver online nutrition programmes, or manage a national organisation—SmartCoach360 fits the way you operate.
          </p>
          {/* Audience pills */}
          <div className="flex flex-wrap justify-center gap-2.5 mt-8">
            {["Personal Trainers","Gym Owners & Studios","Nutrition Coaches","Large Organisations"].map((label) => (
              <span key={label}
                className="text-xs font-semibold px-4 py-2 rounded-full border border-brand-silver-xl text-brand-fedora-dk"
                style={{ backgroundColor:"#fff" }}>
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUDIENCE SECTIONS ── */}
      <section>
        {audiences.map((a, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={idx} className={`py-20 ${isEven ? "bg-brand-lilac" : ""}`}
              style={isEven ? {} : { backgroundColor:"#f7f3f8" }}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid lg:grid-cols-2 gap-12 items-start ${!isEven ? "lg:grid-flow-col-dense" : ""}`}>

                  {/* ── LEFT / IMAGE COLUMN ── */}
                  <div className={`flex flex-col gap-5 ${!isEven ? "lg:col-start-2" : ""}`}>

                    {/* Image card */}
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
                      <img src={a.img} alt={a.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0" style={{ background:"linear-gradient(to top,rgba(46,26,50,0.80) 0%,transparent 55%)" }} />
                      <div className="absolute top-5 left-5">
                        <span className="text-3xl drop-shadow">{a.emoji}</span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-lilac-200 opacity-80 mb-1 block">
                          For
                        </span>
                        <h3 className="font-display text-2xl text-brand-lilac leading-tight">{a.title}</h3>
                      </div>
                    </div>

                    {/* Common Challenges — lives below image */}
                    <div className="rounded-2xl border border-rose-100 overflow-hidden"
                      style={{ backgroundColor:"#fff8f8" }}>
                      <div className="flex items-center gap-2.5 px-5 py-3.5 border-b border-rose-100"
                        style={{ backgroundColor:"#fff1f1" }}>
                        <svg className="w-4 h-4 text-rose-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                        </svg>
                        <h3 className="text-xs font-bold text-rose-500 uppercase tracking-widest">Common Challenges</h3>
                      </div>
                      <div className="divide-y divide-rose-50">
                        {a.challenges.map((c, i) => (
                          <div key={i} className="flex items-start gap-3 px-5 py-3">
                            <svg className="w-3.5 h-3.5 text-rose-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                            <p className="text-sm text-rose-700 leading-snug">{c}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ── RIGHT / CONTENT COLUMN ── */}
                  <div className={`flex flex-col justify-start ${!isEven ? "lg:col-start-1" : ""}`}>
                    <h2 className="font-display text-3xl sm:text-4xl text-brand-black mb-3 leading-tight">
                      {a.tagline}
                    </h2>
                    <p className="text-brand-fedora leading-relaxed mb-8 text-base">{a.desc}</p>

                    {/* Solutions grid */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest mb-4"
                        style={{ color:"#47294c" }}>
                        How SmartCoach360 Helps
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {a.solutions.map((s, i) => (
                          <div key={i}
                            className="rounded-2xl p-4 border transition-all hover:shadow-md hover:-translate-y-0.5"
                            style={{ backgroundColor:"#fff", borderColor:"#e8dced" }}>
                            <div className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm"
                                style={MID_BG}>
                                <CheckIcon className="w-3 h-3 text-white" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-brand-black text-xs mb-0.5 leading-snug">{s.title}</h4>
                                <p className="text-brand-fedora text-xs leading-relaxed">{s.desc}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="py-20" style={DARK_BG}>
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeader tag="Plan Comparison" title="Which Plan Is Right for You?" light />
          <div className="overflow-x-auto rounded-3xl border border-brand-boss/50 shadow-2xl">
            <table className="w-full min-w-[500px]" style={{ backgroundColor:"rgba(71,41,76,0.3)" }}>
              <thead>
                <tr className="border-b border-brand-boss/50">
                  <th className="text-left p-4 text-sm font-semibold text-brand-silver">Feature</th>
                  {["Personal Trainer","Gym / Studio","Nutrition Coach","Large Org"].map(h => (
                    <th key={h} className="p-4 text-center text-xs font-bold text-brand-lilac-200">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compRows.map((row, i) => (
                  <tr key={i} className="border-b border-brand-boss/30 hover:bg-brand-boss/20 transition-colors">
                    <td className="p-4 text-sm text-brand-lilac-100">{row.f}</td>
                    {[row.pt, row.gym, row.nut, row.ent].map((v, j) => (
                      <td key={j} className="p-4 text-center">
                        {v
                          ? <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-boss-mid">
                              <CheckIcon className="w-3.5 h-3.5 text-brand-lilac" />
                            </span>
                          : <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-boss/20 text-brand-fedora text-xs">—</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection navigate={navigate} />
    </div>
  );
}