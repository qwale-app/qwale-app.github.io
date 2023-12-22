/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradientbg': "url('/bg.png')"
      },
      fontFamily: {
        'montserrat': ['"Montserrat"'],
        'metrovancouver': ['"metrovancouver"']
      },
    },
  },
  plugins: [],
}

