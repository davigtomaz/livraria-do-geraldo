/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/views/*.vue", "./src/components/*.vue"],
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
};
