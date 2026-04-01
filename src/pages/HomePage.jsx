import { CTASection, SectionHeader, CheckIcon } from "../components/UI";
import { IMAGES } from "../images";

const stats = [
  { value: "10,000+", label: "Clients Managed" },
  { value: "50+",     label: "Platform Features" },
  { value: "15+",     label: "Integrations" },
  { value: "99%",     label: "Payment Collection" },
];

const features = [
  { icon: "📋", title: "Coaching & Programs",      desc: "Build a library once. Assign personalised plans in seconds. Clients get everything in the mobile app.",                     img: IMAGES.weights },
  { icon: "🥗", title: "Nutrition Tracking",        desc: "Personalised meal plans, macro targets, and real-time compliance across your full client base.",                          img: IMAGES.nutrition },
  { icon: "💬", title: "Client Engagement",         desc: "Automated check-ins, in-app messaging, video calls, and challenges—without manual follow-up.",                           img: IMAGES.coachAndClient },
  { icon: "⚡", title: "Business Automation",       desc: "Lead allocation, onboarding, payments, and message sequences running in the background.",                                img: IMAGES.teamMeeting },
  { icon: "💳", title: "Payments & Revenue",        desc: "Session packs, recurring payments, discounts, and partial payments—built into the platform.",                            img: IMAGES.mobileApp },
  { icon: "📅", title: "Scheduling",                desc: "One-on-ones, group classes, and consultations in one place. Zoom and Teams built in.",                                   img: IMAGES.groupClass },
];

const audiences = [
  { emoji: "🏋️", title: "Personal Trainers",        desc: "More clients, less admin. Everything in one place.",         img: IMAGES.ptMale,       page: "usecases" },
  { emoji: "🏢", title: "Gym Owners & Studios",      desc: "One platform across your whole location and team.",          img: IMAGES.gymOwner,     page: "usecases" },
  { emoji: "🥗", title: "Nutrition Coaches",         desc: "Personalised plans at scale with real accountability.",      img: IMAGES.nutritionist, page: "usecases" },
  { emoji: "🏆", title: "Large Organisations",       desc: "Enterprise tools for multi-branch, multi-coach teams.",      img: IMAGES.largeOrg,     page: "usecases" },
];

const steps = [
  { num: "01", title: "Book a Demo",          desc: "A free 20-minute walkthrough tailored to your business." },
  { num: "02", title: "Set Up Your Platform", desc: "Hands-on onboarding—branding, programs, payments configured." },
  { num: "03", title: "Onboard Your Clients", desc: "Invite clients, assign programmes, and start from day one." },
  { num: "04", title: "Grow Your Business",   desc: "Automations handle ops—you stay focused on coaching." },
];
const problems = [
  "Client details spread across email, spreadsheets, and WhatsApp—follow-ups constantly missed.",
  "Hours every week chasing invoices and manually tracking session packs instead of coaching.",
  "Scheduling in one app, messaging in another, nutrition in a third—the constant switching drains you.",
  "Clients drift and cancel because check-ins and progress tracking aren't consistent.",
  "Growth stalls—not from lack of demand, but because admin has eaten your capacity.",
];
const integrations = ["WhatsApp","Zoom","Microsoft Teams","Google Sheets","Google Forms","Zoho Forms","Apple Health","Google Fit","Lab Integration","Telephony"];

const DARK_BG = { backgroundColor: "#2e1a32" };
const MID_BG  = { backgroundColor: "#47294c" };

export default function HomePage({ navigate }) {
  return (
    <div className="pt-16">

      {/* HERO */}
      <section
  className="relative min-h-[92vh] flex items-center overflow-hidden"
  style={DARK_BG}
>
  {/* Background image */}
  <div
    className="absolute inset-0 transition-transform duration-700"
    style={{
      backgroundImage: `url(${IMAGES.heroCoach})`,
      backgroundSize: "cover",
      backgroundPosition: "60% center",
    }}
  />

  {/* Layered atmospheric gradients */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "linear-gradient(105deg, rgba(18,9,21,0.98) 0%, rgba(36,18,42,0.92) 42%, rgba(60,32,68,0.55) 68%, rgba(71,41,76,0.10) 100%)",
    }}
  />
  <div
    className="absolute inset-0"
    style={{
      background:
        "radial-gradient(ellipse 80% 60% at 15% 50%, rgba(100,55,110,0.18) 0%, transparent 70%)",
    }}
  />
  <div
    className="absolute inset-0"
    style={{
      background:
        "linear-gradient(to top, rgba(18,9,21,0.85) 0%, rgba(18,9,21,0.3) 55%, transparent 95%)",
    }}
  />

  
  <div
    className="absolute inset-0 opacity-[0.03] pointer-events-none"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      backgroundRepeat: "repeat",
      backgroundSize: "180px",
    }}
  />

  <div
    className="absolute top-0 left-0 right-0 h-px"
    style={{
      background:
        "linear-gradient(90deg, transparent 0%, rgba(180,130,210,0.4) 30%, rgba(200,150,230,0.6) 50%, rgba(180,130,210,0.4) 70%, transparent 100%)",
    }}
  />

  <div className="relative z-10 w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-24">
    <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-center">

      {/* ── LEFT: Main content ── */}
      <div className="max-w-2xl">

        {/* Trust badge */}
        <span
          className="inline-flex items-center gap-2.5 text-brand-lilac-200 text-xs font-bold px-4 py-2 rounded-full mb-8 border border-brand-boss-mid/60 fade-up"
          style={{
            backgroundColor: "rgba(71,41,76,0.5)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 0 20px rgba(130,80,150,0.15), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-lilac-300 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-lilac-300" />
          </span>
          Trusted by coaches worldwide
        </span>

        {/* Headline */}
        <h1 className="font-display text-5xl sm:text-6xl lg:text-[4.25rem] text-brand-lilac leading-[1.03] tracking-tight mb-7 fade-up fade-up-1">
          Run Your Coaching
          <br />
          Business on{" "}
          <em
            className="not-italic"
            style={{
              background: "linear-gradient(135deg, #d4a8e8 0%, #b87fd4 40%, #9b5fc0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            One Platform
          </em>
        </h1>
        <p className="text-brand-silver/80 md:text-base sm:text-xl leading-relaxed mb-10 max-w-lg fade-up fade-up-2">
          Stop juggling apps. Manage clients, programmes, nutrition, payments, and messages, all in one place built for coaches who want to scale.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3.5 mb-14 fade-up fade-up-3">
          <button
            className="btn-cream font-bold text-base shadow-2xl group relative overflow-hidden"
            style={{ paddingLeft: "1.75rem", paddingRight: "1.75rem" }}
          >
            
            <span
              className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
              }}
            />
            Book a Free Demo
            <svg
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button
            onClick={() => navigate("casestudies")}
            className="inline-flex items-center gap-2.5 text-brand-lilac-100 font-semibold px-7 py-3.5 rounded-2xl border border-brand-boss-mid/50 hover:border-brand-boss-mid/80 hover:bg-brand-boss/40 transition-all duration-200 group"
            style={{ backdropFilter: "blur(4px)" }}
          >
            <span
              className="flex items-center justify-center w-7 h-7 rounded-full group-hover:scale-110 transition-transform"
              style={{ backgroundColor: "rgba(130,80,150,0.3)" }}
            >
              <svg className="w-3.5 h-3.5 text-brand-lilac-300 translate-x-px" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            See How It Works
          </button>
        </div>

       
        <div className="flex items-center gap-4 fade-up fade-up-4">
          <div className="flex -space-x-2">
            {["#9b6dbd", "#7a4fa0", "#c49ad6", "#5e3880"].map((bg, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-[rgba(28,15,31,0.8)] flex items-center justify-center text-[10px] font-bold text-white"
                style={{ backgroundColor: bg }}
              >
                {["JK", "AL", "MR", "SP"][i]}
              </div>
            ))}
          </div>
          <div>
            <div className="flex items-center gap-1 mb-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-brand-fedora-lt text-xs">
              Loved by <span className="text-brand-lilac-200 font-medium">2,400+</span> coaches
            </p>
          </div>
        </div>
      </div>


    </div>
  </div>

  {/* Scroll indicator */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
    <span className="text-brand-fedora-lt/50 text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
    <div className="w-px h-10 relative overflow-hidden rounded-full" style={{ backgroundColor: "rgba(130,80,150,0.2)" }}>
      <div
        className="absolute top-0 w-full rounded-full"
        style={{
          height: "40%",
          background: "linear-gradient(to bottom, rgba(180,130,210,0.8), transparent)",
          animation: "scrollDrop 1.8s ease-in-out infinite",
        }}
      />
    </div>
  </div>

  <style>{`
    @keyframes scrollDrop {
      0% { transform: translateY(-100%); opacity: 0; }
      20% { opacity: 1; }
      80% { opacity: 1; }
      100% { transform: translateY(260%); opacity: 0; }
    }
  `}</style>
</section>
{/* PROBLEM */}
<section className="py-28 relative overflow-hidden bg-brand-lilac">

  <div className="relative z-10 2xl:max-w-7xl max-w-6xl mx-auto px-5 sm:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <span className="section-tag mb-6">
          The Problem We Solve
        </span>
        <h2 className="font-display text-4xl sm:text-5xl text-brand-black leading-tight mb-6">
          Does Any of This Sound Familiar?
        </h2>
        <p className="text-brand-fedora text-lg leading-relaxed mb-10">
          You entered coaching to drive transformation—not to manage a patchwork of tools. As your client base grows, these challenges compound.
        </p>
        <button onClick={() => navigate("usecases")} className="btn-primary group">
          See How We Solve It
          <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="space-y-3">
        {problems.map((p, i) => (
          <div
            key={i}
            className="flex items-start gap-4 rounded-2xl px-5 py-4 border border-brand-silver-xl hover:border-brand-lilac-300 hover:shadow-sm transition-all duration-200 bg-brand-lilac"
          >
            <div
              className="w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center"
              style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}
            >
              <svg className="w-4 h-4 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <p className="text-brand-fedora-dk text-sm leading-relaxed">{p}</p>
          </div>
        ))}

        {/* Resolution badge */}
        <div
          className="flex items-center gap-3 rounded-2xl px-5 py-4 mt-2 border"
          style={{
            background: "rgba(71,41,76,0.06)",
            borderColor: "rgba(71,41,76,0.18)",
          }}
        >
          <div
            className="w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center"
            style={{ background: "rgba(71,41,76,0.12)", border: "1px solid rgba(71,41,76,0.25)" }}
          >
            <svg className="w-4 h-4 text-brand-boss" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-brand-boss text-sm font-semibold">SmartCoach360 removes all of the above</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* FEATURES */}
      <section className="py-24 bg-brand-lilac">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader tag="Platform Features" title="Everything You Need to Coach, Grow & Automate" subtitle="SmartCoach360 is built specifically for fitness coaching—every feature designed around how coaches actually work." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="card group overflow-hidden">
                <div className="relative h-44 overflow-hidden">
                  <img src={f.img} alt={f.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(46,26,50,0.75) 0%, rgba(71,41,76,0.1) 60%, transparent 100%)" }} />
                  <div className="absolute bottom-4 left-4"><span className="text-2xl">{f.icon}</span></div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-brand-black mb-2">{f.title}</h3>
                  <p className="text-brand-fedora text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-24" style={DARK_BG}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader tag="Who It's For" title={"Built for Every Type of\nFitness Professional"} subtitle="SmartCoach360 adapts to the way you work—from solo trainers to large organisations." light />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {audiences.map((a, i) => (
              <button key={i} onClick={() => navigate(a.page)} className="group relative rounded-3xl overflow-hidden text-left hover:scale-[1.02] transition-all duration-300 shadow-xl">
                <div className="relative aspect-[3/4]">
                  <img src={a.img} alt={a.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,15,31,0.92) 0%, rgba(46,26,50,0.3) 60%, transparent 100%)" }} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-2xl mb-2 block">{a.emoji}</span>
                  <h3 className="font-display text-lg text-brand-lilac mb-1">{a.title}</h3>
                  <p className="text-brand-silver text-xs leading-relaxed">{a.desc}</p>
                  <div className="mt-3 flex items-center gap-1 text-brand-lilac-300 text-xs font-semibold group-hover:gap-2 transition-all">
                    Learn more <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-brand-lilac-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-tag">How It Works</span>
              <h2 className="font-display text-4xl sm:text-5xl text-brand-black mb-6 leading-tight">Up and Running in 4 Simple Steps</h2>
              <p className="text-brand-fedora text-lg leading-relaxed mb-10">From your first demo to fully automated operations—our onboarding team is with you every step of the way.</p>
              <div className="space-y-4">
                {steps.map((s, i) => (
                  <div key={i} className="flex items-start gap-5 bg-brand-lilac rounded-2xl border border-brand-silver-xl p-5 hover:border-brand-lilac-300 transition-colors">
                    <div className="w-12 h-12 rounded-2xl text-brand-lilac font-display text-base font-600 flex items-center justify-center flex-shrink-0 shadow-lg" style={MID_BG}>
                      {s.num}
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-black mb-1">{s.title}</h3>
                      <p className="text-brand-fedora text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4]">
                <img src={IMAGES.coachAndClient} alt="Coach and client" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(46,26,50,0.7) 0%, transparent 60%)" }} />
              </div>
              <div className="absolute -left-6 top-1/3 bg-brand-lilac rounded-2xl p-4 shadow-xl border border-brand-silver-xl float">
                <p className="font-display text-3xl text-brand-boss">35</p>
                <p className="text-brand-fedora text-xs">clients in 6 months</p>
              </div>
              <div className="absolute -right-6 bottom-1/4 rounded-2xl p-4 shadow-xl float-slow" style={MID_BG}>
                <p className="font-display text-3xl text-brand-lilac">4.9★</p>
                <p className="text-brand-silver text-xs">avg. satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS STRIP */}
      <section className="py-16 bg-brand-lilac border-y border-brand-silver-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-fedora text-sm font-semibold mb-8 uppercase tracking-widest">Works With the Tools You Already Use</p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            {integrations.map(t => (
              <span key={t} className="bg-brand-lilac border border-brand-silver-lt text-brand-fedora-dk text-sm font-medium px-4 py-2.5 rounded-xl shadow-sm hover:border-brand-boss/40 hover:text-brand-boss transition-colors cursor-default">
                {t}
              </span>
            ))}
          </div>
          <button onClick={() => navigate("integrations")} className="text-brand-boss font-semibold text-sm hover:text-brand-boss-mid underline underline-offset-4">View all integrations →</button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-brand-lilac">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader tag="Real Results" title="What Coaches Are Saying" subtitle="From solo trainers to large fitness organisations—hear it in their words." />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "I went from 12 to 35 clients in 6 months without burning out. SmartCoach360 gave me my evenings back.", name: "Personal Trainer", img: IMAGES.cs1, metric: "+192% clients" },
              { quote: "Real visibility across all 3 gyms for the first time. Client onboarding went from 2 days to 2 hours.", name: "Gym Owner, 3 Locations", img: IMAGES.cs2, metric: "−35% admin" },
              { quote: "My clients hit their macro goals 3x more consistently. The compliance dashboard changed everything.", name: "Online Nutrition Coach", img: IMAGES.cs3, metric: "79% compliance" },
            ].map((t, i) => (
              <div key={i} className="card p-0 overflow-hidden flex flex-col">
                <div className="relative h-48">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(46,26,50,0.8) 0%, transparent 60%)" }} />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-brand-lilac text-xs font-bold px-3 py-1.5 rounded-xl" style={MID_BG}>{t.metric}</span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <svg className="w-8 h-8 text-brand-lilac-300 mb-3" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                  <p className="text-brand-fedora-dk leading-relaxed mb-4 flex-1 italic">"{t.quote}"</p>
                  <p className="text-brand-boss text-sm font-semibold">— {t.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button onClick={() => navigate("casestudies")} className="btn-primary">
              Read All Case Studies
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="py-20 bg-brand-lilac-100 border-t border-brand-silver-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader tag="Support" title="We're With You Every Step of the Way" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "📖", title: "Help Centre",             desc: "Step-by-step guides and FAQs, available 24/7." },
              { icon: "💬", title: "Live Chat",               desc: "Fast answers from real people during business hours." },
              { icon: "📞", title: "Phone Support",           desc: "Speak to a specialist for immediate, personal help." },
              { icon: "🎓", title: "Live Masterclasses",      desc: "Join live sessions covering features and growth strategies." },
              { icon: "🚀", title: "Personalised Onboarding", desc: "A dedicated specialist configures your setup with you." },
              { icon: "⭐", title: "Dedicated CSM",           desc: "A Customer Success Manager focused entirely on your growth." },
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-4 bg-brand-lilac rounded-2xl border border-brand-silver-xl p-5 hover:border-brand-lilac-300 transition-colors">
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <h4 className="font-semibold text-brand-black text-sm mb-1">{s.title}</h4>
                  <p className="text-brand-fedora text-xs leading-relaxed">{s.desc}</p>
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
