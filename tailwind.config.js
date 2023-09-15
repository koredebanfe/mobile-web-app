/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html", "./src/**/*jsx"
  ],
  theme: {
    colors: {
      'white': '#ffffff'
    },
    
    extend: {
      backgroundImage: {
        "header-image" : "url('/src/assets/headerbg.svg')"
      }
    },
  },
  plugins: [],
}

