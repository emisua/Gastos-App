/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	plugins: [require('daisyui')],
	theme: {
		container: {
			// you can configure the container to be centered
			center: true,

			// or have default horizontal padding
			padding: '1rem',

			// default breakpoints but with 40px removed
			screens: {
				sm: '600px',
				md: '728px',
				lg: '984px',
				xl: '984px',
				'2xl': '984px'
			}
		},
		plugins: [require('@tailwindcss/typography'), require('daisyui')],
		daisyui: {
			styled: true,
			themes: true,
			base: true,
			utils: true,
			logs: true,
			rtl: false,
			prefix: '',
			darkTheme: 'dark',
			themes: [
				'dark',
				'fantasy',
				{
					emisua: {
						primary: '#ed507a',
						secondary: '#4edb72',
						accent: '#ffcccc',
						neutral: '#2F2235',
						'base-100': '#FDFCFD',
						info: '#AEC2EA',
						success: '#3FE4C3',
						warning: '#D2A904',
						error: '#FA3862'
					}
				}
			]
		}
	}
}
