/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "first": "#0b4534",
        "second": "#a8c200",
        "third": "#d7e0e4",
      }
    },
  },
<<<<<<< HEAD
  plugins: [require("daisyui"), require('@tailwindcss/forms'),],
=======
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms'),
  ],
>>>>>>> 5146f0dfd5c9f0705c25b85f6b7cf5e713d11d31
}

