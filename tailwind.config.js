/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				base: "#18181B",
				primary: "#9393F9",
				// primary: "#181818",
				secondary: "#121212",
				text: "rgb(243 244 246)",
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
