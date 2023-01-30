/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        primaryLight: {
          50: 'red',
          100: 'red',
          200: 'red',
          300: 'red',
          400: 'red',
          500: 'blue',
          600: 'red',
          700: 'red',
          800: 'red',
          900: 'red'
        },
        primaryDark: {
          50: 'red',
          100: 'red',
          200: 'red',
          300: 'red',
          400: 'red',
          500: 'red',
          600: 'red',
          700: 'red',
          800: 'red',
          900: 'red'
        },
        secondaryLight: {
          50: 'red',
          100: 'red',
          200: 'red',
          300: 'red',
          400: 'red',
          500: 'yellow',
          600: 'red',
          700: 'red',
          800: 'red',
          900: 'red'
        },
        secondaryDark: {
          50: 'red',
          100: 'red',
          200: 'red',
          300: 'red',
          400: 'red',
          500: 'green',
          600: 'red',
          700: 'red',
          800: 'red',
          900: 'red'
        },
        secondary: '#2596be'
      }
    }
  },
  plugins: []
}
