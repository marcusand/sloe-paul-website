module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: "var(--color-black)",
        alpha: "var(--color-alpha)",
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
};
