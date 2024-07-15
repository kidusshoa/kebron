/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        first: "#DBD0D0",
        second: "#E3E3E3 ",
        third: "#483C3C",
        fourth: "#726969",
      },

      height: {
        one: "10%",
        two: "20%",
        nine: "90%",
        vhhh: "80vh",
      },
      backgroundImage: {
        "custom-image": "url('./src/assets/images/home.png')",
      },
      keyframes: {
        "text-slide": {
          "0%": { transform: "translateY(0%)" },
          "16.67%": { transform: "translateY(-100%)" },
          "33.34%": { transform: "translateY(-200%)" },
          "50%": { transform: "translateY(-300%)" },
          "66.67%": { transform: "translateY(-400%)" },
          "83.34%": { transform: "translateY(-500%)" },
          "100%": { transform: "translateY(-600%)" },
        },
      },
      animation: {
        "text-slide": "text-slide 38s linear infinite",
      },
    },
  },
  plugins: [],
};
