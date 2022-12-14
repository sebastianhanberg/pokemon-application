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
      'gray-superlight': '#f5f5f5',
      'orange': '#fe9441',
      'red-400': '#A92929',
      'red-200': '#D33333',
    },
    fontFamily: {
      sans: ['Dosis', 'sans-serif'],
    },
    backgroundImage: {
      'App': "url('./assets/pokemon-bg.jpg')",
    },
  },
  plugins: [],
}
