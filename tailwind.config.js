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
      backgroundImage: {
        'custom1': 'linear-gradient(120deg, #efefef, #efefef, #9333EA, #070F2B)',
        'custom2': 'linear-gradient(125deg, #fff, #9333EA, #9333EA)',
      },
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