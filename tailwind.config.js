/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          light: "#e9f2f2",
          dark: "#005958",
        }
      }
    },
  },
  plugins: [],
}