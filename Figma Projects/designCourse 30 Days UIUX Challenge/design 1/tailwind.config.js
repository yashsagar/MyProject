/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "color-bg-1": "rgb(var(--color-bg-1)/ <alpha-value>)",
        "color-bg-2": "rgb(var(--color-bg-2)/ <alpha-value>)",
      },
    },
  },
  plugins: [],
};
