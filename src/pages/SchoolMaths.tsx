import { Link } from "react-router-dom";
import { SectionHeading } from "../components/SectionHeading";
import { CTASection } from "../components/CTASection";
import { schoolCourses } from "../data/siteConfig";

export function SchoolMaths() {
  return (
    <>
      <section className="bg-graph border-b border-navy-100 py-16 sm:py-20">
        <div className="container-page">
          <p className="font-medium text-gold-700">School Maths</p>
          <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold text-navy-700 sm:text-5xl">
            Mathematics for Classes 6 to 10
          </h1>
          <p className="mt-4 max-w-xl text-navy-400">
            Classes are built around ICSE, CBSE and IB syllabus requirements, with a consistent
            focus on understanding concepts, practising regularly and preparing properly for
            examinations.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page space-y-14">
          {schoolCourses.map((course, i) => (
            <div
              key={course.slug}
              id={course.slug}
              className={`grid gap-8 rounded-3xl border border-navy-100 p-8 shadow-soft sm:p-10 lg:grid-cols-[1fr,1fr] ${
                i % 2 === 0 ? "bg-white" : "bg-mist"
              }`}
            >
              <div>
                <span className="inline-block rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-600">
                  {course.boards}
                </span>
                <h2 className="mt-3 font-display text-2xl font-semibold text-navy-700">{course.name}</h2>
                <p className="mt-3 text-[15px] text-navy-400">{course.description}</p>
                <Link
                  to="/contact"
                  className="mt-6 inline-block rounded-full bg-navy-700 px-6 py-3 text-[15px] font-medium text-cream hover:bg-navy-600"
                >
                  Enquire About This Course
                </Link>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-navy-700">What's included</h3>
                <ul className="mt-3 space-y-2">
                  {course.benefits.map((b) => (
                    <li key={b} className="flex gap-2 text-[15px] text-navy-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-600" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mist py-16 sm:py-20">
        <div className="container-page max-w-2xl">
          <SectionHeading heading="Board-Specific Support" />
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {["ICSE", "CBSE", "IB"].map((b) => (
              <div key={b} className="rounded-2xl border border-navy-100 bg-white p-6 text-center shadow-soft">
                <p className="font-display text-xl font-semibold text-navy-700">{b}</p>
                <p className="mt-2 text-[14px] text-navy-400">Syllabus-aligned teaching and exam preparation.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Ready to Strengthen Your Child's Maths?" supporting="Book a free demo class to get started." />
    </>
  );
}
