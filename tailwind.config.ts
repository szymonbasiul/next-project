import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			container: {
				center: true,
			},
			colors: {
				primary: '#33658A',
        secondary: '#86BBD8',
        third: '#2F4858'
			},
		},
	},
	plugins: [],
} satisfies Config;
