// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors')
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
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
      red: colors.red,
      blue: colors.blue,
      purple: colors.purple,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      slate: colors.slate,
      yellow: colors.yellow,
      accent: {
        100: "#FEFADF",
        200: "#FEF4C0",
        300: "#FEECA0",
        400: "#FDE489",
        500: "#FDD862",
        600: "#D9B347",
        700: "#B68F31",
        800: "#926E1F",
        900: "#795612",
        DEFAULT: '#FDD862',
      },
      primary: '#B57EDC',
      secondary: '#6FB71D',
      light: {
        background: '#F2F2F2',
        text: {
          primary:'#2a3641',
          secondary: '#14142F',
        },
      },
      dark: {
        background: '#2a3641',
        text: {
          primary: '#F2F2F2',
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
    nextui({
      themes: {
        light: {
          colors: {
            background: "#F2F2F2", // or DEFAULT
            foreground: "#2a3641", // or 50 to 900 DEFAULT
            focus: {
              100: "#FEFADF",
              200: "#FEF4C0",
              300: "#FEECA0",
              400: "#FDE489",
              500: "#FDD862",
              600: "#D9B347",
              700: "#B68F31",
              800: "#926E1F",
              900: "#795612",
            },
            primary:{
              DEFAULT: '#6632DF', 
              100: "#E6D6FD",
              200: "#CCADFB",
              300: "#AC83F5",
              400: "#9062EB",
              500: "#6632DF",
              600: "#4E24BF",
              700: "#3919A0",
              800: "#270F81",
              900: "#1A096B",
            },
            secondary:{
              DEFAULT: '#6FB71D',
              100: "#EFFBD1",
              200: "#DCF7A4",
              300: "#BDE973",
              400: "#9BD34E",
              500: "#6FB71D",
              600: "#579D15",
              700: "#41830E",
              800: "#2F6A09",
              900: "#215705",
            },
          },
        },
        dark: {
          colors: {
            background: "#2a3641", // or DEFAULT
            foreground: "#F2F2F2", // or 50 to 900 DEFAULT
            focus: {
              100: "#D4F6FF",
              200: "#AAE8FF",
              300: "#7FD6FF",
              400: "#60C2FF",
              500: "#2BA3FF",
              600: "#1F7FDB",
              700: "#155FB7",
              800: "#0D4393",
              900: "#082F7A",
            },
            primary:{
              DEFAULT: '#2BA3FF', 
              100: "#D4F6FF",
              200: "#AAE8FF",
              300: "#7FD6FF",
              400: "#60C2FF",
              500: "#2BA3FF",
              600: "#1F7FDB",
              700: "#155FB7",
              800: "#0D4393",
              900: "#082F7A",
            },
            secondary:{
              DEFAULT: '#6FB71D',
              100: "#FEFADF",
              200: "#FEF4C0",
              300: "#FEECA0",
              400: "#FDE489",
              500: "#FDD862",
              600: "#D9B347",
              700: "#B68F31",
              800: "#926E1F",
              900: "#795612",
            },
          },
        },
      },
    }),
  ],
};
