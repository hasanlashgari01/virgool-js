/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: "2rem",
					sm: "2.5rem",
					md: "3.25rem",
					lg: "5rem",
					xl: "7.5rem",
					"2xl": "10rem",
				},
			},
		},
		fontFamily: {
			IRYekanThin: "IRANYekanWebThin",
			IRYekanRegular: "IRANYekanWebRegular",
			IRYekanMedium: "IRANYekanWebMedium",
			IRYekanLight: "IRANYekanWebLight",
			IRYekanExtraBold: "IRANYekanWebExtraBold",
			IRYekanExtraBlack: "IRANYekanWebExtraBlack",
			IRYekanBold: "IRANYekanWebBold",
			IRYekanBlack: "IRANYekanWebBlack",
			DanaBold: "dana-bold",
			DanaDemiBold: "dana-demibold",
		},
	},
	plugins: [
		function ({ addVariant }) {
			addVariant("child", "& > *");
			addVariant("child-hover", "& > *:hover");
		},
	],
};
