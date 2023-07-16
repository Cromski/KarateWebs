
module.exports = {
  content: [ './src/**/*.{html,svelte,ts,js}'],
  theme: {
    extend: {},
    colors: {
      // transparent: 'transparent',
      textColor: '#cdcdcd',
      backgroundColor: '#0B101E',
      backgroundLighter: '#212937',
      backgroundFooter: '#869FA9',
      backgroundInfo: '#406E8E',
      black: '#000',
      white: '#fff',
      // gray: {
      //   50: '#f9fafb',
      //   100: '#f4f5f7',
      //   200: '#e5e7eb',
      //   300: '#d2d6dc',
      // },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: false,
    rtl: false,
  },
}

