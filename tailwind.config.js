/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'mono': ['chivo-mono']
    },
    extend: {
      animation: {
        rightToLeft: 'rightToLeft 20s infinite linear',
        email: 'email 5s infinite linear',
        leftToRight: 'leftToRight 20s infinite linear',
      }, 
      }, 
      keyframes: {
        rightToLeft: {
          'from': {transform: 'translateX(0%)'},
          'to': {transform: 'translateX(-25%)'},
        },
        email: {
          'from': {transform: 'translateX(-50%)'},
          'to': {transform: 'translateX(-100%)'},
        },
        leftToRight: {
          'from': {transform: 'translateX(-25%)'},
          'to': {transform: 'translateX(0%)'},
        },
      },
    },
  plugins: [],
};
