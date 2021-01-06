module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: "var(--color-black)",
        blackTransparent: "var(--color-black-transparent)",
        alpha: "var(--color-alpha)",
        beta: "var(--color-beta)",
      },
      fontSize: {
        tiny: "0.65rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
};
