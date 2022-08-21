/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'basic-text': '#CFD0D0',
			},
			backgroundImage: {
				'rain-image': 'url("./src/assets/img/rainImg.jpg")',
			},
		},
	},
	plugins: [],
};
