import {IMAGES} from "../images";
import { useNavigate } from "react-router-dom";

  export function CTASection() {
  const CALENDLY = "https://calendly.com/sangameswaran-vmaxhealthtech/30min";
const navigate = useNavigate();
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl px-6 sm:px-10 py-14 text-center backdrop-blur-xl border border-white/10 bg-gradient-to-br from-[#2e1a32] to-[#3c2442] shadow-2xl">

          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                `url(${IMAGES.ctabg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent" />

          <div className="absolute -top-16 right-10 w-40 h-40 bg-purple-400/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-16 left-10 w-52 h-52 bg-pink-300/10 blur-3xl rounded-full" />

          <div className="relative z-10">
            <span className="inline-block text-xs tracking-wide px-4 py-1.5 rounded-full bg-white/10 text-purple-200 mb-5">
              Get Started Today
            </span>

            <h2 className="font-display text-3xl sm:text-4xl text-white mb-4 leading-tight">
              Ready to Transform <br className="hidden sm:block" />
              Your Coaching Business?
            </h2>

            <p className="text-sm sm:text-base text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">
              Book a quick 20-minute demo and see exactly how SmartCoach360
              fits into your workflow, no fluff, no pressure.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button onClick={() => window.open(CALENDLY, "_blank")} className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 text-black font-semibold shadow-lg hover:scale-105 transition">
                Book Free Demo
              </button>

              <button onClick={()=> navigate("/comparison")} className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition flex items-center gap-2">
                Explore Platform
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ tag, title, subtitle, light = false }) {
  return (
   <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">

  {/* LEFT */}
  <div className="max-w-xl">
    <span
      className={`section-tag mb-4 inline-block ${
        light ? "!text-brand-lilac-200" : ""
      }`}
      style={
        light
          ? { backgroundColor: "rgba(71,41,76,0.5)", color: "#e8d9ee" }
          : {}
      }
    >
      {tag}
    </span>

    <h2
      className={`font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight ${
        light ? "text-brand-lilac" : "text-brand-black"
      }`}
    >
      {title}
    </h2>
  </div>

  {/* RIGHT */}
  {subtitle && (
    <p
      className={`max-w-sm text-sm leading-relaxed sm:text-right ${
        light ? "text-brand-silver" : "text-brand-fedora"
      }`}
    >
      {subtitle}
    </p>
  )}

</div>
  );
}

export function CheckIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
    </svg>
  );
}
