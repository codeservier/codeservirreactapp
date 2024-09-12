import React from "react";
import aboutimg from "../../assets/backgrounds_images/aboutbg2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faUsers, faGlobe } from "@fortawesome/free-solid-svg-icons";
import fqaQ from "../../assets/backgrounds_images/aboutbg2.jpg";

const About = () => {
  const cardData = [
    {
      id: 1,
      icon: faCogs,
      title: "Technology Solutions",
      description:
        "Explore our cutting-edge technology solutions designed to streamline your operations.",
    },
    {
      id: 2,
      icon: faUsers,
      title: "Community Engagement",
      description:
        "Learn how we engage with communities to create positive impacts through our initiatives.",
    },
    {
      id: 3,
      icon: faGlobe,
      title: "Global Presence",
      description:
        "Discover our global footprint and how we serve clients across different continents.",
    },
    {
      id: 4,
      icon: faGlobe,
      title: "Global Presence",
      description:
        "Discover our global footprint and how we serve clients across different continents.",
    },
    {
      id: 5,
      icon: faGlobe,
      title: "Global Presence",
      description:
        "Discover our global footprint and how we serve clients across different continents.",
    },
    {
      id: 6,
      icon: faGlobe,
      title: "Global Presence",
      description:
        "Discover our global footprint and how we serve clients across different continents.",
    },
  ];

  return (
    <>
      <div className=" bg-[#ebfbff] bg-aboutbg  ">
        <div className="bg-hero-pattern">
         
          <div className=" bg-white bg-hero-pattern flex flex-col md:flex-row justify-center items-center p-6 pt-[10rem]">
            <div className=" max-w-3xl mb-6 md:mb-0 md:mr-6">
              <h1 className="text-[#26baf6] font-lilita md:text-6xl text-4xl font-bold mb-4">
                Enhancing Customer Experience with Innovative Web and Mobile App
                Solutions
              </h1>
              <p className=" font-concert md:text-2xl text-xl leading-relaxed ">
                Websites are essential for businesses. We offer top-notch web
                development services in India, combining technical expertise
                with exceptional UX design.
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

        <div className="flex justify-center py-8">
          <div className="max-w-screen-lg grid grid-cols-1 md:grid-cols-3 gap-8">
            {cardData.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-lg shadow-md p-6 md:mx-0 mx-5"
              >
                <div className="text-center">
                  <FontAwesomeIcon
                    icon={card.icon}
                    className="text-3xl text-[#26baf6] mb-2 mx-auto"
                  />
                  <h2 className="font-concert  text-xl md:text-2xl font-bold text-gray-800 mb-2">
                    {card.title}
                  </h2>
                  <p className="font-concert  text-gray-700 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

    
      </div>
    </>
  );
};

export default About;
