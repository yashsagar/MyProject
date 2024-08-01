/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "600px",
      lg: "960px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      fontFamily: {
        netflix: [
          "'Netflix Sans'",
          "'Helvetica Neue'",
          "'Segoe UI'",
          "Roboto",
          "Ubuntu",
          "' sans-serif'",
        ],
      },
      colors: {
        col: {
          text: {
            DEFAULT: "rgb(var(--col-text-default)/<alpha-value>)",
            secondery: "rgb(179,179,179)",
          },
          bg: {
            DEFAULT: "rgb(var(--col-bg-default)/<alpha-value>)",
            accent: "rgb(var(--col-bg-accent)/<alpha-value>)",
            "accent-hover": "rgb(var(--col-bg-accent-hover)/<alpha-value>)",
          },
          logo: "rgb(var(--col-logo)/<alpha-value>)",
        },
      },
      backgroundImage: {
        image: "URL(/background-img.jpg)",
        pc: "URL(/frame/pc.png)",
      },
      dropShadow: {
        wh: "0 5px 5px rgba(255, 255, 255, 0.2)",
      },
    },
  },
  plugins: [],
};
