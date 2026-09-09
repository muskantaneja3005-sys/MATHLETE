import { SectionHeading } from "../components/SectionHeading";
import { CourseCard } from "../components/CourseCard";
import { CTASection } from "../components/CTASection";
import { schoolCourses, vedicCourse } from "../data/siteConfig";

export function Courses() {
  return (
    <>
      <section className="bg-graph border-b border-navy-100 py-16 sm:py-20">
        <div className="container-page">
          <p className="font-medium text-gold-700">Courses</p>
          <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold text-navy-700 sm:text-5xl">
            Choose Your Learning Path
          </h1>
          <p className="mt-4 max-w-xl text-navy-400">
            Structured Mathematics classes for Classes 6 to 10, aligned with ICSE, CBSE and IB —
            plus Vedic Maths, available separately or alongside school Maths.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading heading="School Mathematics" supporting="Concept-based classes mapped to each stage of school Maths." />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {schoolCourses.map((c) => (
              <CourseCard key={c.slug} course={c} detailPath="/school-maths" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading heading="Vedic Maths" supporting="A faster, mental approach to calculation — offered separately or alongside school Maths." />
          <div className="mt-8 max-w-sm">
            <CourseCard course={vedicCourse} detailPath="/vedic-maths" />
          </div>
        </div>
      </section>

      <CTASection
        heading="Still Deciding Which Course Fits?"
        supporting="A free demo class is the easiest way to find out."
      />
    </>
  );
}
