import React from "react";
import jaiJyotish from "../../assets/ourprojects/1.png";
import Genzoalpha from "../../assets/ourprojects/2.png";
import sakshamstudy from "../../assets/ourprojects/3.png";
import Pragaticoaching from "../../assets/ourprojects/4.png";
import Bhatiasportsv2 from "../../assets/ourprojects/5.png";
import Bhatiasportsv1 from "../../assets/ourprojects/6.png";
import Agape from "../../assets/ourprojects/7.png";
import Jmart from "../../assets/ourprojects/8.png";
import Jstore from "../../assets/ourprojects/9.png";
import JDelivery from "../../assets/ourprojects/10.png";
import Shiksha from "../../assets/ourprojects/11.png";
import skps from "../../assets/ourprojects/12.png";
import VanService from "../../assets/ourprojects/13.png";
import saptrishi from "../../assets/ourprojects/14.png";
import sikshaErp from "../../assets/ourprojects/15.png";
import Buzride from "../../assets/ourprojects/16.png";
import RKGym from "../../assets/ourprojects/17.png";
import RKGymStaff from "../../assets/ourprojects/18.png";
import CarWash from "../../assets/ourprojects/19.png";

import { useNavigate } from "react-router-dom";
const OurProjects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Car washing Android & iOS",
      description: "Streamlined booking for expert car detailing. Schedule services, manage bookings, and ensure your vehicle shines.",
      image: CarWash,
      demoLink: '/ComingSoon',
    },
    {
      title: "Shree Hari Medical Store",
      description: "Shree Hari Medical Store: Modern shopping mall hosting diverse stores, including a prominent medical outlet.",
      image: jaiJyotish, // Assuming this is the correct image
      demoLink: '/ComingSoon',
    },
    {
      title: "RK Fitness Android & iOS",
      description: "A tranquil Fitness studio app fostering mindfulness and exercise practices, designed for serene wellness experiences.",
      image: RKGym,
      demoLink: '/ComingSoon',
    },
    {
      title: "RK Gym Staff Management",
      description: "An efficient app for managing gym staff and schedules, ensuring smooth operations and enhanced communication.",
      image: RKGymStaff,
      demoLink: '/ComingSoon',
    },
    {
      title: "Buzride",
      description: "A seamless platform for ride-sharing, connecting drivers and passengers with ease.",
      image: Buzride,
      demoLink: '/ComingSoon',
    },
    {
      title: "Siksha ERP",
      description: "An integrated ERP solution for educational institutions, enhancing management and operational efficiency.",
      image: sikshaErp,
      demoLink: '/ComingSoon',
    },
    {
      title: "Saptrishi",
      description: "A comprehensive platform offering various educational services and resources.",
      image: saptrishi,
      demoLink: '/ComingSoon',
    },
    {
      title: "Van Service",
      description: "A reliable transportation service for schools, ensuring safe and timely commutes.",
      image: VanService,
      demoLink: '/ComingSoon',
    },
    {
      title: "Shiksha",
      description: "An educational app providing a range of learning resources and tools for students.",
      image: Shiksha,
      demoLink: '/ComingSoon',
    },
    {
      title: "Jmart",
      description: "A modern e-commerce platform offering a variety of products at competitive prices.",
      image: Jmart,
      demoLink: '/ComingSoon',
    },
    {
      title: "Jstore",
      description: "A user-friendly online store for shopping, with diverse categories and fast delivery options.",
      image: Jstore,
      demoLink: '/ComingSoon',
    },
    {
      title: "JDelivery",
      description: "An efficient delivery app ensuring timely transport of goods to customers.",
      image: JDelivery,
      demoLink: '/ComingSoon',
    },
    // {
    //   title: "Agape",
    //   description: "A community-driven app for connecting individuals with shared interests and goals.",
    //   image: Agape,
    //   demoLink: '/ComingSoon',
    // },
    {
      title: "Bhatia Sports v2",
      description: "An engaging platform for sports enthusiasts to stay updated with news and events.",
      image: Bhatiasportsv2,
      demoLink: '/ComingSoon',
    },
    {
      title: "Bhatia Sports v1",
      description: "A revamped version of the sports app with enhanced features and user experience.",
      image: Bhatiasportsv1,
      demoLink: '/ComingSoon',
    },
    {
      title: "Pragati Coaching",
      description: "An educational platform providing coaching for competitive exams and personal development.",
      image: Pragaticoaching,
      demoLink: '/ComingSoon',
    },
    {
      title: "Saksham Study",
      description: "A comprehensive study platform offering resources and tools for academic success.",
      image: sakshamstudy,
      demoLink: '/ComingSoon',
    },
    {
      title: "Genzoalpha",
      description: "A modern solution for managing digital content and user engagement effectively.",
      image: Genzoalpha,
      demoLink: '/ComingSoon',
    },
    {
      title: "Jai Jyotish",
      description: "An astrology app offering insights and guidance for a better life.",
      image: jaiJyotish,
      demoLink: '/ComingSoon',
    },
    {
      title: "SKPS",
      description: "A school management app streamlining administrative tasks and enhancing communication.",
      image: skps,
      demoLink: '/ComingSoon',
    },
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
