
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#fff',
      },
      boxShadow: {
        'custom': '0px 9px 30px rgba(255,141,63, 0.4)',
      },
    },
  },
  plugins: [],
}


// box-shadow: 0px 9px 30px rgba(255, 149, 5, 0.3);