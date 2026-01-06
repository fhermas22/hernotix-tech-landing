/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azure-blue': '#007FFF',
        'gold-yellow': '#FFD700',
        'charcoal-black': '#121212',
      },
    },
  },
  plugins: [],
}