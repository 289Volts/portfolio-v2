/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#0a0a0a",
				// primary: "#181818",
				secondary: "#121212",
				text: "#ffffff",
			},
		},
	},
	plugins: [],
};
