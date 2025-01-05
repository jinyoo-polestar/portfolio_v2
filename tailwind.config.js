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
      blue200: "#F2F7FF",
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
    extend: {
      padding: { "1/10": "10%" },
      width: { "9/10": "90%" },
      gap: { "1/10": "10%", "2/10": "20%", "3/10": "30%" },
      boxShadow: {
        gray: "0 4px 6px 0 rgba(0,0,0,0.21)",
        primary: "0 4px 22px 0 rgba(27,111,255,0.41)",
      },
    },
  },
  plugins: [],
};
