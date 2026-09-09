# Numera Maths Academy — Website

A complete, multi-page marketing website for an online Mathematics & Vedic Maths
tutoring business, built with React, TypeScript, Tailwind CSS and React Router.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

The `dist/` folder produced by `npm run build` can be deployed to any static
host (Vercel, Netlify, GitHub Pages, etc.).

## Editing your business details

Everything that's specific to your business — phone number, WhatsApp number,
email, teacher bio, course descriptions, testimonials, FAQ content and
navigation — lives in **one file**:

```
src/data/siteConfig.ts
```

Open that file and replace the placeholder values (marked with `[...]`) with
your real details. No other file needs to change for basic content updates.

## Pages

| Route            | File                          |
|-------------------|-------------------------------|
| `/`               | `src/pages/Home.tsx`          |
| `/about`          | `src/pages/About.tsx`         |
| `/courses`        | `src/pages/Courses.tsx`       |
| `/school-maths`   | `src/pages/SchoolMaths.tsx`   |
| `/vedic-maths`    | `src/pages/VedicMaths.tsx`    |
| `/testimonials`   | `src/pages/Testimonials.tsx`  |
| `/faq`            | `src/pages/FAQ.tsx`           |
| `/contact`        | `src/pages/Contact.tsx`       |

## Reusable components

`src/components/` contains `Navbar`, `Footer`, `CourseCard`, `TestimonialCard`,
`FAQAccordion`, `CTASection`, `ContactForm`, `WhatsAppButton`, `SectionHeading`
and `MathMotif` (the hero illustration).

## The enquiry form

`src/components/ContactForm.tsx` is a fully validated frontend form. It is
**not** connected to a backend or email service yet — submitting it currently
only logs the data to the browser console and shows a success message. Before
going live, connect it to a service such as:

- A form backend like Formspree, Getform, or Basin (fastest to set up)
- Your own serverless function (Vercel/Netlify Functions) that emails you or
  writes to a database
- A CRM webhook

Do not present the form as "live" to visitors until it is actually wired up —
otherwise enquiries will be lost.

## Placeholders still to fill in

- Teacher name, qualification, experience, photo (`siteConfig.ts` → `teacher`,
  and the photo placeholder in `About.tsx` / `Home.tsx`)
- Phone, WhatsApp number, email, social links (`siteConfig.ts` → `siteConfig`)
- Class duration in the FAQ ("How long is each class?")
- Open Graph image at `/og-image.jpg` (add a real image to `public/` with
  that filename, or update the path in `index.html`)
- Real testimonials once you have them — the current ones are realistic
  placeholder examples, not real quotes

## SEO notes

- Page title and meta description are set in `index.html` (site-wide) —
  for a production site, consider adding per-page `<title>`/meta updates via
  a small head-management library (e.g. `react-helmet-async`) since this is a
  client-rendered SPA.
- Structured data (`EducationalOrganization`) is included in `index.html`.
- Update `og:image` and `canonical` URLs once the site has a real domain.
