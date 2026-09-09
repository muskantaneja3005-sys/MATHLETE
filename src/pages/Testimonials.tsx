import { TestimonialCard } from "../components/TestimonialCard";
import { CTASection } from "../components/CTASection";
import { testimonials } from "../data/siteConfig";

export function Testimonials() {
  return (
    <>
      <section className="bg-graph border-b border-navy-100 py-16 sm:py-20">
        <div className="container-page">
          <p className="font-medium text-gold-700">Testimonials</p>
          <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold text-navy-700 sm:text-5xl">
            What Parents & Students Say
          </h1>
          <p className="mt-4 max-w-xl text-navy-400">
            Real feedback from families about their experience with our classes. Every student's
            journey is different — results depend on effort, consistency and starting point.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.attribution} testimonial={t} />
          ))}
        </div>
      </section>

      <CTASection
        heading="Want Your Child's Story to Look Like This?"
        supporting="Book a free demo class and see the teaching approach for yourself."
      />
    </>
  );
}
