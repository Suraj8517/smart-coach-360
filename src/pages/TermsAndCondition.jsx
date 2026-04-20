import { useState, useEffect, useRef } from "react";
import {
  FileText,
  Clock,
  Dumbbell,
  UserCircle,
  ShieldAlert,
  CreditCard,
  PauseCircle,
  Users,
  ImageIcon,
  Globe,
  Baby,
  Scale,
  Gavel,
  RefreshCw,
  Info,
  Smartphone,
  Ban,
  Camera,
  Star,
  ArrowUpCircle,
  Calendar,
  BarChart2,
  Lock,
  AlertTriangle,
  PhoneCall,
} from "lucide-react";

const sections = [
  { id: "introduction",         num: "01", label: "Introduction",                icon: FileText },
  { id: "services",             num: "02", label: "Services Provided",           icon: Dumbbell },
  { id: "account",              num: "03", label: "Account Creation",            icon: UserCircle },
  { id: "medical",              num: "04", label: "Medical Disclaimer",          icon: ShieldAlert },
  { id: "program-plans",        num: "05", label: "Program Plans",               icon: Star },
  { id: "offers",               num: "06", label: "Offers & Pricing",            icon: BarChart2 },
  { id: "app",                  num: "07", label: "SmartCoach360 App",             icon: Smartphone },
  { id: "no-redemption",        num: "08", label: "No Monetary Redemption",      icon: Ban },
  { id: "program-pause-change", num: "09", label: "Program Change After Pause",  icon: PauseCircle },
  { id: "program-transfer",     num: "10", label: "Program Change & Transfer",   icon: RefreshCw },
  { id: "upgrade",              num: "11", label: "Program Upgrade",             icon: ArrowUpCircle },
  { id: "coach-swap",           num: "12", label: "Coach Swap Requests",         icon: Users },
  { id: "camera",               num: "13", label: "Camera On Requirement",       icon: Camera },
  { id: "fees",                 num: "14", label: "Fees & Payments",             icon: CreditCard },
  { id: "partial-payment",      num: "15", label: "Partial Payment",             icon: CreditCard },
  { id: "no-refund",            num: "16", label: "No Refund Policy",            icon: Ban },
  { id: "refund-medical",       num: "17", label: "Refund – Medical Emergency",  icon: AlertTriangle },
  { id: "consultation",         num: "18", label: "Consultation Fees",           icon: PhoneCall },
  { id: "pause",                num: "19", label: "Program Pause",               icon: PauseCircle },
  { id: "conduct",              num: "20", label: "Client Conduct Policy",       icon: Scale },
  { id: "schedule",             num: "21", label: "Call Schedule & Holidays",    icon: Calendar },
  { id: "license",              num: "22", label: "License to Use Content",      icon: Lock },
  { id: "photos",               num: "23", label: "Progress Photos",             icon: ImageIcon },
  { id: "availability",         num: "24", label: "Availability of Services",    icon: Globe },
  { id: "responsibility",       num: "25", label: "Personal Responsibility",     icon: UserCircle },
  { id: "coach-purchases",      num: "26", label: "Restriction on Purchases",    icon: Ban },
  { id: "results",              num: "27", label: "Expected Results",            icon: Star },
  { id: "data",                 num: "28", label: "Data Protection",             icon: Lock },
  { id: "international",        num: "29", label: "International Use",           icon: Globe },
  { id: "minors",               num: "30", label: "Minors",                      icon: Baby },
  { id: "obligations",          num: "31", label: "Obligations for Updates",     icon: FileText },
  { id: "governing-law",        num: "32", label: "Governing Law",               icon: Gavel },
  { id: "changes",              num: "33", label: "Changes to Terms",            icon: RefreshCw },
];

function NavItem({ section,onClick }) {
  const Icon = section.icon;
  return (
    <button
      onClick={() => onClick(section.id)}
      className={`flex items-center gap-2.5 w-full px-5 py-2 text-left transition-all duration-150 border-l-2 border-l-transparent text-[#5e4f5a] hover:bg-[#faf4fc]`}
    >
      <Icon size={13} className={`flex-shrink-0 opacity-50`} />
      <span className={`text-[12.5px] flex-1 leading-snug font-normal`}>
        {section.label}
      </span>
      <span
        className={`text-[9.5px] px-1.5 py-0.5 rounded-full font-medium flex-shrink-0 bg-[#e8d9ee] text-[#816f7d]`}
      >
        {section.num}
      </span>
    </button>
  );
}

function SectionHeader({ num, title, icon: Icon }) {
  return (
    <div className="flex items-start gap-3 mb-4 pb-3 border-b border-[#ede8e7]">
      <div className="w-[34px] h-[34px] rounded-lg bg-[#f3eaf6] border border-[#e8d9ee] flex items-center justify-center flex-shrink-0">
        <Icon size={15} color="#47294c" />
      </div>
      <div>
        <p className="text-[11px] text-[#a593a1] font-medium mb-0.5 m-0">Section {num}</p>
        <h2 className="text-[16px] sm:text-[17px] font-medium text-[#2e1a32] m-0">{title}</h2>
      </div>
    </div>
  );
}

function Callout({ children }) {
  return (
    <div className="bg-[#f3eaf6] border-l-[3px] border-[#47294c] rounded-r-lg px-4 py-3 my-4">
      <p className="text-[13px] text-[#5e4f5a] leading-relaxed m-0">{children}</p>
    </div>
  );
}

function InfoBox({ children }) {
  return (
    <div className="bg-[#faf4fc] border border-[#e8d9ee] rounded-xl px-4 py-3.5 my-4 flex gap-3">
      <Info size={15} color="#5c3663" className="flex-shrink-0 mt-0.5" />
      <p className="text-[13px] text-[#5e4f5a] leading-relaxed m-0">{children}</p>
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="list-none p-0 my-2 mb-3.5 space-y-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-[13px] sm:text-[13.5px] leading-[1.75] text-[#3d3040] py-0.5">
          <span className="w-[5px] h-[5px] rounded-full bg-[#5c3663] mt-[9px] flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function AlphaBulletList({ items }) {
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return (
    <ul className="list-none p-0 my-2 mb-3.5 space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-[13px] sm:text-[13.5px] leading-[1.75] text-[#3d3040]">
          <span className="text-[11px] font-semibold text-[#47294c] bg-[#f3eaf6] rounded px-1.5 py-0.5 flex-shrink-0 mt-0.5 min-w-[20px] text-center">
            {labels[i]}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function P({ children }) {
  return <p className="text-[13px] sm:text-[13.5px] leading-[1.8] text-[#3d3040] mb-3">{children}</p>;
}

function Divider() {
  return <hr className="border-0 border-t border-[#ede8e7] my-7 sm:my-8" />;
}

function PauseTable() {
  const rows = [
    ["3 months", "14 days"],
    ["6 months", "28 days"],
    ["9 months", "42 days"],
    ["12 months", "56 days"],
    ["18 months", "84 days"],
    ["24 months", "112 days"],
    ["36 months", "168 days"],
  ];
  return (
    <div className="overflow-x-auto my-4 rounded-xl border border-[#e8d9ee]">
      <table className="w-full text-[13px]">
        <thead>
          <tr className="bg-[#f3eaf6]">
            <th className="text-left px-4 py-2.5 font-medium text-[#2e1a32] border-b border-[#e8d9ee]">Program Duration</th>
            <th className="text-left px-4 py-2.5 font-medium text-[#2e1a32] border-b border-[#e8d9ee]">Pause Days</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([duration, days], i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf4fc]"}>
              <td className="px-4 py-2 text-[#3d3040]">{duration}</td>
              <td className="px-4 py-2 text-[#47294c] font-medium">{days}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState("introduction");
  const contentRef = useRef(null);
  const sectionRefs = useRef({});

  useEffect(() => {
  const el = contentRef.current;
  if (!el) return;

  const handleScroll = () => {
    const scrollTop = el.scrollTop;
    const maxScroll = el.scrollHeight - el.clientHeight;

    if (scrollTop >= maxScroll - 20) {
      setActiveSection(sections[sections.length - 1].id);
      return;
    }

    let current = sections[0].id;

    for (const s of sections) {
      const ref = sectionRefs.current[s.id];

      if (ref && ref.offsetTop - 80 <= scrollTop) {
        current = s.id;
      }
    }

    setActiveSection(current);
  };

  el.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => el.removeEventListener("scroll", handleScroll);
}, []);

  const scrollToSection = (id) => {
    const ref = sectionRefs.current[id];
    if (ref && contentRef.current)
      contentRef.current.scrollTo({ top: ref.offsetTop - 24, behavior: "smooth" });
  };

  const ref = (id) => (el) => { sectionRefs.current[id] = el; };

  return (
<div className="flex w-full h-screen font-sans bg-white overflow-hidden">
<nav className="hidden md:flex w-[256px] min-w-[256px]  sticky top-20 self-start bg-white border-r border-[#ede8e7] flex-col max-h-[calc(100vh-80px)]">
            <div className="px-5 pt-6 pb-4 border-b border-[#ede8e7]">
          <div className="flex items-center gap-2.5 mb-1">
            <div className="w-7 h-7 rounded-[7px] bg-[#47294c] flex items-center justify-center">
              <FileText size={14} color="#fff" />
            </div>
            <span className="text-[15px] font-semibold text-[#2e1a32] tracking-tight">Terms &amp; Conditions</span>
          </div>
        </div>

        <p className="text-[10px] font-semibold uppercase tracking-widest text-[#a593a1] px-5 pt-3.5 pb-1.5 m-0">
          Sections
        </p>

        <div className="flex-1 overflow-y-auto">
          {sections.map((s) => (
            <NavItem key={s.id} section={s} onClick={scrollToSection} />
          ))}
        </div>

      </nav>

 <main
  ref={contentRef}
  className="flex-1 overflow-y-auto bg-white h-[100vh] my-4 py-12"
>

        <div className="md:hidden flex items-center gap-2.5 px-5 py-4 border-b border-[#ede8e7] sticky top-0 bg-white z-10">
          <div className="w-7 h-7 rounded-[7px] bg-[#47294c] flex items-center justify-center">
            <FileText size={14} color="#fff" />
          </div>
          <div>
            <p className="text-[14px] font-semibold text-[#2e1a32] m-0 leading-none">SmartCoach360</p>
            <p className="text-[11px] text-[#a593a1] m-0 mt-0.5 leading-none">Terms &amp; Conditions</p>
          </div>
        </div>

        <div className="max-w-[740px] mx-auto px-4 sm:px-8 md:px-12 pt-6 sm:pt-10 pb-16">

          {/* Page heading */}
          <div className="mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 bg-[#e8d9ee] text-[#5c3663] text-[11px] font-semibold px-3 py-1 rounded-full mb-3 tracking-wide">
              <FileText size={11} /> Legal Document
            </div>
            <h1 className="text-[22px] sm:text-[26px] font-semibold text-[#2e1a32] mt-0 mb-2.5 tracking-tight">
              Terms &amp; Conditions
            </h1>
          </div>

          <Callout>
            By registering, purchasing a program, or using any Smartoach360 service, you agree to be bound by these Terms and Conditions. Please read them carefully before proceeding.
          </Callout>

          <Divider />

          {/* 01 */}
          <section id="introduction" ref={ref("introduction")} className="mb-8 sm:mb-10">
            <SectionHeader num="01" title="Introduction" icon={FileText} />
            <P>These Terms and Conditions ("Terms") govern your access to and use of the services, programs, coaching, products, and digital content provided by SmartCoach360 ("Smartoach360", "we", "our", or "us").</P>
            <InfoBox>Smartoach360 does not provide medical advice. All fitness, nutrition, or wellness information is for general guidance only. You should seek professional medical approval before beginning any exercise or nutrition program.</InfoBox>
          </section>

          <Divider />

          {/* 02 */}
          <section id="services" ref={ref("services")} className="mb-8 sm:mb-10">
            <SectionHeader num="02" title="Services Provided" icon={Dumbbell} />
            <P>Smartoach360 offers digital fitness and nutrition services, including:</P>
            <BulletList items={["Training videos", "Training guides", "Online coaching", "Diet plans", "E-books", "Personalized fitness and nutrition programs"]} />
          </section>

          <Divider />

          {/* 03 */}
          <section id="account" ref={ref("account")} className="mb-8 sm:mb-10">
            <SectionHeader num="03" title="Account Creation" icon={UserCircle} />
            <P>You must provide accurate, complete, and current information when creating your account. You are responsible for maintaining the confidentiality of your login details and for all activities under your account.</P>
          </section>

          <Divider />

          {/* 04 */}
          <section id="medical" ref={ref("medical")} className="mb-8 sm:mb-10">
            <SectionHeader num="04" title="Medical Disclaimer and User Responsibility" icon={ShieldAlert} />
            <AlphaBulletList items={[
              "By participating in the SmartCoach360 virtual health and wellness program — including any exercise sessions, meal plans, nutritional guidance, or general lifestyle recommendations — you acknowledge and agree that your participation is voluntary.",
              "You understand that all physical activity and dietary changes involve inherent risks, and you accept full responsibility for your own health and wellbeing.",
              "You agree that it is your responsibility to consult with a qualified healthcare professional prior to beginning any new fitness, nutrition, or wellness program.",
              "By enrolling and participating, you understand and accept that any injuries, illnesses, or health-related issues that may occur during or after participation are solely your responsibility.",
              "This program provides general prenatal fitness and physiotherapy-guided exercises. Participants must obtain doctor's approval before joining. Stop immediately and consult your gynecologist if you feel pain, dizziness, bleeding, or any unusual symptoms.",
              "To the fullest extent permitted by law, SmartCoach360 and its coaches, employees, contractors, and affiliates shall not be held liable for any medical conditions, injuries, adverse reactions, or other outcomes arising from following the exercises, diet plans, advice, or recommendations provided through the program.",
              "SmartCoach360 is committed to maintaining an inclusive and respectful environment and does not make modifications or distinctions based on caste, religion, race, cultural background, gender, or any other discriminatory criteria.",
            ]} />
          </section>

          <Divider />

          {/* 05 */}
          <section id="program-plans" ref={ref("program-plans")} className="mb-8 sm:mb-10">
            <SectionHeader num="05" title="Program Plans" icon={Star} />
            <P>Smartoach360 may offer different plan durations, billing cycles, and features. By enrolling in a plan, you agree to the terms applicable to that plan.</P>
            <AlphaBulletList items={[
              "No one-on-one or personal live coaching sessions are provided unless explicitly stated.",
              "Trainer availability may vary. Trainer assignments may change due to scheduling or operational reasons, but we ensure smooth transitions.",
              "Session timings and durations may change depending on coach availability and program updates.",
              "All clients are required to use the Smartoach360 App to ensure full access to program features and support.",
              "The Company reserves the absolute right, at its sole discretion, to conduct live sessions in a combined manner with participants enrolled in one or more programs, courses, batches, or cohorts, whether similar or dissimilar.",
              "The Participant expressly acknowledges and agrees that such combined sessions constitute valid and complete performance of the Company's obligations under these Terms.",
              "Participation in such combined sessions shall not be deemed a change, alteration, misrepresentation, or unfair practice, and shall not entitle the Participant to any refund, credit, compensation, or damages.",
            ]} />
          </section>

          <Divider />

          {/* 06 */}
          <section id="offers" ref={ref("offers")} className="mb-8 sm:mb-10">
            <SectionHeader num="06" title="Offers and Price Adjustments" icon={BarChart2} />
            <P>The Company reserves the right, at its sole discretion, to modify, amend, or introduce prices, plans, promotions, and special offers at any time.</P>
            <P>Any such modifications shall apply only from their effective date and shall not be applied retroactively to any prior purchase, subscription, or agreement.</P>
            <Callout>Customers shall have no right to claim the application of any newly introduced offer, discount, or price adjustment to purchases completed prior to the effective date of such offer, unless expressly agreed to by SmartCoach360 in writing.</Callout>
          </section>

          <Divider />

          {/* 07 */}
          <section id="app" ref={ref("app")} className="mb-8 sm:mb-10">
            <SectionHeader num="07" title="SmartCoach360 App" icon={Smartphone} />
            <P>SmartCoach360 has launched an updated mobile application effective <strong>April 2026</strong>. All clients are requested to download and begin using the application at the earliest.</P>
            <BulletList items={[
              "Any updates made on the previous SmartCoach360 application will not be considered valid.",
              "All pause requests, measurements, progress updates, and any other changes must be submitted exclusively through the updated application.",
              "SmartCoach360 will not be responsible for any missed, delayed, or unrecorded updates submitted on the previous version of the application.",
            ]} />
          </section>

          <Divider />

          {/* 08 */}
          <section id="no-redemption" ref={ref("no-redemption")} className="mb-8 sm:mb-10">
            <SectionHeader num="08" title="No Monetary Redemption & Pricing Policy" icon={Ban} />
            <P>Unused program features or sessions cannot be redeemed for cash, refunds, or program extensions.</P>
            <P>Once an add-on program is activated, accessed, or made available to the client, no refund, transfer, or credit shall be issued — including for partial usage, non-usage, scheduling preferences, or personal reasons.</P>
            <InfoBox>Extension days and pause exception days, whether granted as a goodwill gesture or due to service disruption, are provided without monetary value and are non-encashable, non-refundable, and excluded from all refund calculations.</InfoBox>
          </section>

          <Divider />

          {/* 09 */}
          <section id="program-pause-change" ref={ref("program-pause-change")} className="mb-8 sm:mb-10">
            <SectionHeader num="09" title="Program Change After Long Pause" icon={PauseCircle} />
            <AlphaBulletList items={[
              "A participant may request a temporary pause due to pregnancy or medical reasons, subject to approval by SmartCoach360.",
              "During the approved pause period, the fee paid and pricing terms shall remain valid only for the originally enrolled program, provided the participant resumes the same program without modification.",
              "In the event that, after the pause period, the participant requests any change, substitution, upgrade, downgrade, or transition to a different program, such request shall be treated as a new program enrollment.",
              "Any price revision, fee update, or program restructuring implemented by SmartCoach360 during the pause period shall be fully applicable to any program change requested after the pause period.",
              "The participant agrees that the applicable program fee shall be the prevailing price in effect on the date of the program change request, regardless of the amount previously paid.",
            ]} />
          </section>

          <Divider />

          {/* 10 */}
          <section id="program-transfer" ref={ref("program-transfer")} className="mb-8 sm:mb-10">
            <SectionHeader num="10" title="Program Change & Transfer" icon={RefreshCw} />
            <P>For details on programme changes and transfers, please refer to the <span className="text-[#47294c] font-medium underline cursor-pointer">Program Change &amp; Transfer Policy</span> available on our website.</P>
          </section>

          <Divider />

          {/* 11 */}
          <section id="upgrade" ref={ref("upgrade")} className="mb-8 sm:mb-10">
            <SectionHeader num="11" title="Same Program Upgrade" icon={ArrowUpCircle} />
            <AlphaBulletList items={[
              "Program upgrades shall be permitted only after full payment of the applicable program fee has been completed.",
              "Upgrades shall not be allowed on the basis of partial payments, including but not limited to Fee Lock-In Amount or any downpayments.",
              "Once the program has commenced, any upgrade request shall be processed at the prevailing program price at the time of the upgrade request.",
              "Once a program has commenced, the participant shall not be eligible to upgrade at any previously offered or promotional price, even if such offer was available at enrollment.",
              "Program change requests (upgrade or downgrade) will follow the pricing applicable on the date of the request.",
              "In the case of an upgrade or downgrade, clients can choose to pay the price difference or accept a reduced or extended program duration based on current pricing.",
              "Such upgrades shall be charged at the prevailing standard price of the upgraded program, without application of any promotional, discounted, or bundled offer that may have existed earlier.",
            ]} />
          </section>

          <Divider />

          {/* 12 */}
          <section id="coach-swap" ref={ref("coach-swap")} className="mb-8 sm:mb-10">
            <SectionHeader num="12" title="Coach Swap Requests" icon={Users} />
            <P>You may request a coach change under valid circumstances, including:</P>
            <BulletList items={["Change in fitness or nutrition goals", "Assigned coach leaving the organization"]} />
            <Callout>Frequent swaps may be discouraged to maintain progress and coaching consistency.</Callout>
          </section>

          <Divider />

          {/* 13 */}
          <section id="camera" ref={ref("camera")} className="mb-8 sm:mb-10">
            <SectionHeader num="13" title="Camera On Requirement" icon={Camera} />
            <P>Clients must keep their camera ON during all live sessions for safety, form correction, and session validation.</P>
          </section>

          <Divider />

          {/* 14 */}
          <section id="fees" ref={ref("fees")} className="mb-8 sm:mb-10">
            <SectionHeader num="14" title="Fees and Payments" icon={CreditCard} />
            <P>All fees for SmartCoach360 services are displayed prior to enrollment. Once purchased, programs cannot be canceled.</P>
            <Callout>All sales are final.</Callout>
          </section>

          <Divider />

          {/* 15 */}
          <section id="partial-payment" ref={ref("partial-payment")} className="mb-8 sm:mb-10">
            <SectionHeader num="15" title="Partial Payment" icon={CreditCard} />
            <AlphaBulletList items={[
              "The initial payment made towards the program is a downpayment amount and does not correspond to a separate or reduced version of the program.",
              "Under all circumstances, the entire program fee must be completed within 45 days from the date of the initial payment.",
              "If the participant fails to complete the balance payment within the stipulated timelines, the program provider reserves the right to terminate the participant's enrollment and discontinue access after 45 days, without any obligation to refund the amount already paid.",
              "Any payment made below 60% of the total program fee as price lock fee shall be treated as a non-refundable, non-transferable commitment amount.",
              "Such payments are not eligible for refund, transfer, adjustment, or conversion into partial or alternate services, under any circumstances.",
              "Any payment made to lock the program price (Fee Lock-In Amount) shall be deemed a non-refundable and non-transferable enrollment payment.",
              "The remaining balance of the program fee must be paid within fourteen (14) days from the date of payment of the Fee Lock-In Amount.",
              "Failure to complete the balance payment within the stipulated 14-day period may result in cancellation of enrollment and forfeiture of the Fee Lock-In Amount, at the sole discretion of SmartCoach360.",
            ]} />
          </section>

          <Divider />

          {/* 16 */}
          <section id="no-refund" ref={ref("no-refund")} className="mb-8 sm:mb-10">
            <SectionHeader num="16" title="No Refund Policy" icon={Ban} />
            <P>SmartCoach360 does not provide refunds for any reason except where explicitly allowed in the medical emergency policy.</P>
            <InfoBox>For medical emergency refund eligibility, please refer to the <span className="text-[#47294c] font-medium underline cursor-pointer">Medical Emergency Policy</span> available on our website.</InfoBox>
          </section>

          <Divider />

          {/* 17 */}
          <section id="refund-medical" ref={ref("refund-medical")} className="mb-8 sm:mb-10">
            <SectionHeader num="17" title="Refund Exceptions for Medical Emergencies" icon={AlertTriangle} />
            <AlphaBulletList items={[
              "Refund requests may be considered for serious medical conditions that prevent continuation of the program. Valid medical documentation must be provided.",
              "Recurring fees towards operations and service delivery are charged on a pro-rata basis, depending on the duration for which the services have been made available.",
              "All one-time fees are utilised immediately upon enrollment and activation of services and are therefore non-refundable irrespective of the date of cancellation.",
              "Any eligibility for refund shall be determined solely based on the number of calendar days elapsed from the date of enrollment or the date of first payment, whichever is earlier.",
              "Refund review may take 10–15 days. If approved, refunds may take 5–7 business days to reflect in your bank account. SmartCoach360 may deny a refund and offer alternative solutions.",
              "Approved refunds, if any, shall be processed only to the original mode of payment used by the participant.",
              "Payment gateway charges, bank fees, taxes, or statutory levies already paid shall not be refundable.",
            ]} />
          </section>

          <Divider />

          {/* 18 */}
          <section id="consultation" ref={ref("consultation")} className="mb-8 sm:mb-10">
            <SectionHeader num="18" title="Consultation Fees" icon={PhoneCall} />
            <P>Fees paid for consultations are non-refundable once the consultation has been scheduled or delivered.</P>
          </section>

          <Divider />

          {/* 19 */}
          <section id="pause" ref={ref("pause")} className="mb-8 sm:mb-10">
            <SectionHeader num="19" title="Program Pause" icon={PauseCircle} />
            <P>Life events may require a temporary pause of your program. You may request a pause by emailing <span className="text-[#47294c] font-medium">sales@smartcoach360.ai</span>.</P>

            <p className="text-[13px] font-medium text-[#2e1a32] mt-4 mb-2">Pause Entitlement by Program Duration</p>
            <PauseTable />

            <p className="text-[13px] font-medium text-[#2e1a32] mt-4 mb-2">Pause Guidelines</p>
            <BulletList items={[
              "Pauses can be taken only in multiples of 7 days.",
              "Minimum pause duration is 7 days. However, if the client's remaining pause balance is fewer than 7 days, the client may utilise the remaining balance in full.",
              "3-month program: Up to 2 pauses",
              "6-month program: Up to 4 pauses",
              "9-month program: Up to 6 pauses, and so on in proportion to the total eligible pause days.",
              "Pauses cannot be availed during the last month of the program.",
              "For a 3-month program specifically, pauses will not be permitted during the last 15 days.",
            ]} />

            <p className="text-[13px] font-medium text-[#2e1a32] mt-4 mb-2">Long-Duration Pause Eligibility</p>
            <BulletList items={[
              "Pregnancy (if not upgrading to prenatal program)",
              "Depression or mental health challenges",
              "Physical injury",
              "Family emergency",
              "Serious medical conditions",
            ]} />
            <InfoBox>All medical conditions for exceptions must be supported with appropriate medical documentation (scans, X-rays, prescriptions, or written reports issued by a registered and licensed medical professional). SmartCoach360 reserves the sole and final discretion in deciding whether a participant may continue, modify, or discontinue the program based on the information provided.</InfoBox>

            <p className="text-[13px] font-medium text-[#2e1a32] mt-4 mb-2">Pause Policy – Pregnancy, Delivery &amp; Medical Exceptions</p>
            <P>In the event that a client requests a pause due to childbirth, such pause shall be permitted for a maximum cumulative period of six (6) months from the date of delivery. In exceptional cases involving serious medical complications, a one-time additional extension may be considered solely at the discretion of the Company, subject to valid medical documentation.</P>
            <Callout>Failure to resume services within the applicable timeframe shall result in automatic lapse and forfeiture of any remaining or unused portion of the program, without any entitlement to extension, refund, transfer, or credit.</Callout>

            <p className="text-[13px] font-medium text-[#2e1a32] mt-4 mb-2">Pause Eligibility for Part-Payment Plans</p>
            <P>Clients enrolled under a part-payment plan shall not be eligible to avail the pause facility during the first 45 days from the program start date. However, if the client settles the outstanding balance in full prior to the 45-day period, the client shall become eligible to utilise the pause facility from the date of full payment.</P>
          </section>

          <Divider />

          {/* 20 */}
          <section id="conduct" ref={ref("conduct")} className="mb-8 sm:mb-10">
            <SectionHeader num="20" title="Client Conduct Policy" icon={Scale} />
            <P>SmartCoach360 maintains a strict zero-tolerance policy for any form of harassment, abuse, discrimination, or disrespectful behavior toward staff or other participants.</P>
            <p className="text-[13px] font-medium text-[#2e1a32] mb-2">Abusive behavior includes:</p>
            <BulletList items={["Verbal abuse or disrespect", "Harassment or threats", "Discriminatory remarks", "Bullying", "Manipulative or harmful conduct"]} />
            <p className="text-[13px] font-medium text-[#2e1a32] mb-2">Consequences may include:</p>
            <BulletList items={["Warning", "Program suspension or termination", "Blocking access to coaches or services", "Permanent ban from the platform"]} />
          </section>

          <Divider />

          {/* 21 */}
          <section id="schedule" ref={ref("schedule")} className="mb-8 sm:mb-10">
            <SectionHeader num="21" title="Call Schedule & Holidays" icon={Calendar} />
            <P>Onboarding and review calls are not scheduled on Sundays or National Holidays.</P>
          </section>

          <Divider />

          {/* 22 */}
          <section id="license" ref={ref("license")} className="mb-8 sm:mb-10">
            <SectionHeader num="22" title="License to Use Content" icon={Lock} />
            <P>When you purchase a program, SmartCoach360 grants you a limited, non-exclusive, non-transferable license to stream videos, download e-books, and access personalized plans.</P>
            <Callout>You may not share, distribute, reproduce, or repurpose any SmartCoach360 content.</Callout>
          </section>

          <Divider />

          {/* 23 */}
          <section id="photos" ref={ref("photos")} className="mb-8 sm:mb-10">
            <SectionHeader num="23" title="Submission of Progress Photos" icon={ImageIcon} />
            <P>Progress photos are required as part of the program. By submitting them, you grant SmartCoach360 a perpetual, worldwide, royalty-free license to use the images for marketing or business purposes.</P>
          </section>

          <Divider />

          {/* 24 */}
          <section id="availability" ref={ref("availability")} className="mb-8 sm:mb-10">
            <SectionHeader num="24" title="Availability of Services" icon={Globe} />
            <P>SmartCoach360 aims to provide a high-quality experience but does not guarantee uninterrupted access or error-free service.</P>
          </section>

          <Divider />

          {/* 25 */}
          <section id="responsibility" ref={ref("responsibility")} className="mb-8 sm:mb-10">
            <SectionHeader num="25" title="Personal Responsibility and Safety" icon={UserCircle} />
            <P>You are responsible for exercising personal judgment regarding any fitness or nutrition guidance provided. Programs depend on the information you provide and may not suit all circumstances, including pregnancy or medical conditions. Consult a medical professional when needed.</P>
          </section>

          <Divider />

          {/* 26 */}
          <section id="coach-purchases" ref={ref("coach-purchases")} className="mb-8 sm:mb-10">
            <SectionHeader num="26" title="Restriction on Personal Purchases from Coaches" icon={Ban} />
            <BulletList items={[
              "Clients must not buy personal merchandise, products, or 1-on-1 services directly from coaches.",
              "If a coach approaches a client with such offers, the client must inform SmartCoach360 immediately through sales@smartcoach360.ai.",
              "Coaches are not authorized to recommend or endorse any supplement brands.",
              "SmartCoach360 is not responsible for any personal transactions with coaches made without prior email confirmation.",
              "Individual verbal or written assurances that deviate from official Terms and Conditions are not binding on the organization.",
            ]} />
          </section>

          <Divider />

          {/* 27 */}
          <section id="results" ref={ref("results")} className="mb-8 sm:mb-10">
            <SectionHeader num="27" title="Expected Results" icon={Star} />
            <P>Results vary by individual. SmartCoach360 does not guarantee specific outcomes.</P>
          </section>

          <Divider />

          {/* 28 */}
          <section id="data" ref={ref("data")} className="mb-8 sm:mb-10">
            <SectionHeader num="28" title="Data Protection and Communication" icon={Lock} />
            <P>All personal data is handled according to our Privacy Policy. By enrolling, you consent to receiving communications from SmartCoach360 via email, SMS, WhatsApp, OBD, and other communication channels.</P>
          </section>

          <Divider />

          {/* 29 */}
          <section id="international" ref={ref("international")} className="mb-8 sm:mb-10">
            <SectionHeader num="29" title="International Use" icon={Globe} />
            <P>If you are residing outside India, you must comply with local laws and regulations relevant to your location.</P>
          </section>

          <Divider />

          {/* 30 */}
          <section id="minors" ref={ref("minors")} className="mb-8 sm:mb-10">
            <SectionHeader num="30" title="Minors" icon={Baby} />
            <P>Minors may enroll only with a valid No-Objection Certificate from a parent or guardian. All Terms apply equally to minors.</P>
          </section>

          <Divider />

          {/* 31 */}
          <section id="obligations" ref={ref("obligations")} className="mb-8 sm:mb-10">
            <SectionHeader num="31" title="Obligations for Updates" icon={FileText} />
            <P>You are responsible for sending daily meal and weight updates and weekly physique updates. SmartCoach360 may follow up but is not liable if you fail to provide updates.</P>
          </section>

          <Divider />

          {/* 32 */}
          <section id="governing-law" ref={ref("governing-law")} className="mb-8 sm:mb-10">
            <SectionHeader num="32" title="Governing Law" icon={Gavel} />
            <P>These Terms are governed by the laws of India. Any disputes shall be resolved exclusively in the courts of Coimbatore, Tamil Nadu.</P>
          </section>

          <Divider />

          {/* 33 */}
          <section id="changes" ref={ref("changes")} className="mb-8 sm:mb-10">
            <SectionHeader num="33" title="Changes to the Terms" icon={RefreshCw} />
            <P>SmartCoach360 may revise these Terms and Conditions periodically. Any changes will take effect once they are posted on this website. By continuing to access or use the program after updates are posted, you agree to be bound by the revised Terms and Conditions.</P>
            <div className="mt-6 pt-5 border-t border-[#ede8e7] text-center">
              <p className="text-[12px] text-[#a593a1] m-0">— End of Terms and Conditions —</p>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}