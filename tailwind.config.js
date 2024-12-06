/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mainBG: "hsl(233, 47%, 7%)",
        cardBG: "hsl(244, 38%, 16%)",
        accent: "hsl(277, 64%, 61%)",
      },
      fontFamily: {
        bodyFont: ["Inter"],
      },
      backgroundImage: {
        "mobile-img": "url('/images/favicon-32x32.png')",
        "desktop-img": "url('/images/image-header-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
