/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Spa / Wellness Calming Palette: Deep Sage, Tranquil Teal, Warm Sand/Cream, Muted Gold
        sage: {
          50: '#f4f7f5',
          100: '#e3ebe5',
          200: '#c8d7cd',
          300: '#a4bcad',
          400: '#7a9b87',
          500: '#5c7f6b',
          600: '#466453',
          700: '#395144',
          800: '#2f4239',
          900: '#1b2a23',
          950: '#0f1814',
        },
        sand: {
          50: '#fdfbf7',
          100: '#f7f2e8',
          200: '#ede2cf',
          300: '#e0cca9',
          400: '#d1b280',
          500: '#c39a5f',
          800: '#594426',
          900: '#342714',
        },
        gold: {
          300: '#f6e05e',
          400: '#ecc94b',
          500: '#d69e2e',
          600: '#b7791f',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
