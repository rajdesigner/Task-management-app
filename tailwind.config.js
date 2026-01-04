/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b1220",
        panel: "rgba(255,255,255,0.06)",
        stroke: "rgba(255,255,255,0.10)",
        text: "rgba(255,255,255,0.92)",
        muted: "rgba(255,255,255,0.70)",
        muted2: "rgba(255,255,255,0.55)",
        brand: "#6ee7ff",
        brand2: "#a78bfa",
        accent: "#ffb86b"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(0,0,0,0.35)"
      },
      borderRadius: {
        xl2: "18px"
      }
    },
  },
  plugins: [],
};
