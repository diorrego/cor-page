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
        surface: '#4A5159',
        container: '#C7CFD9',
        input: '#8F9DA6',
        primary: '#6BB3F2',
        'primary-variant': '#80C7F2',
        accent: '#CFD984',
        secondary: '#9399A2',
        'secondary-variant': '#E4E9F2',
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
