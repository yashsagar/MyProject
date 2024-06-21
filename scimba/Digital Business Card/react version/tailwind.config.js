/** @type {import('tailwindcss').Config} */
export default {
  content: [",/index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "color-bg": "rgb(var(--color-bg) / <alpha-value>)",
        "color-card-bg": "rgb(var(--color-card-bg) / <alpha-value>)",
        "color-text-primary": "rgb(var(--color-text-primary)/ <alpha-value>)",
        "color-text": " rgb(var(--color-text) / <alpha-value>)",
        "color-card-footer": "rgb(var(--color-card-footer) / <alpha-value>)",
        secondary: "#5093E2",
        accent: "#F3BF99",
        font: "#4A4E74",
      },
    },
  },
  plugins: [],
};
