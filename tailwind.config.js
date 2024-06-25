/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBg: "#181818",
        card: "#212121",
        accent1: "#168bdc",
        primaryDarkText: "#FFFFFF",
        secondaryDarkText: "#d8d8d8",
      },
    },
  },
  plugins: [],
};
