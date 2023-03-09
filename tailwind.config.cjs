/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "30vw": "30vw",
        "500px": "500px",
        "400px": "400px",
      },
    },
  },
  plugins: [require("daisyui", "@tailwindcss/hover")],
};
