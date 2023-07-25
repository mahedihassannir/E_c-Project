/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customnavcolor: 'rgb(158,158,158,.2)',
      },
    },
  },
  plugins: [require("daisyui")],


}