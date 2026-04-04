import { CheckIcon } from "./CheckIcon";
import { FontLoader } from "./FontLoader";
import { IMAGES } from "../../images";
import React from "react";

export const Hero = () => (
  <section className="relative overflow-hidden bg-[#1c0f1f] flex flex-col items-center px-6 py-24 text-center">
   
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[420px] pointer-events-none"
      style={{ background: "radial-gradient(ellipse at 50% 0%,rgba(71,41,76,.65) 0%,transparent 70%)", filter: "blur(52px)" }} />
    <div className="absolute bottom-0 right-0 w-[500px] h-[320px] pointer-events-none"
      style={{ background: "radial-gradient(ellipse at 100% 100%,rgba(129,69,140,.18) 0%,transparent 70%)", filter: "blur(60px)" }} />
    <div className="absolute top-[30%] left-0 w-[380px] h-[280px] pointer-events-none"
      style={{ background: "radial-gradient(ellipse at 0% 50%,rgba(71,41,76,.22) 0%,transparent 70%)", filter: "blur(48px)" }} />
    {/* Grid */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
      style={{ backgroundImage: "linear-gradient(rgba(200,160,220,1) 1px,transparent 1px),linear-gradient(90deg,rgba(200,160,220,1) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />

    <div className="relative z-10 max-w-[760px]">
      {/* Badge */}
      <span className="fade-up d1 inline-block text-[0.67rem] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-7 bg-[rgba(71,41,76,0.6)] text-[#c9a8d6] border border-[rgba(129,69,140,0.35)]">
        About Us
      </span>

      <h1 className="fade-up d2 sc-fd text-[clamp(2.5rem,5.5vw,3.75rem)] leading-[1.08] text-[#faf4fc] mb-5">
        Built by Fitness Professionals,<br />
        <span className="shimmer-text">for Fitness Professionals</span>
      </h1>

      <p className="fade-up d3 sc-fb text-[clamp(0.9375rem,1.5vw,1.0625rem)] leading-[1.78] text-[#8a7490] max-w-[640px] mx-auto mb-14">
        SmartCoach360 was founded with a clear purpose: to give fitness professionals an enterprise-quality platform purpose-built for coaching—without the compromises required by generic business software.
      </p>

      {/* Stats */}
      <div className="fade-up d4 flex flex-wrap justify-center gap-3">
        {[
          { v: "10K+", l: "Coaches Worldwide" },
          { v: "500K+", l: "Clients Managed" },
          { v: "40+", l: "Features Released" },
          { v: "15+", l: "Integrations" },
        ].map(({ v, l }) => (
          <div key={l} className="stat-card flex flex-col items-center px-8 py-[18px] rounded-2xl min-w-[120px] bg-white/5 border border-white/10 transition-all duration-300 cursor-default">
            <span className="sc-fd text-[2rem] text-[#c9a8d6] leading-none">{v}</span>
            <span className="text-[0.67rem] font-semibold text-[#6b5272] mt-1.5 tracking-[0.04em]">{l}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom line */}
    <div className="absolute bottom-0 left-0 right-0 h-px"
      style={{ background: "linear-gradient(90deg,transparent,rgba(162,122,175,.2),transparent)" }} />
  </section>
);
