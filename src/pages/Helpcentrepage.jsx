import { useState } from "react";
import {
 ChevronDown,
} from "lucide-react";



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

export default function HelpCentrePage() {
 return(
      <section className="max-w-3xl mx-auto px-6 pb-24 mt-24">
        <SectionLabel>Frequently Asked Questions</SectionLabel>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => <FaqItem key={i} {...faq} />)}
        </div>
      </section>
  );
}