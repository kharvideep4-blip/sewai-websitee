/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F97316',
          dark: '#EA580C',
          light: '#FDBA74',
        },
        gold: '#FFD700',
        darkBg: '#1a0a0a',
        darkBgLight: '#2d1a0a',
        warmWhite: '#fff8f0',
        cream: '#fdf6f0',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}