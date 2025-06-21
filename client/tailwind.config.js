/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors : {
        "primary-200" : "#00b050",
        "primary-100" : "#00b050",
        "secondary-200" : "#00b050",
        "secondary-100" : "#0b1a78"
      }
    },
  },
  plugins: [],
};
