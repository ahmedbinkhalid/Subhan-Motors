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
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(150deg, #f9f9f9, #d4dad6, #afbbb6, #8b9d9b, #698083, #49636f, #2c475c, #142b4e)',
      },
    },
  },
  plugins: [],
}