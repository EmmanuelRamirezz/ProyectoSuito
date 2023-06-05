/** @type {import('tailwindcss').Config} */

// export default {

// }
module.exports = {
  darkMode : 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'github-bg': "url('../assets/github.png')",
      colors:{
        "navL": 'rgb(212, 211, 211)',
        "navD": 'rgb(29, 28, 28)',

        "mainL": 'rgb(214, 239, 248)',
        "mainD": '#1d282d',

        "footerL": 'rgb(247, 238, 230)',
        "footerD": '#37414b',

        "buttons": '#8f9fd8',
        "buttonsH": '#5b73ca'
      },
    },

  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}