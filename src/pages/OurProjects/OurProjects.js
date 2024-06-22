import React, { useState } from "react";
import projectImage1 from "../../assets/projectImages/proj1_car.png";
import projectImage2 from "../../assets/projectImages/proj2_fitnesss.png";
import medicalimg from "../../assets/projectImages/Proj3_medical.png";

const OurProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Commercial Project");

  const categories = [
    "Commercial Project",
    "Teaching Project",
    "Gym Project",
    "AI Project",
    // "Healthcare Project",
    // "Finance Project",
    // "Education Project",
    // "Retail Project",
  ];

  const projects = {
    "Commercial Project": [
      {
        title: "Car Cleaning Mobile App",
        description: "Professional car cleaning and detailing services.",
        image: projectImage1,
        demoLink: "https://example.com/office-demo",
      },
      
      {
        title: "Shree Hari Medical Store App",
        description: "A large shopping mall with various stores.",
        image: medicalimg,
        demoLink: "https://example.com/mall-demo",
      },
      {
        title: "Shree Hari Medical Store App",
        description: "A large shopping mall with various stores.",
        image: medicalimg,
        demoLink: "https://example.com/mall-demo",
      },
    ],
    "Teaching Project": [
      {
        title: "Online Learning Platform",
        description: "An innovative platform for online learning.",
        image: projectImage1,
        demoLink: "https://example.com/online-learning-demo",
      },
      {
        title: "School Management System",
        description: "A comprehensive system for managing schools.",
        image: projectImage2,
        demoLink: "https://example.com/school-management-demo",
      },
    ],
    "Gym Project": [
      {
        title: "Gym Mobile App",
        description: "A large shopping mall with various stores.",
        image: projectImage2,
        demoLink: "https://example.com/mall-demo",
      },
      {
        title: "Yoga Studio",
        description: "A serene yoga studio for mindfulness and meditation.",
        image: projectImage2,
        demoLink: "https://example.com/yoga-studio-demo",
      },
    ],
    "AI Project": [
      {
        title: "AI Chatbot",
        description: "An intelligent chatbot for customer service.",
        image: projectImage1,
        demoLink: "https://example.com/ai-chatbot-demo",
      },
      {
        title: "Machine Learning Model",
        description: "A cutting-edge machine learning model for data analysis.",
        image: projectImage2,
        demoLink: "https://example.com/ml-model-demo",
      },
    ],
    "Healthcare Project": [
      {
        title: "AI Chatbot",
        description: "An intelligent chatbot for customer service.",
        image: projectImage1,
        demoLink: "https://example.com/healthcare-chatbot-demo",
      },
      {
        title: "Machine Learning Model",
        description: "A cutting-edge machine learning model for data analysis.",
        image: projectImage2,
        demoLink: "https://example.com/healthcare-ml-model-demo",
      },
    ],
    "Finance Project": [
      {
        title: "AI Chatbot",
        description: "An intelligent chatbot for customer service.",
        image: projectImage1,
        demoLink: "https://example.com/finance-chatbot-demo",
      },
      {
        title: "Machine Learning Model",
        description: "A cutting-edge machine learning model for data analysis.",
        image: projectImage2,
        demoLink: "https://example.com/finance-ml-model-demo",
      },
    ],
    "Education Project": [
      {
        title: "AI Chatbot",
        description: "An intelligent chatbot for customer service.",
        image: projectImage1,
        demoLink: "https://example.com/education-chatbot-demo",
      },
      {
        title: "Machine Learning Model",
        description: "A cutting-edge machine learning model for data analysis.",
        image: projectImage2,
        demoLink: "https://example.com/education-ml-model-demo",
      },
    ],
    "Retail Project": [
      {
        title: "AI Chatbot",
        description: "An intelligent chatbot for customer service.",
        image: projectImage1,
        demoLink: "https://example.com/retail-chatbot-demo",
      },
      {
        title: "Machine Learning Model",
        description: "A cutting-edge machine learning model for data analysis.",
        image: projectImage2,
        demoLink: "https://example.com/retail-ml-model-demo",
      },
      {
        title: "Machine Learning Model",
        description: "A cutting-edge machine learning model for data analysis.",
        image: projectImage2,
        demoLink: "https://example.com/retail-ml-model-demo",
      },
      {
        title: "Machine Learning Model",
        description: "A cutting-edge machine learning model for data analysis.",
        image: projectImage2,
        demoLink: "https://example.com/retail-ml-model-demo",
      },
      {
        title: "Machine Learning Model",
        description: "A cutting-edge machine learning model for data analysis.",
        image: projectImage2,
        demoLink: "https://example.com/retail-ml-model-demo",
      },
    ],
    // Add more projects for other categories as needed
  };

  const currentProjects = projects[selectedCategory] || [];

  return (
    <div className="md:p-10 sm:mx-[2rem] md:my-16 my-7">
      <h1 className="md:text-8xl my-7 text-4xl font-semibold md:mb-10 text-[#26baf6] font-lilita text-center">
        Our Projects
      </h1>
      <div className="flex flex-wrap justify-around mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={` font-concert  md:p-14 p-4 m-2 md:rounded-t rounded-full text-white md:text-4xl transition duration-300 ${
              selectedCategory === category
                ? "bg-[#26baf6] hover:bg-[#3ae8ff]"
                : "bg-[#dda242] hover:bg-[#c68e33]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="bg-[#fff16e] md:p-12 p-6 rounded-lg shadow-md">
        <h2 className=" font-lilita text-4xl font-semibold mb-4 text-center">
          {selectedCategory}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="bg-[#ffffff] p-20 rounded-lg shadow-md flex flex-col relative"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-100 w-full object-cover rounded-lg mb-4"
              />
              <div className="flex-1">
                <h3 className=" font-lilita text-3xl text-[red] font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="font-concert text-gray-700 ">
                  {project.description}
                </p>
                <a
                  href={project.demoLink}
                  className="absolute bottom-4 right-4 text-[#26baf6] font-semibold cursor-pointer animate-blink"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
