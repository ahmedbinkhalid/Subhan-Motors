/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "regal-red" : "#D22B2B",
        "charcoal-gray" : "#36454F",
        "blue-variant" : "#0047AB"
      }
    },
  },
  plugins: [],
}