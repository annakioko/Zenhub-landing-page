/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#F8F9FA",
        gold: "#D4AF37",
        blue: "#0A1E2B",
        black: "#333333",
        button: "#6DF0FF",
        hover: "",
      },
    },
  },
  plugins: [],
};

