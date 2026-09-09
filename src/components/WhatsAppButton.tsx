import { siteConfig } from "../data/siteConfig";

function buildWhatsAppUrl(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp}?text=${encoded}`;
}

export function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl(siteConfig.whatsappDefaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-transform hover:scale-105 sm:h-16 sm:w-16"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 sm:h-8 sm:w-8" fill="currentColor" aria-hidden="true">
        <path d="M16.04 3C9.37 3 3.96 8.4 3.96 15.06c0 2.23.6 4.36 1.73 6.24L3 29l7.9-2.62a12.9 12.9 0 0 0 5.14 1.07h.01c6.67 0 12.08-5.4 12.08-12.06C28.13 8.4 22.72 3 16.04 3zm7.13 17.24c-.3.85-1.5 1.56-2.44 1.76-.65.13-1.5.24-4.36-.94-3.66-1.51-6.02-5.22-6.2-5.47-.18-.24-1.49-1.98-1.49-3.79 0-1.8.94-2.68 1.28-3.05.3-.32.65-.4.87-.4.22 0 .43 0 .62.01.2.01.46-.07.72.55.3.7 1.01 2.44 1.1 2.62.09.18.15.4.03.64-.12.24-.18.4-.36.61-.18.21-.38.47-.54.63-.18.18-.37.37-.16.73.21.36.94 1.55 2.02 2.51 1.39 1.24 2.56 1.63 2.92 1.81.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.8-.18.33.12 2.09.99 2.45 1.17.36.18.6.27.68.42.09.15.09.85-.21 1.7z" />
      </svg>
    </a>
  );
}
