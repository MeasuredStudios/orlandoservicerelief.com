// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: '1rem',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      heading: ['Lato', 'sans-serif'],
    },
    extend: {
      colors: {
        'orlando-blue': '#004b8c',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
