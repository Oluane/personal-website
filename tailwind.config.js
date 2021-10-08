module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    fontSize: {
      xs: "1rem",
      s: "1.2rem",
      m: "1.4rem",
      base: "1.6rem",
      l: "1.8rem",
      xl: "2rem",
      xxl: "2.2rem",
      "3xl": "2.4rem",
      "4xl": "2.6rem",
      "5xl": "2.8rem",
      "6xl": "3rem",
      giant: "3.5rem",
    },
    extend: {
      colors: {
        eigengrau: "hsl(240, 14%, 10%)",
        "lighter-eigengrau": "#2c2c3a",
      },
      backgroundImage: {
        "gradient-radial-ellipse-b":
          "radial-gradient(ellipse at bottom, var(--tw-gradient-stops))",
      },
      spacing: {
        120: "30rem",
        160: "40rem",
      },
      boxShadow: {
        "menu-decorators":
          "5px 10px 0px 6px rgba(0,0,0,0.15), -12px -7px 0px 9px rgba(0,0,0,0.15)",
      },
      fontFamily: { megrim: "Megrim", lato: "Lato" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
