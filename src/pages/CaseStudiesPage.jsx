import { CTASection, SectionHeader } from "../components/UI";
import { IMAGES } from "../images";

const DARK_BG = { backgroundColor: "#2e1a32" };
const MID_BG  = { backgroundColor: "#47294c" };

const studies = [
  { type:"Personal Trainer", emoji:"🏋️", quote:"I Went From 12 Clients to 35 in 6 Months Without Burning Out", subheading:"Personal Trainer",
    challenge:"Tracking clients through spreadsheets and WhatsApp worked at first, but as the roster grew, things started slipping. Check-ins became inconsistent, payments were delayed, and there was no reliable way to monitor progress.",
    change:"After moving to SmartCoach360, everything consolidated into one platform. Automated check-ins reduced manual follow-ups, clients received weekly programmes in the mobile app, and payments ran automatically through session packs.",
    img:IMAGES.ptMale, avatarImg:IMAGES.cs1,
    results:[{label:"Client Growth",value:"12→35",sub:"in just 6 months"},{label:"Admin Saved",value:"12hrs",sub:"back every week"},{label:"Payments",value:"99%",sub:"collection rate"},{label:"Retention",value:"+40%",sub:"improvement"},{label:"Satisfaction",value:"4.9★",sub:"out of 5"}]},
  { type:"Gym Owner", emoji:"🏢", quote:"SmartCoach360 Gave Me Real Visibility Across All 3 Gyms for the First Time", subheading:"Fitness Studio Owner",
    challenge:"Three locations, eight coaches, and no single source of truth. Every studio operated slightly differently, which meant the client experience depended too much on which coach they worked with and which location they visited.",
    change:"SmartCoach360 brought all three locations into one platform. Master programmes helped every coach deliver a consistent experience, automated client allocation matched new members to the right coach, and the owner finally had a real-time dashboard across all three sites.",
    img:IMAGES.gymOwner, avatarImg:IMAGES.cs2,
    results:[{label:"Admin Overhead",value:"−35%",sub:"across all locations"},{label:"Onboarding Time",value:"2hrs",sub:"down from 2 days"},{label:"Revenue",value:"Real-time",sub:"across 3 branches"},{label:"Performance",value:"Auto",sub:"coach tracking"},{label:"Satisfaction",value:"+28%",sub:"improvement"}]},
  { type:"Nutrition Coach", emoji:"🥗", quote:"My Clients Are Hitting Their Macro Goals 3× More Consistently", subheading:"Online Nutrition & Wellness Coach",
    challenge:"Manually tracking macro compliance for 60+ clients across WhatsApp and spreadsheets was messy, error-prone, and unsustainable. Between check-in calls, clients had no system keeping them on track.",
    change:"With SmartCoach360, nutrition data moved into one central platform. Automated daily check-ins created consistent accountability, the female health tracker supported more nuanced coaching, and compliance data stayed visible in real time.",
    img:IMAGES.nutritionist, avatarImg:IMAGES.cs3,
    results:[{label:"Compliance",value:"79%",sub:"up from 38%"},{label:"Manual Tracking",value:"−90%",sub:"time saved"},{label:"Programme Completion",value:"+55%",sub:"improvement"},{label:"Referral Rate",value:"2×",sub:"doubled in 4 months"},{label:"MRR Growth",value:"+45%",sub:"increase"}]},
  { type:"Large Organisation", emoji:"🏆", quote:"We Finally Have One System That Works Across Our Entire Organisation", subheading:"National Fitness Organisation",
    challenge:"With more than 20 branches and 50+ coaches operating across the country, disconnected tools meant inconsistent client experiences, poor visibility into performance, and slow lead response times.",
    change:"SmartCoach360 became the single operational platform across all branches. Single Sign-On provided secure, centralised access, role-based permissions were configured by team level, and automated lead allocation reduced response times from days to minutes.",
    img:IMAGES.largeOrg, avatarImg:IMAGES.cs4,
    results:[{label:"Lead Response",value:"4 min",sub:"from 48 hours"},{label:"Cost Savings",value:"22%",sub:"year-on-year"},{label:"Data Accuracy",value:"99.8%",sub:"improved"},{label:"Consistency",value:"100%",sub:"standardised"},{label:"Productivity",value:"+31%",sub:"team increase"}]},
];

// ── Result card ───────────────────────────────────────────────────────────────
function ResultCard({ label,value, sub }) {
  return (
    <div
      className="rounded-2xl p-2.5 sm:p-3 text-center flex flex-col justify-center gap-1"
      style={DARK_BG}
    >
      <p className="text-[6px] sm:text-xs text-brand-silver tracking-wide">
        {label}
      </p>
      <p className="font-display text-sm sm:text-lg text-brand-lilac-300 leading-tight">
        {value}
      </p>
      <p className="text-brand-silver text-[10px] sm:text-xs leading-snug">
        {sub}
      </p>
    </div>
  );
}

function ResultsGrid({ results }) {
  return (
    <>
      <div className="hidden md:grid grid-cols-5 gap-2">
        {results.map((r, j) => <ResultCard key={j} {...r} />)}
      </div>

      <div className="grid grid-cols-3 gap-2 md:hidden">
        {results.map((r, j) => (
          <div
            key={j}
            style={
              j === 3 ? { gridColumn: "1 / 2" } :
              j === 4 ? { gridColumn: "2 / 3" } :
              undefined
            }
          >
            <ResultCard {...r} />
          </div>
        ))}
      </div>
    </>
  );
}

export default function CaseStudiesPage() {
  return (
    <div className="pt-16 overflow-hidden">

      <section className="relative overflow-hidden bg-[#1c0f1f] flex items-center justify-center min-h-[60vh] py-20">

        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[380px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(71,41,76,0.65) 0%, transparent 70%)",
            filter: "blur(52px)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[440px] h-[280px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 100% 100%, rgba(129,69,140,0.16) 0%, transparent 70%)",
            filter: "blur(56px)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(200,160,220,1) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span
            className="inline-block text-[0.67rem] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-6"
            style={{ backgroundColor: "rgba(71,41,76,0.5)", color: "#e8d9ee" }}
          >
            Success Stories
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-brand-lilac mb-5 leading-tight">
            Real Coaches.<br className="sm:hidden" /> Real Results.<br className="sm:hidden" /> Real Growth.
          </h1>
          <p className="text-brand-silver text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Here's how fitness professionals are using SmartCoach360 to build better businesses and deliver better results for their clients.
          </p>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg,transparent,rgba(162,122,175,0.2),transparent)" }}
        />
      </section>

      <section className="bg-brand-lilac">
        {studies.map((cs, i) => (
          <div
            key={i}
            className={`py-12 sm:py-20 ${i % 2 === 0 ? "bg-brand-lilac" : "bg-brand-lilac-100"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`grid lg:grid-cols-2 gap-10 lg:gap-14 items-start ${
                  i % 2 !== 0 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={`${i % 2 !== 0 ? "lg:col-start-2" : ""} space-y-3`}>
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                    <img src={cs.img} alt={cs.type} className="w-full h-full object-cover object-top" />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top,rgba(46,26,50,0.85) 0%,rgba(71,41,76,0.1) 60%,transparent 100%)" }}
                    />
                    
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
                      <span
                        className="text-brand-lilac text-xs font-semibold px-3 py-1.5 rounded-xl"
                        style={{ backgroundColor: "rgba(71,41,76,0.75)", backdropFilter: "blur(8px)" }}
                      >
                        {cs.subheading}
                      </span>
                    </div>
                  </div>

                  <ResultsGrid results={cs.results} />
                </div>

                <div className={`${i % 2 !== 0 ? "lg:col-start-1" : ""} mt-2 sm:mt-0`}>
                  <span className="section-tag">{cs.type}</span>
                  <blockquote
                    className="font-display text-xl sm:text-2xl lg:text-3xl text-brand-black mb-6 leading-tight border-l-4 pl-5"
                    style={{ borderColor: "#47294c" }}
                  >
                    "{cs.quote}"
                  </blockquote>
                  <div className="space-y-5">
                    <div>
                      <h3 className="text-xs font-bold text-brand-boss uppercase tracking-widest mb-2">The Challenge</h3>
                      <p className="text-brand-fedora text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-brand-boss uppercase tracking-widest mb-2">What Changed</h3>
                      <p className="text-brand-fedora text-sm leading-relaxed">{cs.change}</p>
                    </div>
                  </div>
                  <div className="mt-7 flex items-center gap-4 bg-brand-lilac border border-brand-silver-xl rounded-2xl p-4">
                    <img src={cs.avatarImg} alt="Coach" className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl object-cover flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-brand-black text-sm">{cs.subheading}</p>
                      <div className="flex items-center gap-0.5 mt-0.5">
                        {[1,2,3,4,5].map(s => <span key={s} className="text-amber-400 text-xs">★</span>)}
                        <span className="text-brand-fedora text-xs ml-1">5.0 on SmartCoach360</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="py-16 sm:py-20 relative overflow-hidden" style={DARK_BG}>
        <div
          className="absolute inset-0"
          style={{ backgroundImage:`url(${IMAGES.running})`, backgroundSize:"cover", backgroundPosition:"center", opacity:0.12 }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader tag="Platform Results" title="The Numbers Speak for Themselves" light />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              { val:"10,000+", label:"Clients managed on platform" },
              { val:"40%",     label:"Average retention improvement" },
              { val:"12hrs",   label:"Admin saved per week, per coach" },
              { val:"99%",     label:"Payment collection rate" },
            ].map((m, i) => (
              <div
                key={i}
                className="rounded-2xl sm:rounded-3xl p-5 sm:p-7 border text-center"
                style={{ backgroundColor:"rgba(71,41,76,0.4)", borderColor:"rgba(92,54,99,0.5)" }}
              >
                <p className="font-display text-3xl sm:text-5xl text-brand-lilac-300 mb-1 sm:mb-2">{m.val}</p>
                <p className="text-brand-silver text-xs sm:text-sm leading-relaxed">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}