import React, { useState, useEffect } from "react";
import iotimg1 from "../../assets/slideImg/5.png";
import androidimg2 from "../../assets/slideImg/1.png";
import securityimg3 from "../../assets/slideImg/2.png";
import tranningimg4 from "../../assets/slideImg/3.png";
import mantaince2 from "../../assets/slideImg/4.png";
import { Navigate, useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/svgfiles/frame.svg"; // Adjust the import path to your image

const slides = [iotimg1, androidimg2, securityimg3, tranningimg4, mantaince2];

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [entering, setEntering] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setEntering(false);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        setEntering(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getSlideContent = (index) => {
    switch (index) {
      case 0:
        return "Empowering Businesses with Cutting-Edge IoT Technology for Seamless Integration.";
      case 1:
        return "Android Development: Building mobile apps for Android. ";
      case 2:
        return "Securing the future by protecting your connected devices with advanced IoT security solutions.";
      case 3:
        return "Empowering your skills with comprehensive training in DSA, development, and cutting-edge IoT security solutions.";
      case 4:
        return "Ensuring robust performance with expert training in DSA, development, and IoT security maintenance.";
      default:
        return "Content not available.";
    }
  };

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
  // hello>?
  return (
    <div
      className="mx-auto -z-50 md:h-screen flex flex-col lg:flex-row items-center justify-center px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})`, zIndex: -10 }} // Lower zIndex for slideshow
      >
      <style>{slideAnimation}</style>

      <div className="flex  flex-col lg:flex-row w-ful  md:px-8  lg:-mt-20  mt-10 rounded-lg overflow-hidden container mx-auto">
        <div className="flex flex-col  justify-center w-full  lg:mb-0 lg:px-40">
          <h1 className="text-4xl  lg:text-4xl xl:text-5xl  font-semibold text-[#FF8A00] mb-4 font-lilita">
            Meet Innovation With Execution,{" "}
            <span className="text-[#26baf6]">Futuristic Solutions</span>
          </h1>
          <p className="text-xl lg:text-2xl xl:text-3xl text-mywhite font-lilita">
            Discover the latest innovations and solutions with codeservir.
          </p>
          <button
            onClick={() => navigate("/ContactPage")}
            className="w-full lg:w-[12rem] mt-6 md:mt-0 bg-gradient-to-r -z-50 from-yellow-400 to-sky-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-gradient-to-l transition duration-300 ease-in-out transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        <div
          className={`relative max-w-screen-2xl p-4 lg:p-8  overflow-hidden ${
            entering ? "slide-enter" : ""
          }`}
        >
          <img
            src={slides[currentSlide]}
            alt="Slideshow"
            className="w-full h-full object-cover"
          />
          <div className="md:absolute bottom-12 left-0 w-full sm:w-[70%] lg:w-[70%] bg-white opacity-80 rounded-2xl border p-4 sm:p-6 shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-95">
            <div className="flex items-center mb-4">
              <span className="text-blue-500 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </span>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                {getSlideContent(currentSlide)}
              </h2>
            </div>
            <button
              onClick={() => navigate("/ComingSoon")}
              className="bg-gradient-to-r from-yellow-400 to-sky-400 text-white font-semibold px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 "
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
