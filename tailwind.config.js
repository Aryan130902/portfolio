/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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
  plugins: [],
 
  animation: {
    bounce: 'bounce 0.5s ease-in-out',
  },
  keyframes: {
    bounce: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' },
    },
  },
}
