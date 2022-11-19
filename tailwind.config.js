/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      "dark-primary": "#030613",
      "Accent":"#70F8CF"
    },
      fontFamily: {
        major: 'Major Mono Display',
        indeieFlower: 'Indie Flower',
        SyneMono: "Syne Mono",
        Poppins:"Poppins"
    }
    },
    
  },
  plugins: [],
}
