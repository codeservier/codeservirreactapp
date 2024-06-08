import React, { useState } from "react";
import projectImage1 from "../../assets/techCons.png";
import projectImage2 from "../../assets/webDev.png";

const OurProjects = () => {
  const [selectedCategory, setSelectedCategory] =
    useState("Commercial Project");

  const categories = [
    "Commercial Project",
    "Teaching Project",
    "Gym Project",
    // "AI Project",
    // "Healthcare Project",
    "Finance Project",
    "Education Project",
    "Retail Project",
  ];

  const projects = {
    "Commercial Project": [
      {
        title: "Office Building",
        description: "A state-of-the-art office building.",
        image: projectImage1,
      },
      {
        title: "Shopping Mall",
        description: "A large shopping mall with various stores.",
        image: projectImage2,
      },
    ],
    "Teaching Project": [
      {
        title: "Online Learning Platform",
        description: "An innovative platform for online learning.",
        image: projectImage1,
      },
      {
        title: "School Management System",
        description: "A comprehensive system for managing schools.",
        image: projectImage2,
      },
    ],
    "Gym Project": [
      {
        title: "Fitness Center",
        description: "A modern fitness center with advanced equipment.",
        image: projectImage1,
      },
      {
        title: "Yoga Studio",
        description: "A serene yoga studio for mindfulness and meditation.",
        image: projectImage2,
      },
    ],
    "AI Project": [
      {
        title: "AI Chatbot",
        description: "An intelligent chatbot for customer service.",
        image: projectImage1,
      },
      {
        title: "Machine Learning Model",
        description: "A cutting-edge machine learning model for data analysis.",
        image: projectImage2,
      },
    ],
    "Healthcare Project": [
      {
        title: "AI Chatbot",
        description: "An intelligent chatbot for customer service.",
        image: projectImage1,
      },
      {
        title: "Machine Learning Model",
        description: "A cutting-edge machine learning model for data analysis.",
        image: projectImage2,
      },
    ],
    "Finance Project": [
      {
        title: "AI Chatbot",
        description: "An intelligent chatbot for customer service.",
        image: projectImage1,
      },
      {
        title: "Machine Learning Model",
        description: "A cutting-edge machine learning model for data analysis.",
        image: projectImage2,
      },
    ],
    "Education Project": [
      {
        title: "AI Chatbot",
        description: "An intelligent chatbot for customer service.",
        image: projectImage1,
      },
      {
        title: "Machine Learning Model",
        description: "A cutting-edge machine learning model for data analysis.",
        image: projectImage2,
      },
    ],
    "Retail Project": [
      {
        title: "AI Chatbot",
        description: "An intelligent chatbot for customer service.",
        image: projectImage1,
      },
      {
        title: "Machine Learning Model",
        description: "A cutting-edge machine learning model for data analysis.",
        image: projectImage2,
      },
      {
        title: "Machine Learning Model",
        description: "A cutting-edge machine learning model for data analysis.",
        image: projectImage2,
      },
      {
        title: "Machine Learning Model",
        description: "A cutting-edge machine learning model for data analysis.",
        image: projectImage2,
      },
      {
        title: "Machine Learning Model",
        description: "A cutting-edge machine learning model for data analysis.",
        image: projectImage2,
      },
    ],
    // Add more projects for other categories as needed
  };

  const currentProjects = projects[selectedCategory] || [];

  return (
    <div className="p-10 mx-5 sm:mx-[10rem] mb-10">
      <div className="flex flex-wrap justify-around mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 m-2 rounded-full text-white transition duration-300 ${
              selectedCategory === category
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-500 hover:bg-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">{selectedCategory}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
              <img
                src={project.image}
                alt={project.title}
                className="h-40 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
