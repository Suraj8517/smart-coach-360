
import { IMAGES } from "../images";
const features = [
  {
    id: 1,
    title: "Coaching & Program Management",
    description:
      "Build a program library once, then assign fully customised plans to clients in seconds. Clients access workouts in the mobile app, with clear instructions and progress tracking built in.",
    bullets: [
      "Master programs and custom client plans",
      "On-demand workout and exercise video library",
      "Custom exercise videos you can upload yourself",
      "Automated program notification flows",
    ],
    image: IMAGES.coaching,
    alt: "Coaching program management screenshot",
  },
  {
    id: 2,
    title: "Nutrition & Activity Tracking",
    description:
      "Go beyond training plans. Create personalised meal plans, set macro targets, and monitor adherence across your client base from one dashboard. SmartCoach360 also includes a female health tracker to support more personalised coaching.",
    bullets: [
      "Meal tracking with a built-in recipe library",
      "Custom macro and nutrition goal setting per client",
      "Real-time compliance monitoring",
      "Female health and hormonal cycle tracker",
    ],
    image: IMAGES.nutri,
    alt: "Nutrition tracking dashboard screenshot",
  },
  {
    id: 3,
    title: "Client Engagement & Communication",
    description:
      "Keep clients engaged between sessions with automated check-ins, in-app messaging, video calls, and structured challenges. Build consistent touchpoints without adding manual work to your day.",
    bullets: [
      "In-app messaging and automated message sequences",
      "Video calls and group coaching spaces",
      "Challenges and social engagement features",
      "Live session and webinar integration",
    ],
    image: IMAGES.engage,
    alt: "Client engagement messaging screenshot",
  },
  {
    id: 4,
    title: "Business Automation",
    description:
      "Set up automation once and let SmartCoach360 handle lead allocation, onboarding, payments, and message sequences in the background—so operations stay consistent as you scale.",
    bullets: [
      "Auto lead and client allocation",
      "Session pack and payment automation",
      "Discount and pause configuration",
      "Product sales and automated delivery",
    ],
    image: IMAGES.workflow,
    alt: "Business automation dashboard screenshot",
  },
  {
    id: 5,
    title: "Payments & Revenue Management",
    description:
      "No more chasing payments or manually tracking session credits. Accept payments online, set up recurring session packs, configure custom discounts, and handle partial payments—all built right into the platform.",
    bullets: [
      "Online payment processing",
      "Flexible session pack management",
      "Partial payment and instalment options",
      "Discount codes and product sales",
    ],
    image: IMAGES.payments,
    alt: "Payments and revenue screenshot",
  },
  {
    id: 6,
    title: "Appointments & Scheduling",
    description:
      "Manage one-on-one sessions, group classes, and consultations in one place. Sync with your calendar and run live sessions directly via Zoom or Microsoft Teams.",
    bullets: [
      "Appointment and class scheduling",
      "Two-way calendar sync",
      "Consultation and intake forms",
      "Zoom and Microsoft Teams integration",
    ],
    image: IMAGES.workflow,
    alt: "Appointments and scheduling screenshot",
  },
  {
    id: 7,
    title: "Dashboards, Reports & Insights",
    description:
      "See performance at a glance. SmartCoach360 dashboards provide a real-time view of client adherence, progress, and business health—so you know what's working and where to focus.",
    bullets: [
      "Client statistics, tagging, and segmentation",
      "Preassessment and health intake reports",
      "Custom surveys and feedback tools",
      "Business performance dashboards",
    ],
    image: IMAGES.dashboards,
    alt: "Dashboards and reports screenshot",
  },
 {
    id: 8,
    title: "Team & Organisation Management",
    description:
      "From solo coaches to multi-branch organisations, SmartCoach360 is designed to scale. Manage teams, assign roles, control access, and oversee operations from a single workspace.",
    bullets: [
      "Team and branch management",
      "Role-based access and permissions",
      "Coach allocation thresholds",
      "Bulk upload for clients and coaches",
    ],
    image: IMAGES.teamcrm,
    alt: "Team management screenshot",
  },
  
];

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="shrink-0 mt-0.5"
    >
      <circle cx="7" cy="7" r="6.5" fill="var(--lilac-200)" />
      <path
        d="M4 7l2 2 4-4"
        stroke="var(--bossanova-mid)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FeatureCard({ feature }) {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-[18px] h-full"
      style={{
        background: "#ffffff",
        border: "1px solid var(--lilac-200)",
      }}
    >
      {/* Text Section */}
      <div className="px-6 pt-6 pb-4">
        <h3
          className="text-[18px] font-semibold  leading-snug mb-4"
          style={{ color: "var(--bossanova-dark)" }}
        >
          {feature.title}
        </h3>

        <p
          className="text-[12.5px] leading-relaxed mb-4"
          style={{ color: "var(--fedora)" }}
        >
          {feature.description}
        </p>

        <ul className="flex flex-col gap-1.5">
          {feature.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckIcon />
              <span
                className="text-[12px] leading-snug"
                style={{ color: "var(--fedora-dark)" }}
              >
                {b}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-auto h-[350px] overflow-hidden">
        <img
          src={feature.image}
          alt={feature.alt}
          className="absolute bottom-0 right-0 object-contain pointer-events-none select-none "
          style={{ maxHeight: "100%", maxWidth: "100%" }}
        />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
          style={{
            height: "80px",
            background: "linear-gradient(to top, #ffffff, transparent)",
          }}
        />

        {/* Right fade */}
        <div
          className="absolute top-0 right-0 bottom-0 z-10 pointer-events-none"
          style={{
            width: "80px",
            background: "linear-gradient(to left, #ffffff, transparent)",
          }}
        />
      </div>
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <section
      className="py-20 px-6 mt-10"
      style={{ background: "var(--lilac)" }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14 ">
          <span
            className="inline-block text-[0.7rem] text-white font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-8"
            style={{ backgroundColor: "rgba(71,41,76,0.6)", border: "1px solid rgba(129,69,140,0.35)" }}
          >
            Features
          </span>
          <h2
            className="text-3xl sm:text-[2.2rem] font-semibold leading-tight mb-4"
            style={{ color: "var(--bossanova-dark)" }}
          >
            Everything you need to coach, grow,
            <br className="hidden sm:block" /> and automate your business
          </h2>
          <p
            className="text-sm max-w-xl mx-auto leading-relaxed"
            style={{ color: "var(--fedora)" }}
          >
            SmartCoach360 is built specifically for fitness coaching—designed
            around how coaches run sessions, track progress, and manage client
            communication day to day.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((f) => (
            <FeatureCard key={f.id} feature={f} />
          ))}
        </div>

      </div>
    </section>
  );
}