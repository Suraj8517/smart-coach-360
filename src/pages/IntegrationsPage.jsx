import { CTASection, SectionHeader } from "../components/UI";
import { IMAGES } from "../images";

const DARK_BG = { backgroundColor: "#2e1a32" };
const MID_BG  = { backgroundColor: "#47294c" };

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
  { label:"Communication", icon:"💬", accent:"#e8f5e9", accentDark:"#2e7d32", items:[
    { name:"WhatsApp", desc:"Automated reminders, two-way messaging, and broadcast campaigns from within the platform.", features:["Automated WhatsApp notifications for programs & check-ins","Two-way messaging so clients can reply directly","Broadcast to multiple client groups at once","Connected to your automated message workflows"]},
    { name:"Zoom", desc:"Schedule and launch sessions without copying meeting links. Everything managed in one place.", features:["Schedule Zoom sessions from your coaching dashboard","Meeting links sent to clients automatically","Manage live session recordings in one place","Host group classes and webinars"]},
    { name:"Microsoft Teams", desc:"Enterprise-grade coaching communications and team collaboration without switching platforms.", features:["Live coaching sessions and group calls via Teams","Keep team communication in one flow","Enterprise-grade video meeting quality","Automatic scheduling notifications"]},
    { name:"Telephony", desc:"Click-to-call directly from client profiles. Every call logged and linked automatically.", features:["Click-to-call from client profiles","Automatic call logging and history tracking","Automated call reminders and follow-ups","Works with your existing telephony infrastructure"]},
  ]},
  { label:"Data & Forms", icon:"📊", accent:"#e3f2fd", accentDark:"#1565c0", items:[
    { name:"Google Sheets", desc:"Live access to your SmartCoach360 data in Google Sheets for custom reporting and team collaboration.", features:["Automatically export client data","Build custom dashboards and reports","Real-time data sync always current","Share with your team for collaborative access"]},
    { name:"Google Forms", desc:"Leads and client intake from Google Forms flow straight into SmartCoach360—no copy-pasting.", features:["Automatic lead capture from any Google Form","Client intake forms feed directly into profiles","Feedback and satisfaction surveys","Real-time sync the moment someone submits"]},
    { name:"Zoho Forms", desc:"Your forms, surveys, and assessments connect directly, keeping all client data centralised.", features:["Lead capture and client intake via Zoho Forms","Survey and assessment tools","Automatic data sync to client records","Custom form workflows and trigger-based automation"]},
  ]},
  { label:"Health & Activity", icon:"❤️", accent:"#fce4ec", accentDark:"#c62828", items:[
    { name:"Apple Health", desc:"Steps, sleep, heart rate, and calorie data pulled directly into your coaching dashboard.", features:["Automatic sync of steps, activity, and heart rate","Sleep tracking and recovery data","Calorie and nutrition data alongside meal tracking","Real-time health dashboard for evidence-based coaching"]},
    { name:"Google Fit / Health Connect", desc:"The same depth of health data for Android users—every client gets the same quality of insight.", features:["Activity and workout data sync in real time","Calorie burn and nutrition tracking","Sleep and recovery metrics","Cross-platform compatibility"]},
  ]},
  { label:"Advanced", icon:"⚡", accent:"#fff8e1", accentDark:"#f57f17", items:[
    { name:"Lab Integration", desc:"Incorporate biomarker data into client profiles—blood test results and health diagnostics alongside coaching data.", features:["Import lab results directly into client profiles","Track biomarkers and health indicators over time","Supports clinical evidence-based coaching","Fully secure and compliant data handling"]},
    { name:"Web Content Builder", desc:"Professional lead capture pages and branded communication templates—no separate website builder needed.", features:["Drag-and-drop page builder for landing pages","Branded email and message templates","Automated lead flow from web enquiries into CRM","No third-party tools required"]},
  ]},
];

function IntegrationCard({ item }) {
  const imgSrc = INTEGRATION_IMAGES[item.name];

  return (
    <div
      className="group relative rounded-3xl overflow-hidden border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
      style={{
        backgroundColor: "#fff",
        borderColor: "#ede8f0",
        boxShadow: "0 2px 16px rgba(46,26,50,0.06)",
      }}
    >
      {/* Top image strip */}
      <div
        className="relative h-44 flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#f7f3f8" }}
      >
        {/* Soft radial glow behind logo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 60%, rgba(71,41,76,0.09) 0%, transparent 70%)",
          }}
        />
        <img
          src={imgSrc}
          alt={item.name}
          className="relative z-10 h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-md"
          onError={(e) => { e.target.style.display = "none"; }}
        />
        {/* Thin decorative line at bottom of image area */}
        <div
          className="absolute bottom-0 left-6 right-6 h-px"
          style={{ background: "linear-gradient(90deg, transparent, #ddd4e4, transparent)" }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="font-display text-xl mb-2 leading-snug"
          style={{ color: "#1c0f1f" }}
        >
          {item.name}
        </h3>
        <p
          className="text-sm leading-relaxed mb-5"
          style={{ color: "#7b6880" }}
        >
          {item.desc}
        </p>

        <ul className="space-y-2">
          {item.features.map((f, fi) => (
            <li key={fi} className="flex items-start gap-2.5">
              <span
                className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5"
                style={{ backgroundColor: "#47294c" }}
              >
                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-xs leading-relaxed" style={{ color: "#5a4760" }}>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function IntegrationsPage({ navigate }) {
  const totalIntegrations = groups.reduce((acc, g) => acc + g.items.length, 0);

  return (
    <div className="pt-16">

      {/* ── HERO: clean, no bg image ── */}
      <section
        className="py-24 border-b"
        style={{ backgroundColor: "#f7f3f8", borderColor: "#ede8f0" }}
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
            style={{ backgroundColor: "rgba(71,41,76,0.1)", color: "#47294c" }}
          >
            Integrations
          </span>
          <h1
            className="font-display text-5xl sm:text-6xl mb-5 leading-tight"
            style={{ color: "#1c0f1f" }}
          >
            Connect With the Tools <br />
            <span style={{ color: "#47294c" }}>You Already Use</span>
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#7b6880" }}
          >
            SmartCoach360 is designed to complement your existing workflow—reducing handoffs,
            eliminating duplication, and creating a more consistent experience from first
            enquiry to long-term retention.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {[
              { value: `${totalIntegrations}+`, label: "Integrations" },
              { value: "4",  label: "Categories" },
              { value: "0",  label: "Extra Tools Needed" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div
                  className="font-display text-4xl mb-1"
                  style={{ color: "#47294c" }}
                >
                  {value}
                </div>
                <div
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "#a891b0" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRATION GROUP SECTIONS ── */}
      {groups.map((group, gi) => (
        <section
          key={gi}
          className="py-20"
          style={{ backgroundColor: gi % 2 === 0 ? "#fff" : "#f7f3f8" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Group header */}
            <div className="flex items-center gap-4 mb-12">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm border"
                style={{ backgroundColor: "#fff", borderColor: "#ede8f0" }}
              >
                {group.icon}
              </div>
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-0.5"
                  style={{ color: "#a891b0" }}
                >
                  Category
                </p>
                <h2
                  className="font-display text-3xl"
                  style={{ color: "#1c0f1f" }}
                >
                  {group.label} Integrations
                </h2>
              </div>
              <div
                className="ml-auto hidden sm:block h-px flex-1 max-w-xs"
                style={{ background: "linear-gradient(90deg, #ddd4e4, transparent)" }}
              />
              <span
                className="hidden sm:inline-block text-xs font-semibold px-3 py-1 rounded-full border"
                style={{ backgroundColor: "#f7f3f8", borderColor: "#ddd4e4", color: "#7b6880" }}
              >
                {group.items.length} integration{group.items.length > 1 ? "s" : ""}
              </span>
            </div>

            {/* Cards grid */}
            <div className={`grid gap-6 ${
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
      <section className="py-20" style={DARK_BG}>
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeader tag="Summary" title="All Integrations at a Glance" light />

          <div
            className="overflow-hidden rounded-3xl border"
            style={{ borderColor: "rgba(162,122,175,0.3)" }}
          >
            <table
              className="w-full"
              style={{ backgroundColor: "rgba(71,41,76,0.25)" }}
            >
              <thead>
                <tr style={MID_BG}>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-widest text-brand-lilac">
                    Integration
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-widest text-brand-lilac">
                    What It Does for You
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["WhatsApp",                    "Automated client messaging and broadcast campaigns"],
                  ["Zoom",                         "Live session and webinar scheduling and management"],
                  ["Microsoft Teams",              "Enterprise video meetings and team collaboration"],
                  ["Google Sheets",                "Custom reporting and live data sync"],
                  ["Google Forms",                 "Automated lead capture and client intake"],
                  ["Zoho Forms",                   "Survey, assessment, and workflow automation"],
                  ["Apple Health",                 "Client health, activity, and recovery tracking"],
                  ["Google Fit / Health Connect",  "Cross-platform health data for Android users"],
                  ["Telephony",                    "Call management, logging, and follow-up automation"],
                  ["Lab Integration",              "Biomarker and diagnostic data in client profiles"],
                  ["Web Content Builder",          "Branded lead capture pages and communication templates"],
                ].map(([name, what], i) => (
                  <tr
                    key={i}
                    className="border-b transition-colors hover:bg-white/5"
                    style={{ borderColor: "rgba(162,122,175,0.15)" }}
                  >
                    <td className="px-6 py-4 flex items-center gap-3">
                      {INTEGRATION_IMAGES[name] && (
                        <img
                          src={INTEGRATION_IMAGES[name]}
                          alt={name}
                          className="w-5 h-5 object-contain opacity-80 flex-shrink-0"
                          onError={(e) => { e.target.style.display = "none"; }}
                        />
                      )}
                      <span className="text-sm font-semibold" style={{ color: "#e8d9ee" }}>
                        {name}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm" style={{ color: "#b0a0b8" }}>
                      {what}
                    </td>
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