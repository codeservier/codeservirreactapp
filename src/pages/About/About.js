import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import logo from "../../assets/logo.png";

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-between items-center px-10 ">
        <div className="flex flex-col items-center">
          <img src={logo} alt="Logo" className="h-40" />
          <h2 className="text-[#ffb907] text-2xl mt-[-3.5rem]">
            code<span className="text-[#1dceff]">servir.com</span>
          </h2>
        </div>
        <div>
          <button className="bg-[#000000] text-white px-4 py-2 rounded-[5rem] hidden md:block mr-4 hover:bg-blue-600 transition duration-300">
            Login
          </button>
        </div>
      </div>
      <div>
        <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              About Our Company
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              At XYZ IT Solutions, we are committed to delivering exceptional IT
              services tailored to meet the unique needs of each client. With a
              team of experienced professionals and a proven track record of
              success, we have completed over 239 projects across various
              industries.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our mission is to empower businesses with innovative technology
              solutions that drive growth and success. We believe in building
              long-term partnerships with our clients, providing them with
              reliable support and expert guidance every step of the way.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Whether you're looking to develop custom software, enhance your
              digital presence, or streamline your IT infrastructure, we have
              the expertise and dedication to turn your vision into reality.
              Contact us today to learn more about how we can help your business
              thrive in the digital age.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
