module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      mobileSm: { max: "579px" },
      // => @media (max-width: 579px) { ... }

      tabletLg: { min: "580px", max: "699px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      desktop: "700px",
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    },
    extend: {
      colors: {
        "light-header": "#fffffff5",
        "light-main": "#f5f5f7",
        "dark-header": "#202024",
        "dark-main": "#202024",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
