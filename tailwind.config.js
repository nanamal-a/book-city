/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'mincho': ['"Shippori Mincho"', 'serif'],
        'serif-jp': ['"Noto Serif JP"', 'serif'],
        'cinzel': ['Cinzel', 'serif'],
        'cormorant': ['"Cormorant Garamond"', 'serif'],
        'gothic': ['"Zen Kaku Gothic New"', 'sans-serif'],
      },
      colors: {
        'ink': '#1a1a2e',
        'paper': '#f5f0e8',
        'paper-dark': '#e8e0d0',
        'anger': '#c41e3a',
        'sorrow': '#1e3a5f',
        'gold': '#b8860b',
        // Ningen Shikkaku
        'ningen': {
          'bg': '#f5f5f5',
          'red': '#8b0000',
          'highlight': '#fce4e4',
        },
        // Faust
        'crimson': {
          50: '#fef2f2',
          500: '#8b0000',
          600: '#6b0000',
          900: '#1a0000',
        },
        'faust-gold': {
          300: '#d4af37',
          400: '#c5a028',
          500: '#b8860b',
        },
        // Divina Commedia
        'inferno': {
          'dark': '#1a0a0a',
          'flame': '#8b2500',
          'ember': '#cc4a1d',
          'ash': '#3d2b2b',
        },
        'purgatorio': {
          'dawn': '#4a3f5c',
          'violet': '#6b5b7a',
          'rose': '#c4a6a6',
          'mist': '#d8ccd8',
        },
        'paradiso': {
          'gold': '#c9a227',
          'celestial': '#f4e8c1',
          'divine': '#fff8dc',
          'azure': '#1a3a52',
        },
        'parchment': '#f5f0e6',
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
        'gauge': 'gaugeGrow 1.5s ease-out forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'glow': 'glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'tremble': 'tremble 0.3s ease-in-out infinite',
        'flicker': 'flicker 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        gaugeGrow: {
          'from': { width: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        tremble: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-1px)' },
          '75%': { transform: 'translateX(1px)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    }
  },
  plugins: [],
}
