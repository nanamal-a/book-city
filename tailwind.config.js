/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
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
      }
    }
  },
  plugins: [],
}
