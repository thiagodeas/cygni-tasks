 /** @type {import('tailwindcss').Config} */
 export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-grad': 'linear-gradient(-50deg, #4a3f8b 25%, #c33764 130%)',
        'stars-pattern':
          `
          radial-gradient(circle at 5% 10%, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
          radial-gradient(circle at 15% 25%, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
          radial-gradient(circle at 20% 40%, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
          radial-gradient(circle at 25% 15%, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
          radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
          radial-gradient(circle at 40% 50%, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
          radial-gradient(circle at 50% 60%, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
          radial-gradient(circle at 60% 30%, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
          radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
          radial-gradient(circle at 75% 45%, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
          radial-gradient(circle at 85% 70%, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
          radial-gradient(circle at 90% 20%, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
          radial-gradient(circle at 95% 50%, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
          radial-gradient(circle at 65% 55%, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
          radial-gradient(circle at 55% 25%, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
          radial-gradient(circle at 30% 65%, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
          radial-gradient(circle at 45% 75%, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
          radial-gradient(circle at 10% 85%, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
          radial-gradient(circle at 90% 10%, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
          linear-gradient(180deg, #171f5c, #1d2671)
        `,
      },
      fontSize: {
        'main-title': '3rem',
        'sec-title': '2rem',
        'custom-title': '2.5rem',
        'options-title': '1.125rem'
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