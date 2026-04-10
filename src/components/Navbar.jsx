import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IMAGES } from "../images";

const NAV = [
  { label: "About Us", path: "/about-us" },
  { label: "Features", path: "/features" },
  { label: "Solutions", path: "/solutions" },
  { label: "Integrations", path: "/integrations" },
  { label: "Pricing", path: "/pricing" },

  {
    label: "Resources",
    children: [
      { label: "Blogs", path: "/blogs" },
      { label: "Success Stories", path: "/success-stories" },
    ],
  },

  { label: "Compare", path: "/comparison" },
];

const url =import.meta.env.VITE_CALENDLY_LINK;


export default function Navbar({ onOpenContactForm }) {
  const [open,      setOpen]      = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  const navRef   = useRef(null);
  const linkRefs = useRef({});
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    const activeEl = linkRefs.current[location.pathname];
    const navEl    = navRef.current;
    if (activeEl && navEl) {
      const nr = navEl.getBoundingClientRect();
      const lr = activeEl.getBoundingClientRect();
      setIndicator({ left: lr.left - nr.left, width: lr.width, opacity: 1 });
    } else {
      setIndicator((p) => ({ ...p, opacity: 0 }));
    }
  }, [location.pathname]);

  return (
    <>
    
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "top-2" : "top-0"
        }`}
      >
        <div
          className={`mx-auto transition-all duration-300 ${
            scrolled
              ? "max-w-[98%] mx-4 sm:mx-6 lg:mx-8 rounded-[18px] border border-[rgba(201,168,214,0.35)] bg-[rgba(253,250,255,0.96)] backdrop-blur-xl shadow-[0_4px_24px_rgba(71,41,76,0.08),0_1px_4px_rgba(71,41,76,0.04),inset_0_1px_0_rgba(255,255,255,0.9)]"
              : "border-b border-[#e8e0ed] bg-[rgba(250,247,252,0.97)] backdrop-blur-md"
          }`}
        >
          <div
            className={`flex items-center justify-between px-5 transition-all duration-300 ${
              scrolled ? "h-[54px]" : "h-[60px]"
            }`}
          >

            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2.5 group bg-transparent border-none p-0 cursor-pointer"
            >
              <div className="w-[34px] h-[34px] rounded-[10px] flex items-center justify-center flex-shrink-0 shadow-[0_2px_8px_rgba(160,108,176,0.3)] transition-all duration-200 group-hover:shadow-[0_4px_16px_rgba(160,108,176,0.45)] group-hover:-translate-y-px">
                <img
                  src={IMAGES.logo}
                  alt="SmartCoach360"
                  className="w-[18px] h-[18px] object-contain"
                />
              </div>
              <span className="font-display text-[17px] text-[#1c0f1f] tracking-[-0.01em] whitespace-nowrap">
                SmartCoach<span className="text-[#a06cb0]">360</span>
              </span>
            </button>

            {/* ── Desktop nav links ── */}
            <div ref={navRef} className="hidden md:flex items-center gap-0.5 relative">
              <div
                className="absolute bottom-1 h-[30px] rounded-lg  pointer-events-none z-0 transition-[left,width,opacity] duration-[350ms]"
                style={{
                  left:    indicator.left,
                  width:   indicator.width,
                  opacity: indicator.opacity,
                }}
              />
              {NAV.map((n) => {
  const isDropdown = !!n.children;

  if (isDropdown) {
    return (
      <div key={n.label} className="relative group">
        <button className="px-3.5 py-1.5 text-[13.5px] font-medium text-[#5c4862] hover:text-[#47294c]">
          {n.label} ▾
        </button>

        {/* Dropdown */}
        <div className="absolute left-0 mt-2 w-[180px] bg-white border border-[#eee] rounded-xl shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
          {n.children.map((child) => (
            <Link
              key={child.path}
              to={child.path}
              className="block px-4 py-2 text-sm text-[#5c4862] hover:bg-[#f6f2f8]"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  const active = location.pathname === n.path;

  return (
    <Link
      key={n.path}
      to={n.path}
      ref={(el) => { if (el) linkRefs.current[n.path] = el; }}
      className={`relative z-[1] px-3.5 py-1.5 rounded-lg text-[13.5px] font-medium whitespace-nowrap no-underline transition-colors duration-200 ${
        active
          ? "text-purple-800 pointer-events-none font-extrabold"
          : "text-[#5c4862] hover:text-[#47294c]"
      }`}
    >
      {n.label}
    </Link>
  );
})}
            </div>

            {/* ── Desktop CTAs ── */}
            <div className="hidden md:flex items-center gap-2.5">
              <button
                onClick={onOpenContactForm}
                className="text-[13.5px] font-medium text-[#8a7490] bg-transparent border-none cursor-pointer px-3 py-1.5 rounded-lg transition-all duration-200 hover:text-[#47294c] hover:bg-[rgba(71,41,76,0.06)]"
              >
                Contact Us
              </button>
              <button
                onClick={() => window.open(url, "_blank")}
                className="text-[13.5px] font-semibold text-white bg-gradient-to-br from-[#a06cb0] to-[#47294c] border-none cursor-pointer px-[18px] py-2 rounded-[10px] whitespace-nowrap shadow-[0_3px_12px_rgba(71,41,76,0.28)] transition-all duration-200 hover:shadow-[0_6px_20px_rgba(71,41,76,0.38)] hover:-translate-y-px active:translate-y-0 active:opacity-90"
              >
                Book a Demo →
              </button>
            </div>

            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="md:hidden p-1.5 rounded-[9px] bg-transparent border-none text-[#5c4862] cursor-pointer transition-all duration-150 hover:bg-[rgba(71,41,76,0.07)] hover:text-[#47294c]"
            >
              {open ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

   
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[49] bg-[rgba(28,15,31,0.45)] backdrop-blur-[4px] transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

   
      <div
        className={`fixed top-0 right-0 bottom-0 z-[49] w-[280px] bg-[#fdf9ff] border-l border-[#e8e0ed] shadow-[-8px_0_48px_rgba(71,41,76,0.12)] flex flex-col px-4 py-5 overflow-y-auto transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        
        <div className="flex items-center justify-between mb-7 px-1">
          <span className="font-display text-base text-[#1c0f1f]">
            SmartCoach<span className="text-[#a06cb0]">360</span>
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="w-[30px] h-[30px] rounded-lg border-none bg-[rgba(71,41,76,0.07)] flex items-center justify-center text-[#5c4862] cursor-pointer transition-colors duration-150 hover:bg-[rgba(71,41,76,0.14)]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

      
        <nav className="flex flex-col gap-0.5 flex-1">
          {NAV.map((n) => {
  if (n.children) {
    return (
      <div key={n.label} className="px-2">
        <div className="text-xs text-[#8a7490] px-2 py-2 uppercase">
          {n.label}
        </div>

        {n.children.map((child) => (
          <Link
            key={child.path}
            to={child.path}
            onClick={() => setOpen(false)}
            className="block px-4 py-2.5 rounded-[10px] text-sm text-[#5c4862] hover:bg-[rgba(71,41,76,0.06)]"
          >
            {child.label}
          </Link>
        ))}
      </div>
    );
  }

  const active = location.pathname === n.path;

  return (
    <Link
      key={n.path}
      to={n.path}
      onClick={() => setOpen(false)}
      className={`block px-4 py-2.5 rounded-[10px] text-sm font-medium ${
        active
          ? "bg-gradient-to-br from-[#47294c] to-[#a06cb0] text-white"
          : "text-[#5c4862] hover:bg-[rgba(71,41,76,0.06)]"
      }`}
    >
      {n.label}
    </Link>
  );
})}
        </nav>

       
        <div className="h-px bg-[#e8e0ed] my-4 mx-1" />

        
        <div className="flex flex-col gap-2 px-1">
          <button
            onClick={() => { setOpen(false); onOpenContactForm?.(); }}
            className="text-sm font-medium text-[#8a7490] bg-transparent border-none cursor-pointer px-3 py-2.5 rounded-[10px] text-left transition-all duration-150 hover:bg-[rgba(71,41,76,0.06)] hover:text-[#47294c]"
          >
            Contact Us
          </button>
          <button
            onClick={() => { setOpen(false); window.open(url, "_blank"); }}
            className="text-sm font-semibold text-white bg-gradient-to-br from-[#a06cb0] to-[#47294c] border-none cursor-pointer px-4 py-3 rounded-xl text-center shadow-[0_3px_14px_rgba(71,41,76,0.28)] transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
          >
            Book a Demo →
          </button>
        </div>
      </div>
    </>
  );
}