/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'encode':["Encode Sans Condensed", "sans-serif"]
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

