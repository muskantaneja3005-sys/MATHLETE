import type { Testimonial } from "../data/siteConfig";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-navy-100 bg-white p-7 shadow-soft">
      <blockquote className="font-display text-lg leading-relaxed text-navy-700">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-5 text-sm font-medium text-navy-400">
        {testimonial.attribution}
      </figcaption>
    </figure>
  );
}
