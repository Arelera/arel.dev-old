const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {},
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        'pb-safe': {
          'padding-bottom': 'env(safe-area-inset-bottom)',
        },
        'pt-safe': {
          'padding-top': 'env(safe-area-inset-top)',
        },
      })
    }),
  ],
}

// TODO: create a text-shadow plugin
// https://superdevresources.com/techno-sci-fi-fonts/
