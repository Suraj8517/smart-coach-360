import { CheckIcon } from "./CheckIcon";
import { FontLoader } from "./FontLoader";
import React from "react";

export const Story = () => (
  <section className="relative overflow-hidden bg-[#1c0f1f]">
    <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 sc-fd text-[clamp(180px,20vw,280px)] text-white/[0.025] leading-none pointer-events-none select-none tracking-[-0.05em]">
      01
    </div>

    <div className="relative z-[2] max-w-[1200px] mx-auto px-12 py-24 grid grid-cols-1 md:grid-cols-2 gap-0">
      <div className="pr-0 pb-12 md:pr-16 md:pb-0 border-b md:border-b-0 md:border-r border-white/[0.07] flex flex-col justify-center mb-12 md:mb-0">
        <div className="flex items-center gap-3.5 mb-8">
          <span className="w-8 h-px bg-[#a06cb0] flex-shrink-0" />
          <span className="text-[0.67rem] font-bold uppercase tracking-[0.18em] text-[#a06cb0]">Our Story</span>
        </div>
        <h2 className="sc-fd text-[clamp(2.1rem,3.5vw,3rem)] leading-[1.13] text-[#faf4fc] mb-7">
          Where It<br />All <em className="italic text-[#c9a8d6]">Started</em>
        </h2>
        <p className="text-[clamp(1rem,1.4vw,1.125rem)] leading-[1.75] text-[rgba(201,168,214,0.65)] italic border-l-2 border-[rgba(160,108,176,0.4)] pl-5 mt-2">
          "Most business tools weren't built for the realities of fitness coaching. Coaches needed one system—without stitching together dozens of apps."
        </p>
      </div>

      {/* Right */}
      <div className="pl-0 md:pl-16 flex flex-col justify-center gap-6">
        {[
          { n: "01", text: <>We talked to hundreds of personal trainers, gym owners, and nutrition coaches. And we heard the same stories over and over—<strong className="text-[#c9a8d6] font-semibold">too many tools, too much admin, too little time for actual coaching.</strong></> },
          { n: "02", text: "Client data scattered everywhere. Payments chased manually. Follow-ups forgotten. Businesses stuck at a ceiling they couldn't see past." },
          { n: "03", text: <>That was the moment we committed to building the platform we all wished had always existed. <strong className="text-[#c9a8d6] font-semibold">One system. Everything you need. Built from day one for the specific way coaching businesses actually work.</strong></> },
        ].map(({ n, text }) => (
          <div key={n} className="flex gap-4 items-start">
            <span className="sc-fd text-[0.875rem] text-[rgba(160,108,176,0.5)] min-w-[28px] pt-[3px] flex-shrink-0 leading-none">{n}</span>
            <p className="sc-fb text-[0.9375rem] leading-[1.8] text-[rgba(201,168,214,0.7)]">{text}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Mission strip */}
    <div className="relative z-[2] border-t border-white/[0.07] ">
      <div className="max-w-[1200px] mx-auto px-12 py-12 grid grid-cols-1 md:grid-cols-[auto_1px_auto] gap-6 md:gap-12 items-center">
        <div>
          <p className="text-[0.67rem] font-bold uppercase tracking-[0.18em] text-[#a06cb0] mb-2.5">Our Mission</p>
          <p className="sc-fd text-[clamp(1.125rem,2vw,1.5rem)] text-[#faf4fc] leading-[1.4]">
            "To help fitness professionals run<br className="hidden md:block" /> a more <em className="italic text-[#c9a8d6]">efficient</em> coaching business."
          </p>
        </div>
        <div className="hidden md:block bg-white/10 self-stretch" />
        <div className="flex flex-col gap-3 min-w-[220px]">
          {["One platform, end-to-end", "Built for coaching workflows", "Enterprise quality, day-one simplicity"].map((t) => (
            <div key={t} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#47294c] flex items-center justify-center flex-shrink-0 border border-[rgba(160,108,176,0.4)]">
                <CheckIcon />
              </div>
              <span className="text-[0.8125rem] font-medium text-[rgba(201,168,214,0.8)]">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);