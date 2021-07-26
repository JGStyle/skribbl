const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    cursor: {
      none: "none",
    },
    colors: {
      main: "#374151",
      ...colors,
    },
    extend: {},
  },
  variants: {
    extend: {
      borderRadius: ["hover"],
      backgroundOpacity: ["hover"],
    },
  },
  plugins: [],
};
