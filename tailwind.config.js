/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(-150%)' },
          '100%': { transform: 'translateX(150%)' },
        },
      },
      animation: {
        marquee: 'marquee 7s linear infinite',
      },
      screens:{
        'xs': '350px',
      },
    },
  },
  plugins: [],
}

