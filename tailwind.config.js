/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#151E2B",
        navy: {
          DEFAULT: "#0F2A47",
          50: "#EAF1F8",
          100: "#D6E4F1",
          400: "#2E547A",
          600: "#123457",
          700: "#0F2A47",
          800: "#0B1F35",
          900: "#081627",
        },
        gold: {
          DEFAULT: "#C79A3E",
          100: "#F6EAD1",
          400: "#D6AE5C",
          600: "#C79A3E",
          700: "#A87E2C",
        },
        cream: "#FAF8F3",
        mist: "#EEF3F8",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,42,71,0.06), 0 8px 24px rgba(15,42,71,0.08)",
      },
    },
  },
  plugins: [],
};
