import { Link } from "react-router-dom";
import type { Course } from "../data/siteConfig";

export function CourseCard({ course, detailPath }: { course: Course; detailPath: string }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-7 shadow-soft">
      {course.boards && (
        <span className="mb-3 inline-block w-fit rounded-full bg-navy-50 px-3 py-1 text-xs font-medium tracking-wide text-navy-600">
          {course.boards}
        </span>
      )}
      <h3 className="font-display text-xl font-semibold text-navy-700">{course.name}</h3>
      <p className="mt-1 text-sm font-medium text-gold-700">{course.classes}</p>
      <p className="mt-3 text-[15px] text-navy-400">{course.description}</p>

      <ul className="mt-4 space-y-2">
        {course.benefits.map((b) => (
          <li key={b} className="flex gap-2 text-[14px] text-navy-600">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-600" aria-hidden="true" />
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-3 pt-1">
        <Link
          to={detailPath}
          className="flex-1 rounded-full border border-navy-700 px-4 py-2.5 text-center text-sm font-medium text-navy-700 hover:bg-navy-50"
        >
          View Course
        </Link>
        <Link
          to="/contact"
          className="flex-1 rounded-full bg-navy-700 px-4 py-2.5 text-center text-sm font-medium text-cream hover:bg-navy-600"
        >
          Enquire Now
        </Link>
      </div>
    </div>
  );
}
