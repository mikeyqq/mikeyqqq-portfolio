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
        "light-grey": "#f4ede4",
        "main-grey": "#f1e7dc",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
