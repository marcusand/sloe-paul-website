module.exports = {
  content: ["./src/**/*.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        black: "var(--color-black)",
        blackTransparent: "var(--color-black-transparent)",
        alpha: "var(--color-alpha)",
        alphaDark: "var(--color-alpha-dark)",
        beta: "var(--color-beta)",
      },
      fontSize: {
        tiny: "0.65rem",
      },
      borderWidth: {
        3: "3px",
      },
      height: {
        hero: "26rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
};
