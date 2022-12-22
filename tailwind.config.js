/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        "big":"2rem"
      },
      colors: {
        darkblue: "#072140",
        lightblue:"#3070b3",
      },
      maxWidth: {
        "8xl": "101rem", // 1616
        primary: "87.5rem", //1400px
      },
    },
  },
  plugins: [],
};
