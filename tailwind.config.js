/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'media1200': '1200px',
        'media645': '645px',
        'media540': '540px',
      },
    },
  },
  plugins: [],
}

