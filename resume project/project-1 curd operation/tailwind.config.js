/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "color-primary": "rgb(var(--color-primary)/<alpha-value>)",
        "color-text": {
          DEFAULT: "rgb(var(--color-text-default)/<alpha-value>)",
          green: "rgb(var(--color-text-green)/<alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
