/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-bg": "rgb(var(--color-bg)/<alpha-value>)",
        "color-secondory": "rgb(var(--color-secondory)/<alpha-value>)",
      },
    },
  },
  plugins: [],
};
