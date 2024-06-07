import React from "react";
// import laptopImage from "../../assets/tagmango-hp.webp";
import laptopImage from "../../assets/hero-5.png";

const LandingPage = () => {
  return (
    <div className="mx-20 mb-10">
      <div className="flex flex-col md:flex-row md:max-w-screen rounded-lg overflow-hidden">
        <div className="px-6 py-8 md:p-10 flex flex-col justify-center  w-full">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Welcome to Codeservir
          </h1>
          <p className="text-gray-600 mb-4">
            Your one-stop destination for all things tech!
          </p>
          <p className="text-gray-600 mb-8">
            Discover the latest innovations and solutions.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
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
