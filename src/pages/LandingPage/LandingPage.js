import React from "react";
// import laptopImage from "../../assets/tagmango-hp.webp";
import laptopImage from "../../assets/hero-5.png";

const LandingPage = () => {
  return (
    <div className="bg-hero-pattern2 bg-no-repeat bg-cover bg-center min-h-screen px-5 sm:mx-[10rem] mb-10">
      <div className="flex flex-col md:flex-row md:max-w-screen rounded-lg overflow-hidden ">
        <div className="px-10 py-8 md:p-10 flex flex-col justify-center  w-full ">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Welcome to Codeservir
          </h1>
          <p className="text-gray-600 mb-4">
            Your one-stop destination for all things tech!
          </p>
          <p className="text-gray-600 mb-8">
            Discover the latest innovations and solutions.
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-sky-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-gradient-to-l transition duration-300 ease-in-out transform hover:scale-105">
            Explore Now
          </button>
        </div>

        <div className=" w-full flex justify-center items-center ">
          <img
            src={laptopImage}
            alt="Laptop"
            className="flex justify-center m-5  "
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
