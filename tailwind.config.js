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
        bg: "#161616",
        bgshade: "#212121",
        text: "#ffffff",
        sectext: "#818181",
        green: "#039754",
        purple: "#5D11FF",
      },
    },
  },
  plugins: [],
};
