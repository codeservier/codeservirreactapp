import React from "react";
import { useNavigate } from "react-router-dom";

import JavaScript from "../../assets/courses/javascript2.png";
import cpp from "../../assets/courses/cppcourseimg.png";
import WebDev from "../../assets/courses/web-development1.png";
import python from "../../assets/courses/python-training-emexo.png";
import react from "../../assets/courses/react.png";
import reactnative from "../../assets/courses/reactnaive2.png";
import java from "../../assets/courses/Java-Logo.png";
import nextjs from "../../assets/courses/next js.png";
import blockchain from "../../assets/courses/logistics-blockchain.png";
import dsa from "../../assets/courses/DSA.webp";
import flutter from "../../assets/courses/flutter.png";
import html from "../../assets/courses/html3.jpg";
import css from "../../assets/courses/css2.png";
import tailwindcss from "../../assets/courses/tailwindcss.png";
import Java from "../../assets/course/2.png";
import ASPDevelopment from "../../assets/course/3.png";
import Python from "../../assets/course/4.png";
import AbdroidDevelopment from "../../assets/course/5.png";
import FlutterDevelopment from "../../assets/course/6.png";
import MernStack from "../../assets/course/7.png";
import wordpress from "../../assets/course/8.png";
import ReactjsDevelopment from "../../assets/course/9.png";



const slideshowImages = [
  { id: 1, image: ReactjsDevelopment, path: "/Our6MonthIntern" },
  { id: 2, image: FlutterDevelopment, path: "/Our3monthDev" },
  { id: 3, image: AbdroidDevelopment, path: "/Our45daysIntern" },
  { id: 4, image: MernStack, path: "/Our1YearCourse" },
  { id: 5, image: Java, path: "/Our1YearCourse" },
  { id: 6, image: ASPDevelopment, path: "/Our1YearCourse" },
  { id: 7, image: Python, path: "/Our1YearCourse" },
  { id: 8, image: wordpress, path: "/Our1YearCourse" },
  
];

const coursesData = [
  {
    id: 1,
    title: "JavaScript",
    description:
      "Learn the fundamentals of JavaScript, the programming language of the web.",
    image: JavaScript,
    route: "/ComingSoon",
  },
  {
    id: 2,
    title: "C++",
    description:
      "Master the powerful features of C++ for high-performance applications.",
    image: cpp,
    route: "/Cpp",
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "Build modern and responsive websites using HTML, CSS, and JavaScript.",
    image: WebDev,
    route: "/ComingSoon",
  },
  // {
  //   id: 4,
  //   title: "Python",
  //   description:
  //     "Learn Python, a versatile language for web development, data analysis, and more.",
  //   image: python,
  //   route: "/ComingSoon",
  // },
  {
    id: 5,
    title: "React",
    description:
      "Dive into React and learn how to build dynamic user interfaces.",
    image: react,
    route: "/ComingSoon",
  },
  {
    id: 6,
    title: "React Native",
    description: "Build mobile applications using React Native.",
    image: reactnative,
    route: "/ComingSoon",
  },
  // {
  //   id: 7,
  //   title: "Java",
  //   description: "Learn Java, a powerful and popular programming language.",
  //   image: java,
  //   route: "/ComingSoon",
  // },
  {
    id: 8,
    title: "Next.js",
    description: "Build server-side rendered React applications with Next.js.",
    image: nextjs,
    route: "/ComingSoon",
  },
  {
    id: 9,
    title: "Blockchain",
    description: "Understand the fundamentals of blockchain technology.",
    image: blockchain,
    route: "/ComingSoon",
  },
  {
    id: 10,
    title: "Data Structures and Algorithms",
    description:
      "Master data structures and algorithms to improve your problem-solving skills.",
    image: dsa,
    route: "/ComingSoon",
  },
  // {
  //   id: 11,
  //   title: "Flutter",
  //   description:
  //     "Build beautiful, natively compiled applications for mobile and web with Flutter.",
  //   image: flutter,
  //   route: "/ComingSoon",
  // },
  {
    id: 12,
    title: "HTML",
    description:
      "Learn HTML, the standard markup language for creating web pages.",
    image: html,
    route: "/ComingSoon",
  },
  {
    id: 13,
    title: "CSS",
    description:
      "Style your web pages using CSS, the language for describing the presentation of web pages.",
    image: css,
    route: "/ComingSoon",
  },
  {
    id: 14,
    title: "Tailwind CSS",
    description:
      "Learn Tailwind CSS, a utility-first CSS framework for rapidly building custom designs.",
    image: tailwindcss,
    route: "/ComingSoon",
  },
];

const Courses = () => {
  const navigate = useNavigate();

  const handleLearnMore = (route) => {
    navigate(route);
  };

  return (
    <>
 
      <div className=" bg-gray-100 md:p-20">
        <h1 className="text-6xl text-[#26baf6] font-bold text-center mb-10 font-lilita  pt-10">
          Our Courses
        </h1>
 
        {/* Internship Program Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-10">
          {slideshowImages.map((item) => (
            <div key={item.id} className="relative w-full mx-2 mb-4 md:mb-0">
              <img
                src={item.image}
                alt="Internship Program"
                className="w-full h-auto object-cover cursor-pointer hover:opacity-75 transition duration-300"
                style={{ minHeight: "200px" }} // Set a minimum height to ensure consistent size
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
                <div className="text-center text-white">
                  <h2 className="text-4xl font-semibold mb-4">
                    Join Our Internship Program
                  </h2>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
                    onClick={() => navigate(item.path)}
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover bg-center"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
                <p className="text-gray-700 mb-4">{course.description}</p>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                  onClick={() => handleLearnMore(course.route)}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
   
    </>
  );
};

export default Courses;
