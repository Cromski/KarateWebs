
module.exports = {
  content: [ './src/**/*.{html,svelte,css,ts,js}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      gray: {
        50: '#f9fafb',
        100: '#f4f5f7',
        200: '#e5e7eb',
        300: '#d2d6dc',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [ 'light',
    ],
  },
}

