// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faLaptopCode, faTools, faCloud, faShieldAlt, faBrain } from '@fortawesome/free-solid-svg-icons';
// import aboutimg from "../../assets/backgrounds_images/servicebg.jpg";

// const Services = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % servicesData.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? servicesData.length - 1 : prevIndex - 1
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const servicesData = [
//     {
//       icon: faLaptopCode,
//       title: "Android Development",
//       description:
//         "We create robust and scalable Android applications tailored to your business needs.",
//       bgColor: "bg-green-100",
//       textColor: "text-green-800",
//     },
//     {
//       icon: faLaptopCode,
//       title: "Web Development",
//       description:
//         "Our web development team builds responsive and user-friendly websites and web applications.",
//       bgColor: "bg-blue-100",
//       textColor: "text-blue-800",
//     },
//     {
//       icon: faTools,
//       title: "Tech Consulting",
//       description:
//         "We provide expert tech consulting services to help you navigate the latest technologies and solutions.",
//       bgColor: "bg-yellow-100",
//       textColor: "text-yellow-800",
//     },
//     {
//       icon: faCloud,
//       title: "Cloud Solutions",
//       description:
//         "We offer cloud computing solutions to enhance your business infrastructure and scalability.",
//       bgColor: "bg-purple-100",
//       textColor: "text-purple-800",
//     },
//     {
//       icon: faShieldAlt,
//       title: "Cybersecurity",
//       description:
//         "Our cybersecurity services ensure the safety and integrity of your business data.",
//       bgColor: "bg-red-100",
//       textColor: "text-red-800",
//     },
//     {
//       icon: faBrain,
//       title: "Machine Learning",
//       description:
//         "Explore machine learning solutions to optimize your business processes and decision-making.",
//       bgColor: "bg-indigo-100",
//       textColor: "text-indigo-800",
//     },
//     {
//       icon: faBrain,
//       title: "Drone Programming",
//       description:
//         "Leverage drone programming services for aerial data collection and analysis.",
//       bgColor: "bg-pink-100",
//       textColor: "text-pink-800",
//     },
//   ];

//   const visibleServices = () => {
//     const total = servicesData.length;
//     return [
//       servicesData[currentIndex],
//       servicesData[(currentIndex + 1) % total],
//       servicesData[(currentIndex + 2) % total],
//     ];
//   };

//   return (
//     <>
//       <div className=" bg-servicebg3 flex flex-col items-center justify-center py-8 pt-[10rem]">
//         <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-3/4 p-6">
//           <div className="md:w-1/2 md:mr-4 text-center md:text-left">
//             <h2 className="md:text-7xl text-4xl font-lilita font-bold text-[#26baf6] mb-2">
//               Building software for world changers
//             </h2>
//             <p className=" font-concert text-gray-700 text-2xl leading-relaxed">
//               Websites are very essential nowadays. Whether it is a large scale
//               industry or a new startup everyone owns a website for their
//               company. It can upscale your reach to more people and that’s where
//               we come into picture. Technological expertise coupled with
//               excellent UX skills makes us the leading web development company
//               in India.
//             </p>
//           </div>
//           <div className="md:w-1/2 md:ml-4">
//             <img className=" " src={aboutimg} alt="About Us" />
//           </div>
//         </div>
//       </div>

//       <div className="bg-[#FFF] mx-4 my-8 p-8 sm:p-16 rounded-2xl flex flex-col items-center">
//         <h1 className="font-lilita md:text-7xl text-4xl sm:text-5xl font-bold text-[#26baf6] mb-6 sm:mb-10">
//           Our Services
//         </h1>
//         <div className="relative w-full flex flex-col sm:flex-row justify-center items-center">
//           <div className="w-full mx-20 flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-6 px-15">
//             {visibleServices().map((service, index) => (
//               <div
//                 key={index}
//                 className={`${service.bgColor} p-8 sm:p-10 rounded-lg shadow-md flex flex-col items-center w-full sm:w-1/3`}
//               >
//                 <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-white">
//                   <FontAwesomeIcon icon={service.icon} className={` font-concert text-4xl ${service.textColor}`} />
//                 </div>
//                 <h2 className={` font-concert  text-2xl sm:text-4xl font-semibold mb-4 ${service.textColor}`}>
//                   {service.title}
//                 </h2>
//                 <p className=" font-concert  text-gray-700 text-center">
//                   {service.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="flex mt-10 space-x-4">
//   <button
//     onClick={prevSlide}
//     className="px-4 sm:px-5 py-2 bg-[#26baf6] text-white rounded-full hover:bg-[#21cdbe] hover:border-[#21cdbe] border border-transparent transition duration-300"
//   >
//     Prev
//   </button>
//   <button
//     onClick={nextSlide}
//     className="px-4 sm:px-5 py-2 bg-[#26baf6] text-white rounded-full hover:bg-[#21cdbe] hover:border-[#21cdbe] border border-transparent transition duration-300"
//   >
//     Next
//   </button>
// </div>
//       </div>
//     </>
//   );
// };

// export default Services;














// import React, { useState } from "react";
// import projectImage1 from "../../assets/projectImages/proj1_car.png";
// import projectImage2 from "../../assets/projectImages/proj2_fitnesss.png";
// import medicalimg from "../../assets/projectImages/Proj3_medical.png";

// const OurProjects = () => {
//   const [selectedCategory, setSelectedCategory] = useState("Commercial Project");

//   const categories = [
//     "Commercial Project",
//     "Teaching Project",
//     "Gym Project",
//     "AI Project",
//     // "Healthcare Project",
//     // "Finance Project",
//     // "Education Project",
//     // "Retail Project",
//   ];

//   const projects = {
//     "Commercial Project": [
//       {
//         title: "Car Cleaning Mobile App",
//         description: "Professional car cleaning and detailing services.",
//         image: projectImage1,
//         demoLink: "https://example.com/office-demo",
//       },
      
//       {
//         title: "Shree Hari Medical Store App",
//         description: "A large shopping mall with various stores.",
//         image: medicalimg,
//         demoLink: "https://example.com/mall-demo",
//       },
//       {
//         title: "Shree Hari Medical Store App",
//         description: "A large shopping mall with various stores.",
//         image: medicalimg,
//         demoLink: "https://example.com/mall-demo",
//       },
//     ],
//     "Teaching Project": [
//       {
//         title: "Online Learning Platform",
//         description: "An innovative platform for online learning.",
//         image: projectImage1,
//         demoLink: "https://example.com/online-learning-demo",
//       },
//       {
//         title: "School Management System",
//         description: "A comprehensive system for managing schools.",
//         image: projectImage2,
//         demoLink: "https://example.com/school-management-demo",
//       },
//     ],
//     "Gym Project": [
//       {
//         title: "Gym Mobile App",
//         description: "A large shopping mall with various stores.",
//         image: projectImage2,
//         demoLink: "https://example.com/mall-demo",
//       },
//       {
//         title: "Yoga Studio",
//         description: "A serene yoga studio for mindfulness and meditation.",
//         image: projectImage2,
//         demoLink: "https://example.com/yoga-studio-demo",
//       },
//     ],
//     "AI Project": [
//       {
//         title: "AI Chatbot",
//         description: "An intelligent chatbot for customer service.",
//         image: projectImage1,
//         demoLink: "https://example.com/ai-chatbot-demo",
//       },
//       {
//         title: "Machine Learning Model",
//         description: "A cutting-edge machine learning model for data analysis.",
//         image: projectImage2,
//         demoLink: "https://example.com/ml-model-demo",
//       },
//     ],
//     "Healthcare Project": [
//       {
//         title: "AI Chatbot",
//         description: "An intelligent chatbot for customer service.",
//         image: projectImage1,
//         demoLink: "https://example.com/healthcare-chatbot-demo",
//       },
//       {
//         title: "Machine Learning Model",
//         description: "A cutting-edge machine learning model for data analysis.",
//         image: projectImage2,
//         demoLink: "https://example.com/healthcare-ml-model-demo",
//       },
//     ],
//     "Finance Project": [
//       {
//         title: "AI Chatbot",
//         description: "An intelligent chatbot for customer service.",
//         image: projectImage1,
//         demoLink: "https://example.com/finance-chatbot-demo",
//       },
//       {
//         title: "Machine Learning Model",
//         description: "A cutting-edge machine learning model for data analysis.",
//         image: projectImage2,
//         demoLink: "https://example.com/finance-ml-model-demo",
//       },
//     ],
//     "Education Project": [
//       {
//         title: "AI Chatbot",
//         description: "An intelligent chatbot for customer service.",
//         image: projectImage1,
//         demoLink: "https://example.com/education-chatbot-demo",
//       },
//       {
//         title: "Machine Learning Model",
//         description: "A cutting-edge machine learning model for data analysis.",
//         image: projectImage2,
//         demoLink: "https://example.com/education-ml-model-demo",
//       },
//     ],
//     "Retail Project": [
//       {
//         title: "AI Chatbot",
//         description: "An intelligent chatbot for customer service.",
//         image: projectImage1,
//         demoLink: "https://example.com/retail-chatbot-demo",
//       },
//       {
//         title: "Machine Learning Model",
//         description: "A cutting-edge machine learning model for data analysis.",
//         image: projectImage2,
//         demoLink: "https://example.com/retail-ml-model-demo",
//       },
//       {
//         title: "Machine Learning Model",
//         description: "A cutting-edge machine learning model for data analysis.",
//         image: projectImage2,
//         demoLink: "https://example.com/retail-ml-model-demo",
//       },
//       {
//         title: "Machine Learning Model",
//         description: "A cutting-edge machine learning model for data analysis.",
//         image: projectImage2,
//         demoLink: "https://example.com/retail-ml-model-demo",
//       },
//       {
//         title: "Machine Learning Model",
//         description: "A cutting-edge machine learning model for data analysis.",
//         image: projectImage2,
//         demoLink: "https://example.com/retail-ml-model-demo",
//       },
//     ],
//     // Add more projects for other categories as needed
//   };

//   const currentProjects = projects[selectedCategory] || [];

//   return (
//     <div className="md:p-10 sm:mx-[2rem] md:my-16 my-7">
//       <h1 className="md:text-8xl my-7 text-4xl font-semibold md:mb-10 text-[#26baf6] font-lilita text-center">
//         Our Projects
//       </h1>
//       <div className="flex flex-wrap justify-around mb-6">
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={` font-concert  md:p-14 p-4 m-2 md:rounded-t rounded-full text-white md:text-4xl transition duration-300 ${
//               selectedCategory === category
//                 ? "bg-[#26baf6] hover:bg-[#3ae8ff]"
//                 : "bg-[#dda242] hover:bg-[#c68e33]"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>
//       <div className="bg-[#fff16e] md:p-12 p-6 rounded-lg shadow-md">
//         <h2 className=" font-lilita text-4xl font-semibold mb-4 text-center">
//           {selectedCategory}
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {currentProjects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-[#ffffff] p-20 rounded-lg shadow-md flex flex-col relative"
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="h-100 w-full object-cover rounded-lg mb-4"
//               />
//               <div className="flex-1">
//                 <h3 className=" font-lilita text-3xl text-[red] font-semibold mb-2">
//                   {project.title}
//                 </h3>
//                 <p className="font-concert text-gray-700 ">
//                   {project.description}
//                 </p>
//                 <a
//                   href={project.demoLink}
//                   className="absolute bottom-4 right-4 text-[#26baf6] font-semibold cursor-pointer animate-blink"
//                 >
//                   Live Demo
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurProjects;
//  do as above with this 