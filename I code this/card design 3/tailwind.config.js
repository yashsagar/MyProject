/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-text": "rgb(var(--color-text)/ <alpha-value>)",
        "color-secondary": "rgb(var(--color-secondary)/<alpha-value>)",
        "color-bg": "rgb(var(--color-bg)/<alpha-value>)",
      },
    },
  },
  plugins: [],
};
