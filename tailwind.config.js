/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  // purge: [
  //   './resources/**/*.blade.php',
  //   './resources/**/*.js',
  // ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        'xxs': '374px',
        'xs':'484px',
        'sm': '600px',
        'md': '767px',
        '2md': '884px',
        'lg': '1023px',
        'xl': '1240px',
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'pp-blue-500': '#3e92d0',
        'pp-blue-600': '#54abd1',
        'pp-blue-700': '#1b94c8',
        'pp-blue-800': '#0c88be',
        'pp-blue-900': '#313C52',
        'pp-blue-200': '#49c5ef',
        'pp-blue-link': '#0000EE',
        'pp-purple-200': '#6a8fda',
        'pp-yellow-500': '#ede323',
        'pp-gold-dark' : '#B48E2F',
        'pp-orange-500': '#f87832',
        'pp-grey-50': '#f3f4f6',
        'pp-blue-400': '#0091ff',
        'pp-purple-50': '#d3e5ff',
        'pp-purple-100': '#577097',
        'pp-blue-50': '#ecf4fb',
        'pp-orange-600': '#ff9602',
        'pp-orange-400': '#fd9c32',
        'pp-orange-700': '#ce6f06',
        'pp-gold-500': '#a98735',
        'pp-gold-100': '#f6f0e5',
        'pp-gold-50': '#ece4d1',
        'pp-gold-200': '#d7c6a0',
        'pp-gold-300': '#e1d8c8',
        'pp-gold-400': '#dbd6cc',
        'pp-gold-600': '#ece5d8',
        'pp-gold-700': '#ede6d9',
        'pp-yellow-400': '#f9bf3b',
        'pp-yellow-50': '#fff4d8',
        'pp-yellow-100': '#ffe39f',
        'pp-yellow-200': '#ebd08f',
        'pp-green-500': '#3faf82',
        'pp-green-50': '#e4f7ef',
        'pp-green-100': '#d6ecdc',
        'pp-green-600': '#328f69',
        'pp-red-500': '#ce1c1c',
        'pp-grey-500': '#333333',
        'pp-grey-400': '#a2a6a7',
        'pp-grey-600': '#555555',
        'pp-grey-300': '#f5f4f3',
        'pp-grey-200': '#999999',
        'pp-grey-100': '#e5e7eb',
        'pp-grey-700': '#666666',
        'pp-grey-100': '#e3e3e3',
        'pp-blue-grey-500': '#3a4557',
        'pp-blue-grey-600': '#2b3442',
        'pp-brown-200': '#c4c0b7',
        'pp-brown-100': '#d7cdbb',
        'pp-red-600': '#cd2022',
        'pp-red-50': '#fae8e8',
        'pp-bej-light': '#F4EFE8',
        'pp-transparent-light': 'rgba(49, 60, 82, 0.4)',
        'pp-grey-50': '#ABADB2'
      },
      fontFamily: {
        sans: ['"Open sans"', 'sans-serif'],
        ppserif : ['Merriweather', 'serif'],
      },
    },
    screens: {
      '2xl': {'max': '1400px'},
      

      'xl': {'max': '1240px'},
      

      'lg': {'max': '1100px'},
      

      '2md' : {'max': '890px'},


      'md': {'max': '767px'},
      

      'sm': {'max': '639px'},


      'xs' :  {'max': '484px'},


      'xxs' : {'max': '374px'}
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}
