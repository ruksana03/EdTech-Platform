/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "first":"#0b4534",
        "second":"#d7e0e4",
        "third":"#a8c200",
      }
    },
  },
  plugins: [],
}

