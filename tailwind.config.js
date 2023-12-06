/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#181A2A",
        bgshade: "#242535",
        whtext: "#fafafa",
        sectext: "#cococo",
        blue: "#4B6BFB",
      },
    },
  },
  plugins: [],
};
