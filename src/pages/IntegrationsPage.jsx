import { CTASection, SectionHeader } from "../components/UI";
import { IMAGES } from "../images";
import { useEffect, useRef } from "react";

const INTEGRATION_IMAGES = {
  WhatsApp: IMAGES.whatsapp,
  Zoom: IMAGES.zoom,
  "Microsoft Teams": IMAGES.teams,
  "Telephony": IMAGES.telephony,
  "Google Sheets": IMAGES.gsheets,
  "Google Forms": IMAGES.gforms,
  "Zoho Forms": IMAGES.zoho,
  "Apple Health": IMAGES.apple,
  "Google Fit / Health Connect": IMAGES.gfit,
  "Lab Integration": IMAGES.lab,
  "Web Content Builder": IMAGES.web,
};

const groups = [
  {
    label: "Communication", icon: "💬",
    items: [
      { name: "WhatsApp", desc: "Automated reminders, two-way messaging, and broadcast campaigns from within the platform.", features: ["Automated WhatsApp notifications for programs & check-ins", "Two-way messaging so clients can reply directly", "Broadcast to multiple client groups at once", "Connected to your automated message workflows"] },
      { name: "Zoom", desc: "Schedule and launch sessions without copying meeting links. Everything managed in one place.", features: ["Schedule Zoom sessions from your coaching dashboard", "Meeting links sent to clients automatically", "Manage live session recordings in one place", "Host group classes and webinars"] },
      { name: "Microsoft Teams", desc: "Enterprise-grade coaching communications and team collaboration without switching platforms.", features: ["Live coaching sessions and group calls via Teams", "Keep team communication in one flow", "Enterprise-grade video meeting quality", "Automatic scheduling notifications"] },
      { name: "Telephony", desc: "Click-to-call directly from client profiles. Every call logged and linked automatically.", features: ["Click-to-call from client profiles", "Automatic call logging and history tracking", "Automated call reminders and follow-ups", "Works with your existing telephony infrastructure"] },
    ],
  },
  {
    label: "Data & Forms", icon: "📊",
    items: [
      { name: "Google Sheets", desc: "Live access to your SmartCoach360 data in Google Sheets for custom reporting and team collaboration.", features: ["Automatically export client data", "Build custom dashboards and reports", "Real-time data sync always current", "Share with your team for collaborative access"] },
      { name: "Google Forms", desc: "Leads and client intake from Google Forms flow straight into SmartCoach360—no copy-pasting.", features: ["Automatic lead capture from any Google Form", "Client intake forms feed directly into profiles", "Feedback and satisfaction surveys", "Real-time sync the moment someone submits"] },
      { name: "Zoho Forms", desc: "Your forms, surveys, and assessments connect directly, keeping all client data centralised.", features: ["Lead capture and client intake via Zoho Forms", "Survey and assessment tools", "Automatic data sync to client records", "Custom form workflows and trigger-based automation"] },
    ],
  },
  {
    label: "Health & Activity", icon: "❤️",
    items: [
      { name: "Apple Health", desc: "Steps, sleep, heart rate, and calorie data pulled directly into your coaching dashboard.", features: ["Automatic sync of steps, activity, and heart rate", "Sleep tracking and recovery data", "Calorie and nutrition data alongside meal tracking", "Real-time health dashboard for evidence-based coaching"] },
      { name: "Google Fit / Health Connect", desc: "The same depth of health data for Android users—every client gets the same quality of insight.", features: ["Activity and workout data sync in real time", "Calorie burn and nutrition tracking", "Sleep and recovery metrics", "Cross-platform compatibility"] },
    ],
  },
  {
    label: "Advanced", icon: "⚡",
    items: [
      { name: "Lab Integration", desc: "Incorporate biomarker data into client profiles—blood test results and health diagnostics alongside coaching data.", features: ["Import lab results directly into client profiles", "Track biomarkers and health indicators over time", "Supports clinical evidence-based coaching", "Fully secure and compliant data handling"] },
      { name: "Web Content Builder", desc: "Professional lead capture pages and branded communication templates—no separate website builder needed.", features: ["Drag-and-drop page builder for landing pages", "Branded email and message templates", "Automated lead flow from web enquiries into CRM", "No third-party tools required"] },
    ],
  },
];

const ALL_INTEGRATIONS = [
  ["WhatsApp",                   "Automated client messaging and broadcast campaigns"],
  ["Zoom",                        "Live session and webinar scheduling and management"],
  ["Microsoft Teams",             "Enterprise video meetings and team collaboration"],
  ["Google Sheets",               "Custom reporting and live data sync"],
  ["Google Forms",                "Automated lead capture and client intake"],
  ["Zoho Forms",                  "Survey, assessment, and workflow automation"],
  ["Apple Health",                "Client health, activity, and recovery tracking"],
  ["Google Fit / Health Connect", "Cross-platform health data for Android users"],
  ["Telephony",                   "Call management, logging, and follow-up automation"],
  ["Lab Integration",             "Biomarker and diagnostic data in client profiles"],
  ["Web Content Builder",         "Branded lead capture pages and communication templates"],
];

const ALL_LOGOS = [
  { id: "whatsapp",  name: "WhatsApp",             src: IMAGES.whatsapp  },
  { id: "zoom",      name: "Zoom",                 src: IMAGES.zoom      },
  { id: "teams",     name: "Microsoft Teams",       src: IMAGES.teams     },
  { id: "gsheets",   name: "Google Sheets",         src: IMAGES.gsheets   },
  { id: "gforms",    name: "Google Forms",          src: IMAGES.gforms    },
  { id: "zoho",      name: "Zoho Forms",            src: IMAGES.zoho      },
  { id: "apple",     name: "Apple Health",          src: IMAGES.apple     },
  { id: "gfit",      name: "Google Fit",            src: IMAGES.gfit      },
  { id: "telephony", name: "Telephony",             src: IMAGES.telephony },
  { id: "lab",       name: "Lab Integration",       src: IMAGES.lab       },
  { id: "web",       name: "Web Content Builder",   src: IMAGES.web       },
];

function MarqueeLogoCard({ logo }) {
  return (
    <div
      className="group flex-shrink-0 flex flex-col items-center justify-center gap-2"
      style={{
        width: 72,
        height: 72,
        borderRadius: 16,
        backgroundColor: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(8px)",
        transition: "background 0.25s, border-color 0.25s",
        cursor: "default",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.backgroundColor = "rgba(160,108,176,0.18)";
        e.currentTarget.style.borderColor = "rgba(160,108,176,0.45)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
      }}
    >
      <img
        src={logo.src}
        alt={logo.name}
        style={{
          width: 32,
          height: 32,
          objectFit: "contain",
          filter: "brightness(0.85) saturate(0.7)",
          transition: "filter 0.25s, transform 0.25s",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.filter = "brightness(1) saturate(1)";
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.filter = "brightness(0.85) saturate(0.7)";
          e.currentTarget.style.transform = "scale(1)";
        }}
        onError={e => { e.target.style.display = "none"; }}
      />
    </div>
  );
}

function MarqueeRow({ logos, reverse = false, speed = 7 }) {
  const tripled = [...logos, ...logos, ...logos];
  const duration = `${logos.length * speed}s`;
  const animName = reverse ? "marqueeRev" : "marquee";
  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div
        style={{
          display: "flex",
          gap: 10,
          width: "max-content",
          animation: `${animName} ${duration} linear infinite`,
        }}
      >
        {tripled.map((logo, i) => (
          <MarqueeLogoCard key={`${logo.id}-${i}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function IntegrationCard({ item }) {
  const imgSrc = INTEGRATION_IMAGES[item.name];

  return (
    <div
      className="group relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: "#fff",
        border: "1px solid #e8e0ed",
        boxShadow: "0 1px 4px rgba(46,26,50,0.05), 0 4px 24px rgba(46,26,50,0.04)",
      }}
    >
      {/* Logo area */}
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height: 152, backgroundColor: "#faf7fc" }}
      >
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: "radial-gradient(circle at 50% 70%, rgba(71,41,76,0.1) 0%, transparent 65%)",
          }}
        />
        <img
          src={imgSrc}
          alt={item.name}
          className="relative z-10 h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.12))" }}
          onError={(e) => { e.target.style.display = "none"; }}
        />
        {/* Bottom fade line */}
        <div
          className="absolute bottom-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent 0%, #ddd4e4 40%, #ddd4e4 60%, transparent 100%)" }}
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 pt-5">
        <h3
          className="font-display text-[1.125rem] font-semibold mb-2 leading-snug"
          style={{ color: "#1c0f1f" }}
        >
          {item.name}
        </h3>
        <p
          className="text-[0.8125rem] leading-relaxed mb-5"
          style={{ color: "#8a7490", lineHeight: "1.65" }}
        >
          {item.desc}
        </p>

        {/* Divider */}
        <div className="mb-4 h-px" style={{ backgroundColor: "#f0eaf3" }} />

        <ul className="space-y-2.5 mt-auto">
          {item.features.map((f, fi) => (
            <li key={fi} className="flex items-start gap-2.5">
              <span
                className="flex-shrink-0 w-[18px] h-[18px] rounded-full flex items-center justify-center mt-[1px]"
                style={{ backgroundColor: "#47294c" }}
              >
                <CheckIcon />
              </span>
              <span
                className="text-[0.75rem] leading-snug"
                style={{ color: "#5c4862", lineHeight: "1.6" }}
              >
                {f}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function IntegrationsPage({ navigate }) {
  return (
    <div className="pt-16">

      {/* ── KEYFRAMES ── */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        @keyframes marqueeRev {
          from { transform: translateX(-33.333%); }
          to   { transform: translateX(0); }
        }
      `}</style>

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden flex flex-col"
        style={{ backgroundColor: "#1c0f1f", minHeight: "88vh", paddingTop: "5rem" }}
      >
        {/* Ambient blobs */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[420px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(71,41,76,0.6) 0%, transparent 70%)",
            filter: "blur(48px)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[320px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 100% 100%, rgba(129,69,140,0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Text block */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center pt-12 pb-14">
          <span
            className="inline-block text-[0.7rem] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-8"
            style={{ backgroundColor: "rgba(71,41,76,0.6)", color: "#c9a8d6", border: "1px solid rgba(129,69,140,0.35)" }}
          >
            Integrations
          </span>
          <h1
            className="font-display text-5xl sm:text-[3.5rem] leading-[1.1] mb-6"
            style={{ color: "#faf4fc" }}
          >
            Connect With the Tools<br />
            <span style={{ color: "#a06cb0" }}>You Already Use</span>
          </h1>
          <p
            className="text-base sm:text-[1.0625rem] leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#8a7490" }}
          >
            SmartCoach360 is designed to complement your existing workflow—reducing handoffs,
            eliminating duplication, and creating a more consistent experience from first
            enquiry to long-term retention.
          </p>
        </div>

        
        <div className="relative z-10 flex-1 flex flex-col justify-center gap-3 pb-12 overflow-hidden max-w-3xl mx-auto">
         
          <div
            className="absolute inset-y-0 left-0 z-20 pointer-events-none"
            style={{ width: "12vw", background: "linear-gradient(to right, #1c0f1f 40%, transparent)" }}
          />
          <div
            className="absolute inset-y-0 right-0 z-20 pointer-events-none"
            style={{ width: "12vw", background: "linear-gradient(to left, #1c0f1f 40%, transparent)" }}
          />

          <MarqueeRow logos={ALL_LOGOS} reverse={false} speed={7} />
          <MarqueeRow logos={[...ALL_LOGOS.slice(4), ...ALL_LOGOS.slice(0, 4)]} reverse={true} speed={6} />
          <MarqueeRow logos={[...ALL_LOGOS.slice(7), ...ALL_LOGOS.slice(0, 7)]} reverse={false} speed={8} />
        </div>

        {/* Bottom border fade */}
        <div
          className="absolute bottom-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(162,122,175,0.2), transparent)" }}
        />
      </section>

      {/* ── INTEGRATION GROUPS ── */}
      {groups.map((group, gi) => (
        <section
          key={gi}
          className="py-20"
          style={{ backgroundColor: gi % 2 === 0 ? "#fff" : "#faf7fc" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Group header */}
            <div className="flex items-center gap-4 mb-12">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shadow-sm flex-shrink-0"
                style={{ backgroundColor: "#fff", border: "1px solid #e8e0ed", boxShadow: "0 2px 8px rgba(46,26,50,0.07)" }}
              >
                {group.icon}
              </div>
              <div>
                <p
                  className="text-[0.65rem] font-bold uppercase tracking-[0.18em] mb-0.5"
                  style={{ color: "#b09abc" }}
                >
                  Category
                </p>
                <h2
                  className="font-display text-2xl font-semibold leading-tight"
                  style={{ color: "#1c0f1f" }}
                >
                  {group.label} Integrations
                </h2>
              </div>

              <div className="ml-auto hidden sm:flex items-center gap-3">
                <div
                  className="h-px w-24"
                  style={{ background: "linear-gradient(90deg, #ddd4e4, transparent)" }}
                />
                <span
                  className="text-[0.7rem] font-semibold px-3 py-1 rounded-full"
                  style={{ backgroundColor: "#f0eaf3", color: "#8a7490", border: "1px solid #e0d6e8" }}
                >
                  {group.items.length} integration{group.items.length > 1 ? "s" : ""}
                </span>
              </div>
            </div>

            {/* Cards */}
            <div className={`grid gap-5 ${
              group.items.length === 4
                ? "sm:grid-cols-2 lg:grid-cols-4"
                : group.items.length === 3
                ? "sm:grid-cols-2 lg:grid-cols-3"
                : "sm:grid-cols-2"
            }`}>
              {group.items.map((item, ii) => (
                <IntegrationCard key={ii} item={item} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── SUMMARY TABLE ── */}
      <section
        className="py-20"
        style={{ backgroundColor: "#faf7fc", borderTop: "1px solid #e8e0ed" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <div className="text-center mb-12">
            <span
              className="inline-block text-[0.7rem] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-5"
              style={{ backgroundColor: "#f0eaf3", color: "#7b4e87", border: "1px solid #ddd4e4" }}
            >
              Summary
            </span>
            <h2
              className="font-display text-3xl sm:text-4xl font-semibold"
              style={{ color: "#1c0f1f" }}
            >
              All Integrations at a Glance
            </h2>
          </div>

          {/* Table card */}
          <div
            className="overflow-hidden rounded-2xl"
            style={{
              border: "1px solid #e0d6e8",
              boxShadow: "0 4px 32px rgba(46,26,50,0.07), 0 1px 4px rgba(46,26,50,0.05)",
            }}
          >
            <table className="w-full" style={{ backgroundColor: "#fff" }}>
              <thead>
                <tr style={{ backgroundColor: "#f7f2fa", borderBottom: "1px solid #e8e0ed" }}>
                  <th
                    className="text-left px-6 py-4 text-[0.65rem] font-bold uppercase tracking-[0.16em]"
                    style={{ color: "#a891b0" }}
                  >
                    Integration
                  </th>
                  <th
                    className="text-left px-6 py-4 text-[0.65rem] font-bold uppercase tracking-[0.16em]"
                    style={{ color: "#a891b0" }}
                  >
                    What It Does for You
                  </th>
                </tr>
              </thead>
              <tbody>
                {ALL_INTEGRATIONS.map(([name, what], i) => (
                  <tr
                    key={i}
                    className="group transition-colors"
                    style={{
                      borderBottom: i < ALL_INTEGRATIONS.length - 1 ? "1px solid #f0eaf3" : "none",
                    }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = "#faf7fc"}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {INTEGRATION_IMAGES[name] && (
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: "#f7f2fa", border: "1px solid #ede6f2" }}
                          >
                            <img
                              src={INTEGRATION_IMAGES[name]}
                              alt={name}
                              className="w-4 h-4 object-contain"
                              onError={(e) => { e.target.style.display = "none"; }}
                            />
                          </div>
                        )}
                        <span
                          className="text-sm font-semibold"
                          style={{ color: "#2e1a32" }}
                        >
                          {name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm" style={{ color: "#8a7490" }}>{what}</span>
                    </td>
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