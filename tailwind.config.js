/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'test1': ['monument']
    },
    extend: {
      animation: {
        rightToLeft: 'rightToLeft 20s infinite linear',
        rightToLeftSlow: 'rightToLeftSlow 20s infinite linear',
        leftToRight: 'leftToRight 20s infinite linear',
      }, 
      }, 
      keyframes: {
        rightToLeft: {
          'from': {transform: 'translateX(0%)'},
          'to': {transform: 'translateX(-25%)'},
        },
        rightToLeftSlow: {
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
