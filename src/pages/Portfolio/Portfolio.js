import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Logobtn from "../../components/Logobtn/Logobtn";
import Footer from "../../components/Footer/Footer";

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <Logobtn />
      <div>
        <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Our Portfolio
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Explore some of our recent projects and see how we've helped
              businesses like yours succeed in the digital world.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Portfolio items go here */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Project Title
                </h2>
                <p className="text-gray-700 mb-4">
                  Description of the project goes here. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  Read More
                </a>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Project Title
                </h2>
                <p className="text-gray-700 mb-4">
                  Description of the project goes here. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  Read More
                </a>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Project Title
                </h2>
                <p className="text-gray-700 mb-4">
                  Description of the project goes here. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  Read More
                </a>
              </div>
              {/* Add more portfolio items as needed */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
