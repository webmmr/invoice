/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      brand: "#7c5dfa",
      accent: "#9277ff",
      darkBlue: "#1e2139",
      lightBlue: "#252945",
      lightAsh: "#dfe3fa",
      darkAsh: "#888eb0",
      skyBlue: "#7E88C3",
      veryDark: "#0c0e16",
      lightDark: "#141625",
      light: "#f8f8f8",
      darkOrange: "#ec5757",
      lightOrange: "#9277ff",
      white: "#ffffff",
      paid: "#33d69f",
      pending: "#FF8F00",
      draft: "#373B53",
    },
    fontSize: {
      body: ["13px", "18px"],
      base: ["13px", "15px"],
      xl: ["36px", "33px"],
      lg: ["24px", "22px"],
      md: ["20px", "22px"],
      normal: ["16px", "24px"],
      sm: ["15px", "15px"],
    },
    boxShadow: {
      normal: "0px 10px 10px -10px rgba(72, 84, 159, 0.10)",
    },
    extend: {},
  },
  plugins: [],
};
