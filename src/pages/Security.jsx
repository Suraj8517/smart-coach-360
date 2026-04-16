import { useEffect, useState } from "react";
import {
  KeyRound, Users, Lock, CreditCard, ShieldCheck,
  Database, ServerCrash, EarthLock, ChevronDown, ArrowRight,
  CheckCircle2, Globe, Clock4
} from "lucide-react";
import { useNavigate } from "react-router-dom";
const url =import.meta.env.VITE_CALENDLY_LINK;

// ── Font + keyframe injector
const FontLoader = () => {
  useEffect(() => {
    if (document.getElementById("sc360-sec-fonts")) return;
    const link = document.createElement("link");
    link.id = "sc360-sec-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.id = "sc360-sec-styles";
    style.textContent = `
      @keyframes shimmer {
        0%   { background-position: -300% center; }
        100% { background-position:  300% center; }
      }
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(20px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes pulse-ring {
        0%   { transform: scale(0.95); opacity: 0.6; }
        70%  { transform: scale(1.15); opacity: 0; }
        100% { transform: scale(1.15); opacity: 0; }
      }
      .sc-fd  { font-family: 'DM Serif Display', Georgia, serif; }
      .sc-fb  { font-family: 'DM Sans', system-ui, sans-serif; }
      .shimmer-text {
        background: linear-gradient(90deg, #a06cb0 0%, #e8c8f0 35%, #a06cb0 55%, #c9a8d6 100%);
        background-size: 300% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: shimmer 5s linear infinite;
      }
      .fade-up  { animation: fadeUp 0.65s ease both; }
      .d1 { animation-delay: 0.05s; }
      .d2 { animation-delay: 0.16s; }
      .d3 { animation-delay: 0.27s; }
      .d4 { animation-delay: 0.38s; }

      /* Feature card hover */
      .feat-card { transition: transform 0.28s, box-shadow 0.28s, border-color 0.28s; }
      .feat-card:hover { transform: translateY(-5px); box-shadow: 0 20px 56px rgba(46,26,50,0.11); border-color: rgba(160,108,176,0.45); }
      .feat-card:hover .feat-icon-wrap { background: rgba(160,108,176,0.15); border-color: rgba(160,108,176,0.4); }

      /* Table row hover */
      .sum-row { transition: background 0.18s; }
      .sum-row:hover { background: #f7f2fa; }

      /* FAQ accordion */
      .faq-item { transition: background 0.2s; }
      .faq-item:hover { background: #f7f2fa; }
      .faq-answer { overflow: hidden; transition: max-height 0.35s ease, opacity 0.28s ease; }

      /* Pulse dot */
      .pulse-ring::before {
        content: '';
        position: absolute;
        inset: -4px;
        border-radius: 50%;
        background: rgba(160,108,176,0.3);
        animation: pulse-ring 2.2s ease-out infinite;
      }

      /* Vertical separator */
      .v-sep { width: 1px; background: rgba(255,255,255,0.1); align-self: stretch; }

      /* Gradient line top */
      .grad-line-top::before {
        content: '';
        position: absolute;
        top: -1px; left: 0; right: 0; height: 1px;
        background: linear-gradient(90deg, transparent 0%, #e8e0ed 30%, #e8e0ed 70%, transparent 100%);
      }

      /* Scrollbar hidden for table */
      .no-scroll::-webkit-scrollbar { display: none; }
      .no-scroll { -ms-overflow-style: none; scrollbar-width: none; }
    `;
    document.head.appendChild(style);
  }, []);
  return null;
};

// ════════════════════════════════════
// HERO
// ════════════════════════════════════
const Hero = () => (
  <section className="relative overflow-hidden bg-[#1c0f1f] flex flex-col items-center px-6 pt-24 pb-28 text-center">
    {/* Blobs */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] pointer-events-none"
      style={{ background: "radial-gradient(ellipse at 50% 0%,rgba(71,41,76,.7) 0%,transparent 68%)", filter: "blur(56px)" }} />
    <div className="absolute bottom-0 right-0 w-[420px] h-[300px] pointer-events-none"
      style={{ background: "radial-gradient(ellipse at 100% 100%,rgba(129,69,140,.15) 0%,transparent 70%)", filter: "blur(52px)" }} />
    <div className="absolute top-1/3 left-0 w-[360px] h-[260px] pointer-events-none"
      style={{ background: "radial-gradient(ellipse at 0% 50%,rgba(71,41,76,.18) 0%,transparent 70%)", filter: "blur(44px)" }} />
    {/* Dot grid */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.045]"
      style={{ backgroundImage: "radial-gradient(circle, rgba(200,160,220,1) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

    {/* Shield glow icon */}
    <div className="relative z-10 mb-8 fade-up d1">
      <div className="relative inline-flex">
        <div className="pulse-ring relative w-16 h-16 rounded-full bg-[rgba(71,41,76,0.8)] border border-[rgba(160,108,176,0.4)] flex items-center justify-center">
          <ShieldCheck size={28} strokeWidth={1.5} className="text-[#c9a8d6]" />
        </div>
      </div>
    </div>

    <div className="relative z-10 max-w-[760px]">
      <span className="fade-up d1 inline-block text-[0.67rem] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-6 bg-[rgba(71,41,76,0.6)] text-[#c9a8d6] border border-[rgba(129,69,140,0.35)]">
        Security & Compliance
      </span>

      <h1 className="fade-up d2 sc-fd text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.08] text-[#faf4fc] mb-5">
        Your Business Data is<br />
        <span className="shimmer-text">Safe With SmartCoach360</span>
      </h1>

      <p className="fade-up d3 sc-fb text-[clamp(0.9375rem,1.4vw,1.0625rem)] leading-[1.8] text-[#8a7490] max-w-[600px] mx-auto mb-14">
        Running a coaching business means handling sensitive data every day—client health information, payment details, and private communications. SmartCoach360 is built on enterprise-grade security so you and your clients can operate with confidence.
      </p>

      {/* Trust badges */}
      <div className="fade-up d4 flex flex-wrap justify-center gap-3">
        {[
          { icon: <ShieldCheck size={15} className="text-[#a06cb0]" />, label: "GDPR Compliant" },
          { icon: <CreditCard size={15} className="text-[#a06cb0]" />, label: "PCI DSS" },
          { icon: <Lock size={15} className="text-[#a06cb0]" />, label: "AES-256 Encrypted" },
          { icon: <Clock4 size={15} className="text-[#a06cb0]" />, label: "99.9% Uptime SLA" },
        ].map(({ icon, label }) => (
          <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 text-[0.8rem] font-medium text-[#c9a8d6]">
            {icon}{label}
          </div>
        ))}
      </div>
    </div>

    {/* Bottom gradient line */}
    <div className="absolute bottom-0 left-0 right-0 h-px"
      style={{ background: "linear-gradient(90deg,transparent,rgba(162,122,175,.25),transparent)" }} />
  </section>
);

// ════════════════════════════════════
// SECURITY FEATURES
// ════════════════════════════════════
const features = [
  {
    Icon: KeyRound,
    title: "Single Sign-On (SSO)",
    tag: "Enterprise",
    tagColor: "bg-[#2e1a32] text-[#c9a8d6] border-[rgba(160,108,176,0.3)]",
    bullets: [
      "SAML 2.0 and OAuth 2.0 support",
      "Compatible with all major identity providers",
      "Centralised access management for your whole team",
      "Instant deprovisioning when team members leave",
    ],
    desc: "For organisations and larger teams, SmartCoach360 supports Single Sign-On, allowing your team to access the platform securely through your identity provider.",
  },
  {
    Icon: Users,
    title: "Role-based Access Control",
    tag: "All Plans",
    tagColor: "bg-[#f0eaf3] text-[#7b4e87] border-[#ddd4e4]",
    bullets: [
      "Custom roles for coaches, managers, admins, and support staff",
      "Granular permissions per feature and module",
      "Full audit trail of user actions and data access",
      "Instant access revocation when team members move on",
    ],
    desc: "Not everyone needs access to everything. SmartCoach360 lets you define what each role can see and do—from head coach to receptionist.",
  },
  {
    Icon: Lock,
    title: "Data Encryption",
    tag: "All Plans",
    tagColor: "bg-[#f0eaf3] text-[#7b4e87] border-[#ddd4e4]",
    bullets: [
      "TLS 1.2+ encryption for all data in transit",
      "AES-256 encryption for all data at rest",
      "Encrypted backup storage",
      "Secure API communications across all integrations",
    ],
    desc: "All data moving through SmartCoach360—and all data stored on our servers—is encrypted using industry-standard protocols.",
  },
  {
    Icon: CreditCard,
    title: "Secure Payment Processing",
    tag: "All Plans",
    tagColor: "bg-[#f0eaf3] text-[#7b4e87] border-[#ddd4e4]",
    bullets: [
      "PCI DSS compliant payment processing on all plans",
      "No full card details stored on our infrastructure",
      "Encrypted transaction records",
      "Fraud detection and prevention built in",
    ],
    desc: "Every payment transaction uses PCI DSS compliant payment gateways. We never store full card details on our servers.",
  },
];

const complianceItems = [
  {
    Icon: Globe,
    title: "Data Privacy & GDPR",
    tag: "All Plans",
    tagColor: "bg-[#f0eaf3] text-[#7b4e87] border-[#ddd4e4]",
    bullets: [
      "Tools for managing lawful basis of data processing",
      "Client data access and deletion rights management",
      "Data processing agreements available for enterprise customers",
      "Privacy-by-design principles applied across every feature",
    ],
    desc: "SmartCoach360 gives you the tools to manage client data responsibly and meet your obligations under GDPR and other global data privacy regulations.",
  },
  {
    Icon: EarthLock,
    title: "Your Data Belongs to You",
    tag: "All Plans",
    tagColor: "bg-[#f0eaf3] text-[#7b4e87] border-[#ddd4e4]",
    bullets: [
      "Full data portability—export everything at any time",
      "Complete data deletion on account closure",
      "No third-party data sharing for advertising or marketing",
      "Transparent data processing policy available on request",
    ],
    desc: "Your data is yours. SmartCoach360 never sells, shares, or uses your business data or your clients' personal information for any purpose other than providing you with our service.",
  },
  {
    Icon: ServerCrash,
    title: "Infrastructure & Uptime",
    tag: "Pro & Enterprise",
    tagColor: "bg-[#2e1a32] text-[#c9a8d6] border-[rgba(160,108,176,0.3)]",
    bullets: [
      "99.9% uptime SLA for all paid plans",
      "Automated daily backups with georedundant storage",
      "Real-time monitoring and rapid incident response",
      "Disaster recovery infrastructure built in by default",
    ],
    desc: "SmartCoach360 runs on enterprise-grade cloud infrastructure with built-in redundancy, automated backups, and real-time monitoring.",
  },
];

const FeatureCard = ({ Icon, title, tag, tagColor, bullets, desc, dark = false }) => (
  <div className={`feat-card relative rounded-2xl p-8 border overflow-hidden ${dark ? "bg-[#231329] border-[rgba(255,255,255,0.07)]" : "bg-white border-[#e8e0ed]"}`}>
    {/* Top gradient bar */}
    <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100"
      style={{ background: "linear-gradient(90deg,#47294c,#a06cb0)" }} />

    <div className="flex items-start justify-between gap-4 mb-5">
      <div className={`feat-icon-wrap w-12 h-12 rounded-[14px] flex items-center justify-center border transition-all duration-300 ${dark ? "bg-[rgba(71,41,76,0.5)] border-[rgba(160,108,176,0.25)]" : "bg-[#f0eaf3] border-[#e0d4e8]"}`}>
        <Icon size={20} strokeWidth={1.75} className={dark ? "text-[#c9a8d6]" : "text-[#7b4e87]"} />
      </div>
      <span className={`text-[0.62rem] font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-full border ${tagColor}`}>{tag}</span>
    </div>

    <h3 className={`sc-fd text-[1.15rem] leading-[1.25] mb-2 ${dark ? "text-[#faf4fc]" : "text-[#1c0f1f]"}`}>{title}</h3>
    <p className={`sc-fb text-[0.8125rem] leading-[1.72] mb-6 ${dark ? "text-[rgba(201,168,214,0.6)]" : "text-[#8a7490]"}`}>{desc}</p>

    <ul className="flex flex-col gap-2.5">
      {bullets.map((b) => (
        <li key={b} className="flex items-start gap-2.5">
          <CheckCircle2 size={15} strokeWidth={2} className="text-[#a06cb0] flex-shrink-0 mt-[2px]" />
          <span className={`sc-fb text-[0.8rem] leading-[1.6] ${dark ? "text-[rgba(201,168,214,0.7)]" : "text-[#5c4862]"}`}>{b}</span>
        </li>
      ))}
    </ul>
  </div>
);

const SecurityFeatures = () => (
  <section className="bg-[#1c0f1f] py-24 relative">
    <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
      style={{ backgroundImage: "linear-gradient(rgba(200,160,220,1) 1px,transparent 1px),linear-gradient(90deg,rgba(200,160,220,1) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />

    <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-12">
      {/* Section header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#a06cb0]" />
            <span className="text-[0.67rem] font-bold uppercase tracking-[0.18em] text-[#a06cb0]">Security Features</span>
          </div>
          <h2 className="sc-fd text-[clamp(1.9rem,3.2vw,2.6rem)] leading-[1.12] text-[#faf4fc]">
            Enterprise-grade protection,<br /><em className="italic text-[#c9a8d6]">every step of the way</em>
          </h2>
        </div>
        <p className="sc-fb text-[0.9rem] leading-[1.75] text-[#8a7490] max-w-[320px]">
          Every layer of SmartCoach360 is built with security at its core—not added on as an afterthought.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {features.map((f) => <FeatureCard key={f.title} {...f} dark />)}
      </div>
    </div>
  </section>
);

// ════════════════════════════════════
// COMPLIANCE
// ════════════════════════════════════
const Compliance = () => (
  <section className="relative bg-[#faf7fc] py-24 grad-line-top">
    <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
        <div>
          <span className="inline-block text-[0.67rem] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-4 bg-[#f0eaf3] text-[#7b4e87] border border-[#ddd4e4]">
            Compliance
          </span>
          <h2 className="sc-fd text-[clamp(1.9rem,3.2vw,2.6rem)] leading-[1.12] text-[#1c0f1f]">
            Built to meet your<br /><em className="italic text-[#47294c]">compliance obligations</em>
          </h2>
        </div>
        <p className="sc-fb text-[0.9rem] leading-[1.75] text-[#8a7490] max-w-[320px]">
          Privacy-by-design isn't just a phrase we use—it's built into every part of how the platform works.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {complianceItems.map((f) => <FeatureCard key={f.title} {...f} dark={false} />)}
      </div>
    </div>
  </section>
);

// ════════════════════════════════════
// SUMMARY TABLE
// ════════════════════════════════════
const tableRows = [
  { feature: "SSO (SAML 2.0 / OAuth 2.0)", avail: "Enterprise plan", ent: true },
  { feature: "Role-based Access Control", avail: "All plans", all: true },
  { feature: "TLS 1.2+ Encryption in Transit", avail: "All plans", all: true },
  { feature: "AES-256 Encryption at Rest", avail: "All plans", all: true },
  { feature: "PCI DSS Payment Processing", avail: "All plans", all: true },
  { feature: "GDPR Compliance Tools", avail: "All plans", all: true },
  { feature: "Data Export & Portability", avail: "All plans", all: true },
  { feature: "Audit Trails & Access Logs", avail: "Pro & Enterprise plans", pro: true },
  { feature: "99.9% Uptime SLA", avail: "Pro & Enterprise plans", pro: true },
  { feature: "Data Processing Agreements", avail: "Enterprise plan", ent: true },
  { feature: "Priority Security Support", avail: "Enterprise plan", ent: true },
];

const Badge = ({ label, variant }) => {
  const styles = {
    all:  "bg-[#f0eaf3] text-[#7b4e87] border border-[#ddd4e4]",
    pro:  "bg-[#2e1a32] text-[#c9a8d6] border border-[rgba(160,108,176,0.3)]",
    ent:  "bg-[#47294c] text-[#e8c8f0] border border-[rgba(201,168,214,0.25)]",
  };
  return (
    <span className={`inline-block text-[0.65rem] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full ${styles[variant]}`}>
      {label}
    </span>
  );
};

const SummaryTable = () => (
  <section className="bg-white py-24 relative">
    <div className="absolute top-0 left-0 right-0 h-px"
      style={{ background: "linear-gradient(90deg,transparent 0%,#e8e0ed 30%,#e8e0ed 70%,transparent 100%)" }} />

    <div className="max-w-[900px] mx-auto px-6 sm:px-12">
      <div className="text-center mb-14">
        <span className="inline-block text-[0.67rem] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-4 bg-[#f0eaf3] text-[#7b4e87] border border-[#ddd4e4]">
          Security Summary
        </span>
        <h2 className="sc-fd text-[clamp(1.75rem,3vw,2.4rem)] text-[#1c0f1f]">Everything at a glance</h2>
      </div>

      <div className="rounded-2xl border border-[#e0d6e8] overflow-hidden no-scroll"
        style={{ boxShadow: "0 4px 40px rgba(46,26,50,.07),0 1px 4px rgba(46,26,50,.04)" }}>

       

        <div className="overflow-x-auto no-scroll ">
          <table className="w-full border-collapse bg-white min-w-[480px]">
            <thead>
              <tr className=" border-b border-[#e8e0ed] bg-[#1c0f1f] ">
                <th className="text-left px-6 py-4 sc-fb text-[0.63rem] font-bold uppercase tracking-[0.15em] text-[#a891b0]">Security Feature</th>
                <th className="text-left px-6 py-4 sc-fb text-[0.63rem] font-bold uppercase tracking-[0.15em] text-[#a891b0]">Availability</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map(({ feature, avail, all, pro, ent }) => (
                <tr key={feature} className="sum-row border-b border-[#f0eaf3] last:border-b-0">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 size={14} strokeWidth={2} className="text-[#a06cb0] flex-shrink-0" />
                      <span className="sc-fb text-[0.875rem] font-medium text-[#2e1a32]">{feature}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge
                      label={avail}
                      variant={ent ? "ent" : pro ? "pro" : "all"}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
);

// ════════════════════════════════════
// FAQ
// ════════════════════════════════════
const faqs = [
  { q: "Is SmartCoach360 GDPR compliant?", a: "Yes. We provide the tools and controls your business needs to meet GDPR obligations for client data management." },
  { q: "Where is my data stored?", a: "All data is stored on secure, geo-redundant cloud infrastructure in enterprise-grade data centres." },
  { q: "Can I delete client data?", a: "Yes. You have full control to export or permanently delete any client data at any time." },
  { q: "Does SmartCoach360 support SSO?", a: "Yes. SSO is available for Enterprise plan customers via SAML 2.0 and OAuth 2.0." },
  { q: "Is my clients' payment data secure?", a: "Yes. Payments are processed through PCI DSS compliant gateways, and we never store full card details on our servers." },
  { q: "What happens to my data if I cancel?", a: "You can export your data before cancellation. Data is permanently deleted after a 30-day grace period following account closure." },
];

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`faq-item border-b border-[#f0eaf3] last:border-b-0 cursor-pointer rounded-xl px-6 ${open ? "bg-[#f7f2fa]" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between gap-4 py-5">
        <span className={`sc-fb text-[0.9375rem] font-semibold leading-[1.4] transition-colors duration-200 ${open ? "text-[#47294c]" : "text-[#1c0f1f]"}`}>{q}</span>
        <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${open ? "bg-[#47294c] border-[#47294c] rotate-180" : "bg-white border-[#e0d6e8]"}`}>
          <ChevronDown size={14} strokeWidth={2.5} className={open ? "text-[#c9a8d6]" : "text-[#8a7490]"} />
        </div>
      </div>
      <div className="faq-answer" style={{ maxHeight: open ? "200px" : "0px", opacity: open ? 1 : 0 }}>
        <p className="sc-fb text-[0.875rem] leading-[1.75] text-[#5c4862] pb-5">{a}</p>
      </div>
    </div>
  );
};

const FAQ = () => (
  <section className="bg-[#faf7fc] py-24 relative grad-line-top">
    <div className="max-w-[760px] mx-auto px-6 sm:px-12">
      <div className="text-center mb-14">
        <span className="inline-block text-[0.67rem] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-4 bg-[#f0eaf3] text-[#7b4e87] border border-[#ddd4e4]">
          Frequently Asked Questions
        </span>
        <h2 className="sc-fd text-[clamp(1.75rem,3vw,2.4rem)] text-[#1c0f1f]">Common security questions</h2>
      </div>

      <div className="rounded-2xl border border-[#e0d6e8] bg-white overflow-hidden"
        style={{ boxShadow: "0 4px 40px rgba(46,26,50,.06)" }}>
        {faqs.map((f) => <FAQItem key={f.q} {...f} />)}
      </div>
    </div>
  </section>
);

// ════════════════════════════════════
// CTA
// ════════════════════════════════════
const CTA = ({ navigate }) => (
  
  <section className="relative overflow-hidden bg-[#1c0f1f] py-28">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[420px] pointer-events-none"
      style={{ background: "radial-gradient(ellipse at 50% 0%,rgba(71,41,76,.6) 0%,transparent 70%)", filter: "blur(56px)" }} />
    <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
      style={{ backgroundImage: "radial-gradient(circle, rgba(200,160,220,1) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

    {/* Decorative ring */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[rgba(160,108,176,0.07)] pointer-events-none" />
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[rgba(160,108,176,0.06)] pointer-events-none" />

    <div className="relative z-10 text-center max-w-[680px] mx-auto px-6">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[rgba(71,41,76,0.8)] border border-[rgba(160,108,176,0.35)] mb-8">
        <ShieldCheck size={24} strokeWidth={1.5} className="text-[#c9a8d6]" />
      </div>

      <h2 className="sc-fd text-[clamp(2rem,4vw,3rem)] leading-[1.1] text-[#faf4fc] mb-5">
        Security You Can Trust.<br />
        <span className="shimmer-text">A Platform You Can Rely On.</span>
      </h2>

      <p className="sc-fb text-[1rem] leading-[1.8] text-[#8a7490] mb-12">
        SmartCoach360 delivers enterprise-grade protection without the overhead. Run your coaching business with confidence that your data—and your clients' data—is protected.
      </p>

      {/* Horizontal rule */}
      <div className="flex items-center gap-5 mb-10 justify-center">
        <div className="h-px flex-1 max-w-[100px]" style={{ background: "linear-gradient(90deg,transparent,rgba(160,108,176,0.3))" }} />
        <span className="sc-fb text-[0.72rem] text-[#6b5272] uppercase tracking-[0.12em]">Get started today</span>
        <div className="h-px flex-1 max-w-[100px]" style={{ background: "linear-gradient(90deg,rgba(160,108,176,0.3),transparent)" }} />
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <button    onClick={() => window.open(url, "_blank")} 
          className="sc-fb flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#a06cb0] text-white text-[0.875rem] font-semibold border-none cursor-pointer transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
          style={{ boxShadow: "0 4px 24px rgba(160,108,176,.4)" }}
        >
          Book a Free Demo <ArrowRight size={16} strokeWidth={2} />
        </button>
        <button onClick={()=> navigate("/pricing")}  className="sc-fb px-7 py-3.5 rounded-xl bg-transparent text-[#c9a8d6] text-[0.875rem] font-semibold border border-white/15 cursor-pointer transition-all duration-200 hover:border-[rgba(160,108,176,0.5)] hover:-translate-y-0.5">
          View Pricing →
        </button>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px"
      style={{ background: "linear-gradient(90deg,transparent,rgba(162,122,175,.2),transparent)" }} />
  </section>
);


export default function SecurityPage() {
        const navigate = useNavigate();

  return (
    <div className="sc-fb antialiased bg-white text-[#1c0f1f]">
      <FontLoader />
      <Hero />
      <SecurityFeatures />
      <Compliance />
      <SummaryTable />
      <FAQ />
      <CTA navigate={navigate} />
    </div>
  );
}