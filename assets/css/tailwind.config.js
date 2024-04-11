/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../../index.html"],
  theme: {
    extend: {
      colors: {
        darkblue: "#0F3460",
        tangerineOrange: "#ff6600",
        textblack: "rgb(55, 63, 80)",
        inputbordercolor: "rgb(43,52,69)",
        textgray: "rgb(125, 135, 156)",
      },
      borderRadius: {
        inputRadius: "30px",
      },
    },
  },
  plugins: [],
};
