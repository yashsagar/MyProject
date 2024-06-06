/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "text-color": "rgb(var(--text-color) / <alpha-value> )",
        "bg-color": "rgb(var(--bg-color) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
