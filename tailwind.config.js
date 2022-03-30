const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B3B59',
        surface: '#4A5169',
        container: '#C7CFD9',
        input: '#4C5938',
        primary: '#6BB3F2',
        'primary-variant': '#80C7F2',
        accent: '#D9CB04',
        secondary: '#A8BF54',
        'secondary-variant': '#CFD984',
        'white-cor': '#FFFCE6',
      },
    },
    fontFamily: {
      sans: ['"Raleway"', ...defaultTheme.fontFamily.sans],
      cor: ['"Signika"'],
    },
  },
  plugins: [],
};
