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
        'white': '#343030',
        'black': '#FCFFFD',
      },
      fontFamily: {
        'arvo': ['Arvo', 'serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'varela': ['Varela Round'],
        'tanya' :['Tanya_Hati'],
        'madi' : ['Ms Madi', 'cursive'],
        'springwoman': ['Spring Woman', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

