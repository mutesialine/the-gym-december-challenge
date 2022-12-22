const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        big: "2rem",
        small: "1.75rem",
        bigg: "6rem",
        xbase: "1.375rem",
      },
      colors: {
        darkblue: "#072140",
        lightblue: "#3070b3",
        yellow: "#fed702",
        purplo: "#8f81ea",
        orange: "#ea7237",
        rose: "#b55ca5",
        darkyellow: "#f7b11e",
        bluu: "#0a2d57",
      },
      maxWidth: {
        "8xl": "101rem", // 1616
        primary: "87.5rem", //1400px
      },
      spacing: {
        27.5: "6.9375rem", //111px
        32.25: "8.0625rem", //129px
        43: "43rem",
        27: "27.8125rem", //445px
        19: "19.0625rem",
        49: "48.75rem",
        29: "29.9375rem",
      },
      fontFamily: {
        sans: ["var(--font-roboto)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
