





import React from "react";
import laptopImage from "../../assets/hero-5.png";
// Import all your slideshow images
import slideImage1 from "../../assets/backgrounds_images/bg_3.jpg"; 
import slideImage2 from "../../assets/backgrounds_images/69.jpg"; 
import slideImage3 from "../../assets/backgrounds_images/bg_1.jpg"; 
import slideImage4 from "../../assets/backgrounds_images/bg_2.jpg"; 
import slideImage5 from "../../assets/backgrounds_images/bg_3.jpg"; 
import { useState, useEffect } from "react";


const slides = [slideImage1, slideImage2, slideImage3, slideImage4, slideImage5];

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-center sm:mx-[10rem]">
      <div className="flex flex-col md:flex-row md:max-w-screen rounded-lg overflow-hidden">
        <div className="px-10 py-8 md:p-10 flex flex-col justify-center w-full mb-4 md:mb-0">
          <h1 className="text-5xl md:text-7xl font-semibold text-[#166c6d] mb-4 font-lilita">
            Meet Innovation With Execution, Futuristic Solutions
          </h1>

          <p className="text-gray-600 mb-8 text-4xl font-lilita">
            Discover the latest innovations and solutions with codeservir.
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-sky-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-gradient-to-l transition duration-300 ease-in-out transform hover:scale-105">
            Explore Now
          </button>
        </div>

        <div className="w-full flex justify-center items-center">
          <img
            src={slides[currentSlide]}
            alt="Slideshow"
            className="flex justify-center m-5"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
