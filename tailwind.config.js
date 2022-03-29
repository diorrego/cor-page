const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFCE6',
        surface: '#0B2740',
        container: '#1C66A6',
        input: '#4C5938',
        primary: '#6BB3F2',
        'primary-variant': '#80C7F2',
        accent: '#D9CB04',
        secondary: '#A8BF54',
        'secondary-variant': '#CFD984',
        'white-cor': '#FEEFE7',
      },
    },
    fontFamily: {
      sans: ['"Raleway"', ...defaultTheme.fontFamily.sans],
      cor: ['"Signika"'],
    },
  },
  plugins: [],
};
