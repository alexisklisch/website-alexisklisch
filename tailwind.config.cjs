/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
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
