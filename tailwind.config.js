/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        button: "#005958",
        green: {
          light: "#e9f2f2"
        }
      }
    },
  },
  plugins: [],
}