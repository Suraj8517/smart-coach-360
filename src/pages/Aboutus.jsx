import { Dumbbell, Globe, TrendingUp, Lock, Users } from "lucide-react";

const stats = [
  { num: "10k+", label: "Coaches worldwide" },
  { num: "500k+", label: "Clients managed" },
  { num: "40+", label: "Platform features" },
  { num: "15+", label: "Integrations" },
];

const originStats = [
  { num: "10k+", label: "Coaches using the platform daily", sub: "Across every coaching discipline" },
  { num: "500k+", label: "Clients successfully managed", sub: "Half a million success stories" },
  { num: "40+", label: "Features released", sub: "Built entirely on real feedback" },
  { num: "15+", label: "Ecosystem integrations", sub: "Connecting fitness tech end to end" },
];

const values = [
  { num: "01", icon: Dumbbell, title: "Coach-first thinking", desc: "Every feature starts with one question: does this make life genuinely easier for a coach or their clients? If not, we go back to the drawing board." },
  { num: "02", icon: Globe, title: "Simplicity at scale", desc: "Powerful enough for large organisations with hundreds of coaches. Simple enough for a solo trainer to pick up and use on day one." },
  { num: "03", icon: TrendingUp, title: "Continuous improvement", desc: "We don't ship and move on. We listen, take feedback seriously, and keep improving based on real-world use—not roadmap assumptions." },
  { num: "04", icon: Lock, title: "Data security", desc: "Your clients trust you with their data. You trust us with yours. We protect it with the same care we'd extend to our own." },
  { num: "05", icon: Users, title: "Partnership, not software", desc: "We're invested in the growth of every business on our platform. Our support model reflects that—we're in your corner, not just in your tech stack." },
];

const milestones = [
  { label: ["Platform", "launch"], title: "SmartCoach360 goes live worldwide", desc: "Fitness professionals everywhere gain access to the first platform built specifically for how coaching businesses actually work." },
  { label: ["10,000", "coaches"], title: "A community of 10,000 coaches", desc: "Trainers and coaches across the globe using the platform daily to grow and run their businesses with less friction." },
  { label: ["500k", "clients"], title: "Half a million client success stories", desc: "Real transformations, real results—enabled by coaches with more time to focus on what they do best." },
  { label: ["Mobile", "apps"], title: "Full iOS and Android apps released", desc: "Complete platform access in your pocket—coaches and clients connected anywhere, on any device." },
  { label: ["40+", "features"], title: "40 features shaped by the community", desc: "Every single feature built on real coaching workflows—no speculation, no assumptions." },
  { label: ["Enterprise", "tier"], title: "Multi-branch, SSO & dedicated support", desc: "The full platform available to large fitness organisations—with the infrastructure and security to match." },
];

function Kicker({ children, centered = false, light = false }) {
  return (
    <div className={`flex items-center gap-3 mb-4 ${centered ? "justify-center" : ""}`}>
      <span className="block w-5 h-px" style={{ background: light ? "#47294c" : "#a06cb0" }} />
      <span
        className="text-[0.64rem] font-bold tracking-[0.2em] uppercase"
        style={{ color: light ? "#7b4e87" : "#a06cb0" }}
      >
        {children}
      </span>
      {centered && <span className="block w-5 h-px" style={{ background: light ? "#47294c" : "#a06cb0" }} />}
    </div>
  );
}

export default function AboutUs({ navigate }) {
  return (
    <div className="pt-16">

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: "#100910", minHeight: "80vh", padding: "7rem 1.5rem 6rem" }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: "800px", height: "500px",
            background: "radial-gradient(ellipse at 50% 10%, rgba(100,50,110,0.5) 0%, rgba(71,41,76,0.2) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: "600px", height: "180px",
            background: "radial-gradient(ellipse at 50% 100%, rgba(50,20,55,0.7) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 w-full max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="block w-8 h-px" style={{ background: "#47294c" }} />
            <span className="text-[0.64rem] font-bold tracking-[0.22em] uppercase" style={{ color: "#c9a8d6" }}>
              About SmartCoach360
            </span>
            <span className="block w-8 h-px" style={{ background: "#47294c" }} />
          </div>

          <h1
            className="font-bold mb-5"
            style={{ fontSize: "clamp(2.4rem,6vw,4rem)", color: "#faf4fc", letterSpacing: "-0.025em", lineHeight: "1.05" }}
          >
            Built by coaches.<br />
            <span style={{ color: "#b07ac0" }}>Built for coaches.</span>
          </h1>

          <p
            className="mx-auto mb-12"
            style={{ fontSize: "1.0625rem", color: "#6b5672", maxWidth: "520px", lineHeight: "1.8" }}
          >
            An enterprise-quality platform purpose-built for the way fitness professionals actually
            work—without the compromises of generic software.
          </p>

          <div
            className="grid grid-cols-2 sm:grid-cols-4 rounded-2xl overflow-hidden mx-auto"
            style={{
              border: "1px solid rgba(120,80,130,0.2)",
              background: "rgba(255,255,255,0.025)",
              maxWidth: "680px",
            }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="py-6 px-4 text-center"
                style={{ borderRight: i < stats.length - 1 ? "1px solid rgba(120,80,130,0.15)" : "none" }}
              >
                <div
                  className="font-bold leading-none mb-1"
                  style={{ fontSize: "1.75rem", color: "#d4a8e0", letterSpacing: "-0.03em" }}
                >
                  {s.num}
                </div>
                <div className="text-[0.7rem] tracking-wide" style={{ color: "#6b5672" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORIGIN ── */}
      <section className="py-24 px-6" style={{ backgroundColor: "#fcfafd" }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <Kicker>Where it started</Kicker>
            <h2
              className="font-bold leading-tight mb-6"
              style={{ fontSize: "clamp(1.9rem,4vw,2.75rem)", color: "#1c0f1f", letterSpacing: "-0.02em" }}
            >
              We built the platform<br />we wished existed.
            </h2>
            <p className="mb-5" style={{ fontSize: "0.9375rem", color: "#7b6880", lineHeight: "1.85" }}>
              Most business tools weren't built for the realities of fitness coaching. Coaches were
              stitching together spreadsheets, messaging apps, payment tools, and programming
              platforms—burning time on admin instead of coaching.
            </p>
            <p style={{ fontSize: "0.9375rem", color: "#7b6880", lineHeight: "1.85" }}>
              We talked to hundreds of personal trainers, gym owners, and nutrition coaches. The same
              story, every time: too many tools, too much admin, too little time. We built one system
              to solve all of it—from day one, for the specific way coaching businesses actually work.
            </p>
          </div>

          <div
            className="rounded-2xl p-8"
            style={{ backgroundColor: "#1c0f1f", border: "1px solid rgba(120,80,130,0.2)" }}
          >
            {originStats.map((r, i) => (
              <div
                key={i}
                className="flex gap-6 py-5"
                style={{ borderBottom: i < originStats.length - 1 ? "1px solid rgba(120,80,130,0.1)" : "none" }}
              >
                <div
                  className="font-bold leading-none"
                  style={{ fontSize: "2.25rem", color: "#c9a8d6", letterSpacing: "-0.03em", minWidth: "80px" }}
                >
                  {r.num}
                </div>
                <div className="pt-1">
                  <div className="text-sm leading-snug" style={{ color: "#7b5685" }}>{r.label}</div>
                  <div className="text-xs mt-1" style={{ color: "#4a3050" }}>{r.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-20 px-6" style={{ backgroundColor: "#1c0f1f" }}>
        <div className="max-w-3xl mx-auto text-center">
          <Kicker centered light>Our mission</Kicker>
          <blockquote
            className="italic my-8 px-6 py-8"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.15rem,3vw,1.55rem)",
              color: "#e8d8f0",
              lineHeight: "1.7",
              borderTop: "1px solid rgba(160,108,176,0.25)",
              borderBottom: "1px solid rgba(160,108,176,0.25)",
            }}
          >
            "To help fitness professionals run a more efficient coaching business—by reducing admin,{" "}
            <span style={{ color: "#a06cb0" }}>standardising delivery</span>, and giving every client
            a better experience."
          </blockquote>
          <p className="text-[0.72rem] font-bold tracking-[0.12em] uppercase" style={{ color: "#4a3050" }}>
            SmartCoach360 founding principle
          </p>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <Kicker>Our values</Kicker>
          <h2
            className="font-bold leading-tight mb-14"
            style={{ fontSize: "clamp(1.9rem,4vw,2.75rem)", color: "#1c0f1f", letterSpacing: "-0.02em" }}
          >
            What we stand for
          </h2>

          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden"
            style={{ border: "1px solid #ece6f0" }}
          >
            {values.map((v, i) => {
              const Icon = v.icon;
              const col = i % 3;
              const row = Math.floor(i / 3);
              const totalRows = Math.ceil(values.length / 3);
              return (
                <div
                  key={i}
                  className="p-8 transition-colors duration-200 hover:bg-[#fcfafd]"
                  style={{
                    borderRight: col < 2 ? "1px solid #ece6f0" : "none",
                    borderBottom: row < totalRows - 1 ? "1px solid #ece6f0" : "none",
                  }}
                >
                  <div className="text-[0.62rem] font-bold tracking-[0.14em] mb-4" style={{ color: "#c9a8d6" }}>
                    {v.num}
                  </div>
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: "#f5f0f8" }}
                  >
                    <Icon className="w-4 h-4" style={{ color: "#47294c" }} strokeWidth={2} />
                  </div>
                  <h3
                    className="font-bold mb-2 leading-snug"
                    style={{ fontSize: "0.9375rem", color: "#1c0f1f", letterSpacing: "-0.01em" }}
                  >
                    {v.title}
                  </h3>
                  <p style={{ fontSize: "0.8125rem", color: "#8a7490", lineHeight: "1.75" }}>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-24 px-6" style={{ backgroundColor: "#fcfafd" }}>
        <div className="max-w-3xl mx-auto">
          <Kicker>Our journey</Kicker>
          <h2
            className="font-bold leading-tight mb-14"
            style={{ fontSize: "clamp(1.9rem,4vw,2.75rem)", color: "#1c0f1f", letterSpacing: "-0.02em" }}
          >
            Milestones that shaped us
          </h2>

          <div className="relative">
            {/* vertical track line */}
            <div
              className="absolute top-0 bottom-0 hidden sm:block"
              style={{ left: "112px", width: "1px", backgroundColor: "#ece6f0" }}
            />

            {milestones.map((m, i) => (
              <div key={i} className="flex">
                {/* aside label */}
                <div
                  className="hidden sm:block flex-shrink-0 text-right pr-6 pt-5"
                  style={{ width: "112px" }}
                >
                  {m.label.map((line, j) => (
                    <span
                      key={j}
                      className="block text-[0.66rem] font-bold uppercase tracking-[0.1em] leading-tight"
                      style={{ color: "#a06cb0" }}
                    >
                      {line}
                    </span>
                  ))}
                </div>

                {/* dot */}
                <div className="z-10 hidden sm:flex items-start" style={{ width: "0px" }}>
                  <div
                    className="rounded-full flex-shrink-0"
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: "#47294c",
                      border: "2px solid #fcfafd",
                      marginLeft: "-4px",
                      marginTop: "1.35rem",
                    }}
                  />
                </div>

                {/* body */}
                <div
                  className="flex-1 sm:pl-8 pb-10 pt-4"
                  style={{ borderBottom: i < milestones.length - 1 ? "1px solid #f0eaf3" : "none" }}
                >
                  {/* mobile only label */}
                  <div
                    className="sm:hidden text-[0.66rem] font-bold uppercase tracking-[0.1em] mb-1"
                    style={{ color: "#a06cb0" }}
                  >
                    {m.label.join(" ")}
                  </div>
                  <h4
                    className="font-bold mb-1 leading-snug"
                    style={{ fontSize: "0.9375rem", color: "#1c0f1f" }}
                  >
                    {m.title}
                  </h4>
                  <p style={{ fontSize: "0.8125rem", color: "#8a7490", lineHeight: "1.7" }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING ── */}
      <section className="py-28 px-6 text-center" style={{ backgroundColor: "#0f080f" }}>
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="block w-6 h-px" style={{ background: "#3a1f3f" }} />
            <span className="text-[0.64rem] font-bold tracking-[0.2em] uppercase" style={{ color: "#4a2f52" }}>
              Our commitment
            </span>
            <span className="block w-6 h-px" style={{ background: "#3a1f3f" }} />
          </div>

          <h2
            className="font-bold leading-tight mb-6"
            style={{
              fontSize: "clamp(2rem,5vw,3.25rem)",
              color: "#faf4fc",
              letterSpacing: "-0.025em",
              lineHeight: "1.1",
            }}
          >
            Every coach deserves{" "}
            <span style={{ color: "#b07ac0" }}>enterprise-quality tools.</span>
          </h2>

          <div className="w-10 h-px mx-auto my-8" style={{ backgroundColor: "#3a1f3f" }} />

          <p
            className="mx-auto mb-4"
            style={{ fontSize: "1rem", color: "#5a4560", maxWidth: "560px", lineHeight: "1.85" }}
          >
            Whether you're training your first client or managing a team of fifty—SmartCoach360 will
            always be shaped by the people who use it. Every request, every piece of feedback, every
            conversation influences what we build next.
          </p>

          <p className="mt-10 text-sm tracking-wide" style={{ color: "#7b4e87" }}>
            We're not just building software. We're building the future of the fitness coaching
            industry—<br className="hidden sm:block" />one coach, one client, one transformation at a time.
          </p>
        </div>
      </section>

    </div>
  );
}