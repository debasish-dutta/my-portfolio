// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
    },
    colors: {
      black: colors.black,
      white: colors.white,
      blue: colors.blue,
      purple: colors.purple,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      slate: colors.slate,
      yellow: colors.yellow,
      accent: '#9883E5',
      primary: '#FC9F5B',
      secondary: '#24A6A8',
      light: {
        background: '#ecf5f6',
        text: {
          primary:'#2a3641',
          secondary: '#14142F',
        },
        accent: '#9883E5',
        transparent: 'transparent',
        current: 'currentColor',
      },
      dark: {
        background: '#2a3641',
        text: {
          primary: '#ecf5f6',
          secondary: '#F8F9FA',
        },
      },
      transparent: 'transparent',
      current: 'currentColor',
    },
  },
  plugins: [
    require("@headlessui/tailwindcss"),
    require("@tailwindcss/typography"),
  ],
};
