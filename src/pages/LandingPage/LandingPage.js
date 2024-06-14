import React, { useState, useEffect } from "react";
import slideImage1 from "../../assets/backgrounds_images/head1.png";
import slideImage2 from "../../assets/backgrounds_images/head2.png";
import slideImage3 from "../../assets/backgrounds_images/head3.png";
import slideImage4 from "../../assets/backgrounds_images/header4.png";
import slideImage5 from "../../assets/backgrounds_images/head5.png";

const slides = [
  slideImage1,
  slideImage2,
  slideImage3,
  slideImage4,
  slideImage5,
];

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [entering, setEntering] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setEntering(false);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        setEntering(true);
      }, 500); // Match this duration with the animation duration
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const slideAnimation = `
    @keyframes slide {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(0);
      }
    }
    .slide-enter {
      animation: slide 1s forwards;
    }
  `;

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  };

  const imgStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  };

  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-center sm:mx-[10rem]">
      <style>{slideAnimation}</style>
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

        <div style={{ width: '100%', height: '700px', overflow: 'hidden', position: 'relative' }}>
          <img
            src={slides[currentSlide]}
            alt="Slideshow"
            style={imgStyle}
            className={entering ? 'slide-enter' : ''}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
