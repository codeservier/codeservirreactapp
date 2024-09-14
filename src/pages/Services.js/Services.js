import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faTools,
  faCloud,
  faShieldAlt,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
import aboutimg from "../../assets/svgfiles/bg/service.svg";

const Services = () => {
  const servicesData = [
    {
      icon: faLaptopCode,
      title: "Android & iOS",
      description:
        "Crafting robust, scalable Android & iOS apps customized to meet your business requirements for optimal mobile experiences.",
      bgColor: "bg-green-100",
      textColor: "text-green-800",
    },
    {
      icon: faLaptopCode,
      title: "Web",
      description:
        "Our web development team crafts responsive, user-friendly websites and web applications tailored to elevate your online presence and user experience.",
      bgColor: "bg-blue-100",
      textColor: "text-blue-800",
    },
    {
      icon: faTools,
      title: "Tech Consulting",
      description:
        "We provide expert tech consulting services to help you navigate the latest technologies and solutions.",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-800",
    },
    {
      icon: faCloud,
      title: "Cloud Solutions",
      description:
        "We offer cloud computing solutions to enhance your business infrastructure and scalability.",
      bgColor: "bg-purple-100",
      textColor: "text-purple-800",
    },
    {
      icon: faShieldAlt,
      title: "Cybersecurity",
      description:
        "Our cybersecurity services ensure the safety and integrity of your business data.",
      bgColor: "bg-red-100",
      textColor: "text-red-800",
    },
    {
      icon: faBrain,
      title: "Machine Learning",
      description:
        "Explore machine learning solutions to optimize your business processes and decision-making.",
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-800",
    },
  ];

  return (
    <>
    <div className="bg-primary pb-20 ">
      <div className="bg-primary  p-10 flex flex-col items-center justify-center    ">
        <div className="flex flex-col md:mx-10 lg:flex-row  lg:w-3/4 ">
          <div className="lg:w-1/2 px-10   md:mr-4 text-center md:text-left ">
            <h2 className="md:text-6xl text-4xl font-lilita font-bold text-[#26baf6] mt-10  ">
              Building software for world changers
            </h2>
            <p className=" text-textcolor text-xl text-justify mt-10 ">
            We leverage modern technologies like AI, cloud computing, and data science to deliver scalable, high-performance software that supports your mission. From mobile applications to complex web platforms, we ensure that every solution we build is user-friendly, secure, and future-proof. Our approach focuses on collaboration and innovation, ensuring that the software we create not only meets your immediate needs but also evolves as your goals and the world around you change. Together, we’re building software that has the potential to make a lasting impact and inspire real change globally.
            </p>
          </div>
          <div className="md:w-1/2 md:ml-4 mt-6 px-10 lg:mt-0">
            <img src={aboutimg} alt="About Us" className="w-full rounded-lg " />
          </div>
        </div>
      </div>

      <div className="bg-[#12121223]  sm:mx-[2rem] sm:p-16 rounded-2xl flex flex-col items-center ">
        <h1 className="font-lilita md:text-7xl text-4xl sm:text-5xl font-bold text-[#26baf6] mb-6 sm:mb-10 py-4">
          Our Services
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 px-4">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} p-4 sm:p-10 rounded-lg shadow-md flex flex-col items-center`}
            >
              <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-white">
                <FontAwesomeIcon
                  icon={service.icon}
                  className={`text-4xl ${service.textColor}`}
                />
              </div>
              <h2
                className={`text-2xl sm:text-4xl font-semibold mb-4 ${service.textColor}`}
              >
                {service.title}
              </h2>
              <p className="text-gray-700 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default Services;
