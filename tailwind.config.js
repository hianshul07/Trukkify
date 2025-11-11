// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx}', // Adjust if your files are elsewhere
	],
	theme: {
		extend: {
			fontFamily: {
				hindi: ['var(--font-hindi)', 'sans-serif'],
				trispace: ['var(--font-trispace)', 'monospace'],
				lato: ['var(--font-lato)', 'sans-serif'],
			},
		},
	},
	plugins: [],
};