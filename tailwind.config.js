/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#020043',
        'secondary': '#FFFFF5',
        'button-color': '#FFC637',
        'text-color' : '#343268',
        'text-color-secondary' : '#4D4C7B',

      },
      fontFamily: {
        gloria: ['Gloria Hallelujah', 'cursive'],
        josep: ['Josefin Sans', 'sans-serif'],
      },
      screens: {
        xs: '500px',
        '900': '900px',
      },
    },
  },
  plugins: [],
}
);

