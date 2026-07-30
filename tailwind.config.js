/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", "Segoe UI", "sans-serif"],
      },
      colors: {
        canvas: "#f6f9fc",
        surface: "#ffffff",
        ink: "#0f172a",
        muted: "#475569",
        line: "#d8e2ea",
        brand: {
          50: "#eef7fb",
          100: "#d9eef7",
          200: "#b7dceb",
          300: "#88c3da",
          400: "#56a2c2",
          500: "#2d84a6",
          600: "#186986",
          700: "#11526b",
          800: "#0b4a6e",
          900: "#0a3650",
          950: "#08273b",
        },
        accent: {
          400: "#f4b84d",
          500: "#e49a22",
          600: "#c77f14",
        },
      },
    },
  },
  plugins: [],
};
