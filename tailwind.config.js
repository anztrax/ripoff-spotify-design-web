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
				'spotify-gray-2' : '#222326'
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
