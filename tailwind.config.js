/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        vvl: '28rem',
        vl: '16rem',
        'xxs': '0.5rem'
      },
      
      brightness: {
        25: .25
      },
      maxWidth: {
        '1/2': '50%',
        '4/5': '80%'
      },
      width: {
        nvw: "97vw"
      },
      height: {
        nvh: "95vh",
        hvh: "50vh"
      },
      colors: {
        purple: {
          wisteria: '#875F9A',
          bellflower: '#5D3F6A'
        }
      },
    },
  },
  plugins: [],
}

