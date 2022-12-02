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
        "light-grey": "#e3edf0f2",
        "main-grey": "#e3edf0b5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
