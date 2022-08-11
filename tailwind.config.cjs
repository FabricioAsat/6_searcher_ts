/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				darkLight: "#1f2937",
				darkDark: "#07090c",

				lightDark: "#f3f2fc",
				lightLight: "#faf9fe",
			},
			gridTemplateColumns: {
				gridCards: "repeat(auto-fill, minmax(192px, 1fr))",
			},
		},
		fontFamily: {
			sans: ["ui-sans-serif", "system-ui"],
			serif: ["ui-serif", "Georgia"],
			mono: ["ui-monospace", "SFMono-Regular"],
			body: ["Nunito", "sans-serif"],
		},
	},
	plugins: [],
};
