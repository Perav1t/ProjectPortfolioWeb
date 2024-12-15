/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        primaryTitle : '#64c2ec',
        primaryContent : '#b8f5ff', 
        primarySubtitle : '#e8eaf6', 
        primaryBase : '#b8f5ff', 
        primaryAccent : '#277ca5',
        primaryBg : '#000000',
        primaryLb : '#ADD8E6',

      }
    },
  },
  plugins: [],
}

