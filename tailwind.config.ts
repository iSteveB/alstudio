import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '700px',
      lg: '1100px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      keyframes: {
        'loader-before': {
          '0%': { transform: 'none' },
          '100%': { transform: 'none' },
          '25%': { transform: 'translateX(100%)' },
          '50%': { transform: 'translateX(100%) translateY(100%)' },
          '75%': { transform: 'translateY(100%)' }
        },
        'loader-after': {
          '0%': { transform: 'none' },
          '100%': { transform: 'none' },
          '25%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(-100%) translateY(-100%)' },
          '75%': { transform: 'translateY(-100%)' }
        }
      },
      animation: {
        'loader-before': 'loader-before 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite',
        'loader-after': 'loader-after 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite'
      },
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
