/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@sportsclub/ui/tailwind.config')],
  theme: {
    extend: {
      colors: {
        accent: '#FF6B35',
      },
    },
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
};
