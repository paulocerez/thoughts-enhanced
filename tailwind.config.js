/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
		fontFamily: {
			sans: ['Inter var', ...defaultTheme.fontFamily.sans],
		}
	},
	screens: {
		'sm': '640px',
  
		'md': '768px',
  
		'lg': '1024px',
  
		'xl': '1280px',
  
		'2xl': '1536px',
	  }
  },
  plugins: [],
}