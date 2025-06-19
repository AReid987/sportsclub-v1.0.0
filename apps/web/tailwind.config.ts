/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D5BFF', // Electric Blue
          50: '#E6EBFF',
          100: '#D1DCFF',
          200: '#A8BAFF',
          300: '#7F98FF',
          400: '#5676FF',
          500: '#2D5BFF',
          600: '#0A3AFF',
          700: '#0028E6',
          800: '#001DB8',
          900: '#001485',
        },
        accent: {
          DEFAULT: '#FF6B35', // Vibrant Orange
          50: '#FFEFEB',
          100: '#FFDDD1',
          200: '#FFBBA3',
          300: '#FF9875',
          400: '#FF7647',
          500: '#FF6B35',
          600: '#FF4A00',
          700: '#D63A00',
          800: '#AD2F00',
          900: '#852400',
        },
        neutral: {
          50: '#F9F9F9',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#2A2A2A',
          900: '#171717',
        },
        success: '#00C853',
        error: '#FF1744',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(45, 91, 255, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(45, 91, 255, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'sports-pattern': 'url("/sports-bg-pattern.svg")',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
