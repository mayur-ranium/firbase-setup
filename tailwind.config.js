module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero': "url('/src/assets/skyline.png')",
        'smartSearchbg': "url('/src/assets/smart-search-bg.png')",
      }),
      colors: {
        'blue': '#09142e',
        'gray': '#616368',
        'primary-clr': '#242f51',
        'dark-blue': '#2500f9',
        'orange': '#fcb874'
      }
      
      }
},
  plugins: [],
}
