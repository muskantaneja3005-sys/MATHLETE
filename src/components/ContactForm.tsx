import { useState, type FormEvent, type ReactNode } from "react";

type FormState = {
  studentName: string;
  parentName: string;
  studentClass: string;
  board: string;
  courseInterested: string;
  phone: string;
  preferredTiming: string;
  message: string;
};

const initialState: FormState = {
  studentName: "",
  parentName: "",
  studentClass: "",
  board: "",
  courseInterested: "",
  phone: "",
  preferredTiming: "",
  message: "",
};

type Status = "idle" | "success" | "error";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.studentName.trim()) next.studentName = "Please enter the student's name.";
    if (!form.parentName.trim()) next.parentName = "Please enter the parent's name.";
    if (!form.studentClass.trim()) next.studentClass = "Please select a class.";
    if (!form.courseInterested.trim()) next.courseInterested = "Please select a course.";
    if (!form.phone.trim()) {
      next.phone = "Please enter a phone number.";
    } else if (!/^[+]?[\d\s-]{8,15}$/.test(form.phone.trim())) {
      next.phone = "Please enter a valid phone number.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }

    // NOTE: This form is a clean frontend implementation only.
    // Connect it to a backend or email service (e.g. Formspree, a serverless
    // function, or your own API) before relying on it to deliver enquiries.
    console.log("Demo booking submitted:", form);

    setStatus("success");
    setForm(initialState);
  }

  const inputClass =
    "w-full rounded-xl border border-navy-100 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-navy-400/60 focus:border-gold-600";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Student Name" error={errors.studentName}>
          <input
            className={inputClass}
            value={form.studentName}
            onChange={(e) => update("studentName", e.target.value)}
            placeholder="e.g. Aarav Sharma"
          />
        </Field>
        <Field label="Parent Name" error={errors.parentName}>
          <input
            className={inputClass}
            value={form.parentName}
            onChange={(e) => update("parentName", e.target.value)}
            placeholder="e.g. Priya Sharma"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Class" error={errors.studentClass}>
          <select
            className={inputClass}
            value={form.studentClass}
            onChange={(e) => update("studentClass", e.target.value)}
          >
            <option value="">Select class</option>
            {["6", "7", "8", "9", "10", "Other"].map((c) => (
              <option key={c} value={c}>
                Class {c}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Board" error={errors.board}>
          <select className={inputClass} value={form.board} onChange={(e) => update("board", e.target.value)}>
            <option value="">Select board</option>
            <option value="ICSE">ICSE</option>
            <option value="CBSE">CBSE</option>
            <option value="IB">IB</option>
            <option value="Other">Other</option>
          </select>
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Course Interested In" error={errors.courseInterested}>
          <select
            className={inputClass}
            value={form.courseInterested}
            onChange={(e) => update("courseInterested", e.target.value)}
          >
            <option value="">Select course</option>
            <option value="School Maths 6-8">School Maths — Classes 6 to 8</option>
            <option value="Class 9 Maths">Class 9 Maths</option>
            <option value="Class 10 Maths">Class 10 Maths</option>
            <option value="Vedic Maths">Vedic Maths</option>
            <option value="Not sure">Not sure yet</option>
          </select>
        </Field>
        <Field label="Phone Number" error={errors.phone}>
          <input
            className={inputClass}
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="e.g. 98765 43210"
            type="tel"
          />
        </Field>
      </div>

      <Field label="Preferred Class Timing" error={errors.preferredTiming}>
        <input
          className={inputClass}
          value={form.preferredTiming}
          onChange={(e) => update("preferredTiming", e.target.value)}
          placeholder="e.g. Weekday evenings after 5 PM"
        />
      </Field>

      <Field label="Message" error={errors.message}>
        <textarea
          className={inputClass}
          rows={4}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us a bit about what your child needs help with (optional)"
        />
      </Field>

      <button
        type="submit"
        className="w-full rounded-full bg-navy-700 px-6 py-3.5 text-[15px] font-medium text-cream hover:bg-navy-600 sm:w-auto"
      >
        Book FREE Demo
      </button>

      {status === "success" && (
        <p role="status" className="rounded-xl bg-navy-50 px-4 py-3 text-[14px] text-navy-700">
          Thank you! Your enquiry has been recorded. We'll get in touch shortly to confirm your demo class.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-[14px] text-red-700">
          Please check the highlighted fields and try again.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-medium text-navy-600">{label}</span>
      {children}
      {error && <span className="mt-1 block text-[13px] text-red-600">{error}</span>}
    </label>
  );
}
