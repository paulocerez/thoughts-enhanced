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
	// screens: {
	// 	'sm': {'max': '640px'},
	// 	'md': {'min': '641px', 'max': '740px'},
	// 	'lg': {'min': '741px'},
	// }
  },
  plugins: [],
}