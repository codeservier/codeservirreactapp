/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/Users/dineshkumar/Desktop/preetamncc/react-web-app/src/assets/backgrounds_images/bg_1.jpg')",
        'hero-pattern1': "url('/Users/dineshkumar/Desktop/preetamncc/react-web-app/src/assets/backgrounds_images/bg_2.jpg')",
        'hero-pattern2': "url('/Users/dineshkumar/Desktop/preetamncc/react-web-app/src/assets/backgrounds_images/bg_3.jpg')",
        'hero-pattern2': "url('/Users/dineshkumar/Desktop/preetamncc/react-web-app/src/assets/bg_22.png')",

      }
    }
  },
  variants: {},
  plugins: [],
};
