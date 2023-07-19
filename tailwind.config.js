/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        rightToLeft: 'rightToLeft 10s infinite linear',
        leftToRight: 'leftToRight 10s infinite linear',
      }, 
      }, 
      keyframes: {
        rightToLeft: {
          'from': {transform: 'translateX(0%)'},
          'to': {transform: 'translateX(-25%)'},
        },
        leftToRight: {
          'from': {transform: 'translateX(-25%)'},
          'to': {transform: 'translateX(0%)'},
        },
      },
    },
  plugins: [],
};
