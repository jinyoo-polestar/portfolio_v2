/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#1B6FFF",
      bluegray: "#F8F9FA",
      white: "#fff",
      black: "#000",
      gray: "#EDEDED",
      gray200: "#535353",
      gradientpurple: "linear-gradient(#1B6FFF,#F39CFF)",
    },
    fontFamily: {
      sans: ["Prtendard", "sans-serif"],
      higilight: ["Paperlogy", "Pretendard", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
