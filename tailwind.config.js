/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          default: "1100px",
        },
        center: true,
      },
      colors: {
        green: {
          primary: "#3EAE5B",
        },
        gray: {
          900: "#474F64",
          800: "#505050",
          700: "#3D3D3D",
          400: "#F9F9F9",
          450: "#EAEAEA",
          460: "#DADADA",
          470: "#656565",
          480: "#9A9A9A",
          490: "#EBE8E4",
        },
        red: {
          DEFAULT: "#EB5757",
        },
        'primary': '#3EAE5B',
        'dark': '#474F64',
        'lightGrey': '#B0B0B0',
        'lightBorder': '#DADCE0',
        'darkBlack': '#2D3748',
        'navyBlue': '#363865',
        'inputBorder': '#C8CAD0',
        'grey': '#7f7f7f',
        'lightGreen': '#DEFFE7',
        'grey2': '#D9D9D9',
        'lightBrown': '#F7F5F0',
        'stonBlack': '#505050',
        'extraLightBrown': '#D6D4D0',
        'darkSton': '#73716D',
        'fontSton': '#9A9A9A',
        'almond': '#EBE8E4',
        'gray70': '#707070',
        'inputB': '#DADADA',
        'inputBg': '#EAEAEA',
        'error': '#EB5757'
      },
      backgroundColor: {
        'lightbg': '#FAFBFB',
      },
      boxShadow: {
        'cardShadow': '0px 8px 20px rgba(0, 0, 0, 0.07), 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
        'dropdown': '0px 1px 10px rgba(0, 0, 0, 0.06), 0px 1px 10px rgba(0, 0, 0, 0.1)'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      screens: {
        'smallDesktop': {'max': '1400px'},
        'maxMd': {'max': '576px'}    
      },
      letterSpacing: {
        0.5: "0.05em",
      },
    },
  },
  
  
  plugins: [
    // require("@tailwindcss/forms")
  ],
});