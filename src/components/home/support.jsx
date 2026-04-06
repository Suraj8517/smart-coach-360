import React from 'react'

export default function Support() {
  return (
   
<section className="py-24 bg-brand-lilac-100 border-t border-brand-silver-xl">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="grid lg:grid-cols-2 gap-8 items-end mb-14">
      <div>
        <span className="section-tag">Support</span>
        <h2 className="font-display text-4xl sm:text-5xl text-brand-black leading-tight mt-3">
          We're With You Every<br />Step of the Way
        </h2>
      </div>
      <div className="lg:pb-1">
        <p className="text-brand-fedora text-lg leading-relaxed mb-6">
          Support should be as reliable as the product. From onboarding through day-to-day optimisation, our team is here to help you get value quickly and keep improving over time.
        </p>
       
      </div>
    </div>

    {/* 3-col grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[
        {
          icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>,
          title: "Help Centre",
          desc: "A searchable knowledge base with step-by-step guides and FAQs, available 24/7.",
          tag: "24/7",
        },
        {
          icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>,
          title: "On-demand Webinars",
          desc: "Training videos and feature walkthroughs you can access anytime.",
          tag: "Anytime",
        },
        {
          icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
          title: "Email Support",
          desc: "Send us a question and get a detailed response within 24 hours.",
          tag: "< 24h",
        },
        {
          icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>,
          title: "Live Chat",
          desc: "Get fast answers from real people within the platform during business hours.",
          tag: "Instant",
        },
        {
          icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>,
          title: "Phone Support",
          desc: "Speak to a specialist for immediate, personal help.",
          tag: "Personal",
        },
        {
          icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
          title: "Live Masterclass Calls",
          desc: "Join live sessions where our team dives deep into features and growth strategies.",
          tag: "Weekly",
        },
        {
          icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>,
          title: "Priority Support",
          desc: "Premium users get guaranteed fast response times across every channel.",
          tag: "Premium",
          highlight: true,
        },
        {
          icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>,
          title: "Personalised Onboarding",
          desc: "A dedicated specialist works with you one-on-one to configure your setup.",
          tag: "Dedicated",
          highlight: true,
        },
        {
          icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>,
          title: "Dedicated CSM",
          desc: "A CSM focused entirely on your growth, retention, and platform success.",
          tag: "Enterprise",
          highlight: true,
        },
      ].map((s, i) => (
        <div
          key={i}
          className={`group relative rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md overflow-hidden ${
            s.highlight
              ? "bg-brand-lilac border-brand-boss/20 hover:border-brand-boss/40"
              : "bg-brand-lilac border-brand-silver-xl hover:border-brand-lilac-300"
          }`}
        >
          <div
            className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
            style={{ background: s.highlight ? "linear-gradient(90deg, #47294c, #9b6dbd)" : "linear-gradient(90deg, #9b6dbd, #c49ad6)" }}
          />

          <div className="flex items-start justify-between mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: s.highlight ? "rgba(71,41,76,0.1)" : "rgba(71,41,76,0.06)",
                color: s.highlight ? "#47294c" : "#7a4fa0",
              }}
            >
              {s.icon}
            </div>
            <span
              className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
              style={{
                background: s.highlight ? "rgba(71,41,76,0.1)" : "rgba(71,41,76,0.05)",
                color: s.highlight ? "#47294c" : "#7a4fa0",
              }}
            >
              {s.tag}
            </span>
          </div>

          <h4 className="font-display text-base text-brand-black mb-1.5">{s.title}</h4>
          <p className="text-brand-fedora text-sm leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
  )
}
