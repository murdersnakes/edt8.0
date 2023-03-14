/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      primary: colors.emerald,
      light: colors.gray,
      secondary: colors.rose,
      third: colors.amber,
    },
    extend: {
      fontFamily: {
        head: ["var(--font-head)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
