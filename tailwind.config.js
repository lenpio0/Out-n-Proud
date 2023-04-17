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
      backgroundImage: {
        'separator-top': 'linear-gradient(to bottom right, #FCFFFD 50%, #0000 50%)',
        'separator-bot': 'linear-gradient(to bottom right, #0000 50%, #FCFFFD 50%)',
        'smoke': 'url(../images/rainbowSmoke2.png)',
      },
    },
  },
  plugins: [],
}
