import { CTASection, SectionHeader, CheckIcon } from "../components/UI";
import { IMAGES } from "../images";
import { Dumbbell, Building2, Salad, Trophy } from "lucide-react";

const MID_BG = { backgroundColor: "#47294c" };

const audiences = [
  { title:"Personal Trainers", tagline:"Spend Less Time on Admin. More Time Actually Coaching.", desc:"Your time is a high-value asset. When it's absorbed by manual tasks and disconnected tools, delivery and growth both suffer. SmartCoach360 standardises your operations so you can focus on coaching outcomes.", img:IMAGES.ptFemale, emoji:Dumbbell,
    challenges:["Tracking client progress across spreadsheets and handwritten notes","Chasing payments and manually tracking session packs","Sending plans through WhatsApp or email every week","Clients drifting because follow-ups aren't consistent","Hitting a client ceiling because operations can't scale"],
    solutions:[{title:"Custom Programs for Every Client",desc:"Build your workout library once, assign personalised programs instantly."},{title:"Nutrition & Macro Tracking",desc:"Set personalised nutrition targets and track adherence from one dashboard."},{title:"Client Messaging, Without Extra Admin",desc:"Automated check-ins and video calls keep clients engaged without manual work."},{title:"Effortless Payment Management",desc:"Session packs and discounts configured once and running automatically."},{title:"Progress at a Glance",desc:"Clean dashboard shows compliance, progress and assessments for every client."},{title:"Your Business in Your Pocket",desc:"Full platform access on iOS and Android."}]},
  { title:"Gym Owners & Studios", tagline:"Run Your Entire Gym From One Powerful Platform.", desc:"Running a gym requires visibility across coaches, clients, classes, memberships, and revenue. SmartCoach360 provides a single operational view—so you can standardise delivery, reduce overhead, and make decisions with real-time insight.", img:IMAGES.gymOwner, emoji:Building2,
    challenges:["Coordinating multiple coaches manually with no central view","Inconsistent client experiences depending on which coach they work with","Class scheduling scattered across different systems","Slow, error-prone billing and membership management","No easy way to track revenue across the whole business"],
    solutions:[{title:"Multi-coach & Branch Management",desc:"Assign coaches to clients and track performance across every location."},{title:"Consistent Client Experience",desc:"Master programmes ensure every coach delivers the same quality."},{title:"Classes, Appointments & Calendar Sync",desc:"Schedule classes, sync calendars, and avoid double-bookings."},{title:"Business Dashboards & Reporting",desc:"Real-time view of revenue, retention, and coach performance."},{title:"Automated Billing & Memberships",desc:"Session packs and recurring memberships managed automatically."},{title:"Role & Access Management",desc:"Precise access for coaches, managers, and reception."}]},
  { title:"Nutrition & Wellness Coaches", tagline:"Deliver Personalised Nutrition at Scale. Keep Clients Accountable.", desc:"Nutrition coaching is deeply personal work. Getting it right requires consistent monitoring, personalised planning, and ongoing client accountability. SmartCoach360 gives you the tools to do that for more clients than you ever thought possible.", img:IMAGES.nutritionCoach, emoji:Salad,
    challenges:["Manually creating individual meal plans one by one","No reliable way to know if clients are following their plan","Tracking health data across multiple apps and spreadsheets","Clients going quiet between check-in calls","Struggling to grow without compromising coaching quality"],
    solutions:[{title:"Personalised Meal Plans & Recipes",desc:"Create a library, then assign customised programmes quickly."},{title:"Macro & Nutrition Goal Tracking",desc:"Track daily intake in real time—no waiting for weekly check-ins."},{title:"Compliance Monitoring",desc:"See which clients need a nudge across your entire client base."},{title:"Female Health Tracker",desc:"Track hormonal cycles alongside nutrition for holistic coaching."},{title:"Health & Activity Integration",desc:"Sync Apple Health and Google Fit for reality-based coaching."},{title:"Automated Check-ins",desc:"Daily/weekly automated messages keep clients accountable."}]},
  { title:"Large Fitness Organisations", tagline:"Enterprise Tools to Manage, Scale, and Automate.", desc:"When you're running multiple locations, managing large coaching teams, and serving thousands of clients, disconnected systems get expensive fast. SmartCoach360 provides enterprise-grade infrastructure built for the fitness industry.", img:IMAGES.largeOrg, emoji:Trophy,
    challenges:["No single system connecting all branches, teams, and coaching data","Service quality varies by location or coach","Manual lead allocation creating slow response times","Difficulty controlling data access across a large team","No bird's-eye view of organisational performance"],
    solutions:[{title:"Multi-branch & Team Management",desc:"Manage every branch from one central dashboard with consistent workflows."},{title:"Automated Lead & Client Allocation",desc:"New enquiries assigned to the right coach automatically."},{title:"Role Management & Access Control",desc:"Granular permissions for every team level and role."},{title:"Organisation-wide Dashboards",desc:"Real-time view of stats, performance, and revenue across every branch."},{title:"SSO & Enterprise Security",desc:"Single Sign-On keeps team access secure and centralised."},{title:"Bulk Upload & Onboarding",desc:"Onboard hundreds of clients and coaches at once."}]},
];

const compRows = [
  {f:"Custom Programs",        pt:true, gym:true, nut:true, ent:true},
  {f:"Nutrition Tracking",     pt:true, gym:true, nut:true, ent:true},
  {f:"Client Messaging",       pt:true, gym:true, nut:true, ent:true},
  {f:"Payment Processing",     pt:true, gym:true, nut:true, ent:true},
  {f:"Team Management",        pt:false,gym:true, nut:false,ent:true},
  {f:"Multi-branch Support",   pt:false,gym:true, nut:false,ent:true},
  {f:"Auto Lead Allocation",   pt:false,gym:true, nut:false,ent:true},
  {f:"Role & Access Control",  pt:false,gym:true, nut:false,ent:true},
  {f:"SSO & Enterprise Security",pt:false,gym:false,nut:false,ent:true},
  {f:"Dedicated Success Manager",pt:false,gym:true, nut:false,ent:true},
];

const COL_HEADERS = ["Personal Trainer", "Gym / Studio", "Nutrition Coach", "Large Org"];

function TickCell({ value }) {
  if (value) {
    return (
      <span
        className="inline-flex items-center justify-center w-7 h-7 rounded-full"
        style={{ backgroundColor: "#f0eaf3" }}
      >
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#47294c" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 13l4 4L19 7" />
        </svg>
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center justify-center w-7 h-7 rounded-full text-sm"
      style={{ backgroundColor: "#faf7fc", color: "#c5b8cc" }}
    >
      —
    </span>
  );
}

export default function UseCasesPage({ navigate }) {
  return (
    <div className="pt-16">

      {/* ── HERO ── */}
      <section
        className="relative py-28 overflow-hidden flex items-center"
        style={{ backgroundColor: "#1c0f1f", minHeight: "70vh" }}
      >
        {/* Ambient glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(71,41,76,0.6) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span
            className="inline-block text-[0.7rem] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-8"
            style={{ backgroundColor: "rgba(71,41,76,0.6)", color: "#c9a8d6", border: "1px solid rgba(129,69,140,0.35)" }}
          >
            Solutions
          </span>
          <h1
            className="font-display text-5xl sm:text-[3.5rem] leading-[1.1] mb-6"
            style={{ color: "#faf4fc" }}
          >
            Built for Every Kind of<br />
            <span style={{ color: "#a06cb0" }}>Fitness Professional</span>
          </h1>
          <p className="text-base sm:text-[1.0625rem] leading-relaxed max-w-2xl mx-auto" style={{ color: "#8a7490" }}>
            Whether you coach one-on-one, run a gym, deliver online nutrition programmes, or manage a national organisation—SmartCoach360 fits the way you operate.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 mt-9">
            {["Personal Trainers", "Gym Owners & Studios", "Nutrition Coaches", "Large Organisations"].map((label) => (
              <span
                key={label}
                className="text-[0.72rem] font-semibold px-4 py-1.5 rounded-full"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  color: "#c5b0d0",
                  border: "1px solid rgba(162,122,175,0.25)",
                }}
              >
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
            <div
              key={idx}
              className="py-20"
              style={{ backgroundColor: isEven ? "#fff" : "#faf7fc" }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid lg:grid-cols-2 gap-12 items-start ${!isEven ? "lg:grid-flow-col-dense" : ""}`}>

                  {/* ── IMAGE + CHALLENGES COLUMN ── */}
                  <div className={`flex flex-col gap-5 ${!isEven ? "lg:col-start-2" : ""}`}>

                    {/* Image card */}
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg" style={{ border: "1px solid #e8e0ed" }}>
                      <img src={a.img} alt={a.title} className="w-full h-full object-cover" />
                      <div
                        className="absolute inset-0"
                        style={{ background: "linear-gradient(to top, rgba(28,15,31,0.82) 0%, transparent 55%)" }}
                      />
                      <div className="absolute top-5 right-5">
                        {(() => {
  const Icon = a.emoji;
  return (
    <div className="p-2 rounded-xl bg-white/10 backdrop-blur-sm">
      <Icon className="w-6 h-6 text-white" strokeWidth={2.2} />
    </div>
  );
})()}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span
                          className="text-[0.65rem] font-bold uppercase tracking-[0.18em] mb-1 block"
                          style={{ color: "rgba(200,170,214,0.7)" }}
                        >
                          For
                        </span>
                        <h3 className="font-display text-2xl leading-tight" style={{ color: "#faf4fc" }}>
                          {a.title}
                        </h3>
                      </div>
                    </div>

                    {/* Challenges card */}
                    <div
                      className="rounded-2xl overflow-hidden"
                      style={{ backgroundColor: "#fff8f8", border: "1px solid #fce4e4" }}
                    >
                      <div
                        className="flex items-center gap-2.5 px-5 py-3.5 border-b"
                        style={{ backgroundColor: "#fff1f1", borderColor: "#fce4e4" }}
                      >
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="#f87171" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                        </svg>
                        <h3
                          className="text-[0.67rem] font-bold uppercase tracking-[0.16em]"
                          style={{ color: "#e05555" }}
                        >
                          Common Challenges
                        </h3>
                      </div>
                      <div className="divide-y" style={{ borderColor: "#fef2f2" }}>
                        {a.challenges.map((c, i) => (
                          <div key={i} className="flex items-start gap-3 px-5 py-3">
                            <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="#fca5a5" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                            <p className="text-sm leading-snug" style={{ color: "#b45252" }}>{c}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ── CONTENT COLUMN ── */}
                  <div className={`flex flex-col justify-start ${!isEven ? "lg:col-start-1" : ""}`}>
                    <h2
                      className="font-display text-3xl sm:text-[2.1rem] leading-tight mb-3"
                      style={{ color: "#1c0f1f" }}
                    >
                      {a.tagline}
                    </h2>
                    <p className="leading-relaxed mb-8 text-[0.9375rem]" style={{ color: "#7b6880" }}>
                      {a.desc}
                    </p>

                    {/* Solutions */}
                    <div>
                      <p
                        className="text-[0.67rem] font-bold uppercase tracking-[0.18em] mb-4"
                        style={{ color: "#a06cb0" }}
                      >
                        How SmartCoach360 Helps
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {a.solutions.map((s, i) => (
                          <div
                            key={i}
                            className="rounded-xl p-4 transition-all hover:shadow-md hover:-translate-y-0.5"
                            style={{ backgroundColor: "#fff", border: "1px solid #e8e0ed", boxShadow: "0 1px 4px rgba(46,26,50,0.04)" }}
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                style={{ backgroundColor: "#47294c" }}
                              >
                                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-[0.8rem] mb-0.5 leading-snug" style={{ color: "#1c0f1f" }}>
                                  {s.title}
                                </h4>
                                <p className="text-[0.76rem] leading-relaxed" style={{ color: "#8a7490" }}>
                                  {s.desc}
                                </p>
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
      <section
        className="py-20"
        style={{ backgroundColor: "#faf7fc", borderTop: "1px solid #e8e0ed" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <div className="text-center mb-12">
            <span
              className="inline-block text-[0.7rem] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-5"
              style={{ backgroundColor: "#f0eaf3", color: "#7b4e87", border: "1px solid #ddd4e4" }}
            >
              Plan Comparison
            </span>
            <h2
              className="font-display text-3xl sm:text-4xl font-semibold"
              style={{ color: "#1c0f1f" }}
            >
              Which Plan Is Right for You?
            </h2>
          </div>

          {/* Table */}
          <div
            className="overflow-x-auto rounded-2xl"
            style={{
              border: "1px solid #e0d6e8",
              boxShadow: "0 4px 32px rgba(46,26,50,0.07), 0 1px 4px rgba(46,26,50,0.05)",
            }}
          >
            <table className="w-full min-w-[520px]" style={{ backgroundColor: "#fff" }}>
              <thead>
                <tr style={{ backgroundColor: "#f7f2fa", borderBottom: "1px solid #e8e0ed" }}>
                  <th
                    className="text-left px-6 py-4 text-[0.65rem] font-bold uppercase tracking-[0.16em]"
                    style={{ color: "#a891b0" }}
                  >
                    Feature
                  </th>
                  {COL_HEADERS.map((h) => (
                    <th
                      key={h}
                      className="px-5 py-4 text-center text-[0.65rem] font-bold uppercase tracking-[0.16em]"
                      style={{ color: "#47294c" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compRows.map((row, i) => (
                  <tr
                    key={i}
                    className="transition-colors"
                    style={{ borderBottom: i < compRows.length - 1 ? "1px solid #f0eaf3" : "none" }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = "#faf7fc"}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}
                  >
                    <td className="px-6 py-4 text-sm font-medium" style={{ color: "#2e1a32" }}>
                      {row.f}
                    </td>
                    {[row.pt, row.gym, row.nut, row.ent].map((v, j) => (
                      <td key={j} className="px-5 py-4 text-center">
                        <TickCell value={v} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}