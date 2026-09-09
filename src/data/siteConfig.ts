// ─────────────────────────────────────────────────────────────
// SITE CONFIG — edit everything here. No other file needs to
// change when you update contact details, pricing, or timings.
// ─────────────────────────────────────────────────────────────

export const siteConfig = {
  businessName: "Numera Maths Academy",
  tagline: "Online Maths & Vedic Maths Classes for School Students",

  // Contact — replace with real details
  phone: "+91 90000 00000",
  whatsapp: "919000000000", // digits only, with country code, no + or spaces
  email: "hello@numeramaths.example",
  instagramUrl: "https://instagram.com/numeramaths",
  facebookUrl: "https://facebook.com/numeramaths",
  youtubeUrl: "https://youtube.com/@numeramaths",
  location: "Online Classes — students can join from anywhere in India",

  whatsappDefaultMessage:
    "Hello, I would like to enquire about Maths/Vedic Maths classes for my child.",

  year: 2026,
};

export const teacher = {
  name: "[Teacher Name]",
  photoAlt: "Photograph of [Teacher Name], Mathematics teacher",
  qualification: "[e.g. M.Sc. Mathematics, B.Ed.]",
  experience: "[e.g. 12+ years teaching school Mathematics]",
  specialisation:
    "Specialises in building conceptual clarity in Algebra, Geometry and Arithmetic for middle and senior school students, alongside Vedic Maths for faster mental calculation.",
  boards: "Experienced with ICSE, CBSE and IB Mathematics curricula",
  philosophy:
    "\"I believe every student can be good at Maths once the underlying concept makes sense to them. My classes focus on the 'why' before the 'how' — so students stop memorising and start understanding.\"",
};

export type Course = {
  slug: string;
  name: string;
  classes: string;
  description: string;
  benefits: string[];
  boards?: string;
};

export const schoolCourses: Course[] = [
  {
    slug: "classes-6-8",
    name: "School Maths — Classes 6 to 8",
    classes: "Classes 6, 7 & 8",
    description:
      "A strong foundation matters more at this stage than speed. These classes focus on building clear number sense, sound arithmetic and an early comfort with algebraic thinking.",
    benefits: [
      "Concept-first teaching for every topic",
      "Regular practice worksheets",
      "Doubt-solving during and after class",
      "Confidence-building for new topics",
    ],
    boards: "ICSE · CBSE · IB",
  },
  {
    slug: "class-9",
    name: "Class 9 Maths",
    classes: "Class 9",
    description:
      "Class 9 introduces heavier, more abstract topics. These classes strengthen fundamentals early so students aren't caught off guard when Class 10 board preparation begins.",
    benefits: [
      "Chapter-wise concept building",
      "Problem-solving practice beyond the textbook",
      "Preparation for Class 10 board topics",
      "Regular assessments to track progress",
    ],
    boards: "ICSE · CBSE · IB",
  },
  {
    slug: "class-10",
    name: "Class 10 Maths",
    classes: "Class 10",
    description:
      "Focused, board-exam preparation. These classes cover important concepts in depth, build exam strategy and give students extensive practice with previous years' question patterns.",
    benefits: [
      "Board-exam focused teaching",
      "Important questions and exam strategy",
      "Extensive solved and practice problems",
      "Mock tests and timed practice",
    ],
    boards: "ICSE · CBSE · IB",
  },
];

export const vedicCourse: Course = {
  slug: "vedic-maths",
  name: "Vedic Maths",
  classes: "Suitable for Classes 4 to 10",
  description:
    "A system of calculation techniques that helps students calculate faster, spot patterns more easily and build genuine number sense — alongside regular school Maths, not instead of it.",
  benefits: [
    "Faster multiplication, division and squaring techniques",
    "Improved mental calculation ability",
    "Reduced calculation errors in exams",
    "Better focus and number confidence",
  ],
};

export const usps = [
  {
    title: "Concept-Based Learning",
    description: "Understand the why behind every formula and method, not just the steps.",
  },
  {
    title: "Personalised Attention",
    description: "Guidance shaped around how each student learns and where they struggle.",
  },
  {
    title: "School Curriculum Focused",
    description: "Classes aligned with ICSE, CBSE and IB syllabus requirements.",
  },
  {
    title: "Regular Practice",
    description: "Worksheets, assignments and exam-oriented problems every week.",
  },
  {
    title: "Doubt Solving",
    description: "Students can ask questions freely and get concepts clarified in class.",
  },
  {
    title: "Vedic Maths Skills",
    description: "Learn faster calculation techniques and sharpen mental Maths alongside school topics.",
  },
];

export const whyChooseUs = [
  "Individual attention, with small-batch options available",
  "Both online and offline learning options",
  "Strong focus on concept clarity, not rote learning",
  "Weekly worksheets and structured practice",
  "Dedicated exam preparation for board years",
  "Doubt-solving support between classes",
  "Regular progress updates for parents",
  "Teaching personalised to each student's pace",
  "Optional Vedic Maths enrichment",
  "A calm, friendly learning environment, free of exam anxiety",
];

export const vedicBenefits = [
  "Faster calculations",
  "Better number sense",
  "Improved concentration",
  "Greater confidence",
  "Reduced calculation time",
  "Useful shortcuts",
  "Better mental maths ability",
];

export const howItWorks = [
  {
    step: "1",
    title: "Book a Demo",
    description: "Choose a convenient time for a free, no-obligation demo class.",
  },
  {
    step: "2",
    title: "Attend the Demo",
    description: "See the teaching approach first-hand before deciding to enrol.",
  },
  {
    step: "3",
    title: "Choose Your Course",
    description: "Select school Maths, Vedic Maths, or both — whatever fits your child.",
  },
  {
    step: "4",
    title: "Start Learning",
    description: "Join regular, interactive classes with consistent practice and support.",
  },
];

export const onlineClassFeatures = [
  "Live, interactive classes — not pre-recorded videos",
  "Digital whiteboard for step-by-step working",
  "Screen sharing for worked examples",
  "Interactive problem-solving during class",
  "Doubt-solving built into every session",
  "Practice worksheets after each class",
  "Structured homework and follow-up",
  "Progress tracking shared with parents",
];

export type Testimonial = {
  quote: string;
  attribution: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Maths became much easier once my daughter understood the concepts properly. Her confidence has improved tremendously.",
    attribution: "Parent of Class 9 Student",
  },
  {
    quote:
      "My son used to dread Maths homework. Now he sits down and works through problems on his own before asking for help.",
    attribution: "Parent of Class 7 Student",
  },
  {
    quote:
      "The Vedic Maths sessions genuinely made calculations quicker for me, and I make far fewer silly mistakes in tests now.",
    attribution: "Class 8 Student",
  },
  {
    quote:
      "I liked that every class started with 'why' before 'how'. It made formulas easier to remember because they finally made sense.",
    attribution: "Class 10 Student",
  },
  {
    quote:
      "As a working parent, I appreciated the regular updates on where my child was struggling and what we could do at home.",
    attribution: "Parent of Class 6 Student",
  },
];

export type FAQItem = { question: string; answer: string };

export const faqs: FAQItem[] = [
  {
    question: "Which classes do you teach?",
    answer: "School Mathematics for Classes 6 to 10, and Vedic Maths, which can be taken alongside school Maths.",
  },
  {
    question: "Do you teach ICSE students?",
    answer: "Yes, classes are designed to align with the ICSE Mathematics syllabus.",
  },
  {
    question: "Do you teach CBSE students?",
    answer: "Yes, classes are designed to align with the CBSE Mathematics syllabus.",
  },
  {
    question: "Do you teach IB students?",
    answer: "Yes, classes can be adapted to IB Mathematics requirements as well.",
  },
  {
    question: "Are classes online?",
    answer: "Classes are conducted online through live, interactive sessions. Offline options may also be available — do ask when you enquire.",
  },
  {
    question: "Do you offer individual classes?",
    answer: "Yes, one-on-one classes are available for students who want more individual attention.",
  },
  {
    question: "Do you offer group classes?",
    answer: "Yes, small-batch group classes are available for students who enjoy learning alongside peers.",
  },
  {
    question: "What is Vedic Maths?",
    answer: "Vedic Maths is a set of calculation techniques and shortcuts that help students calculate faster and build stronger mental Maths ability.",
  },
  {
    question: "Is Vedic Maths suitable for school students?",
    answer: "Yes, Vedic Maths techniques work well alongside school Mathematics and can be learned from around Class 4 onwards.",
  },
  {
    question: "Is there a demo class?",
    answer: "Yes, a free demo class is available so you can experience the teaching approach before enrolling.",
  },
  {
    question: "How long is each class?",
    answer: "Class duration is confirmed at the time of enrolment based on the course and age group. [Add your standard duration here]",
  },
  {
    question: "How can I enrol?",
    answer: "Book a free demo class through the website or contact us directly on WhatsApp, and we'll guide you through enrolment.",
  },
  {
    question: "How can parents contact you?",
    answer: "You can reach us on WhatsApp, by phone, or by email — details are available on the Contact page.",
  },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Courses", to: "/courses" },
  { label: "School Maths", to: "/school-maths" },
  { label: "Vedic Maths", to: "/vedic-maths" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];
