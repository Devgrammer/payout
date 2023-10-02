/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#146EB4',
        secondary: '#1E2640',
        tertiary: 'rgba(255, 255, 255, 0.10)',
        quarterly: '#808080',
        pent: '#999999',
        hexa: '#17B31B',
        septa: '#4D4D4D',
        octa:'#1A181E'

      },
      fontFamily: {
        primary: 'Galano Grotesque',
      },
      fontSize: {
        alpha: '32px',
        beta: '16px',
        gamma: '14px',
        delta: '12px',
      },
      padding: {
        alpha: '32px',
        beta: '24px',
        gamma: '20px',
        delta: '14px',
        epsilon: '16px',
        zeta: '12px',
        eta:'10px',
      },
    },
  },
  variants: {},
  plugins: [],
}

