/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      colors: {
        // Primary
        desaturatedDarkCyan: "hsl(180, 29%, 50%)",

        // Neutral
        lightGrayishCyan: "hsl(180, 52%, 96%)", //Background
        lightGrayishCyan2: "hsl(180, 31%, 95%)", //Filter Tablets
        darkGrayishCyan: "hsl(180, 8%, 52%)", 
        veryDarkGrayishCyan: "hsl(180, 14%, 20%)"
      },
      fontFamily: {
        leagueSpartan: "'League Spartan', sans-serif"
      },
      fontWeight: {
        myMedium: 500,
        myBold: 700
      },
      fontSize: {
        default: "15px"
      },
      backgroundImage: {
        mobile: "url('/src/assets/images/bg-header-mobile.svg')",
        desktop: "url('/src/assets/images/bg-header-desktop.svg')",
      }
    },
  },
  plugins: [],
}
