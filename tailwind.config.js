/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('/img/hero-bg.png')",
      },
      fontFamily: {
        anton: ['Anton' , 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}