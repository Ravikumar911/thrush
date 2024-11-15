/** @type {import('tailwindcss').Config} */
const { theme} = require('./src/theme/config');
module.exports = {
  darkMode: ['class'],
  content: [
    'src/**/*.{ts,tsx}',
    'stories/**/*.{ts,tsx}',
    '.storybook/**/*.{ts,tsx}',
  ],
  theme: {
    extend: theme,
  },
  plugins: [require('tailwindcss-animate')],
};
