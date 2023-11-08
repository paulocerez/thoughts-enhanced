/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1042px",

      xl: "1280px",

      "2xl": "1536px",
    },
  },
  plugins: [],
  theme: {
    extend: {
      custom: {
        "user-input":
          "block w-full rounded-md border-0 bg-transparent py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
      },
    },
  },
};
