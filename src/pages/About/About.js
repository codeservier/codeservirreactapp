import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Logobtn from "../../components/Logobtn/Logobtn";
import aboutimg from "../../assets/backgrounds_images/aboutbg2.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faUsers, faGlobe } from '@fortawesome/free-solid-svg-icons';
// className="relative md:w-full w-10/12 md:h-1/2 h-40 max-w-xl mx-auto p-6 rounded-lg shadow-lg overflow-hidden"
{/* <div className="absolute inset-0 bg-black bg-opacity-75"></div> */}
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
    <div className="min-h-screen bg-[#ebfbff] bg-aboutbg bg-cover bg-center">
      <Navbar />
      <Logobtn />
      <div className="flex flex-col items-center justify-center py-8">
        <div className="text-center mb-8 max-w-screen px-6 md:px-0">
          <h1 className="md:text-8xl text-4xl font-bold text-[#26baf6] font-lilita">
            About Our Company
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center w-full md:max-w-screen-lg bg-white p-10 rounded-lg shadow-lg">
          <div className="md:w-1/2 md:mr-4 text-center md:text-left mb-6 md:mb-0">
            <h2 className=" font-concert  text-3xl md:text-6xl font-bold text-gray-800 mb-2">
              Building software for world changers
            </h2>
            <p className=" font-concert text-gray-700 leading-relaxed text-lg md:text-xl">
              Websites are very essential nowadays. Whether it is a large scale
              industry or a new startup everyone owns a website for their company.
              It can upscale your reach to more people and that’s where we come
              into picture. Technological expertise coupled with excellent UX
              skills makes us the leading web development company in India.
            </p>
          </div>
          <div className="md:w-1/2 md:ml-4">
            <img src={aboutimg} alt="About Us" className="w-full h-auto " />
          </div>
        </div>
      </div>

      <div className="flex justify-center py-8">
        <div className="max-w-screen-lg grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardData.map((card) => (
            <div key={card.id} className="bg-white rounded-lg shadow-md p-6 md:mx-0 mx-5">
              <div className="text-center">
                <FontAwesomeIcon icon={card.icon} className="text-3xl text-[#26baf6] mb-2 mx-auto" />
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

      <Footer />
    </div>
  );
};

export default About;







// import React from 'react';
// import popimage from '../../assets/backgrounds_images/Internship.jpg';

// const Popup = ({ onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div 
//         className="relative md:w-full w-10/12 md:h-80 h-64 max-w-xl mx-auto p-6 rounded-lg shadow-lg overflow-hidden  "
//         style={{ 
//           backgroundImage: `url(${popimage})`, 
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center text-white p-6">
//           <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 text-[#26baf6] font-lilita">INTERNSHIP PROGRAM</h1>
//           <p className="text-sm sm:text-base mb-4">
//             Join our internship program and gain valuable experience in the field.
//           </p>
//           <button 
//             className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-sm sm:text-base"
//             onClick={() => window.location.href = '/InternshipForm'}
//           >
//             Fill the Form
//           </button>
//         </div>
//         <button 
//           className="absolute top-2 right-2 text-white hover:text-gray-900 z-10"
//           onClick={onClose}
//         >
//           ✖
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Popup;