import React from "react";
import projectImage1 from "../../assets/projectImages/car.png";
import projectImage2 from "../../assets/projectImages/proj2_fitnesss.png";
import medicalimg from "../../assets/projectImages/sh.png";
import { useNavigate } from "react-router-dom";


const OurProjects = () => {

      const navigate  = useNavigate();

  const projects = [
    {
      title: "Car washing Android & ios",
      description: "Streamlined booking for expert car detailing. Schedule services, manage bookings, and ensure your vehicle shines.",
      image: projectImage1,
      demoLink:'/ComingSoon'
    },
    {
      title: "Shree Hari Medical Store",
      description: "Shree Hari Medical Store: Modern shopping mall hosting diverse stores, including a prominent medical outlet.",
      image: medicalimg,
      demoLink: '/ComingSoon'
    },  
    {
      title: "RK Fitness Android & ios ",
      description: "A tranquil Fitness studio app fostering mindfulness and exercise practices, designed for serene wellness experiences",
      image: projectImage2,
      demoLink: '/ComingSoon'
    },
 
    // Add more projects as needed
  ];

  return (
    <div className="md:p-10 sm:mx-[rem] md:my-16 my-7">
      <h1 className="md:text-8xl my-7 text-4xl font-semibold md:mb-10 text-[#26baf6] font-lilita text-center">
        Our Projects
      </h1>
      <div className="bg-[#ffffff0d] md:p-12 p-6 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index} 
              className="bg-[#ffffff] p-4 border-2 border-gray-200 rounded-xl shadow-md flex flex-col relative"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-100 w-full object-cover rounded-lg mb-4"
              />
              <div className="flex-1 p-4">
                <h3 className="text-4xl text-[#000000ca] font-semibold mb-2">

                  {project.title}
                </h3>
                <p className="text-gray-700 mt-6 mb-4">
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
