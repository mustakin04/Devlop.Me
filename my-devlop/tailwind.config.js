/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sport: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        "hero": "url('./src/assets/bg.png')",
      },
       rotate: {
         'rotate-x-180': 'rotateX(180deg)'
      }
    },
  },
  plugins: [],
};
