/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#2D5BFF',
          600: '#0A3AFF',
        },
        accent: {
          500: '#FF6B35',
          600: '#FF4A00',
        },
      },
    },
  },
  plugins: [],
};
