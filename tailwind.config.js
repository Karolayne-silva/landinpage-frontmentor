/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      dark_violet: "#2C2540",
      blue: "#94A8C5",
      very_violet: "#2B272F",
      grayish_violet: "#827D87",
      gray_light: "#F9F9F9",
    },
    
    extend: {
      fontFamily: {
        dmserif: ["DM Serif Display", "serif"],
        karla: ["Karla", "sans-serif"],
      },
      
     
    },
  },
  plugins: [],
};
