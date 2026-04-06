import { CTASection, SectionHeader, CheckIcon } from "../components/UI";
import { IMAGES } from "../images";
import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/home/hero";
import Problem from "../components/home/problem";
import Features from "../components/home/features";
import Integration from "../components/home/integration";
import { useState,useEffect } from "react";
import {
  Trophy,
  ClipboardList,
  Salad,
  MessageSquare,
  Bolt,
  CreditCard,
  BarChart,
  Users,
  Smartphone,
  ShieldCheck,
  Dumbbell,
  Building2,
} from "lucide-react";
import Support from "../components/home/support";
import WhoIsIt from "../components/home/whoisit";
import HowItWorks from "../components/home/HowItWorks";
import PageLoader from "../components/PageLoader";
const stats = [
  { value: "10,000+", label: "Clients Managed" },
  { value: "50+", label: "Platform Features" },
  { value: "15+", label: "Integrations" },
  { value: "99%", label: "Payment Collection" },
];

const integrations = [
  "WhatsApp",
  "Zoom",
  "Microsoft Teams",
  "Google Sheets",
  "Google Forms",
  "Zoho Forms",
  "Apple Health",
  "Google Fit",
  "Lab Integration",
  "Telephony",
];

const DARK_BG = { backgroundColor: "#2e1a32" };
const MID_BG = { backgroundColor: "#47294c" };

export default function HomePage() {
      const navigate = useNavigate();
  
  const [loading,setLoading]=useState(true);
useEffect(()=>{
  const timer = setTimeout(()=>{
    setLoading(false);
  },3400)
  return () => clearTimeout(timer);
})
  if(loading) return <PageLoader />;
  return (
    <div className="pt-16">
      <Hero DARK_BG={DARK_BG} IMAGES={IMAGES} navigate={navigate} />
      <Problem navigate={navigate}/>
      <Features />
      <WhoIsIt DARK_BG={DARK_BG} IMAGES={IMAGES} />
      <HowItWorks />
      <Integration navigate={navigate}/>
      {/* TESTIMONIALS 
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
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover object-center" />
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
      */}

      <Support />

      <CTASection navigate={navigate} />
    </div>
  );
}
