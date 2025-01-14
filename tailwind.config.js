/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {stint:["Stint Ultra Expanded"], pontano: ["Pontano Sans"]}
    },
  },
  plugins: [],

}