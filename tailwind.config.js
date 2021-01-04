module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: "var(--color-black)",
        alpha: "var(--color-alpha)",
        alphaTransparent: "var(--color-alpha-transparent)",
        beta: "var(--color-beta)",
        gamma: "var(--color-gamma)",
        delta: "var(--color-delta)",
        deltaLight: "var(--color-delta-light)",
        epsilon: "var(--color-epsilon)",
        epsilonLight: "var(--color-epsilon-light)",
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
