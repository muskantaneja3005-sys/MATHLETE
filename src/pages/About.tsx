import { Link } from "react-router-dom";
import { SectionHeading } from "../components/SectionHeading";
import { CTASection } from "../components/CTASection";
import { teacher } from "../data/siteConfig";

export function About() {
  return (
    <>
      <section className="bg-graph border-b border-navy-100 py-16 sm:py-20">
        <div className="container-page">
          <p className="font-medium text-gold-700">About</p>
          <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold text-navy-700 sm:text-5xl">
            Learn Maths With the Right Guidance
          </h1>
          <p className="mt-4 max-w-xl text-navy-400">
            Good teaching is about more than covering the syllabus — it's about making sure a
            student genuinely understands what they're doing, and why.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[280px,1fr]">
          <div className="mx-auto flex h-64 w-64 items-center justify-center rounded-3xl border border-navy-100 bg-mist text-center text-sm text-navy-400 lg:mx-0">
            {teacher.photoAlt}
            <br />
            (Add teacher photograph here)
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="font-display text-2xl font-semibold text-navy-700">{teacher.name}</h2>
              <p className="mt-1 text-[15px] text-gold-700">{teacher.qualification}</p>
            </div>

            <dl className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-navy-100 bg-white p-4 shadow-soft">
                <dt className="text-[13px] font-medium text-navy-400">Teaching Experience</dt>
                <dd className="mt-1 text-[15px] text-navy-700">{teacher.experience}</dd>
              </div>
              <div className="rounded-xl border border-navy-100 bg-white p-4 shadow-soft">
                <dt className="text-[13px] font-medium text-navy-400">Boards Taught</dt>
                <dd className="mt-1 text-[15px] text-navy-700">{teacher.boards}</dd>
              </div>
            </dl>

            <div>
              <h3 className="font-display text-lg font-semibold text-navy-700">Specialisation</h3>
              <p className="mt-2 text-[15px] text-navy-400">{teacher.specialisation}</p>
            </div>

            <div className="rounded-2xl border border-navy-100 bg-mist p-6">
              <h3 className="font-display text-lg font-semibold text-navy-700">Teaching Philosophy</h3>
              <p className="mt-2 text-[15px] italic text-navy-600">{teacher.philosophy}</p>
            </div>

            <Link
              to="/contact"
              className="inline-block rounded-full bg-navy-700 px-6 py-3 text-[15px] font-medium text-cream hover:bg-navy-600"
            >
              Book a Demo With the Teacher
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-mist py-16 sm:py-20">
        <div className="container-page max-w-2xl">
          <SectionHeading heading="Our Approach to Teaching" />
          <div className="mt-6 space-y-4 text-[15px] text-navy-400">
            <p>
              Your child doesn't need to fear Maths. With the right concepts, consistent practice
              and patient guidance, Maths can become easier — and genuinely more enjoyable.
            </p>
            <p>
              Classes are built around each student's pace and current level, with regular
              practice and open doubt-solving, so students build real confidence rather than
              short-term answers.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to See This Approach in Action?"
        supporting="Book a free demo class and experience the teaching style first-hand."
      />
    </>
  );
}
