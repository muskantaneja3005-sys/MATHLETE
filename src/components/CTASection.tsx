import { Link } from "react-router-dom";
import { siteConfig } from "../data/siteConfig";

export function CTASection({
  heading,
  supporting,
  primaryLabel = "Book FREE Demo",
  primaryTo = "/contact",
}: {
  heading: string;
  supporting?: string;
  primaryLabel?: string;
  primaryTo?: string;
}) {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappDefaultMessage
  )}`;

  return (
    <section className="bg-navy-700 bg-graph-dark">
      <div className="container-page flex flex-col items-center gap-6 py-16 text-center">
        <h2 className="max-w-2xl font-display text-3xl font-semibold text-cream sm:text-4xl">
          {heading}
        </h2>
        {supporting && <p className="max-w-lg text-navy-100/80">{supporting}</p>}
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            to={primaryTo}
            className="rounded-full bg-gold-600 px-7 py-3.5 text-[15px] font-medium text-navy-800 shadow-soft hover:bg-gold-400"
          >
            {primaryLabel}
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/30 px-7 py-3.5 text-[15px] font-medium text-cream hover:bg-white/10"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
