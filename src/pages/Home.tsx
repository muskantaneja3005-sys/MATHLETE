import { Link } from "react-router-dom";
import { MathMotif } from "../components/MathMotif";
import { SectionHeading } from "../components/SectionHeading";
import { CourseCard } from "../components/CourseCard";
import { TestimonialCard } from "../components/TestimonialCard";
import { FAQAccordion } from "../components/FAQAccordion";
import { CTASection } from "../components/CTASection";
import {
  usps,
  whyChooseUs,
  vedicBenefits,
  howItWorks,
  onlineClassFeatures,
  testimonials,
  faqs,
  schoolCourses,
  vedicCourse,
  siteConfig,
} from "../data/siteConfig";

export function Home() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappDefaultMessage
  )}`;

  return (
    <>
      {/* HERO */}
      <section className="bg-graph border-b border-navy-100">
        <div className="container-page grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
          <div className="fade-in-up">
            <p className="font-medium text-gold-700">{siteConfig.tagline}</p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] text-navy-700 sm:text-5xl lg:text-[3.4rem]">
              Master Maths. Build Confidence. Think Faster.
            </h1>
            <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-navy-400">
              Personalised and concept-focused Mathematics classes designed to help students
              understand concepts, improve problem-solving skills and perform better in school
              examinations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="rounded-full bg-navy-700 px-7 py-3.5 text-center text-[15px] font-medium text-cream shadow-soft hover:bg-navy-600"
              >
                Book a FREE Demo Class
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-navy-700 px-7 py-3.5 text-center text-[15px] font-medium text-navy-700 hover:bg-navy-50"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <MathMotif />
          </div>
        </div>
      </section>

      {/* TRUST / USP */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            heading="Built around how students actually learn Maths"
            supporting="Every class is designed around understanding, not memorisation."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {usps.map((u) => (
              <div key={u.title} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-soft">
                <h3 className="font-display text-lg font-semibold text-navy-700">{u.title}</h3>
                <p className="mt-2 text-[15px] text-navy-400">{u.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="bg-mist py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading heading="Choose Your Learning Path" supporting="From foundation-building in Class 6 to board preparation in Class 10, plus Vedic Maths." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {schoolCourses.map((c) => (
              <CourseCard key={c.slug} course={c} detailPath="/school-maths" />
            ))}
            <CourseCard course={vedicCourse} detailPath="/vedic-maths" />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading heading="Why Parents & Students Choose Us" />
          <div className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {whyChooseUs.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-100 text-[13px] font-semibold text-gold-700">
                  ✓
                </span>
                <p className="text-[15px] text-navy-600">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEACHER TEASER */}
      <section className="bg-navy-700 bg-graph-dark py-16 sm:py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[220px,1fr]">
          <div className="mx-auto flex h-52 w-52 items-center justify-center rounded-full border-4 border-gold-600/40 bg-navy-600 text-cream/60 lg:mx-0">
            Photo placeholder
          </div>
          <div>
            <p className="font-medium text-gold-400">Meet Your Teacher</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-cream sm:text-4xl">
              Learn Maths With the Right Guidance
            </h2>
            <p className="mt-4 max-w-xl text-navy-100/80">
              Every class is led with patience, clarity and real teaching experience across
              school boards — so students build genuine understanding, not just exam answers.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-block rounded-full bg-gold-600 px-6 py-3 text-[15px] font-medium text-navy-800 hover:bg-gold-400"
            >
              Meet the Teacher
            </Link>
          </div>
        </div>
      </section>

      {/* VEDIC MATHS */}
      <section className="py-16 sm:py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              heading="Make Calculations Faster With Vedic Maths"
              supporting="Vedic Maths teaches students simple techniques and shortcuts to calculate faster, spot patterns and build genuine mental-maths ability — alongside regular school Maths."
            />
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
              {vedicBenefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-[14px] text-navy-600">
                  <span className="text-gold-600">✓</span> {b}
                </li>
              ))}
            </ul>
            <Link
              to="/vedic-maths"
              className="mt-7 inline-block rounded-full bg-navy-700 px-6 py-3 text-[15px] font-medium text-cream hover:bg-navy-600"
            >
              Explore Vedic Maths
            </Link>
          </div>
          <div className="rounded-3xl border border-navy-100 bg-mist p-8">
            <p className="font-display text-6xl text-gold-600">13 × 17</p>
            <p className="mt-2 text-sm text-navy-400">= 221, solved mentally in seconds using a base-of-10 technique.</p>
            <div className="mt-6 h-px bg-navy-100" />
            <p className="mt-6 font-display text-6xl text-navy-700">98²</p>
            <p className="mt-2 text-sm text-navy-400">= 9604, using a simple deviation-from-base shortcut.</p>
          </div>
        </div>
      </section>

      {/* HOW CLASSES WORK */}
      <section className="bg-mist py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading heading="How Classes Work" align="center" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((s) => (
              <div key={s.step} className="rounded-2xl border border-navy-100 bg-white p-6 text-center shadow-soft">
                <span className="font-display text-3xl text-gold-600">{s.step}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-navy-700">{s.title}</h3>
                <p className="mt-2 text-[14px] text-navy-400">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ONLINE CLASSES */}
      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <p className="font-medium text-gold-700">Learn From Home. Learn At Your Pace.</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-navy-700 sm:text-4xl">
              How Our Online Classes Work
            </h2>
            <p className="mt-4 max-w-md text-navy-400">
              Classes are live and interactive, not pre-recorded — so students get real-time
              explanations and doubt-solving, wherever they are.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {onlineClassFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2 rounded-xl border border-navy-100 bg-white p-4 text-[14px] text-navy-600 shadow-soft">
                <span className="text-gold-600">✓</span> {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section className="bg-mist py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading heading="What Parents & Students Say" align="center" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.attribution} testimonial={t} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/testimonials" className="text-[15px] font-medium text-navy-700 underline underline-offset-4">
              Read more testimonials
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        heading="Not Sure Which Course Is Right for Your Child?"
        supporting="Book a FREE Demo Class and experience the teaching approach before enrolling."
      />

      {/* FAQ PREVIEW */}
      <section className="py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <SectionHeading heading="Frequently Asked Questions" align="center" />
          <div className="mt-10">
            <FAQAccordion items={faqs.slice(0, 5)} />
          </div>
          <div className="mt-8 text-center">
            <Link to="/faq" className="text-[15px] font-medium text-navy-700 underline underline-offset-4">
              View all questions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
