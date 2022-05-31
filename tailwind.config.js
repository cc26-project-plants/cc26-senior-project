const { url } = require("inspector");

module.exports = {
  mode: "jit",
  content: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme =>({
        'leafframe': "url('/images/leafframe.png')",
        'rainyframe': "url('/images/rainyframe.png')",
        'soilframe': "url('/images/soilframe.png')",
        'tabletframe': "url('/images/tabletframe.png')",
        'hutaba': "url('/images/hutaba.png')",
        'leaf': "url('/images/leaf.png')",
      }),
    },
  },
  plugins: [],
};