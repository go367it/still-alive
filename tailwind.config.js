/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Ribeye": ["Ribeye", ...defaultTheme.fontFamily.sans],
        "Roboto": ["Roboto", ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
}
