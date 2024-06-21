import React, { useState, useEffect } from 'react';
import img1 from "../../assets/backgrounds_images/69.jpg";
import img2 from "../../assets/backgrounds_images/bg_1.jpg";
import img3 from "../../assets/backgrounds_images/aboutbg.jpg";
import img4 from "../../assets/backgrounds_images/aboutbg2.jpg";
import img5 from "../../assets/backgrounds_images/bg_22.png";
import img6 from "../../assets/backgrounds_images/aboutbg.jpg";
import img7 from "../../assets/backgrounds_images/sphere.png";
import img8 from "../../assets/backgrounds_images/services3.jpg";
import img9 from "../../assets/backgrounds_images/header3.jpg";
import img10 from "../../assets/backgrounds_images/header1.jpg";

const PopupCourse = ({ onClose }) => {
  const backgroundImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change slide duration (milliseconds)

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'transform 1s ease-out', // Transition for smooth sliding effect
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative md:w-full w-10/12 md:h-80 h-64 max-w-xl mx-auto p-6 rounded-lg shadow-lg overflow-hidden"
        style={backgroundImageStyle}
      >
        {/* <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-center items-center text-center text-white p-6">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 text-[#26baf6] font-lilita">INTERNSHIP PROGRAM</h1>
          <p className="text-sm sm:text-base mb-4">
            Join our internship program and gain valuable experience in the field.
          </p>
          <button 
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-sm sm:text-base"
            onClick={() => window.location.href = '/InternshipForm'}
          >
            Fill the Form
          </button>
        </div> */}
        <button 
          className="absolute top-2 right-2 text-white hover:text-gray-900 z-10"
          onClick={onClose}
        >
          ✖
        </button>
      </div>
    </div>
  );
}

export default PopupCourse;