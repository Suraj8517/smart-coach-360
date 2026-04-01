import { CTASection, SectionHeader, CheckIcon } from "../components/UI";
import { IMAGES } from "../images";
import React from "react";
import Hero from "../components/home/hero";
import Problem from "../components/home/problem";

import {Trophy,ClipboardList,Salad,MessageSquare,Bolt,CreditCard,BarChart,Users,Smartphone,ShieldCheck,Dumbbell,Building2 } from "lucide-react";
const stats = [
  { value: "10,000+", label: "Clients Managed" },
  { value: "50+",     label: "Platform Features" },
  { value: "15+",     label: "Integrations" },
  { value: "99%",     label: "Payment Collection" },
];


const features =[
  { num:'001', icon:<ClipboardList />, img: IMAGES.groupClass , title:'Program Management', desc:'Build your master library once. Assign fully customised plans to individual clients in seconds. Clients get workouts on the app — no PDFs, no confusion.', tags:['Master Programs','Video Library','Auto Notifications','Custom Exercises'] },
  { num:'002', icon:<Salad />,img: IMAGES.nutrition , title:'Nutrition & Activity', desc:'Create personalised meal plans, set macro targets, track daily compliance. Includes a dedicated female health and hormonal cycle tracker.', tags:['Meal Tracking','Macro Goals','Compliance Monitor','Female Health'] },
  { num:'003', icon:<Bolt />,img: IMAGES.automation , title:'Business Automation', desc:'Lead allocation, client onboarding, payment flows, and communication sequences — completely automated and running in the background.', tags:['Lead Allocation','Auto Onboarding','Payment Flows','Message Sequences'] },
  { num:'004', icon:<MessageSquare />,img: IMAGES.client , title:'Client Engagement', desc:'Automated check-ins, in-app messaging, video calls, group challenges, and digital high-fives. Keep every client engaged between sessions.', tags:['In-App Messaging','Video Calls','Group Challenges','Auto Check-ins'] },
  { num:'005', icon:<CreditCard />,img: IMAGES.pay , title:'Payments & Revenue', desc:'No more chasing. Accept online payments, set up recurring session packs, configure discounts, and handle partial payments — all built in.', tags:['Online Payments','Session Packs','Discount Codes','Instalments'] },
  { num:'006', icon:<BarChart />,img: IMAGES.dashboard , title:'Dashboards & Reports', desc:'Real-time view of client compliance, progress, and business health. Custom surveys, pre-assessment forms, performance dashboards.', tags:['Live Reports','Business Insights','Custom Surveys','Health Intake'] },
  { num:'007', icon:<Users />,img: IMAGES.team , title:'Team & Organisation Management', desc:'Whether you are a solo coach or managing a multi-branch fitness organisation, scale effortlessly. Control teams, assign roles, and oversee operations from one central dashboard.', tags:['Team & Branch Management','Role-Based Access','Coach Allocation Limits','Bulk Upload Tools'] },
  { num:'008', icon:<Smartphone />,img: IMAGES.app , title:'Mobile App iOS & Android', desc:'Run your entire coaching business from your pocket. Coaches and clients get a seamless mobile experience with real-time updates and integrated health tracking.', tags:['iOS & Android Apps','Client Self-Service','Push Notifications','Health Data Sync'] },
  { num:'009', icon:<ShieldCheck />,img: IMAGES.security , title:'Security & Compliance', desc:'Enterprise-grade security built into every plan. Protect sensitive client data with advanced authentication, secure payments, and compliance tools.', tags:['SSO Support','Access Control','PCI-DSS Payments','GDPR Tools'] },
]
const audiences = [
  {
    icon: <Dumbbell />,
    title: "Personal Trainers",
    desc: "More clients, less admin. Everything in one place.",
    img: IMAGES.ptMale,
    page: "usecases",
  },
  {
    icon: <Building2 />,
    title: "Gym Owners & Studios",
    desc: "One platform across your whole location and team.",
    img: IMAGES.gym,
    page: "usecases",
  },
  {
    icon: <Salad />,
    title: "Nutrition Coaches",
    desc: "Personalised plans at scale with real accountability.",
    img: IMAGES.nutritionist,
    page: "usecases",
  },
  {
    icon: <Trophy />,
    title: "Large Organisations",
    desc: "Enterprise tools for multi-branch, multi-coach teams.",
    img: IMAGES.org,
    page: "usecases",
  },
];

const steps = [
  { num: "01", title: "Book a Demo",          desc: "A free 20-minute walkthrough tailored to your business." },
  { num: "02", title: "Set Up Your Platform", desc: "Hands-on onboarding—branding, programs, payments configured." },
  { num: "03", title: "Onboard Your Clients", desc: "Invite clients, assign programmes, and start from day one." },
  { num: "04", title: "Grow Your Business",   desc: "Automations handle ops—you stay focused on coaching." },
];

const integrations = ["WhatsApp","Zoom","Microsoft Teams","Google Sheets","Google Forms","Zoho Forms","Apple Health","Google Fit","Lab Integration","Telephony"];

const DARK_BG = { backgroundColor: "#2e1a32" };
const MID_BG  = { backgroundColor: "#47294c" };

export default function HomePage({ navigate }) {
  return (
    <div className="pt-16">
<Hero DARK_BG={DARK_BG} IMAGES={IMAGES} />
     <Problem/>

      {/* FEATURES */}
      <section className="py-24 bg-brand-lilac">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader tag="Platform Features" title="Everything You Need to Coach, Grow & Automate" subtitle="SmartCoach360 is built specifically for fitness coaching designed around how coaches run sessions, track progress, and manage client communication day to day." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="card group overflow-hidden">
                <div className="relative h-44 overflow-hidden bg-white">
                  <img src={f.img} alt={f.title} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(46,26,50,0.75) 0%, rgba(71,41,76,0.1) 60%, transparent 100%)" }} />
                  <div className="absolute bottom-4 left-4"><span className="text-2xl " style={{color:'var(--bossanova-mid)'}}>{f.icon}</span></div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-brand-black mb-2">{f.title}</h3>
                  <p className="text-brand-fedora text-sm leading-relaxed">{f.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mt-6">
          {f.tags.map((t) => (
            <span key={t} className=" text-[9px] md:text-[8px] tracking-[0.1em] uppercase px-3 py-1 border transition-colors duration-200 rounded-xl" style={{ color: 'var(--silver-xlight)', borderColor: 'var(--silver-xlight)', background: 'var(--bossanova-mid)' }}>
              {t}
            </span>
          ))}
        </div>
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

    {/* Header */}
    <div className="grid lg:grid-cols-2 gap-8 items-end mb-14">
      <div>
        <span className="section-tag">How It Works</span>
        <h2 className="font-display text-4xl sm:text-5xl text-brand-black leading-tight mt-3">
          Up and Running in<br />4 Simple Steps
        </h2>
      </div>
      <div>
        <p className="text-brand-fedora text-lg leading-relaxed">
          From your first demo to fully automated operations—our onboarding team is with you every step of the way.
        </p>
        <button className="btn-primary mt-8">
          Book a Free Demo
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>

    {/* Stepper track */}
    <div className="flex items-start mb-8">
      {steps.map((s, i) => (
        <React.Fragment key={i}>
          {/* Circle + label */}
          <div className="flex flex-col items-center">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center border-2 z-10"
              style={{ background: "#47294c", borderColor: "#47294c" }}
            >
              <span className="text-xs font-semibold text-brand-lilac">{s.num}</span>
            </div>
            <span className="text-xs font-medium mt-2 text-center w-20 text-brand-fedora-dk">
              {s.title}
            </span>
          </div>

          {/* Connector with animated shimmer */}
          {i < steps.length - 1 && (
            <div className="flex-1 mt-[22px] mx-1 rounded-full relative overflow-hidden" style={{ height: "3px", background: "rgba(71,41,76,0.15)" }}>
              <div
                className="absolute inset-y-0 left-0 w-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #47294c 0%, #9b6dbd 50%, #47294c 100%)",
                  backgroundSize: "200% 100%",
                  animation: `lineShimmer 2s linear infinite`,
                  animationDelay: `${i * 0.4}s`,
                }}
              />
              {/* Moving dot */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                style={{
                  background: "#c49ad6",
                  animation: `dotTravel 2s linear infinite`,
                  animationDelay: `${i * 0.4}s`,
                }}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>

    {/* Step cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {steps.map((s, i) => (
        <div
          key={i}
          className="bg-brand-lilac rounded-2xl border border-brand-silver-xl p-5 flex flex-col gap-3 hover:border-brand-boss/40 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-brand-lilac font-display text-sm font-semibold flex-shrink-0"
            style={{ background: "#47294c" }}
          >
            {s.num}
          </div>
          <h3 className="font-display text-base text-brand-black">{s.title}</h3>
          <p className="text-brand-fedora text-sm leading-relaxed flex-1">{s.desc}</p>
        </div>
      ))}
    </div>

    <style>{`
      @keyframes lineShimmer {
        0%   { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
      @keyframes dotTravel {
        0%   { left: 0%;   opacity: 0; }
        5%   { opacity: 1; }
        95%  { opacity: 1; }
        100% { left: 100%; opacity: 0; }
      }
    `}</style>
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
