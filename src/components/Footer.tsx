import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../data/siteConfig";

export function Footer() {
  return (
    <footer className="bg-navy-800 text-navy-50">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-semibold text-cream">{siteConfig.businessName}</p>
          <p className="mt-2 text-sm text-navy-100/80">{siteConfig.tagline}</p>
          <div className="mt-5 flex gap-3">
            <SocialIcon href={siteConfig.instagramUrl} label="Instagram">
              <path d="M12 2.2c3.2 0 3.6 0 4.85.07 3.25.15 4.77 1.7 4.92 4.92.06 1.24.07 1.6.07 4.81 0 3.2 0 3.57-.07 4.81-.15 3.2-1.66 4.77-4.92 4.92-1.24.06-1.6.07-4.85.07-3.2 0-3.57 0-4.8-.07-3.27-.15-4.77-1.72-4.92-4.92-.07-1.24-.07-1.6-.07-4.81 0-3.2 0-3.57.07-4.81.15-3.23 1.66-4.77 4.92-4.92C8.43 2.2 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5 0-4.73.07-2.27.1-3.33 1.18-3.43 3.43-.06 1.23-.07 1.57-.07 4.73s0 3.5.07 4.73c.1 2.24 1.15 3.33 3.43 3.43 1.23.06 1.57.07 4.73.07s3.5 0 4.73-.07c2.27-.1 3.33-1.18 3.43-3.43.06-1.23.07-1.57.07-4.73s0-3.5-.07-4.73c-.1-2.24-1.15-3.33-3.43-3.43C15.5 4 15.15 4 12 4zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2zm5.1-2a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3z" />
            </SocialIcon>
            <SocialIcon href={siteConfig.facebookUrl} label="Facebook">
              <path d="M13.5 21v-7.6h2.55l.38-2.96h-2.93V8.53c0-.86.24-1.44 1.47-1.44h1.57V4.46A20.9 20.9 0 0 0 14.24 4c-2.26 0-3.8 1.38-3.8 3.9v2.54H7.87v2.96h2.57V21h3.06z" />
            </SocialIcon>
            <SocialIcon href={siteConfig.youtubeUrl} label="YouTube">
              <path d="M21.6 7.7a2.8 2.8 0 0 0-1.97-2C17.9 5.2 12 5.2 12 5.2s-5.9 0-7.63.5A2.8 2.8 0 0 0 2.4 7.7 29.5 29.5 0 0 0 1.9 12a29.5 29.5 0 0 0 .5 4.3 2.8 2.8 0 0 0 1.97 1.98C6.1 18.8 12 18.8 12 18.8s5.9 0 7.63-.5a2.8 2.8 0 0 0 1.97-1.98c.33-1.4.5-2.85.5-4.32a29.5 29.5 0 0 0-.5-4.3zM9.9 15.02V8.98L15.4 12l-5.5 3.02z" />
            </SocialIcon>
          </div>
        </div>

        <div>
          <p className="font-medium text-cream">Quick Links</p>
          <ul className="mt-3 space-y-2 text-sm text-navy-100/80">
            <li><Link to="/" className="hover:text-cream">Home</Link></li>
            <li><Link to="/courses" className="hover:text-cream">Courses</Link></li>
            <li><Link to="/about" className="hover:text-cream">About</Link></li>
            <li><Link to="/faq" className="hover:text-cream">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-cream">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-cream">Courses</p>
          <ul className="mt-3 space-y-2 text-sm text-navy-100/80">
            <li><Link to="/school-maths" className="hover:text-cream">Classes 6–8</Link></li>
            <li><Link to="/school-maths" className="hover:text-cream">Class 9</Link></li>
            <li><Link to="/school-maths" className="hover:text-cream">Class 10</Link></li>
            <li><Link to="/vedic-maths" className="hover:text-cream">Vedic Maths</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-cream">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-navy-100/80">
            <li>{siteConfig.phone}</li>
            <li>WhatsApp: {siteConfig.phone}</li>
            <li>{siteConfig.email}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-navy-100/60">
        © {siteConfig.year} {siteConfig.businessName}. All Rights Reserved.
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-cream hover:bg-white/20"
    >
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        {children}
      </svg>
    </a>
  );
}
