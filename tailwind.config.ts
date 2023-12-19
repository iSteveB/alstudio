import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        crema: '#F4EBE2'
      },
      colors: {
        crema: '#F4EBE2',
        white: '#FFFFFF',
        moggle: '#312920',
        beaver: '#8C7D69',
        lion: '#BB9A77'
      },
      borderWidth: {
        '3': '3px'
      }
    },
  },
  plugins: [],
}
export default config
