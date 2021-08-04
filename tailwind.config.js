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
    screens: {
      //   tablet: "640px",
      lg: "1300px",
      //   desktop: "1380px",
    },
    extend: {},
  },
  variants: {
    extend: {
      borderRadius: ["hover"],
      backgroundOpacity: ["hover"],
      height: ["hover", "group-hover"],
      width: ["hover", "group-hover"],
      display: ["hover", "group-hover"],
    },
  },
  plugins: [],
};
