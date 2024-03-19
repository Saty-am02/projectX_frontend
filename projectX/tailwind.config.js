/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
,
      colors: {
        
        secondary: {
          lightblue:'#CDFAEA',
          lightyellow:'#FFCF96',
          lightorange:'#FF8080',
          lightenglishblue:'#6c8da4',
          darkEnglishblue:'#46627b',
          400:'#000000',
        },
        vercomp: {
          yellow:'#F9F7C9',
          green:'#D5F0C1',
          darkgreen:'#AAD9BB',
          ultradarkgreen:'#80BCBD',
      },
     
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
      }
    },
   
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ['Poppins', "sans-serif"],
        empyrean: "Empyrean" ,
        saveur:'Saveur',
        saveurround:'Saveurround',
        metro:'Metro'
        // Add more custom font families as needed
      },
  },
  plugins: [],
}
};
