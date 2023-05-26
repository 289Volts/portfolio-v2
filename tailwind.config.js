/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				base: "#18181B",
				primaryDark: "#9393F9",
				primaryLight: "#DC2626",
				secondary: "#121212",
				secondaryLight: "#121212",
				text: "rgb(243 244 246)",
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
