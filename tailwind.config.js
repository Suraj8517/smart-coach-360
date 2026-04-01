/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        brand: {
          black:       "#010101",
          silver:      "#c3b9b7",
          "silver-lt": "#ddd6d4",
          "silver-xl": "#ede8e7",
          fedora:      "#816f7d",
          "fedora-lt": "#a593a1",
          "fedora-dk": "#5e4f5a",
          boss:        "#47294c",
          "boss-mid":  "#5c3663",
          "boss-dk":   "#2e1a32",
          "boss-deep": "#1c0f1f",
          lilac:       "#faf4fc",
          "lilac-100": "#f3eaf6",
          "lilac-200": "#e8d9ee",
          "lilac-300": "#d5bade",
        },
      },
    },
  },
  plugins: [],
};
