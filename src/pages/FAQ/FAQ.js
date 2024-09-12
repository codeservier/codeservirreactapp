import React, { useState } from "react";

import fqaQ from "../../assets/backgrounds_images/faqbg.jpg";

const questions = [
  {
    question:
      "What technologies does your software development company specialize in?",
    answer:
      "We specialize in a wide range of technologies including JavaScript frameworks like React and Angular, backend technologies like Node.js and Python, and mobile development with Swift and Kotlin.",
  },
  {
    question: "How does your company ensure the quality of software products?",
    answer:
      "We employ rigorous testing methodologies such as automated testing with Jest and Cypress, continuous integration and deployment (CI/CD) pipelines, and peer code reviews to ensure high-quality software.",
  },
  {
    question: "Can you describe your approach to project management?",
    answer:
      "We follow Agile methodologies, specifically Scrum, to ensure transparency, flexibility, and timely delivery of software projects. Our teams collaborate closely with clients throughout the development lifecycle.",
  },
  {
    question: "How do you handle scalability and performance optimization?",
    answer:
      "We design our software solutions with scalability in mind, utilizing cloud-native architectures and microservices. We also conduct performance profiling and optimizations to ensure efficient and responsive applications.",
  },
  {
    question:
      "What security measures does your company implement in software development?",
    answer:
      "We prioritize security from the ground up, employing practices such as code reviews for security vulnerabilities, encryption for data protection, and adherence to industry best practices such as OWASP guidelines.",
  },
];

const FAQ = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <>
      <div className="bg-hero-pattern">

        <div className=" bg-hero-pattern flex flex-col md:flex-row justify-center items-center p-6 pt-[10rem]">
          <div className="text-center max-w-3xl mb-6 md:mb-0 md:mr-6">
            <h1 className="text-[#26baf6] font-lilita md:text-6xl text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className=" font-concert md:text-2xl text-xl leading-relaxed ">
              Welcome to our Frequently Asked Questions (FAQ) section. Here
              you'll find answers to the most common queries about our software
              development services. From the technologies we use to our approach
              to project management, we aim to provide clarity and insight into
              how we work and what you can expect when partnering with us. If
              you have any further questions, feel free to reach out to our
              team.
            </p>
          </div>
          <div className="text-center mb-6">
            <img
              src={fqaQ}
              alt="FAQ Illustration"
              className="w-full max-w-md bg-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="px-4 md:px-0 py-8 md:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          {questions.map((item, index) => (
            <div key={index}>
              <div
                className="flex hover:bg-[#26baf6] duration-500 justify-between items-center p-4 bg-white cursor-pointer shadow-md rounded-lg"
                onClick={() => toggleQuestion(index)}
              >
                <h2 className=" font-concert md:text-2xl font-medium ">
                  {item.question}
                </h2>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    openQuestionIndex === index ? "rotate-45" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  ></path>
                </svg>
              </div>
              <div
                className={`p-4 bg-gray-50 border-l-4 border-blue-500 shadow-inner rounded-lg ${
                  openQuestionIndex === index
                    ? "max-h-screen opacity-100 transition-all duration-500 ease-in-out"
                    : "max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out"
                }`}
              >
                <p className="text-gray-700 font-concert">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

 
    </>
  );
};

export default FAQ;
