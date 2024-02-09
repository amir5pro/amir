/** @type {import('tailwindcss').Config} */
// tailwind.config.js

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff8e0",
          100: "#ffebbf",
          500: "#ff8c00",
          900: "#7c4500",
        },
        grey: {
          50: "#f8fafc",
          300: "#cbd5e1",
          500: "#64748b",
          900: "#0f172a",
        },

        bg_secondary_color: "#f8fafc",
        text_color: "#0f172a",
        text_secondary_color: "#64748b",

        d_bg_secondary_color: " #3f3f3f",
        d_text_color: "#f0f0f0",
        d_text__secondary_color: "#cbd5e1",
      },
    },
    fontFamily: {
      sora: ["sora", "inter", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
