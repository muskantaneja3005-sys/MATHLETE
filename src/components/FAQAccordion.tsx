import { useState } from "react";
import type { FAQItem } from "../data/siteConfig";

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-navy-100 rounded-2xl border border-navy-100 bg-white">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className="font-medium text-navy-700">{item.question}</span>
              <span
                className={`shrink-0 text-xl text-gold-600 transition-transform ${isOpen ? "rotate-45" : ""}`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {isOpen && (
              <div id={`faq-panel-${i}`} className="px-6 pb-5 text-[15px] text-navy-400">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
