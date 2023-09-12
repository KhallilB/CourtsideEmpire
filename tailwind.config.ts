import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      black: '#050401',
      jet: '#303036',
      white: '#FFFAFF',
      blue: '#007991',
      red: '#D64933'
    },
    extend: {
    },
  },
  plugins: [],
}
export default config
