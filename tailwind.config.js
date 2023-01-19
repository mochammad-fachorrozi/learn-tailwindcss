/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      spacing: {
        '13': '3.25rem',
      },
      fontFamily: {
        'oswald': 'Oswald',
      },
      colors: {
        'oji': '#bada55',
        'coffee': '#c0ffee',
      },
    },
  },
  plugins: [],
}
