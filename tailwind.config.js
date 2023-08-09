/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#62B6B7',
        'secondary-color': '#97DECE',
        'icon-color': '#1C274C',
        'icon-hover-color': '#546dd0',
      },
      dropShadow: {
        'header-shadow': ['rgba(0, 0, 0, 0.35) 0px 5px 15px'],
      },
    },
  },
  plugins: [],
}