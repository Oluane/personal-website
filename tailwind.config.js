module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        eigengrau: "hsl(240, 14%, 10%)",
        "lighter-eigengrau": "#2c2c3a",
      },
      backgroundImage: {
        "gradient-radial-ellipse-b":
          "radial-gradient(ellipse at bottom, var(--tw-gradient-stops))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
