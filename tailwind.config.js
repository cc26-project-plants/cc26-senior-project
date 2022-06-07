const { url } = require("inspector");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./pages/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      teal: colors.teal,
      sycamore: {
        DEFAULT: "#8D9336",
        50: "#F0E3D6",
        100: "#E8D7C1",
        200: "#D9C598",
        300: "#CAB96F",
        400: "#BBB446",
        500: "#8D9336",
        600: "#6A792D",
        700: "#4C5F23",
        800: "#314519",
        900: "#1B2A10",
      },
      apple: {
        50: "#E8F0D6",
        100: "#DAE8C1",
        200: "#BAD998",
        300: "#92CA6F",
        400: "#65BB46",
        500: "#439336",
        600: "#2D792D",
        700: "#235F2A",
        800: "#194524",
        900: "#102A1A",
      },
    },
    extend: {
      backgroundImage: (theme) => ({
        leafframe: "url('/images/leafframe.png')",
        rainyframe: "url('/images/rainyframe.png')",
        soilframe: "url('/images/soilframe.png')",
        tabletframe: "url('/images/tabletframe.png')",
        hutaba: "url('/images/hutaba.png')",
        leaf: "url('/images/leaf.png')",
        loginBg: "url('/images/loginBg.png')",
        aloe: "url('/images/aloe.jpg')",
        cactus: "url('/images/cactus.png')",
      }),
    },
  },
  plugins: [require("daisyui")],
};
