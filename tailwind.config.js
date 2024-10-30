/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkpurple: '#180028',  
        purple: '#291735',
      },
      fontFamily: {
        iceland:['Iceland','sans-serif'],
     }
    },
  },
  plugins: [
    require('daisyui')],
  daisyui: {
    themes: ['light'],
  },
}