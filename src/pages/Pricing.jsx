import {
  Users, UserCheck, Salad, ChefHat, Dumbbell, CreditCard,
  MessageSquare, BarChart2, ShieldCheck, Smartphone, Zap,
  MessageCircle, TrendingUp, Link2, Mic, Brain
} from "lucide-react";

const plans = [
  { name: "Starter", clients: "1–25 clients", price: 4999, pop: false, custom: false },
  { name: "Starter Plus", clients: "Up to 50 clients", price: 8999, pop: false, custom: false },
  { name: "Growth", clients: "Up to 100 clients", price: 15999, pop: true, custom: false },
  { name: "Growth Plus", clients: "Up to 200 clients", price: 25999, pop: false, custom: false },
  { name: "Pro", clients: "Up to 500 clients", price: 49000, pop: false, custom: false },
  { name: "Enterprise", clients: "500+ clients", price: null, pop: false, custom: true },
];

const features = [
  { Icon: Users, title: "Lead Management CRM", items: ["Lead capture via forms, campaigns & manual", "Source tracking: Ads, Instagram, WhatsApp", "Pipeline: New → Contacted → Converted", "Auto-assignment & follow-up reminders", "Health reports & interaction history"] },
  { Icon: UserCheck, title: "Client Management", items: ["Daily task & client overview dashboard", "Smart notifications & reminders", "Multi-coach collaboration support", "Client segmentation & auto-assignment", "Time zone-based program tracking"] },
  { Icon: Salad, title: "Nutrition & Diet Planning", items: ["AI-powered diet plan generator", "Custom plan builder & templates", "Macro & micro nutrient calculations", "Condition-based diets (IBS, weight loss)", "Meal planning & portion control"] },
  { Icon: ChefHat, title: "Recipe Builder", items: ["Custom recipe creation", "Ingredient-level nutrition breakdown", "Cooking method adjustments", "Yield & portion calculations", "Allergen tagging & reusable recipes"] },
  { Icon: Dumbbell, title: "Workout & Fitness", items: ["Workout plan builder", "Video-based exercise library", "Sets, reps & difficulty levels", "Daily/weekly workout calendar", "Warm-up & cool-down plans"] },
  { Icon: CreditCard, title: "Payments & Monetization", items: ["Razorpay & Stripe integration", "UPI payments & payment links", "Installments & discount support", "Auto upgrade to premium", "Cart & token feature"] },
  { Icon: MessageSquare, title: "Communication & Engagement", items: ["In-app chat & push notifications", "Broadcast messages", "Reminder automation", "WhatsApp integration (addon)"] },
  { Icon: BarChart2, title: "Reports & Analytics", items: ["Client progress reports", "Transformation tracking", "Coach performance dashboard", "Revenue insights", "Program effectiveness reports"] },
  { Icon: ShieldCheck, title: "Admin & Security", items: ["Role-based access (Admin, Coach, Sales)", "Multi-coach / multi-branch support", "Secure cloud hosting (AWS / GCP)", "Data encryption & backup", "Data ownership & privacy controls"] },
];

const addons = [
  { Icon: MessageCircle, name: "WhatsApp Integration", price: "₹2,000/mo", desc: "Direct WhatsApp messaging with clients" },
  { Icon: TrendingUp, name: "Advanced Analytics", price: "₹10,000/mo", desc: "Google, Facebook & Meta ad analytics" },
  { Icon: Zap, name: "Lead Generation Tools", price: "₹10,000/mo", desc: "Advanced lead gen & campaign tools" },
  { Icon: Link2, name: "Third-Party Integrations", price: "₹20,000", desc: "Calling, payment & other integrations" },
  { Icon: Mic, name: "AI Call Transcription & Audit", price: "Addon", desc: "AI-powered call transcription & audit" },
  { Icon: Brain, name: "AI Diet & Workout Recs", price: "Addon", desc: "AI chart recommendations & verification" },
];

const trackers = [
  "Nutrition Tracker",
  "Water Intake Tracker",
  "Weight & Body Measurements",
  "Sleep Tracker",
  "Group Live Session Support",
];

const appFeatureTags = ["Your Brand & Logo", "Android & iOS", "Client Dashboard", "Coach-Client Chat", "Real-time Updates"];

const fmt = (n) => new Intl.NumberFormat("en-IN").format(n);

const s = {
  bos: "#47294c",
  bosm: "#5c3663",
  bosd: "#2e1a32",
  fed: "#816f7d",
  fedl: "#a593a1",
  fedd: "#5e4f5a",
  lilac: "#faf4fc",
  l1: "#f3eaf6",
  l2: "#e8d9ee",
  l3: "#d5bade",
  sl: "#ddd6d4",
  white: "#ffffff",
};

export default function PricingPage() {
  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", background: s.lilac, color: s.bosd, minHeight: "100vh" }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .hov { transition: border-color .2s, box-shadow .2s; }
        .hov:hover { border-color: #a593a1 !important; box-shadow: 0 4px 18px rgba(71,41,76,0.09) !important; }
        .btn { cursor: pointer; transition: opacity .15s; }
        .btn:hover { opacity: 0.87; }
        .col3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        @media (max-width: 700px) {
          .col3 { grid-template-columns: 1fr !important; }
          .app-grid { grid-template-columns: 1fr !important; }
          .nav-a { display: none; }
        }
      `}</style>

     

      {/* Hero */}
      <div style={{ textAlign: "center", padding: "4.5rem 1.5rem 2.5rem" }}>
        <span style={{ display: "inline-block", background: s.l2, color: s.bos, borderRadius: 100, padding: "0.3rem 1rem", fontSize: "0.73rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 20, fontWeight: 500 }}>Pricing</span>
        <h1 style={{ fontWeight: 700, fontSize: "clamp(1.9rem,4.5vw,3rem)", lineHeight: 1.15, color: s.bosd, marginBottom: 16 }}>
          All-in-one platform for coaches,<br /><span style={{ color: s.bos }}>fitness & wellness brands</span>
        </h1>
        <p style={{ color: s.fed, fontSize: "0.97rem", maxWidth: 480, margin: "0 auto", lineHeight: 1.65 }}>
          From 1 client to 500+, Smart Coach 360 scales with your business — nutrition, workouts, payments and CRM, all in one place.
        </p>
      </div>

      <div className="col3" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem 2rem" }}>
        {plans.map((p) => (
          <div key={p.name} className="hov" style={{ background: s.white, border: p.pop ? `1.5px solid ${s.bos}` : `1.5px solid ${s.l2}`, borderRadius: 14, padding: "1.4rem 1.2rem", position: "relative", display: "flex", flexDirection: "column", gap: 12, boxShadow: p.pop ? "0 4px 24px rgba(71,41,76,0.1)" : "none" }}>
            {p.pop && <div style={{ position: "absolute", top: -11, left: "50%", transform: "translateX(-50%)", background: s.bos, color: s.lilac, borderRadius: 100, padding: "2px 12px", fontSize: "0.68rem", fontWeight: 600, whiteSpace: "nowrap" }}>Most Popular</div>}
            {p.custom && <div style={{ position: "absolute", top: -11, left: "50%", transform: "translateX(-50%)", background: s.fed, color: s.lilac, borderRadius: 100, padding: "2px 12px", fontSize: "0.68rem", fontWeight: 600, whiteSpace: "nowrap" }}>Custom</div>}
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.92rem", color: s.bosd }}>{p.name}</div>
              <div style={{ fontSize: "0.75rem", color: s.fedl, marginTop: 3 }}>{p.clients}</div>
            </div>
            <div>
              {p.price
                ? <><span style={{ fontWeight: 700, fontSize: "1.75rem", color: s.bosd }}>₹{fmt(p.price)}</span><span style={{ fontSize: "0.75rem", color: s.fedl, marginLeft: 3 }}>/mo</span></>
                : <span style={{ fontWeight: 700, fontSize: "1.3rem", color: s.bosd }}>Custom</span>
              }
            </div>
            <button className="btn" style={{ marginTop: "auto", borderRadius: 8, padding: "0.5rem", fontSize: "0.8rem", fontFamily: "inherit", fontWeight: 500, background: p.pop ? s.bos : "transparent", color: p.pop ? s.lilac : s.bos, border: p.pop ? "none" : `1.5px solid ${s.l3}` }}>
              {p.price ? "Get started" : "Contact us"}
            </button>
          </div>
        ))}
      </div>

      {/* Setup note */}
      <div style={{ maxWidth: 600, margin: "0 auto 3.5rem", textAlign: "center", background: s.l1, border: `1px solid ${s.l2}`, borderRadius: 10, padding: "0.85rem 1.3rem", fontSize: "0.81rem", color: s.fed }}>
        <b style={{ color: s.bosd }}>Setup fee:</b> ₹8,999–₹14,999 — includes onboarding, initial configuration, training & go-live support
      </div>

      {/* Features — 3 cols */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem 3.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <p style={{ color: s.fedl, fontSize: "0.73rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8, fontWeight: 500 }}>Everything included</p>
          <h2 style={{ fontWeight: 700, fontSize: "clamp(1.5rem,3vw,2.1rem)", color: s.bosd }}>Complete feature set</h2>
        </div>
        <div className="col3">
          {features.map(({ Icon, title, items }, i) => (
            <div key={i} className="hov" style={{ background: s.white, border: `1.5px solid ${s.l2}`, borderRadius: 12, padding: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: s.l2, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={16} color={s.bos} />
                </div>
                <span style={{ fontWeight: 600, fontSize: "0.88rem", color: s.bosd }}>{title}</span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                {items.map((item, j) => (
                  <li key={j} style={{ display: "flex", gap: 7, fontSize: "0.79rem", color: s.fed, lineHeight: 1.5 }}>
                    <span style={{ color: s.bos, flexShrink: 0, marginTop: 1, fontSize: "0.7rem", fontWeight: 700 }}>✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* App section */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem 3.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <p style={{ color: s.fedl, fontSize: "0.73rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8, fontWeight: 500 }}>Mobile App</p>
          <h2 style={{ fontWeight: 700, fontSize: "clamp(1.5rem,3vw,2.1rem)", color: s.bosd }}>White-label fitness app</h2>
        </div>
        <div className="app-grid" style={{ background: s.white, border: `1.5px solid ${s.l2}`, borderRadius: 16, padding: "2.2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: s.l2, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Smartphone size={16} color={s.bos} />
              </div>
              <span style={{ background: s.l2, color: s.bos, borderRadius: 100, padding: "0.25rem 0.85rem", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.07em", fontWeight: 500 }}>Your Brand</span>
            </div>
            <h3 style={{ fontWeight: 700, fontSize: "1.4rem", color: s.bosd, marginBottom: 12, lineHeight: 1.25 }}>Launch your own branded Android & iOS app</h3>
            <p style={{ color: s.fed, fontSize: "0.86rem", lineHeight: 1.65, marginBottom: 16 }}>Put your logo and brand name front and centre. Clients see your brand, not ours.</p>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: s.l2, borderRadius: 9, padding: "0.5rem 0.9rem", marginBottom: 16 }}>
              <span style={{ fontWeight: 700, fontSize: "1.1rem", color: s.bosd }}>₹25,000</span>
              <span style={{ fontSize: "0.78rem", color: s.fed }}>flat setup cost</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {appFeatureTags.map(t => (
                <span key={t} style={{ background: s.l1, border: `1px solid ${s.l2}`, color: s.bos, borderRadius: 100, padding: "0.25rem 0.75rem", fontSize: "0.74rem", fontWeight: 500 }}>{t}</span>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontWeight: 600, fontSize: "0.8rem", color: s.fedl, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 14 }}>Built-in client trackers</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {trackers.map(t => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 10, background: s.l1, border: `1px solid ${s.l2}`, borderRadius: 9, padding: "0.6rem 0.9rem" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: s.bos, flexShrink: 0, display: "inline-block" }} />
                  <span style={{ fontSize: "0.83rem", color: s.bosd }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons — 3 cols */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem 3.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <p style={{ color: s.fedl, fontSize: "0.73rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8, fontWeight: 500 }}>Power-ups</p>
          <h2 style={{ fontWeight: 700, fontSize: "clamp(1.5rem,3vw,2.1rem)", color: s.bosd }}>Add-on features</h2>
        </div>
        <div className="col3">
          {addons.map(({ Icon, name, price, desc }, i) => (
            <div key={i} className="hov" style={{ background: s.white, border: `1.5px solid ${s.l2}`, borderRadius: 12, padding: "1.25rem", display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: s.l2, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={16} color={s.bos} />
                  </div>
                  <span style={{ fontWeight: 600, fontSize: "0.86rem", color: s.bosd }}>{name}</span>
                </div>
                <span style={{ background: s.l2, color: s.bos, borderRadius: 6, padding: "2px 9px", fontSize: "0.73rem", fontWeight: 600, whiteSpace: "nowrap", flexShrink: 0 }}>{price}</span>
              </div>
              <p style={{ fontSize: "0.79rem", color: s.fedl, lineHeight: 1.5, paddingLeft: 41 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div style={{ background: s.l1, borderRadius: 20, padding: "3rem 2rem", textAlign: "center", margin: "0 1.5rem 4rem", maxWidth: 1100, marginLeft: "auto", marginRight: "auto" }}>
        <h2 style={{ fontWeight: 700, fontSize: "clamp(1.5rem,3vw,2.1rem)", color: s.bosd, marginBottom: 14 }}>Ready to grow your coaching business?</h2>
        <p style={{ color: s.fed, fontSize: "0.92rem", marginBottom: 28, maxWidth: 400, marginLeft: "auto", marginRight: "auto" }}>Join coaches and fitness brands scaling smarter with Smart Coach 360.</p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn" style={{ background: s.bos, color: s.lilac, border: "none", borderRadius: 9, padding: "0.7rem 1.9rem", fontSize: "0.9rem", fontFamily: "inherit", fontWeight: 500 }}>Get started</button>
          <button className="btn" style={{ background: "transparent", color: s.bos, border: `1.5px solid ${s.l3}`, borderRadius: 9, padding: "0.7rem 1.9rem", fontSize: "0.9rem", fontFamily: "inherit" }}>Talk to sales</button>
        </div>
      </div>

    </div>
  );
}