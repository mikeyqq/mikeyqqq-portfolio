module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
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
