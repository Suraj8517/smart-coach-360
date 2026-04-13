import {
  Users, UserCheck, Salad, ChefHat, Dumbbell, CreditCard,
  MessageSquare, BarChart2, ShieldCheck, Smartphone, Zap,
  MessageCircle, TrendingUp, Link2, Mic, Brain
} from "lucide-react";
import { CTASection } from "../components/UI";

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

export default function PricingPage({ onOpenContactForm }) {
  return (
    <div className="min-h-screen font-sans" style={{ background: "#faf4fc", color: "#2e1a32" }}>

      {/* Hero */}
      <div className="text-center px-6 pt-20 mt-10 pb-10">
        <span
          className="inline-block rounded-full px-4 py-1 text-xs font-medium uppercase tracking-widest mb-5"
          style={{ background: "#e8d9ee", color: "#47294c" }}
        >
          Pricing
        </span>
        <h1 className="font-bold leading-tight mb-4" style={{ fontSize: "clamp(1.9rem,4.5vw,3rem)", color: "#2e1a32" }}>
          All-in-one platform for coaches,<br />
          <span style={{ color: "#47294c" }}>fitness &amp; wellness brands</span>
        </h1>
        <p className="text-sm leading-relaxed max-w-lg mx-auto" style={{ color: "#816f7d" }}>
          From 1 client to 500+, Smart Coach 360 scales with your business, nutrition, workouts, payments and CRM, all in one place.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {plans.map((p) => (
          <div
            key={p.name}
            className="relative flex flex-col gap-3 rounded-2xl p-5 bg-white transition-all duration-200 hover:shadow-lg"
            style={{
              border: p.pop ? "1.5px solid #47294c" : "1.5px solid #e8d9ee",
              boxShadow: p.pop ? "0 4px 24px rgba(71,41,76,0.10)" : undefined,
            }}
          >
            {p.pop && (
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-xs font-semibold whitespace-nowrap"
                style={{ background: "#47294c", color: "#faf4fc" }}
              >
                Most Popular
              </div>
            )}
            {p.custom && (
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-xs font-semibold whitespace-nowrap"
                style={{ background: "#816f7d", color: "#faf4fc" }}
              >
                Custom
              </div>
            )}
            <div>
              <div className="font-bold text-sm" style={{ color: "#2e1a32" }}>{p.name}</div>
              <div className="text-xs mt-1" style={{ color: "#a593a1" }}>{p.clients}</div>
            </div>
            <div>
              {p.price ? (
                <>
                  <span className="font-bold text-3xl" style={{ color: "#2e1a32" }}>₹{fmt(p.price)}</span>
                  <span className="text-xs ml-1" style={{ color: "#a593a1" }}>/mo</span>
                </>
              ) : (
                <span className="font-bold text-xl" style={{ color: "#2e1a32" }}>Custom</span>
              )}
            </div>
            <button onClick={onOpenContactForm}
              className="mt-auto rounded-lg py-2 text-sm font-medium cursor-pointer transition-opacity hover:opacity-85"
              style={{
                background: p.pop ? "#47294c" : "transparent",
                color: p.pop ? "#faf4fc" : "#47294c",
                border: p.pop ? "none" : "1.5px solid #d5bade",
                fontFamily: "inherit",
              }}
            >
              {p.price ? "Get started" : "Contact us"}
            </button>
          </div>
        ))}
      </div>

      <div
        className="max-w-xl mx-auto mb-14 text-center rounded-xl px-5 py-3 text-xs"
        style={{ background: "#f3eaf6", border: "1px solid #e8d9ee", color: "#816f7d" }}
      >
        <b style={{ color: "#2e1a32" }}>Setup fee:</b> ₹8,999–₹14,999 — includes onboarding, initial configuration, training &amp; go-live support
      </div>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 pb-14">
        <div className="text-center mb-8">
          <p className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: "#a593a1" }}>Everything included</p>
          <h2 className="font-bold" style={{ fontSize: "clamp(1.5rem,3vw,2.1rem)", color: "#2e1a32" }}>Complete feature set</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(({ Icon, title, items }, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 transition-all duration-200 hover:shadow-md"
              style={{ border: "1.5px solid #e8d9ee" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "#e8d9ee" }}
                >
                  <Icon size={16} color="#47294c" />
                </div>
                <span className="font-semibold text-sm" style={{ color: "#2e1a32" }}>{title}</span>
              </div>
              <ul className="flex flex-col gap-2">
                {items.map((item, j) => (
                  <li key={j} className="flex gap-2 text-xs leading-relaxed" style={{ color: "#816f7d" }}>
                    <span className="flex-shrink-0 mt-0.5 text-xs font-bold" style={{ color: "#47294c" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-14">
        <div className="text-center mb-8">
          <p className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: "#a593a1" }}>Mobile App</p>
          <h2 className="font-bold" style={{ fontSize: "clamp(1.5rem,3vw,2.1rem)", color: "#2e1a32" }}>White-label fitness app</h2>
        </div>
        <div
          className="bg-white rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          style={{ border: "1.5px solid #e8d9ee" }}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "#e8d9ee" }}
              >
                <Smartphone size={16} color="#47294c" />
              </div>
              <span
                className="rounded-full px-3 py-1 text-xs uppercase tracking-wider font-medium"
                style={{ background: "#e8d9ee", color: "#47294c" }}
              >
                Your Brand
              </span>
            </div>
            <h3 className="font-bold text-xl leading-snug mb-3" style={{ color: "#2e1a32" }}>
              Launch your own branded Android &amp; iOS app
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#816f7d" }}>
              Put your logo and brand name front and centre. Clients see your brand, not ours.
            </p>
            <div
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 mb-4"
              style={{ background: "#e8d9ee" }}
            >
              <span className="font-bold text-lg" style={{ color: "#2e1a32" }}>₹25,000</span>
              <span className="text-xs" style={{ color: "#816f7d" }}>flat setup cost</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {appFeatureTags.map((t) => (
                <span
                  key={t}
                  className="rounded-full px-3 py-1 text-xs font-medium"
                  style={{ background: "#f3eaf6", border: "1px solid #e8d9ee", color: "#47294c" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "#a593a1" }}>
              Built-in client trackers
            </p>
            <div className="flex flex-col gap-2">
              {trackers.map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-3 rounded-xl px-4 py-3"
                  style={{ background: "#f3eaf6", border: "1px solid #e8d9ee" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "#47294c" }}
                  />
                  <span className="text-sm" style={{ color: "#2e1a32" }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-6">
        <div className="text-center mb-8">
          <p className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: "#a593a1" }}>Power-ups</p>
          <h2 className="font-bold" style={{ fontSize: "clamp(1.5rem,3vw,2.1rem)", color: "#2e1a32" }}>Add-on features</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {addons.map(({ Icon, name, price, desc }, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 flex flex-col gap-3 transition-all duration-200 hover:shadow-md"
              style={{ border: "1.5px solid #e8d9ee" }}
            >
              <div className="flex justify-between items-start gap-2">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "#e8d9ee" }}
                  >
                    <Icon size={16} color="#47294c" />
                  </div>
                  <span className="font-semibold text-sm" style={{ color: "#2e1a32" }}>{name}</span>
                </div>
                <span
                  className="rounded-md px-2 py-0.5 text-xs font-semibold whitespace-nowrap flex-shrink-0"
                  style={{ background: "#e8d9ee", color: "#47294c" }}
                >
                  {price}
                </span>
              </div>
              <p className="text-xs leading-relaxed pl-11" style={{ color: "#a593a1" }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>
<CTASection/>
    </div>
  );
}