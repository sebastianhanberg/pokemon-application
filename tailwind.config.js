/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'pokemon-yellow': '#ffcb05',
      'light-yellow': '#FBD743',
      'pokemon-blue': '#5db9ff',
      'white': '#fafafa',
      'black': '#000000',
      'gray-dark': '#242424',
      'gray-medium': '#71716F',
      'gray-light': '#ececec',
      'gray-superlight': '#f5f5f5'
    },
    fontFamily: {
      sans: ['Roboto Condensed', 'sans-serif'],
    }
  },
  plugins: [],
}
