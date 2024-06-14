/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // 'hero-pattern': "url('/src/assets/backgrounds_images/bg_22.png')",
      // 'hero-pattern': "url('/src/assets/backgrounds_images/bg5.jpg')",
      // 'hero-pattern': "url('/src/assets/backgrounds_images/bg_222.jpg')",
      // 'hero-pattern': "url('/src/assets/backgrounds_images/bg_1.jpg')",
      'hero-pattern': "url('/src/assets/backgrounds_images/69.jpg')",
      },
      colors: {
        'yellow-custom': '#FFD700', // Example custom yellow color
        'sky-blue-custom': '#87CEEB', // Example custom sky blue color
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sans: ['Roboto', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
        'lilita': ['"Lilita One"', 'cursive'],
     
      },
    },
  },
  variants: {},
  plugins: [],
};
