import { useState } from "react";
import {
  BookOpen, Users, Dumbbell, Apple, CreditCard, MessageCircle,
  Calendar, Building2, Plug, Smartphone, ShieldCheck, Receipt,
  Search, Play, ChevronDown, ChevronRight, ArrowRight
} from "lucide-react";

/* ─── DATA ─────────────────────────────────────────── */
const categories = [
  { icon: BookOpen,      label: "Getting Started",          desc: "Account setup, onboarding checklist, and first steps" },
  { icon: Users,         label: "Client Management",        desc: "Adding clients, managing profiles, tags, and permissions" },
  { icon: Dumbbell,      label: "Programs & Workouts",      desc: "Building programs, assigning plans, and managing your library" },
  { icon: Apple,         label: "Nutrition Tracking",       desc: "Setting macro goals, creating meal plans, and monitoring compliance" },
  { icon: CreditCard,    label: "Payments & Billing",       desc: "Session packs, invoicing, discounts, and payment processing" },
  { icon: MessageCircle, label: "Messaging & Engagement",   desc: "Automated messages, in-app chat, video calls, and challenges" },
  { icon: Calendar,      label: "Appointments & Scheduling",desc: "Classes, calendar sync, and consultation forms" },
  { icon: Building2,     label: "Team & Organisation",      desc: "Roles, branches, bulk uploads, and access control" },
  { icon: Plug,          label: "Integrations",             desc: "Setup guides for WhatsApp, Zoom, Google, Zoho, and Apple Health" },
  { icon: Smartphone,    label: "Mobile App",               desc: "iOS and Android setup, notifications, and the client portal" },
  { icon: ShieldCheck,   label: "Security & Privacy",       desc: "SSO configuration, data management, and compliance tools" },
  { icon: Receipt,       label: "Billing & Subscription",   desc: "Managing your plan, upgrades, and payment methods" },
];

const popularArticles = [
  "How to Add Your First Client to SmartCoach360",
  "How to Build and Assign a Custom Workout Program",
  "Setting Up Macro Goals and Nutrition Tracking for Clients",
  "How to configure automated check-in messages",
  "Setting Up Payment Processing and Session Packs",
  "How to Integrate SmartCoach360 with WhatsApp",
  "Connecting Zoom for Live Coaching Sessions",
  "How to Sync Apple Health and Google Fit Data",
  "Setting Up Team Roles and Access Permissions",
  "How to Use the Mobile App as a Client",
  "Enabling SSO for Your Organisation",
  "How to Upload Clients and Coaches in Bulk",
];

const videos = [
  { title: "Getting Started with SmartCoach360",      sub: "Full Platform Walkthrough", duration: "15 min" },
  { title: "Building Your First Client Program",      sub: "Step-by-step",             duration: "8 min"  },
  { title: "Setting Up Nutrition Tracking",           sub: "Macro Goals & Plans",      duration: "6 min"  },
  { title: "Configuring Payments & Session Packs",    sub: "Discounts included",       duration: "7 min"  },
  { title: "Auto Messages & Engagement Tools",        sub: "Automations walkthrough",  duration: "5 min"  },
  { title: "Managing Teams & Multiple Branches",      sub: "Organisation setup",       duration: "9 min"  },
  { title: "Integrating WhatsApp, Zoom & Google",     sub: "Third-party connections",  duration: "8 min"  },
  { title: "Dashboards & Reports",                    sub: "Track business performance",duration: "6 min" },
];

const faqs = [
  {
    q: "What is SmartCoach360?",
    a: "An all-in-one CRM and coaching management platform built for fitness professionals, including personal trainers, gym owners, nutrition coaches, and large fitness organisations.",
  },
  {
    q: "Is there a mobile app?",
    a: "Yes. SmartCoach360 has fully featured iOS and Android apps for both coaches and clients.",
  },
  {
    q: "How long does setup take?",
    a: "Most coaches are fully set up and running within 24–48 hours, with hands-on guidance from our onboarding team.",
  },
  {
    q: "Can I set up recurring billing for clients?",
    a: "Yes. Session packs and memberships support fully automated recurring billing.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. SmartCoach360 uses enterprise-grade encryption and follows strict security and compliance practices.",
  },
  {
    q: "Can I migrate data from another platform?",
    a: "Yes. Our onboarding team supports data migration from other coaching platforms as part of your setup.",
  },
];

/* ─── INJECTED CSS ─────────────────────────────────── */
const css = `
  @keyframes fadeUp {
    from { opacity:0; transform:translateY(16px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity:0; }
    to   { opacity:1; }
  }
  .hc-anim { animation: fadeUp 0.5s ease both; }
  .hc-anim-1 { animation: fadeUp 0.5s 0.08s ease both; }
  .hc-anim-2 { animation: fadeUp 0.5s 0.16s ease both; }
  .hc-anim-3 { animation: fadeUp 0.5s 0.24s ease both; }

  .hc-search input::placeholder { color: #a891b0; }
  .hc-search input:focus { outline: none; }

  .hc-cat-card:hover .hc-cat-icon { background-color: #47294c; }
  .hc-cat-card:hover .hc-cat-icon svg { color: #fff !important; }

  .hc-article-row:hover .hc-article-arrow { transform: translateX(4px); opacity: 1; }
  .hc-article-arrow { opacity: 0; transition: all 0.2s ease; }

  .hc-video-card:hover .hc-play-btn { background-color: #47294c; transform: scale(1.08); }
  .hc-play-btn { transition: all 0.25s ease; }
`

/* ─── SUB-COMPONENTS ──────────────────────────────── */
function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="text-[11px] font-bold uppercase tracking-widest text-[#a891b0]">{children}</span>
      <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg,#ddd4e4,transparent)" }} />
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-[#ede8f0] rounded-2xl overflow-hidden transition-all duration-200"
      style={{ backgroundColor: open ? "#faf7fc" : "#fff" }}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer bg-transparent border-none"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm font-semibold text-[#1c0f1f] pr-4 leading-snug">{q}</span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200"
          style={{
            backgroundColor: open ? "#47294c" : "rgba(71,41,76,0.08)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <ChevronDown size={14} color={open ? "#fff" : "#47294c"} />
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-sm leading-relaxed text-[#7b6880]">{a}</p>
        </div>
      )}
    </div>
  );
}

/* ─── MAIN PAGE ───────────────────────────────────── */
export default function HelpCentrePage() {
  const [query, setQuery] = useState("");

  const filtered = query.trim().length > 1
    ? popularArticles.filter(a => a.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <div className="bg-[#f7f3f8] min-h-screen pt-16">
      <style>{css}</style>

      {/* ══ HERO ══════════════════════════════════════ */}
      <section className="border-b border-[#ede8f0] pt-20 pb-16 px-6" style={{ backgroundColor: "#f7f3f8" }}>
        <div className="max-w-2xl mx-auto text-center hc-anim">
          <span
            className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#47294c] px-4 py-1.5 rounded-full mb-5"
            style={{ backgroundColor: "rgba(71,41,76,0.1)" }}
          >
            Help Centre
          </span>
          <h1
            className="font-bold text-[#1c0f1f] mb-4"
            style={{
              fontFamily: "var(--font-display,Georgia,serif)",
              fontSize: "clamp(2rem,5vw,3rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
            }}
          >
            How Can We{" "}
            <span style={{ color: "#47294c" }}>Help You</span>{" "}
            Today?
          </h1>
          <p className="text-base leading-relaxed text-[#7b6880] mb-10 max-w-lg mx-auto">
            Search the knowledge base, browse by category, or contact our team for direct support.
          </p>

          {/* Search */}
          <div
            className="hc-search relative max-w-xl mx-auto"
          >
            <div
              className="flex items-center gap-3 px-5 py-4 rounded-2xl border bg-white transition-all duration-200"
              style={{ borderColor: "#ddd4e4", boxShadow: "0 2px 16px rgba(46,26,50,0.07)" }}
            >
              <Search size={18} color="#a891b0" className="flex-shrink-0" />
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search articles, guides, and tutorials…"
                className="flex-1 bg-transparent text-sm text-[#1c0f1f] font-medium"
                style={{ border: "none" }}
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="text-[#a891b0] hover:text-[#47294c] transition-colors text-xs font-semibold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Search results dropdown */}
            {filtered.length > 0 && (
              <div
                className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl border border-[#ede8f0] overflow-hidden z-20"
                style={{ boxShadow: "0 8px 32px rgba(46,26,50,0.12)" }}
              >
                {filtered.map((a, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-5 py-3.5 text-sm text-[#3a2540] font-medium cursor-pointer border-b border-[#f7f3f8] last:border-0 hover:bg-[#f7f3f8] transition-colors"
                  >
                    <BookOpen size={14} color="#a891b0" className="flex-shrink-0" />
                    {a}
                  </div>
                ))}
              </div>
            )}
            {query.trim().length > 1 && filtered.length === 0 && (
              <div
                className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl border border-[#ede8f0] px-5 py-4 text-sm text-[#a891b0] z-20"
                style={{ boxShadow: "0 8px 32px rgba(46,26,50,0.12)" }}
              >
                No articles found for "<span className="text-[#47294c] font-semibold">{query}</span>"
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══ CATEGORIES ════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <SectionLabel>Help Categories</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map(({ icon: Icon, label, desc }, i) => (
            <div
              key={i}
              className="hc-cat-card group bg-white rounded-2xl p-5 border border-[#ede8f0] cursor-pointer transition-all duration-250 hover:-translate-y-1"
              style={{ boxShadow: "0 1px 8px rgba(46,26,50,0.05)" }}
            >
              <div
                className="hc-cat-icon w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-200"
                style={{ backgroundColor: "rgba(71,41,76,0.08)" }}
              >
                <Icon size={18} color="#47294c" />
              </div>
              <h3 className="text-sm font-bold text-[#1c0f1f] mb-1.5 leading-snug">{label}</h3>
              <p className="text-xs leading-relaxed text-[#a891b0]">{desc}</p>
              <div className="flex items-center gap-1 mt-4 text-[11px] font-semibold text-[#47294c] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Browse articles <ChevronRight size={12} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ POPULAR + VIDEOS (2-col) ══════════════════ */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Popular Articles */}
          <div>
            <SectionLabel>Most Popular Articles</SectionLabel>
            <div className="flex flex-col gap-1.5">
              {popularArticles.map((article, i) => (
                <div
                  key={i}
                  className="hc-article-row group flex items-center gap-3 bg-white px-5 py-4 rounded-xl border border-[#ede8f0] cursor-pointer hover:border-[#ddd4e4] hover:bg-[#faf7fc] transition-all duration-200"
                >
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(71,41,76,0.07)" }}
                  >
                    <BookOpen size={12} color="#47294c" />
                  </div>
                  <span className="flex-1 text-sm font-medium text-[#3a2540] leading-snug">{article}</span>
                  <ArrowRight
                    size={14}
                    color="#47294c"
                    className="hc-article-arrow flex-shrink-0"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Video Tutorials */}
          <div>
            <SectionLabel>Video Tutorials</SectionLabel>
            <div className="flex flex-col gap-3">
              {videos.map((v, i) => (
                <div
                  key={i}
                  className="hc-video-card group flex items-center gap-4 bg-white px-5 py-4 rounded-xl border border-[#ede8f0] cursor-pointer hover:border-[#ddd4e4] hover:bg-[#faf7fc] transition-all duration-200"
                >
                  {/* Play button */}
                  <div
                    className="hc-play-btn w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(71,41,76,0.08)" }}
                  >
                    <Play size={14} color="#47294c" fill="#47294c" />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#1c0f1f] leading-snug truncate">{v.title}</p>
                    <p className="text-xs text-[#a891b0] mt-0.5">{v.sub}</p>
                  </div>

                  {/* Duration pill */}
                  <span
                    className="flex-shrink-0 text-[10px] font-bold text-[#47294c] px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: "rgba(71,41,76,0.08)" }}
                  >
                    {v.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════ */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <SectionLabel>Frequently Asked Questions</SectionLabel>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => <FaqItem key={i} {...faq} />)}
        </div>
      </section>

      
    </div>
  );
}