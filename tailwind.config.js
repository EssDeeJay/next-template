/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
         'sans': ['Space Grotesk', ...defaultTheme.fontFamily.sans],
      }
    },
    colors: {
      'custom-yellow': '#fec83e',
      'custom-blue': '#172048',
      'custom-light-gray': '#f8f8f8',
      'custom-gray': '#5a6378',
      'slate': {
        '900': '#0f172a'
      },
      'teal': {
        '500': '#14b8a6'
      },
      'violet': {
        '600': '#7c3aed'
      },
      'fuchsia': {
        '700': '#a21caf'
      },
      'amber': {
        '300': '#fcd34d'
      },
       'white': '#ffffff'
    }
  },
  plugins: [],
}
