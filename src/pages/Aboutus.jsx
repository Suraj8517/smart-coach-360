export default function AboutPage() {
  return (
    <div className="font-sans text-[#1c0f1f] bg-white">
      <section className="relative overflow-hidden bg-[#1c0f1f] flex flex-col items-center text-center px-6 py-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[420px] blur-[52px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(71,41,76,.65),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[320px] blur-[60px] bg-[radial-gradient(ellipse_at_100%_100%,rgba(129,69,140,.18),transparent_70%)]" />
        <div className="absolute top-[30%] left-0 w-[380px] h-[280px] blur-[48px] bg-[radial-gradient(ellipse_at_0%_50%,rgba(71,41,76,.22),transparent_70%)]" />

        <div className="relative z-10 max-w-[860px] mt-14">
          <span className="inline-block text-[0.67rem] font-bold uppercase tracking-[0.18em] px-4 py-1 rounded-full mb-6 bg-[rgba(71,41,76,0.6)] text-[#c9a8d6] border border-[rgba(129,69,140,0.35)]">
            About Us
          </span>

          <h1 className="font-serif text-[clamp(2.5rem,5.5vw,3.75rem)] leading-tight text-[#faf4fc] mb-5">
            Built by Fitness Professionals,<nobr />
            <br />
            <span className="bg-gradient-to-r from-[#a06cb0] via-[#e8c8f0] to-[#c9a8d6] bg-[length:300%] text-transparent bg-clip-text animate-[shimmer_5s_linear_infinite]">
              for Fitness Professionals
            </span>
          </h1>

          <p className="text-[clamp(.9375rem,1.5vw,1.0625rem)] leading-[1.8] text-[#8a7490] mb-14">
            SmartCoach360 was founded with a clear purpose: to give fitness professionals an enterprise-quality platform purpose-built for coaching—without the compromises required by generic business software.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              ["10K+", "Coaches Worldwide"],
              ["500K+", "Clients Managed"],
              ["40+", "Features Released"],
              ["15+", "Integrations"],
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center px-8 py-5 rounded-xl bg-white/5 border border-white/10">
                <span className="font-serif text-2xl text-[#c9a8d6]">{s[0]}</span>
                <span className="text-[0.67rem] text-[#6b5272] mt-1">{s[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1c0f1f] relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 px-12 py-24">
          <div className="md:pr-16 border-b md:border-b-0 md:border-r border-white/10 pb-12 md:pb-0">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-[1px] bg-[#a06cb0]" />
              <span className="text-[0.67rem] uppercase tracking-[0.18em] text-[#a06cb0]">Our Story</span>
            </div>

            <h2 className="font-serif text-[clamp(2.1rem,3.5vw,3rem)] text-[#faf4fc] mb-6">
              Where It <br /> All <em className="text-[#c9a8d6]">Started</em>
            </h2>

            <p className="italic text-[#c9a8d6]/60 border-l-2 border-[#a06cb0]/40 pl-5">
              "Most business tools weren't built for the realities of fitness coaching. Coaches needed one system—without stitching together dozens of apps."
            </p>
          </div>

          <div className="md:pl-16 flex flex-col gap-6 mt-10 md:mt-0">
            {[
              "We talked to hundreds of personal trainers, gym owners, and nutrition coaches. And we heard the same stories over and over—too many tools, too much admin, too little time for actual coaching.",
              "Client data scattered everywhere. Payments chased manually. Follow-ups forgotten. Businesses stuck at a ceiling they couldn't see past.",
              "That was the moment we committed to building the platform we all wished had always existed. One system. Everything you need. Built from day one for the specific way coaching businesses actually work.",
            ].map((t, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-[#a06cb0]/50 font-serif text-sm">0{i + 1}</span>
                <p className="text-[#c9a8d6]/70 text-sm leading-7">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#faf7fc] py-24">
        <div className="max-w-[1200px] mx-auto px-12">
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div>
              <span className="inline-block text-xs uppercase tracking-widest mb-4 bg-[#f0eaf3] text-[#7b4e87] px-4 py-1 rounded-full">
                What We Stand For
              </span>
              <h2 className="font-serif text-[clamp(2rem,3.5vw,2.75rem)]">
                Five principles that <em className="text-[#47294c]">shape</em>
                <br /> everything we build
              </h2>
            </div>

            <p className="text-sm text-[#8a7490] max-w-sm">
              From the first line of code to the support call, every decision at SmartCoach360 comes back to these values.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              ["🎯", "Coach-first Thinking"],
              ["⚡", "Simplicity at Scale"],
              ["🔄", "Continuous Improvement"],
              ["🔒", "Data Security"],
              ["🤝", "Partnership"],
            ].map((v, i) => (
              <div key={i} className="p-8 bg-white border rounded-2xl">
                <div className="text-2xl mb-4">{v[0]}</div>
                <h3 className="font-serif mb-2">{v[1]}</h3>
                <p className="text-sm text-[#8a7490]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1c0f1f] py-24 text-center">
        <h2 className="text-3xl text-white font-serif mb-6">
          Building the Future of Fitness Coaching
        </h2>
        <p className="text-[#8a7490] mb-8 max-w-xl mx-auto">
          Every fitness coach deserves enterprise-quality tools that are easy to use.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-[#a06cb0] text-white rounded-lg">
            Get Started Free
          </button>
          <button className="px-6 py-3 border border-white/20 text-[#c9a8d6] rounded-lg">
            Talk to Our Team
          </button>
        </div>
      </section>
    </div>
  );
}
