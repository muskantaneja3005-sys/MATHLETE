import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks, siteConfig } from "../data/siteConfig";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-navy-100 bg-cream/90 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between sm:h-20" aria-label="Primary">
        <NavLink to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img
            src="/logo.png"
            alt={`${siteConfig.businessName} logo`}
            className="h-10 w-auto sm:h-12"
          />
        </NavLink>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-[15px] font-medium ${
                  isActive ? "text-navy-700" : "text-navy-400 hover:text-navy-700"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="rounded-full bg-navy-700 px-5 py-2.5 text-[15px] font-medium text-cream shadow-soft hover:bg-navy-600"
          >
            Book FREE Demo
          </NavLink>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-100 lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            {open ? (
              <path d="M4 4l14 14M18 4L4 18" stroke="#0F2A47" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 6h16M3 11h16M3 16h16" stroke="#0F2A47" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-navy-100 bg-cream lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-[15px] font-medium ${
                    isActive ? "bg-navy-50 text-navy-700" : "text-navy-400"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-navy-700 px-5 py-3 text-center text-[15px] font-medium text-cream"
            >
              Book FREE Demo
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
