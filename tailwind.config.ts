import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({
  addBase,
  theme,
}: any) {
  let allColors = flattenColorPalette(
    theme("colors")
  );
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(
      ([key, val]) => [`--${key}`, val]
    )
  );

  addBase({
    ":root": newVars,
  });
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      red: "#fe0c1a",
      black: "#171b1c",
      gray: "#252a2b",
      white: "#f0f2f3",
    },

    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        moveVertical: {
          "0%": {
            transform:
              "translateY(-50%)",
          },
          "50%": {
            transform:
              "translateY(50%)",
          },
          "100%": {
            transform:
              "translateY(-50%)",
          },
        },
        scroll: {
          to: {
            transform:
              "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};
export default config;
