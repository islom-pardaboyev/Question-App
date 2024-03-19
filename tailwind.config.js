/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F6F2FF",
          200: "#6B38FE",
          300: "#1A0C40",
        },
        gray: {
          DEFAULT: "#EFEFEF",
        },
        green: {
          DEFAULT: "#1AE477",
        },
        sky: {
          DEFAULT: "#3893FE",
        },
      },
      boxShadow: {
        card: "0 4px 10px 0 rgba(180, 175, 192, 0.25)",
        purpleBtn: "0 4px 11px 0 rgba(107, 56, 254, 0.25)",
      },
    },
  },
  plugins: [],
};