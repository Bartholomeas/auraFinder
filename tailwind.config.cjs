/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'basic-text': '#CFD0D0',
			},
			backgroundImage: {
				'01': "url('./public/img/01.jpg')",
				'02': "url('./public/img/02.jpg')",
				'03': "url('./public/img/03.jpg')",
				'04': "url('./public/img/04.jpg')",
				'09': "url('./public/img/09.jpg')",
				10: "url('./public/img/10.jpg')",
				11: "url('./public/img/11.jpg')",
				13: "url('./public/img/13.jpg')",
				50: "url('./public/img/50.jpg')",
			},
		},
	},
	plugins: [],
};
