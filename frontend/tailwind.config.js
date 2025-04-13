module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#d50000",
        secondary: "rgb(190 18 60)",
        tertiary: "#444444",
        dark: "#141414",
        darkGrey: "#1e1e1e", // #282828
        light: "#dedcd7", // #ededed, #dedcd7, #d6d6d6
      },
      screens: {
        xs: "30rem",
      },
    },
  },
  plugins: [],
};
