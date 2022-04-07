module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero': "url('/src/assets/skyline.png')",
        'heroVector': "url('/src/assets/hero-vector.png')",
        'smartSearchbg': "url('/src/assets/smart-search-bg.png')",
      }),
      colors: {
        'bg-blue': '#09142e'
      }
      
      }
},
  plugins: [],
}
