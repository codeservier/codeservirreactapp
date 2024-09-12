import React from "react";
import internimg from "../../../../assets/courses/internship/internimg2.jpg";
import { useNavigate } from "react-router-dom";
const Our3monthDev = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative z-50">
      </div>
      <div className="bg-gray-100 p-8">
        <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-[10rem]">
          <div className="relative">
            <img
              src={internimg}
              alt="Internship Program"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-[#00eaff] font-lilita bg-opacity-75 p-4 rounded">
                INTERNSHIP PROGRAM
              </h1>
            </div>
          </div>
          <div className="p-6">
            <p className="font-concert text-gray-800 mb-6">
              Join our internship program and gain valuable experience in the
              field.
            </p>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">
                3 Months Complete C++ and DSA Training Program
              </h2>
              {renderCourseDetails()}
            </div>
            <div className="text-center">
              <button 
              onClick={() => navigate('/InternshipForm')}
              className="bg-red-600 text-white font-bold py-2 px-4 rounded-full hover:bg-red-700 transition duration-300">
                Fill the Form or Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

const renderCourseDetails = () => (
  <div className="space-y-4">
    {coursePlan.map((week, index) => (
      <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-2">{week.title}</h3>
        {week.details.map((day, dayIndex) => (
          <p key={dayIndex} className="ml-4 mb-1">
            {day}
          </p>
        ))}
      </div>
    ))}
  </div>
);

const coursePlan = [
  {
    title: "Week 1-2: Introduction to C++ Programming",
    details: [
      "Basics of C++",
      "Variables, Data Types, Operators",
      "Control Structures (Loops, Conditionals)",
    ],
  },
  {
    title: "Week 3-4: Data Structures and Algorithms (Part 1)",
    details: [
      "Arrays, Strings, Pointers",
      "Functions, Recursion",
      "Sorting Algorithms (Bubble Sort, Selection Sort)",
    ],
  },
  {
    title: "Week 5-6: Advanced C++ and Data Structures (Part 2)",
    details: [
      "OOP Concepts in C++",
      "Linked Lists, Stacks, Queues",
      "Trees, Graphs, Hashing",
    ],
  },
  {
    title: "Week 7-8: Introduction to Web Development with MERN Stack",
    details: [
      "Basics of HTML, CSS",
      "Introduction to JavaScript",
      "Setting Up React.js",
    ],
  },
  {
    title: "Week 9-10: Full Stack Development with MERN Stack (Part 1)",
    details: [
      "Node.js and Express.js",
      "MongoDB Basics (CRUD Operations)",
      "Building RESTful APIs",
    ],
  },
  {
    title: "Week 11-12: Full Stack Development with MERN Stack (Part 2)",
    details: [
      "React Components, Props, State",
      "State Management with Redux",
      "Authentication and Authorization",
      "Career Development and Project Showcase",
    ],
  },
  {
    title: "Week 13: Career Development and Final Project",
    details: [
      "Resume Building and Job Application Strategies",
      "LinkedIn Profile Enhancement",
      "GitHub Profile Building and Open Source Contributions",
    ],
  },
  {
    title: "Week 14: Capstone Project and Presentation",
    details: [
      "Working on a Final Capstone Project",
      "Presentation and Demo of the Project",
      "Feedback and Improvements",
    ],
  },
];

export default Our3monthDev;
