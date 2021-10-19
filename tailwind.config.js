// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      red: '#ED3D40',
      yellow: '#F3BF52',
      indaco: '#0FB8B1',
      purple: '#799CDE',
      grey: '#263238',
    },
    fontFamily: {
      body: ['Nunito', 'sans-serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}