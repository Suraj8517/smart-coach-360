import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IMAGES } from "../images";

const NAV = [
  { label: "Solutions", path: "/usecases" },
  { label: "Integrations", path: "/integrations" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Compare", path: "/comparison" },
  { label: "Blogs", path: "/blogs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-lilac/95 backdrop-blur-md border-b border-brand-silver-xl">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-9 h-9 rounded-xl bg-lilac-300 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
            <img src={IMAGES.logo} alt="Logo" className="w-5 h-5"/>
          </div>
          <span className="font-display text-lg text-brand-black">
            SmartCoach<span className="text-brand-boss">360</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV.map((n) => {
            const active = location.pathname === n.path;

            return (
              <Link
                key={n.path}
                to={n.path}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-brand-boss text-brand-lilac"
                    : "text-brand-fedora-dk hover:bg-brand-lilac-100 hover:text-brand-boss"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </div>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm font-medium text-brand-fedora hover:text-brand-boss px-3 py-2 transition-colors">
            Sign In
          </button>
          <button className="btn-primary text-sm !py-2.5 !px-5 !rounded-xl">
            Book a Demo
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-brand-fedora-dk hover:bg-brand-lilac-100"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-brand-lilac border-t border-brand-silver-xl px-4 py-4 space-y-1 shadow-xl">
          {NAV.map((n) => {
            const active = location.pathname === n.path;

            return (
              <Link
                key={n.path}
                to={n.path}
                onClick={() => setOpen(false)}
                className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium ${
                  active
                    ? "bg-brand-boss text-brand-lilac"
                    : "text-brand-fedora-dk hover:bg-brand-lilac-100"
                }`}
              >
                {n.label}
              </Link>
            );
          })}

          <div className="pt-3 border-t border-brand-silver-xl flex flex-col gap-2">
            <button className="text-sm font-medium text-brand-fedora px-4 py-2.5 text-left">
              Sign In
            </button>
            <button className="btn-primary text-sm w-full justify-center">
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}