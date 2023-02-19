/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "src/**/*.astro"],
  theme: {
    extend: {
			animation: {
				jello: 'jello 2s infinite'
			},
			keyframes: {
				jello: {
					'11.1%': { transform: 'translate3d(0, 0, 0)', transformOrigin: 'left' },
					'22.2%': {transform: 'skewX(-12.5deg) skewY(-12.5deg)'},
					'33.3%': {transform: 'skewX(6.25deg) skewY(6.25deg)'},
					'44.4%': {transform: 'skewX(-3.125deg) skewY(-3.125deg)'},
					'55.5%': {transform: 'skewX(1.5625deg) skewY(1.5625deg)'},
					'66.6%': {transform: 'skewX(-0.78125deg) skewY(-0.78125deg)'},
					'77.7%': {transform: 'skewX(0.390625deg) skewY(0.390625deg)'},
					'88.8%': {transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)'}
				}
			},
      colors: {
        sixDark: {
					100: "#BABBBF",
					200: "#898992",
					300: "#555664",
					DEFAULT: "#020419",
				},
        sixLight: {
					100: "#E5E5F5",
					DEFAULT: "#EEEEEE",
				},
        sixYellow: {
					100: "#E8DAC2",
					200: "#E2C698",
					300: "#DCB26C",
					400: "#F8B133",
					DEFAULT: "#D39126",
				},
        sixGreen: {
					100: "#BBD5D3",
					200: "#89BDBA",
					300: "#56A49F",
					DEFAULT: "#047C75",
				},
      },
			fontFamily: {
				sans: "Poppins, Arial, sans-serif"
			}
    },
  },
  plugins: [],
};
