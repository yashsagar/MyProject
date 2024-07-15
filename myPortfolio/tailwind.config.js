/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    darkMode: "selector",
    extend: {
      colors: {
        "color-bg": {
          DEFAULT: "rgb(var(--bg-default)/<alpha-value>)",
          hover: "rgb(var(--bg-hover)/<alpha-value>)",
          accent: "#00ff99",
        },
        "color-text": {
          DEFAULT: "rgb(var(--text-default)/<alpha-value>)",
          hover: "rgb(var(--text-hover)/<alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
