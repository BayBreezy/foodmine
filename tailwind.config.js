const cols = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: cols.indigo[600],
          ...cols.indigo,
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
