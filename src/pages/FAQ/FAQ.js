import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Logobtn from "../../components/Logobtn/Logobtn";
import Footer from "../../components/Footer/Footer";

const FAQ = () => {
  return (
    <>
      <Navbar />
      <Logobtn />
      <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Frequently Asked Questions
          </h1>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Question 1?
            </h2>
            <p className="text-gray-700 mb-4">
              Answer to question 1 goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Proin ultricies libero sit amet ipsum
              fermentum convallis.
            </p>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Question 2?
            </h2>
            <p className="text-gray-700 mb-4">
              Answer to question 2 goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Proin ultricies libero sit amet ipsum
              fermentum convallis.
            </p>
            {/* Add more questions and answers as needed */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
