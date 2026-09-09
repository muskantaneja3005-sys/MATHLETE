import { Link } from "react-router-dom";
import { SectionHeading } from "../components/SectionHeading";
import { CTASection } from "../components/CTASection";
import { vedicBenefits, vedicCourse } from "../data/siteConfig";

export function VedicMaths() {
  return (
    <>
      <section className="bg-graph border-b border-navy-100 py-16 sm:py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="font-medium text-gold-700">Vedic Maths</p>
            <h1 className="mt-2 font-display text-4xl font-semibold text-navy-700 sm:text-5xl">
              Make Calculations Faster With Vedic Maths
            </h1>
            <p className="mt-4 max-w-md text-navy-400">
              Vedic Maths is a collection of calculation techniques and shortcuts that help
              students calculate faster, spot number patterns and build real mental-maths
              ability — alongside regular school Mathematics, not instead of it.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-block rounded-full bg-navy-700 px-6 py-3 text-[15px] font-medium text-cream hover:bg-navy-600"
            >
              Enquire About Vedic Maths
            </Link>
          </div>
          <div className="rounded-3xl border border-navy-100 bg-white p-8 shadow-soft">
            <p className="font-display text-5xl text-gold-600">25 × 25</p>
            <p className="mt-2 text-sm text-navy-400">= 625, using a simple squaring-numbers-ending-in-5 shortcut.</p>
            <div className="my-6 h-px bg-navy-100" />
            <p className="font-display text-5xl text-navy-700">1000 − 387</p>
            <p className="mt-2 text-sm text-navy-400">= 613, using a quick all-from-9-last-from-10 technique.</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading heading="What Students Gain From Vedic Maths" align="center" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {vedicBenefits.map((b) => (
              <div key={b} className="rounded-2xl border border-navy-100 bg-white p-6 text-center shadow-soft">
                <span className="text-2xl text-gold-600">✓</span>
                <p className="mt-2 text-[15px] font-medium text-navy-700">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <SectionHeading heading="Who Is This For?" />
          <p className="mt-4 text-[15px] text-navy-400">
            {vedicCourse.classes}. Vedic Maths works well as an enrichment alongside school
            Mathematics — most students notice quicker calculations and fewer careless mistakes
            within a few weeks of consistent practice.
          </p>
          <ul className="mt-6 space-y-2">
            {vedicCourse.benefits.map((b) => (
              <li key={b} className="flex gap-2 text-[15px] text-navy-600">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-600" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        heading="Curious How Vedic Maths Could Help Your Child?"
        supporting="Book a free demo class to see the techniques in action."
      />
    </>
  );
}
