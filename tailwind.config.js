const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '12px',
      },
      screens: {
        sm: '640px',
        md: '720px',
        lg: '960px',
        xl: '1320px',
      },
    },
    screens: {
      ...defaultTheme.screens,
      '2xl': '1320px',
    },
    fontSize: {
      'sm': '14px',
      'base': '16px',
      'lg': '18px',
      'xl': '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
      '6xl': '64px',
      '7xl': '96px',
      '12': '12px',
      '22': '22px',
      '28': '28px',
      '32': '32px',
      '42': '42px',
      '48': '48px'
    },
    extend: {
      fontFamily: {
        'Azeret': '"Azeret Mono", monospace',
      },
      colors: {
        'dark': {
          DEFAULT: '#1C1C1C',
          '100': '#2A1E17',
          '200': '#202020',
          '300': '#2D2D2D',
          '400': '#1A1A1A'
        },
        'gray': {
          DEFAULT: '#C1C1C1',
          '100': '#00000012',
          '200': '#00000019',
          '300': '#49475514',
          '400': '#CDD0C4',
          '500': '#C1C1C1',
          '600': '#00000058',
          '700': '#8F8F8F',
          '800': '#7C7E77',
          '900': '#D5D5D5'
        },
        'indigo': {
          DEFAULT: '#494755'
        },
        'green': {
          DEFAULT: '#62DB54',
          '100': '#28B446'
        },
        'blue': {
          DEFAULT: '#09ACF5',
          '100': '#3A559F',
          '200': '#518EF8'
        },
        'red': {
          DEFAULT: '#F14336'
        }
      },
      spacing: {
        '7.5': '30px',
        '12.5': '50px',
        '15': '60px',
        '18': '72px',
        '22': '88px',
        '25': '100px',
        '34': '136px',
        '37.5': '150px',
        '43': '172px'
      },
      listStyleType: {
        square: 'square'
      },
      borderWidth: {
        '3': '3px',
        '6': '6px',
        '12': '12px'
      },
      content: {
        'checked': "'✔'",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}