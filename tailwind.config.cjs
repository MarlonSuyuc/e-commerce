/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern':
          // "linear-gradient(to right bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../../../../src/assets/imageContact.jpg')",
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('./src/assets/imageContact.jpg')",
      },
    },
  },
  plugins: [],
};
