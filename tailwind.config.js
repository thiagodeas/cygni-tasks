 /** @type {import('tailwindcss').Config} */
 export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-grad': 'linear-gradient(135deg, #1d2671 25%, #c33764 100%)',
      },
      fontSize: {
        'main-title': '3rem',
        'sec-title': '2rem',
      },
      colors: {
        'space-blue': '#1d2671',
        'cloudy-rose': '#c33764',
        'stellar-lavender': '#4a3f8b',
        'cosmic-night': '#22254b',
        'galactic-glow': '#ffe0f5',
        'stellar-gold': '#ffd700',
      },
    },
  },
  plugins: [],
}