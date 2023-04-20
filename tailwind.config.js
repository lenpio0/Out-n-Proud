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
        'black': '#343030',
        'white': '#FCFFFD',
        'blue-contact': '#4fc7c5',
      },
      fontFamily: {
        'arvo': ['Arvo', 'serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'varela': ['Varela Round'],
        'handwriting': ['Birthstone', 'handwriting'],
        'allura': ['Allura', 'handwriting' ],
        'yellowtail' : ['Yellowtail', 'handwriting']
      },
      backgroundImage: {
        'separator-top': 'linear-gradient(to bottom right, #FCFFFD 50%, #0000 50%)',
        'separator-bot': 'linear-gradient(to bottom right, #0000 50%, #FCFFFD 50%)',
        'smoke': 'url(../images/rainbowSmoke2.png)',
        'menu-open': 'url(../images/burger-menu.svg)',
        'menu-close': 'url(../images/close.svg)',
      },
      maxHeight: {
        '750px': '750px',
        '700px': '700px',
      },
      maxWidth: {
        '15rem': '15rem',
      },
      minWidth: {
        '10rem': '10rem',        
      },
      width: {
        '700px': '700px',
      }
    },
  },
  plugins: [],
}
