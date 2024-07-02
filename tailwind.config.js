const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#002451",
        secondary: "#00b7ff",
        tertiary: "#FFD700",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".underline-slide": {
          "background-image": "linear-gradient(currentColor, currentColor)",
          "background-position": "0 100%",
          "background-size": "0 2px",
          transition: "background-size 200ms",
          "background-repeat": "no-repeat",
        },
        ".underline-slide:hover": {
          "background-size": "100% 2px",
        },
        ".underline-slide-active": {
          "background-size": "100% 2px",
        },
        ".underline-slide-inactive": {
          "background-image": "linear-gradient(currentColor, currentColor)",
          "background-position": "0 100%",
          "background-size": "0 2px",
          transition: "background-size 200ms",
          "background-repeat": "no-repeat",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover", "group-hover"]);
    }),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".button-solid": {
          "@apply text-white text-center bg-primary border-primary ring-primary rounded-md border-2 px-5 py-3 ring-2":
            {},
          "&:hover": {
            "@apply border-white": {},
          },
        },
        ".button-outlined": {
          "@apply text-white text-center border-white ring-transparent rounded-md border-2 px-5 py-3 ring-2":
            {},
          "&:hover": {
            "@apply ring-primary": {},
          },
        },
      };

      addUtilities(newUtilities, ["responsive", "hover", "group-hover"]);
    }),
  ],
};
