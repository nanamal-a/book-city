/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'mincho': ['"Shippori Mincho"', 'serif'],
        'serif-jp': ['"Noto Serif JP"', 'serif'],
      },
      colors: {
        'ink': '#1a1a2e',
        'paper': '#f5f0e8',
        'paper-dark': '#e8e0d0',
        'anger': '#c41e3a',
        'sorrow': '#1e3a5f',
        'gold': '#b8860b',
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
        'gauge': 'gaugeGrow 1.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        gaugeGrow: {
          'from': { width: '0' },
        },
      },
    }
  },
  plugins: [],
}
