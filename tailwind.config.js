/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: "#F6F2FF",
          100: "#fff",
        },
        purple: {
          DEFAULT: "#6B38FE",
          100: "#6B38FE40",
        },
        dark: {
          DEFAULT: "#1A0C40",
        },
        grey: {
          DEFAULT: '#EFEFEF'
        }
      },
    },
  },
  plugins: [],
};
