/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#FF2A2A',
          'red-hover': '#E02020',
          dark: '#080808',
          card: '#121212',
          border: 'rgba(255, 255, 255, 0.1)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Impact', 'Bebas Neue', 'Oswald', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
