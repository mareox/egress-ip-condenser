/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:  ['Inter', 'Helvetica Neue', 'system-ui', 'sans-serif'],
        serif: ['Source Serif 4', 'Georgia', 'serif'],
        mono:  ['DM Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Cyber Orange scale — 500 = primary brand (#FA582D)
        cyber: {
          50:  '#FFF3EE',
          100: '#FFBF9C',
          200: '#FF9E75',
          300: '#FF7F56',
          400: '#FF724D',
          500: '#FA582D',
          600: '#B23808',
          700: '#8C2C06',
          800: '#661F04',
          900: '#190000',
        },
        // GTM secondary palette — use sparingly for status/badges
        gtm: {
          cloudBlue:    '#00C0E8',
          cortexGreen:  '#00CC66',
          unit42Red:    '#C84727',
          strataYellow: '#FFCB06',
        },
      },
      backgroundImage: {
        // Cyber Orange → near-black gradient (top→bottom, per brand spec)
        'cyber-gradient': 'linear-gradient(to bottom, #FA582D, #190000)',
        // Diagonal variant
        'cyber-gradient-diagonal': 'linear-gradient(135deg, #FA582D, #190000)',
      },
    },
  },
  plugins: [],
}
