/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: ['./pages/*.js','./pages/*.jsx', './components/*.js','./components/*.jsx'],
  darkMode: 'class',
}
