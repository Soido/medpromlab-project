/** @type {import('tailwindcss').Config} */
module.exports = {

 

  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
,
plugins: [
  require('tailwindcss-animated'),
  require('flowbite/plugin')
],

  
}

