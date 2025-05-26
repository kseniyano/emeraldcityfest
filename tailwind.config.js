/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          900: "#34113F",
          800: "#482952",
          700: "#5D4165",
          600: "#715879",
          500: "#85708C",
          400: "#99889F",
          300: "#AEA0B2",
          200: "#C2B8C5",
          100: "#D6CFD9",
          50: "#EBE7EC",
        },     // dark plum
        accent: "#C84630",      // blood orange
        emerald: "#21998F",     // emerald
        emerald_dark: "#15616D",     // emerald
        neutral:{
          light: "#FAFAFA",  // light background
          darker: "#F5F5F5",  // light background
        } 
      },
    },
  },
  plugins: [],
};
