import { useEffect, useState } from "react";

type CourseRate = {
  name: string;
  inrPerHour: number;
};

const courseRates: CourseRate[] = [
  { name: "Classes 6 to 8", inrPerHour: 1500 },
  { name: "Classes 9 & 10", inrPerHour: 2000 },
];

const currencies = ["USD", "GBP", "AED", "AUD", "CAD"] as const;
type Currency = (typeof currencies)[number];

const currencySymbols: Record<Currency, string> = {
  USD: "$",
  GBP: "£",
  AED: "AED ",
  AUD: "A$",
  CAD: "C$",
};

export function InternationalRates() {
  const [rates, setRates] = useState<Record<Currency, number> | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    async function fetchRates() {
      try {
        const res = await fetch("https://api.exchangerate-api.com/v4/latest/INR");
        if (!res.ok) throw new Error("Failed to fetch rates");
        const data = await res.json();
        if (cancelled) return;

        const next = {} as Record<Currency, number>;
        for (const c of currencies) {
          if (typeof data.rates?.[c] === "number") {
            next[c] = data.rates[c];
          }
        }
        setRates(next);
        setStatus("ready");
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    fetchRates();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-soft sm:p-8">
      <h3 className="font-display text-lg font-semibold text-navy-700">
        Rates for International Students
      </h3>
      <p className="mt-1 text-[14px] text-navy-400">
        Approximate hourly rates converted from INR at today's exchange rate. Final rates are
        confirmed at the time of enrolment.
      </p>

      {status === "loading" && (
        <p className="mt-5 text-[14px] text-navy-400">Loading current exchange rates…</p>
      )}

      {status === "error" && (
        <p className="mt-5 text-[14px] text-navy-400">
          Live rates are temporarily unavailable. Please contact us on WhatsApp for current
          international rates.
        </p>
      )}

      {status === "ready" && rates && (
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left text-[14px]">
            <thead>
              <tr className="border-b border-navy-100 text-navy-400">
                <th className="py-2 pr-4 font-medium">Course</th>
                <th className="py-2 pr-4 font-medium">₹ / hour</th>
                {currencies.map((c) => (
                  <th key={c} className="py-2 pr-4 font-medium">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {courseRates.map((course) => (
                <tr key={course.name} className="border-b border-navy-50">
                  <td className="py-2.5 pr-4 text-navy-700">{course.name}</td>
                  <td className="py-2.5 pr-4 text-navy-600">₹{course.inrPerHour}</td>
                  {currencies.map((c) => {
                    const converted = rates[c] ? course.inrPerHour * rates[c] : null;
                    return (
                      <td key={c} className="py-2.5 pr-4 text-navy-600">
                        {converted !== null
                          ? `${currencySymbols[c]}${converted.toFixed(2)}`
                          : "—"}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
