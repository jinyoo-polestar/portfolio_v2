/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "200px",
      md: "1000px",
      lg: "1200px",
      xl: "1960px",
    },
    colors: {
      blue: "#1B6FFF",
      blue200: "#F2F7FF",
      blue300: "8BC6EC",
      bluegray: "#F8F9FA",
      white: "#fff",
      black: "#000",
      gray: "#EDEDED",
      gray200: "#535353",
      purple100: "#92a6e5",
      purple200: "#8FB2E8",
    },
    fontFamily: {
      sans: ["Prtendard", "sans-serif"],
      higilight: ["Paperlogy", "Pretendard", "sans-serif"],
    },
    extend: {
      colors: {
        blackTransparent: "rgba(0, 0, 0, 0.75)",
      },
      padding: { "1/10": "10%" },
      width: { "9/10": "90%", 800: "800%" },
      gap: { "1/10": "10%", "2/10": "20%", "3/10": "30%" },
      backgroundImage: {
        wavebg:
          "linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%)",
      },
      boxShadow: {
        gray: "0 4px 6px 0 rgba(0,0,0,0.21)",
        primary: "0 4px 22px 0 rgba(27,111,255,0.41)",
      },
      keyframes: {
        wave: {
          "0%": {
            transform: "rotate(0)",
            top: "90%",
          },
          "50%": {
            transform: "rotate(200deg)",
            top: "40%",
          },
          "100%": {
            transform: "rotate(400deg)",
            top: "-20%",
          },
        },
      },
      animation: {
        wave: "wave 6s linear forwards",
      },
      listStyleType: {
        bar: "square",
      },
    },
  },
  plugins: [],
};
