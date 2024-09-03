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
          radial-gradient(3px 3px at 10% 20%, #ddd, transparent),
          radial-gradient(3px 3px at 15% 35%, #ddd, transparent),
          radial-gradient(3px 3px at 20% 50%, #ddd, transparent),
          radial-gradient(3px 3px at 25% 65%, #ddd, transparent),
          radial-gradient(3px 3px at 30% 80%, #ddd, transparent),
          radial-gradient(3px 3px at 35% 25%, #ddd, transparent),
          radial-gradient(3px 3px at 40% 40%, #ddd, transparent),
          radial-gradient(3px 3px at 45% 55%, #ddd, transparent),
          radial-gradient(3px 3px at 50% 70%, #ddd, transparent),
          radial-gradient(3px 3px at 55% 85%, #ddd, transparent),
          radial-gradient(3px 3px at 60% 20%, #ddd, transparent),
          radial-gradient(3px 3px at 65% 35%, #ddd, transparent),
          radial-gradient(3px 3px at 70% 50%, #ddd, transparent),
          radial-gradient(3px 3px at 75% 65%, #ddd, transparent),
          radial-gradient(3px 3px at 80% 80%, #ddd, transparent),
          radial-gradient(3px 3px at 85% 25%, #ddd, transparent),
          radial-gradient(3px 3px at 90% 40%, #ddd, transparent),
          radial-gradient(3px 3px at 95% 55%, #ddd, transparent),
          radial-gradient(3px 3px at 50% 50%, #ddd, transparent),
          radial-gradient(3px 3px at 12% 22%, #ddd, transparent),
          radial-gradient(3px 3px at 18% 38%, #ddd, transparent),
          radial-gradient(3px 3px at 24% 52%, #ddd, transparent),
          radial-gradient(3px 3px at 28% 68%, #ddd, transparent),
          radial-gradient(3px 3px at 32% 82%, #ddd, transparent),
          radial-gradient(3px 3px at 36% 28%, #ddd, transparent),
          radial-gradient(3px 3px at 42% 42%, #ddd, transparent),
          radial-gradient(3px 3px at 48% 58%, #ddd, transparent),
          radial-gradient(3px 3px at 54% 72%, #ddd, transparent),
          radial-gradient(3px 3px at 58% 88%, #ddd, transparent),
          radial-gradient(3px 3px at 62% 22%, #ddd, transparent),
          radial-gradient(3px 3px at 68% 38%, #ddd, transparent),
          radial-gradient(3px 3px at 74% 52%, #ddd, transparent),
          radial-gradient(3px 3px at 78% 68%, #ddd, transparent),
          radial-gradient(3px 3px at 82% 82%, #ddd, transparent),
          radial-gradient(3px 3px at 86% 28%, #ddd, transparent),
          radial-gradient(3px 3px at 92% 42%, #ddd, transparent),
          radial-gradient(3px 3px at 98% 58%, #ddd, transparent)
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