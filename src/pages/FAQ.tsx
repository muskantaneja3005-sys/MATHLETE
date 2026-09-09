import { FAQAccordion } from "../components/FAQAccordion";
import { CTASection } from "../components/CTASection";
import { faqs } from "../data/siteConfig";

export function FAQ() {
  return (
    <>
      <section className="bg-graph border-b border-navy-100 py-16 sm:py-20">
        <div className="container-page">
          <p className="font-medium text-gold-700">FAQ</p>
          <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold text-navy-700 sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-xl text-navy-400">
            Answers to the questions parents ask most often. Can't find what you're looking for?
            Reach out on WhatsApp any time.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection heading="Still Have Questions?" supporting="Book a free demo class, or message us directly on WhatsApp." />
    </>
  );
}
