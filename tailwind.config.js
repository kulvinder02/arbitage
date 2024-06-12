/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green:"#4cc973",
        skyLight:"#cfd6dc",
       offGrey: "#F9F9F9",
       grey: "#333333",
       lightBlack:"#E5E5E5",
       lightGreen:"#dbf4e3",
   
     },
     fontFamily: {
       inter: "Inter",
     },
    },
  },
  plugins: [],
}

