/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue': '#244CEC',
        'pink': '#F41159',
        'red': '#F81310',
        'orange': '#FB7306',
        'yellow': '#F7C809',
        'green': '#077931',
        'white': '#FCFFFD',
        'black': '#343030',
      },
      fontFamily: {
        'arvo': ['Arvo', 'serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'varela': 'Varela Round',
      },
    },
  },
  plugins: [],
}

const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}