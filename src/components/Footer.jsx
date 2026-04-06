import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { IMAGES } from "../images";

const socialLinks = [
  { name: "Instagram", icon: IMAGES.insta,    href: "https://www.instagram.com/smartcoach360" },
  { name: "LinkedIn",  icon: IMAGES.linkedin, href: "https://www.linkedin.com/company/smartcoach360/" },
];

const LINKS = {
  Platform: [
    { label: "Home",     path: "/" },
    { label: "Integrations", path: "/integrations" },
    { label: "Contact Us",   path: "/contact-us" },

  ],

  Company: [
    { label: "About Us",     path: "/about-us" },
    { label: "Solutions",   path: "/solutions" },
    { label: "Comparison",   path: "/comparison" },
     { label: "Security",     path: "/security" },
  ],

  Learn: [
    { label: "Success Stories", path: "/case-studies" },
    { label: "Blog",         path: "/blogs" },
    { label: "Help Centre",  path: "/help-centre" },
  ],

  Contact: [
    { label: "sales@smartcoach360.ai", path: "mailto:sales@smartcoach360.ai" },
    { label: "No 9/14, Bharathi Street, Vellakinar, Coimbatore, Tamil Nadu, 641029",   path: "/contact-us" },
  ],
};

function FooterSection({ title, links }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.07] md:border-none">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-4 md:py-0 md:cursor-default md:pointer-events-none"
      >
        <h4 className="text-brand-lilac-100 font-semibold text-sm">{title}</h4>
        <ChevronDown
          size={15}
          className={`text-brand-fedora-lt transition-transform duration-300 md:hidden ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:overflow-visible md:max-h-none md:opacity-100 md:mb-0 ${
          open ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-3 md:mt-4">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.path}
                className="text-sm text-brand-fedora-lt hover:text-brand-lilac-100 transition-colors leading-relaxed"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#2e1a32" }} className="text-brand-silver">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 md:gap-10 mb-6 md:mb-14">

          <div className="lg:col-span-1 pb-6 mb-6 border-b border-white/[0.07] md:border-none md:mb-0 md:pb-0">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center">
               <img src={IMAGES.logo} alt="SmartCoach360" className="w-5 h-5" />
              </div>
              <span className="font-display text-lg text-brand-lilac-100">
                SmartCoach<span className="text-brand-lilac-300">360</span>
              </span>
            </div>

            <p className="text-sm leading-relaxed text-brand-fedora-lt mb-6">
              The all-in-one coaching platform built for fitness professionals who want to scale.
            </p>

            <div className="flex gap-2">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-brand-boss/60 hover:bg-brand-boss-mid flex items-center justify-center backdrop-blur-sm border border-white/5 transition-all hover:scale-105 active:scale-95"
                >
                  <img src={s.icon} alt={s.name} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(LINKS).map(([cat, links]) => (
            <FooterSection key={cat} title={cat} links={links} />
          ))}
        </div>

        <div className="border-t border-brand-boss/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-fedora">
            © {new Date().getFullYear()} SmartCoach360. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}