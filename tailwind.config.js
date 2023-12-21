/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '10px',
        sm: '10px',
        lg: '1rem',
        xl: '2rem',
        '2xl': '2rem',
      },
    },
    extend: {
      colors: {
        darkbg: '#111111',
        lightdarkbg: '#1D1D1D',
        whiteColor: '#F3F8FF',
        primaryColor: '#42B883',
        secondoryColor: '#A1EEBD',
      },
    },
  },
  plugins: [require("daisyui")],
}

