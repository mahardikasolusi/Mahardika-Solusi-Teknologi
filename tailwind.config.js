module.exports = {
  purge: {
    enabled: true,
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mst: {
          blue: {
            lighter: "#00C4DB",
            DEFAULT: "#00ADC2",
            darker: "#0096A8",
          },
          orange: {
            lighter: "#FF891F",
            DEFAULT: "#FF7A03",
            darker: "#EB6F00",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
