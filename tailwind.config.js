/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "rgb(21, 21, 21)",
        secondary: "rgb(148, 148, 149)",
        dusk: "rgb(32, 32, 34)",
        "darker-dusk": "rgb(25, 25, 25)",
        "neutral-850":"rgb(30, 30, 30)"
      },
      fontSize: {
        "2xs": "0.6rem",
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
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
