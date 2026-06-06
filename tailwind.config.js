/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdf8ee',
          100: '#f9edcc',
          200: '#f2d98a',
          300: '#ecc44a',
          400: '#e6b020',
          500: '#d4920f',
          600: '#b8720a',
          700: '#92530b',
          800: '#784210',
          900: '#653710',
        },
        rose: {
          blush: '#f7e8e8',
          light: '#f0caca',
          DEFAULT: '#d4807e',
          deep: '#b85c5a',
        },
        cream: {
          50: '#fdfaf5',
          100: '#f9f2e5',
          200: '#f2e4cc',
        },
        charcoal: '#1a1008',
        sand: '#e8dcc8',
      },
      fontFamily: {
        arabic: ['Cairo', 'Noto Naskh Arabic', 'serif'],
        display: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #1a0a00 0%, #3d1f0a 50%, #1a0a00 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #d4920f, #f2d98a, #d4920f)',
        'rose-gradient': 'linear-gradient(135deg, #f7e8e8 0%, #fdfaf5 100%)',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'countdown': 'countdown 1s linear',
        'slide-up': 'slideUp 0.4s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 146, 15, 0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(212, 146, 15, 0)' },
        },
        slideUp: {
          from: { transform: 'translateY(20px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      boxShadow: {
        'gold': '0 4px 24px rgba(212, 146, 15, 0.3)',
        'luxury': '0 20px 60px rgba(26, 10, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
