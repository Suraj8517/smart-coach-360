import { useState } from "react";
import {
  Calendar, Mail, MessageCircle, Globe,
  Clock, Phone, Zap, ArrowRight, CheckCircle, Send
} from "lucide-react";

const css = `
  @keyframes fadeUp {
    from { opacity:0; transform:translateY(16px); }
    to   { opacity:1; transform:translateY(0); }
  }
  .ct-anim   { animation: fadeUp 0.45s ease both; }
  .ct-anim-1 { animation: fadeUp 0.45s 0.07s ease both; }
  .ct-anim-2 { animation: fadeUp 0.45s 0.14s ease both; }
  .ct-anim-3 { animation: fadeUp 0.45s 0.21s ease both; }

  .ct-input:focus {
    outline: none;
    border-color: #47294c !important;
    box-shadow: 0 0 0 3px rgba(71,41,76,0.1);
  }
  .ct-input::placeholder { color: #c4a8cc; }

  .ct-select:focus {
    outline: none;
    border-color: #47294c !important;
    box-shadow: 0 0 0 3px rgba(71,41,76,0.1);
  }

  .ct-card:hover .ct-card-arrow { transform: translateX(4px); }
  .ct-card-arrow { transition: transform 0.2s ease; }
`;

/* ── contact cards ── */
const contacts = [
  {
    icon: Calendar,
    tag: "Demo",
    title: "Book a Free Demo",
    desc: "Book a no-obligation 20-minute demo and see SmartCoach360 in action. We'll tailor the walkthrough to your workflow.",
    cta: "Book now",
    ctaHref: "#",
    accent: "#47294c",
    accentBg: "rgba(71,41,76,0.07)",
  },
  {
    icon: Mail,
    tag: "Sales",
    title: "Sales Enquiries",
    desc: "Thinking about SmartCoach360 for your business or organisation? Our team will walk you through the right plan.",
    email: "sales@smartcoach360.ai",
    cta: "Send an email",
    ctaHref: "mailto:sales@smartcoach360.ai",
    accent: "#47294c",
    accentBg: "rgba(71,41,76,0.07)",
  },
  {
    icon: MessageCircle,
    tag: "Support",
    title: "Customer Support",
    desc: "Already a SmartCoach360 customer? Our support team is available via live chat in-platform and by email.",
    email: "support@smartcoach360.ai",
    cta: "Get support",
    ctaHref: "mailto:support@smartcoach360.ai",
    accent: "#47294c",
    accentBg: "rgba(71,41,76,0.07)",
  },
  {
    icon: Globe,
    tag: "General",
    title: "General Enquiries",
    desc: "For press, partnerships, or general questions, reach out any time and we'll get back to you.",
    email: "hello@smartcoach360.ai",
    cta: "Say hello",
    ctaHref: "mailto:hello@smartcoach360.ai",
    accent: "#47294c",
    accentBg: "rgba(71,41,76,0.07)",
  },
];

const supportRows = [
  { icon: Mail,  channel: "Email Support",    availability: "Monday–Friday",   note: "Response within 24 hours" },
  { icon: Phone, channel: "Phone Support",    availability: "Business hours",  note: "Pro & Enterprise plans" },
  { icon: Zap,   channel: "Priority Support", availability: "Guaranteed SLA",  note: "Enterprise plan only" },
];

/* ── form ── */
const reasons = [
  "Book a Demo",
  "Sales Enquiry",
  "Technical Support",
  "Partnership / Press",
  "General Question",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", reason: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div className="bg-[#f7f3f8] min-h-screen pt-16">
      <style>{css}</style>

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="border-b border-[#ede8f0] pt-20 pb-16 px-6 bg-[#f7f3f8]">
        <div className="max-w-2xl mx-auto text-center ct-anim">
          <span
            className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#47294c] px-4 py-1.5 rounded-full mb-5"
            style={{ backgroundColor: "rgba(71,41,76,0.1)" }}
          >
            Contact
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
            Have a Question or Want{" "}
            <span style={{ color: "#47294c" }}>a Walkthrough?</span>
          </h1>
          <p className="text-base leading-relaxed text-[#7b6880] max-w-lg mx-auto">
            Tell us what you're looking for and we'll point you to the right plan, setup, or next step.
          </p>
        </div>
      </section>

      {/* ── CONTACT CARDS ────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#a891b0]">Get in Touch</span>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg,#ddd4e4,transparent)" }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contacts.map(({ icon: Icon, tag, title, desc, email, cta, ctaHref }, i) => (
            <div
              key={i}
              className="ct-card group bg-white rounded-2xl p-6 border border-[#ede8f0] flex flex-col transition-all duration-250 hover:-translate-y-1"
              style={{ boxShadow: "0 1px 8px rgba(46,26,50,0.05)" }}
            >
              {/* icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-all duration-200 group-hover:bg-[#47294c]"
                style={{ backgroundColor: "rgba(71,41,76,0.08)" }}
              >
                <Icon size={18} className="transition-colors duration-200 group-hover:text-white text-[#47294c]" />
              </div>

              {/* tag */}
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#a891b0] mb-2">{tag}</span>

              {/* title + desc */}
              <h3 className="text-sm font-bold text-[#1c0f1f] mb-2 leading-snug">{title}</h3>
              <p className="text-xs leading-relaxed text-[#7b6880] flex-1">{desc}</p>

              {/* email pill */}
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="inline-block mt-4 text-[11px] font-semibold text-[#47294c] px-3 py-1.5 rounded-lg no-underline transition-colors duration-150 hover:bg-[#f0e8f4]"
                  style={{ backgroundColor: "rgba(71,41,76,0.07)" }}
                >
                  {email}
                </a>
              )}

              {/* CTA */}
              <a
                href={ctaHref}
                className="inline-flex items-center gap-1.5 mt-5 text-xs font-semibold text-[#47294c] no-underline"
              >
                {cta}
                <ArrowRight size={13} className="ct-card-arrow" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── FORM + SUPPORT HOURS ─────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-12 pb-24">
        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Contact form — 3 cols */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#a891b0]">Contact Form</span>
              <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg,#ddd4e4,transparent)" }} />
            </div>

            <div
              className="bg-white rounded-3xl border border-[#ede8f0] p-8"
              style={{ boxShadow: "0 2px 16px rgba(46,26,50,0.06)" }}
            >
              {sent ? (
                <div className="text-center py-12">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ backgroundColor: "rgba(71,41,76,0.08)" }}
                  >
                    <CheckCircle size={28} color="#47294c" />
                  </div>
                  <h3
                    className="text-xl font-bold text-[#1c0f1f] mb-2"
                    style={{ fontFamily: "var(--font-display,Georgia,serif)" }}
                  >
                    Message sent!
                  </h3>
                  <p className="text-sm text-[#7b6880] leading-relaxed">
                    We'll get back to you within 24 business hours.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", email: "", reason: "", message: "" }); }}
                    className="mt-6 text-xs font-semibold text-[#47294c] underline underline-offset-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Name + Email row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-[#3a2540] uppercase tracking-wide">
                        Your Name <span className="text-[#47294c]">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={set("name")}
                        placeholder="Jane Smith"
                        required
                        className="ct-input px-4 py-3 rounded-xl text-sm text-[#1c0f1f] font-medium border transition-all duration-150"
                        style={{ borderColor: "#e4dcea", backgroundColor: "#faf8fb" }}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-[#3a2540] uppercase tracking-wide">
                        Email Address <span className="text-[#47294c]">*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={set("email")}
                        placeholder="jane@example.com"
                        required
                        className="ct-input px-4 py-3 rounded-xl text-sm text-[#1c0f1f] font-medium border transition-all duration-150"
                        style={{ borderColor: "#e4dcea", backgroundColor: "#faf8fb" }}
                      />
                    </div>
                  </div>

                  {/* Reason select */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#3a2540] uppercase tracking-wide">
                      How Can We Help?
                    </label>
                    <select
                      value={form.reason}
                      onChange={set("reason")}
                      className="ct-select px-4 py-3 rounded-xl text-sm font-medium border transition-all duration-150 appearance-none"
                      style={{
                        borderColor: "#e4dcea",
                        backgroundColor: "#faf8fb",
                        color: form.reason ? "#1c0f1f" : "#c4a8cc",
                      }}
                    >
                      <option value="" disabled>Select a reason…</option>
                      {reasons.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#3a2540] uppercase tracking-wide">
                      Your Message <span className="text-[#47294c]">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={set("message")}
                      placeholder="Tell us a bit about what you're looking for…"
                      required
                      className="ct-input px-4 py-3 rounded-xl text-sm text-[#1c0f1f] font-medium border transition-all duration-150 resize-none"
                      style={{ borderColor: "#e4dcea", backgroundColor: "#faf8fb" }}
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex items-center justify-between flex-wrap gap-4 pt-1">
                    <p className="text-xs text-[#a891b0]">
                      We respond to all enquiries within <span className="font-semibold text-[#7b6880]">24 business hours</span>.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-full transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                      style={{
                        backgroundColor: "#47294c",
                        boxShadow: "0 4px 16px rgba(71,41,76,0.28)",
                      }}
                    >
                      Send Message
                      <Send size={14} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Support hours — 2 cols */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#a891b0]">Support Hours</span>
              <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg,#ddd4e4,transparent)" }} />
            </div>

            <div className="flex flex-col gap-3">
              {supportRows.map(({ icon: Icon, channel, availability, note }, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-[#ede8f0] px-5 py-5 flex items-start gap-4"
                  style={{ boxShadow: "0 1px 8px rgba(46,26,50,0.04)" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(71,41,76,0.07)" }}
                  >
                    <Icon size={17} color="#47294c" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1c0f1f] mb-0.5">{channel}</p>
                    <p className="text-xs font-semibold text-[#47294c] mb-0.5">{availability}</p>
                    <p className="text-xs text-[#a891b0]">{note}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Demo CTA card */}
            <div
              className="mt-4 rounded-2xl p-6 text-center"
              style={{
                background: "linear-gradient(135deg,#2e1a32 0%,#47294c 100%)",
                boxShadow: "0 4px 24px rgba(46,26,50,0.2)",
              }}
            >
              <Calendar size={28} color="#e8d9ee" className="mx-auto mb-3" />
              <h3
                className="font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-display,Georgia,serif)", fontSize: "1.05rem", letterSpacing: "-0.02em" }}
              >
                Prefer to see it live?
              </h3>
              <p className="text-xs leading-relaxed mb-5" style={{ color: "#c4a8cc" }}>
                Book a free 20-minute demo and we'll tailor the walkthrough to your workflow.
              </p>
              <button
                className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:opacity-90"
                style={{
                  backgroundColor: "rgba(255,255,255,0.12)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.18)",
                }}
              >
                Book a Free Demo
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}