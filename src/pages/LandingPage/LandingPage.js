import React, { useState, useEffect } from "react";
import iotimg1 from "../../assets/Iot.jpg";
import androidimg2 from "../../assets/android.jpg";
import securityimg3 from "../../assets/security.png";
import tranningimg4 from "../../assets/tranning.jpg";
import mantaince2 from "../../assets/mantaince2.jpg";
import { Navigate, useNavigate } from "react-router-dom";

const slides = [
  iotimg1,
  androidimg2,
  securityimg3,
  tranningimg4,
  mantaince2,
];

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [entering, setEntering] = useState(true);
 
  const navigate = useNavigate()

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

  const getSlideContent = (index) => {
    switch(index) {
      case 0:
        return "Empowering Businesses with Cutting-Edge IoT Technology for Seamless Integration.";
      case 1:
        return "Android Development: Building mobile apps for Android. ";
        case 2:
          return "Securing the future by protecting your connected devices with advanced IoT security solutions.";
          // return "Web Development: Creating responsive and interactive websites.";
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

  return (
    <div className="sm:mx-[10rem]">
      <style>{slideAnimation}</style>
      <div className="flex flex-col md:flex-row md:max-w-screen rounded-lg overflow-hidden">
        <div className="px-10  md:p-10 flex flex-col justify-center w-full mb-4 md:mb-0">
          <h1 className="text-5xl md:text-7xl font-semibold text-[#dda242] mb-4 font-lilita">
            Meet Innovation With Execution,{" "}
            <span className="text-[#26baf6]">Futuristic Solutions</span>
          </h1>

          <p className="text-[#16615f] mb-8 text-3xl font-lilita">
            Discover the latest innovations and solutions with codeservir.
          </p>
          <button onClick={()=>navigate("/ContactPage")} className="bg-gradient-to-r from-yellow-400 to-sky-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-gradient-to-l transition duration-300 ease-in-out transform hover:scale-105">
            Get In Touch
          </button>
        </div>

        {/* right container */}

        <div className={entering ? "slide-enter" : ""} style={{ width: "100%", height: "700px", overflow: "hidden", position: "relative" }}>
          <div className="relative flex ">
            <img src={slides[currentSlide]} alt="Slideshow" className="w-full h-auto object-cover" />
            <div className="bg-[#ffffff7e] rounded-2xl p-4 h-auto w-full sm:w-[50%] absolute md:top-0 bottom-0  flex flex-col justify-between shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 sm:p-6 sm:h-[200px]">
              <div className="flex  items-center mb-4">
                <span className="text-blue-500 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">{getSlideContent(currentSlide)}</h2>
              </div>
              <button className="bg-gradient-to-r from-yellow-400 to-sky-400 text-white font-semibold px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
