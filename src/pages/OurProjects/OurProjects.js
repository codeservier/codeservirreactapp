import React, { useState } from "react";
import projectImage1 from "../../assets/techCons.png";
import projectImage2 from "../../assets/webDev.png";

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
    <div className="md:p-10 sm:mx-[2rem] md:my-16 my-7">
      <h1 className="md:text-8xl my-7 text-4xl font-semibold md:mb-10 text-[#26baf6] font-lilita text-center">Our Projects</h1>
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
      <div className="bg-[#ebfbff] md:p-12 p-6 rounded-lg shadow-md">
  <h2 className=" font-lilita text-4xl font-semibold mb-4 text-center">{selectedCategory}</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {currentProjects.map((project, index) => (
      <div key={index} className="bg-gray-100 p-10 rounded-lg shadow-md flex flex-col">
        <img
          src={project.image}
          alt={project.title}
          className="h-56 w-full object-cover rounded-lg mb-4"
        />
        <div className="flex-1">
          <h3 className=" font-lilita text-3xl font-semibold mb-2">{project.title}</h3>
          <p className="font-concert text-gray-700 ">{project.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  );
};

export default OurProjects;