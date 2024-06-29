/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Specify the content path for PurgeCSS
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/backgrounds_images/bg_1.jpg')",
      },
    },
  },
  variants: {},
  plugins: [],
};
