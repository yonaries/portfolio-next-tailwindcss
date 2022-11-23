/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        primaryBg: "rgb(21, 21, 21)",
        secondary: "rgb(138, 138, 138)",
        dusk: "rgb(32, 32, 34)",
        "darker-dusk": "rgb(25, 25, 25)",
        "neutral-850":"rgb(30, 30, 30)"
      },
      fontSize: {
        "2xs": "0.6rem",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      maxWidth: {
        hd: "85.375rem",
        fullhd: "1920rem",
      },
      minHeight: {
        48: "12rem",
      },
      divideWidth:{
        1:"1px"
      }
    },
  },
  plugins: [],
};
