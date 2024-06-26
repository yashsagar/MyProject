/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "rgb(var(--color-primary)/<alpha-value>)",
        "color-secondary": "rgb(var(--color-secondary)/<alpha-value>)",
      },
    },
  },
  plugins: [],
};
