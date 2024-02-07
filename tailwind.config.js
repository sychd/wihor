/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/routes/**/*.{svelte,js,ts}', './src/lib/**/*.{svelte,js,ts}'],
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	theme: {
		extend: {}
	},
	daisyUI: {
		themes: ['nord', 'forest'],
		darkTheme: 'forest',
		theme: 'nord'
	}
};
