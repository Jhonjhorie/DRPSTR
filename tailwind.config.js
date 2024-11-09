/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
     "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",

  ],  
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)"
      },
      clipPath: {
        'pentagon': 'pentagon(61% 0, 100% 42%, 100% 100%, 0 100%, 0 0)',

        'polygon': 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}