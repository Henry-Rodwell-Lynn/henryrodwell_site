/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      listStyleImage: {
        arrow: 'url("./public/svg/arrow.svg")'
      },
    },
  },
  plugins: [],
}