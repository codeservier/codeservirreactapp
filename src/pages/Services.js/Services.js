import React from "react";
import androidImage from "../../assets/appDev.png";
import webImage from "../../assets/webDev.png";
import consultantImage from "../../assets/techCons.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Services = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <div className=" flex flex-col md:flex-row justify-around items-center p-10 space-y-6 md:space-y-0 md:space-x-6 mx-5 sm:mx-[10rem] ">
          <div className="bg-green-100 p-6 rounded-lg shadow-md w-full md:w-1/3 flex flex-col items-center">
            <img
              src={androidImage}
              alt="Android Development"
              className="h-20 mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4">Android Development</h2>
            <p className="text-gray-700 text-center">
              We create robust and scalable Android applications tailored to
              your business needs.
            </p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md w-full md:w-1/3 flex flex-col items-center">
            <img src={webImage} alt="Web Development" className="h-20 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Web Development</h2>
            <p className="text-gray-700 text-center">
              Our web development team builds responsive and user-friendly
              websites and web applications.
            </p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md w-full md:w-1/3 flex flex-col items-center">
            <img
              src={consultantImage}
              alt="Tech Consultant"
              className="h-20 mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4">Tech Consultant</h2>
            <p className="text-gray-700 text-center">
              We provide expert tech consulting services to help you navigate
              the latest technologies and solutions.
            </p>
          </div>
        </div>
      </div>
      <div>{/* <Footer /> */}</div>
    </>
  );
};

export default Services;
