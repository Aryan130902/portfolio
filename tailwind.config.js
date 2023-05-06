/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors :{
        'primary': '#C4C4C4',
        'secondary':'#EF8D21',
        'secondarylight' : '#FECD6F'
      },
      fontFamily:{

        'primaryfont' : ['Poppins'],
        'logofont' : ['Sedgwick Ave Display']
      },
      container: {
        
        padding: {
          DEFAULT: '0rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },

    
  },
  plugins: [
    require('flowbite/plugin')
  ],
 
  animation: {
    bounce: 'bounce 1s ease-in-out',
  },
  keyframes: {
    bounce: {
      '20%, 50%, 80%, to': {
        transform: 'scale(1, 1)',
      },
      '40%': {
        transform: 'scale(1.75, 0.65)',
      },
      '45%': {
        transform: 'scale(1.75, 0.65)',
      },
      '70%': {
        transform: 'scale(1.25, 0.75)',
      },
      '90%': {
        transform: 'scale(1.15, 0.85)',
      },
    },
  },
}
