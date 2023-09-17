/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        karla: ['Karla', 'sans-serif']
      }
    },
    screens:{
      'sm':{'max':'639px'},
      'lg':{'min':'640px'}
    }

  },
  plugins: []
};
