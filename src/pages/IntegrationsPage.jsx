import { CTASection, SectionHeader } from "../components/UI";
import { IMAGES } from "../images";

const DARK_BG = { backgroundColor: "#2e1a32" };
const MID_BG  = { backgroundColor: "#47294c" };

const groups = [
  { label:"Communication", icon:"💬", items:[
    { name:"WhatsApp", emoji:"📱", desc:"Automated reminders, two-way messaging, and broadcast campaigns from within the platform.", features:["Automated WhatsApp notifications for programs & check-ins","Two-way messaging so clients can reply directly","Broadcast to multiple client groups at once","Connected to your automated message workflows"]},
    { name:"Zoom", emoji:"🎥", desc:"Schedule and launch sessions without copying meeting links. Everything managed in one place.", features:["Schedule Zoom sessions from your coaching dashboard","Meeting links sent to clients automatically","Manage live session recordings in one place","Host group classes and webinars"]},
    { name:"Microsoft Teams", emoji:"💼", desc:"Enterprise-grade coaching communications and team collaboration without switching platforms.", features:["Live coaching sessions and group calls via Teams","Keep team communication in one flow","Enterprise-grade video meeting quality","Automatic scheduling notifications"]},
    { name:"Telephony", emoji:"📞", desc:"Click-to-call directly from client profiles. Every call logged and linked automatically.", features:["Click-to-call from client profiles","Automatic call logging and history tracking","Automated call reminders and follow-ups","Works with your existing telephony infrastructure"]},
  ]},
  { label:"Data & Forms", icon:"📊", items:[
    { name:"Google Sheets", emoji:"📋", desc:"Live access to your SmartCoach360 data in Google Sheets for custom reporting and team collaboration.", features:["Automatically export client data","Build custom dashboards and reports","Real-time data sync always current","Share with your team for collaborative access"]},
    { name:"Google Forms", emoji:"📝", desc:"Leads and client intake from Google Forms flow straight into SmartCoach360—no copy-pasting.", features:["Automatic lead capture from any Google Form","Client intake forms feed directly into profiles","Feedback and satisfaction surveys","Real-time sync the moment someone submits"]},
    { name:"Zoho Forms & Surveys", emoji:"🔗", desc:"Your forms, surveys, and assessments connect directly, keeping all client data centralised.", features:["Lead capture and client intake via Zoho Forms","Survey and assessment tools","Automatic data sync to client records","Custom form workflows and trigger-based automation"]},
  ]},
  { label:"Health & Activity", icon:"❤️", items:[
    { name:"Apple Health", emoji:"🍎", desc:"Steps, sleep, heart rate, and calorie data pulled directly into your coaching dashboard.", features:["Automatic sync of steps, activity, and heart rate","Sleep tracking and recovery data","Calorie and nutrition data alongside meal tracking","Real-time health dashboard for evidence-based coaching"]},
    { name:"Google Fit / Health Connect", emoji:"🤖", desc:"The same depth of health data for Android users—every client gets the same quality of insight.", features:["Activity and workout data sync in real time","Calorie burn and nutrition tracking","Sleep and recovery metrics","Cross-platform compatibility"]},
  ]},
  { label:"Advanced", icon:"⚡", items:[
    { name:"Lab Integration", emoji:"🧬", desc:"Incorporate biomarker data into client profiles—blood test results and health diagnostics alongside coaching data.", features:["Import lab results directly into client profiles","Track biomarkers and health indicators over time","Supports clinical evidence-based coaching","Fully secure and compliant data handling"]},
    { name:"Web Content Builder", emoji:"🌐", desc:"Professional lead capture pages and branded communication templates—no separate website builder needed.", features:["Drag-and-drop page builder for landing pages","Branded email and message templates","Automated lead flow from web enquiries into CRM","No third-party tools required"]},
  ]},
];

export default function IntegrationsPage({ navigate }) {
  return (
    <div className="pt-16">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage:`url(${IMAGES.mobileApp})`, backgroundSize:"cover", backgroundPosition:"center" }} />
        <div className="absolute inset-0" style={{ background:"linear-gradient(100deg,rgba(28,15,31,0.93) 0%,rgba(46,26,50,0.8) 60%,rgba(71,41,76,0.4) 100%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <span className="section-tag" style={{ backgroundColor:"rgba(71,41,76,0.5)", color:"#e8d9ee" }}>Integrations</span>
          <h1 className="font-display text-5xl sm:text-6xl text-brand-lilac mb-5 leading-tight">Connect With the Tools You Already Use</h1>
          <p className="text-brand-silver text-lg leading-relaxed">SmartCoach360 is designed to complement your existing workflow—reducing handoffs, eliminating duplication, and creating a more consistent experience from first enquiry to long-term retention.</p>
        </div>
      </section>

      <section className="bg-brand-lilac">
        {groups.map((group, gi) => (
          <div key={gi} className={`py-20 ${gi % 2 === 0 ? "bg-brand-lilac" : "bg-brand-lilac-100"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-10">
                <span className="text-3xl">{group.icon}</span>
                <h2 className="font-display text-3xl text-brand-black">{group.label} Integrations</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {group.items.map((item, ii) => (
                  <div key={ii} className="card group overflow-hidden">
                    <div className="p-6 flex items-start gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-brand-lilac-100 border border-brand-silver-xl flex items-center justify-center text-3xl flex-shrink-0 group-hover:bg-brand-lilac-200 transition-colors">
                        {item.emoji}
                      </div>
                      <div>
                        <h3 className="font-display text-xl text-brand-black mb-2">{item.name}</h3>
                        <p className="text-brand-fedora text-sm leading-relaxed mb-4">{item.desc}</p>
                        <ul className="space-y-1.5">
                          {item.features.map((f, fi) => (
                            <li key={fi} className="flex items-start gap-2">
                              <svg className="w-3.5 h-3.5 text-brand-boss flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
                              <span className="text-brand-fedora-dk text-xs leading-relaxed">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="py-20" style={DARK_BG}>
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeader tag="Summary" title="All Integrations at a Glance" light />
          <div className="overflow-hidden rounded-3xl border border-brand-boss/50">
            <table className="w-full" style={{ backgroundColor:"rgba(71,41,76,0.25)" }}>
              <thead>
                <tr style={MID_BG}>
                  <th className="text-left p-4 text-sm font-bold text-brand-lilac">Integration</th>
                  <th className="text-left p-4 text-sm font-bold text-brand-lilac">What It Does for You</th>
                </tr>
              </thead>
              <tbody>
                {[["WhatsApp","Automated client messaging and broadcast campaigns"],["Zoom","Live session and webinar scheduling and management"],["Microsoft Teams","Enterprise video meetings and team collaboration"],["Google Sheets","Custom reporting and live data sync"],["Google Forms","Automated lead capture and client intake"],["Zoho Forms","Survey, assessment, and workflow automation"],["Apple Health","Client health, activity, and recovery tracking"],["Google Fit / Health Connect","Cross-platform health data for Android users"],["Telephony","Call management, logging, and follow-up automation"],["Lab Integration","Biomarker and diagnostic data in client profiles"],["Web Content Builder","Branded lead capture pages and communication templates"]].map(([name,what],i)=>(
                  <tr key={i} className="border-b border-brand-boss/30 hover:bg-brand-boss/20 transition-colors">
                    <td className="p-4 text-sm font-semibold text-brand-lilac-100">{name}</td>
                    <td className="p-4 text-sm text-brand-silver">{what}</td>
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
