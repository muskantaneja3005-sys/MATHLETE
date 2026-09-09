import { ContactForm } from "../components/ContactForm";
import { siteConfig } from "../data/siteConfig";

export function Contact() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappDefaultMessage
  )}`;

  return (
    <>
      <section className="bg-graph border-b border-navy-100 py-16 sm:py-20">
        <div className="container-page">
          <p className="font-medium text-gold-700">Contact</p>
          <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold text-navy-700 sm:text-5xl">
            Ready to Make Maths Easier?
          </h1>
          <p className="mt-4 max-w-xl text-navy-400">
            Get in touch to discuss the right learning plan for your child, or book a free demo
            class directly below.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr,1.2fr]">
          <div className="space-y-6">
            <h2 className="font-display text-2xl font-semibold text-navy-700">Not Sure Which Course Is Right?</h2>
            <p className="text-[15px] text-navy-400">
              Book a FREE demo class and experience the teaching approach before enrolling.
            </p>

            <div className="space-y-4">
              <ContactDetail icon="📱" label="WhatsApp" value={siteConfig.phone} href={whatsappUrl} />
              <ContactDetail icon="📞" label="Phone" value={siteConfig.phone} href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} />
              <ContactDetail icon="✉️" label="Email" value={siteConfig.email} href={`mailto:${siteConfig.email}`} />
              <ContactDetail icon="📍" label="Location" value={siteConfig.location} />
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#25D366] px-6 py-3 text-[15px] font-medium text-white hover:opacity-90"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactDetail({
  icon,
  label,
  value,
  href,
}: {
  icon: string;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3 rounded-xl border border-navy-100 bg-white p-4 shadow-soft">
      <span className="text-xl" aria-hidden="true">{icon}</span>
      <div>
        <p className="text-[13px] font-medium text-navy-400">{label}</p>
        <p className="text-[15px] text-navy-700">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  );
}
