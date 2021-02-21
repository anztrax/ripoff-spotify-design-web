// tailwind.config.js
module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'spotify-green-1' : '#1ED760',
				'spotify-green-2': '#1DB954',
				'spotify-blue-1': '#2940a8',
				'spotify-gray-1' : '#919496',
				'spotify-gray-2' : '#222326',
				'spotify-gray-3' : '#d9dadc',
			},
			screens: {
				'xs': '440px',
			},
			fontSize: {
				'xxs' : '0.5rem'
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
