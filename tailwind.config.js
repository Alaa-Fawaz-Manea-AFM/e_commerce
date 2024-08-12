/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      colors: {
        red: "#DB4444",
        green: "#00FF66",
        gray: "#f5f5f5",
        gray_vetcor: "#c1c0c1",
        transparent: "transparent",
        yellow: "#FFAD33",
      },
      screens: {
        xxs: "375px",
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};
