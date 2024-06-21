/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-secondory": "rgb(var(--secondory-color)/<alpha-value>)",
      },
    },
    screens: {
      sm: { max: "800px" },
    },
  },
  plugins: [],
};
