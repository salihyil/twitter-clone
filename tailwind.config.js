/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#0095f6",
        facebook: "#385185",
        link: "#00376b",
      },
      backgroundImage: {
        "logo-tw":
          "url(https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png)",
      },
    },
  },
  plugins: [],
};
