import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['"Montserrat Alternates"', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        brand: {
          primary: '#C87D0C',
          secondary: '#F9BD4B',
          soft: '#FFE0A4',
          accent: '#108ECA',
        },
      },
      boxShadow: {
        card: '0 6px 24px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
} satisfies Config
