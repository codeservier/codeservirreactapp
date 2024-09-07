import React from "react";
import internimg from "../../../../assets/courses/internship/internimg2.jpg";
import Logobtn from "../../../Layout/Logobtn";
import Navbar from "../../../Layout/Navbar";
import Footer from "../../../../components/Footer/Footer";

import { useNavigate } from "react-router-dom";
const Our45daysIntern = () => {
  const navigate = useNavigate();
  return (
    <>
      <Logobtn />
      <div className="relative z-50">
        <Navbar />
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
                45-Day Placement-Oriented Software Development Program
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
      <Footer />
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
    title: "Week 1: Introduction to Programming and Basics",
    details: [
      "Day 1-3: Basics of Chosen Programming Language (C++/Java/Python)",
      "Setting Up Development Environment",
      "Syntax and Basics",
      "Variables, Data Types, and Operators",
      "Day 4-5: Control Structures",
      "Conditional Statements",
      "Loops (for, while, do-while)",
      "Practice Problems",
      "Day 6-7: Functions and Recursion",
      "Function Definitions and Declarations",
      "Recursion Basics",
      "Practice Recursive Problems",
    ],
  },
  {
    title: "Week 2: Data Structures Basics",
    details: [
      "Day 8-10: Arrays and Strings",
      "Array Operations (Insertion, Deletion, Searching)",
      "String Manipulation",
      "Multidimensional Arrays",
      "Day 11-13: Linked Lists",
      "Singly Linked Lists",
      "Doubly Linked Lists",
      "Circular Linked Lists",
      "Day 14: Stacks and Queues",
      "Stack Operations (Push, Pop)",
      "Queue Operations (Enqueue, Dequeue)",
      "Applications of Stacks and Queues",
    ],
  },
  {
    title: "Week 3: Advanced Data Structures and Algorithms",
    details: [
      "Day 15-17: Trees",
      "Binary Trees",
      "Binary Search Trees",
      "Tree Traversal Techniques",
      "Day 18-20: Graphs and Graph Algorithms",
      "Graph Representation",
      "Depth-First Search (DFS)",
      "Breadth-First Search (BFS)",
      "Day 21: Sorting and Searching Algorithms",
      "Basic Sorting Algorithms (Bubble, Selection, Insertion)",
      "Advanced Sorting Algorithms (Merge Sort, Quick Sort)",
      "Binary Search",
    ],
  },
  {
    title: "Week 4: Basic MERN Stack Development",
    details: [
      "Day 22-24: Introduction to Web Development",
      "HTML5 and CSS3 Basics",
      "Responsive Web Design",
      "JavaScript Basics",
      "Day 25-27: React.js Basics",
      "Introduction to React.js",
      "Components, Props, and State",
      "Simple React Application",
      "Day 28-30: Node.js and Express.js",
      "Introduction to Node.js",
      "Setting Up Express.js",
      "Building a Simple API",
    ],
  },
  {
    title: "Week 5: Full Stack Development and Final Project",
    details: [
      "Day 31-33: MongoDB and Mongoose",
      "Introduction to MongoDB",
      "CRUD Operations with MongoDB",
      "Using Mongoose for Schema Definition",
      "Day 34-36: Integrating MERN Stack",
      "Connecting React Frontend to Express Backend",
      "Fetching and Displaying Data",
      "User Authentication Basics",
      "Day 37-39: Project Development",
      "Project Planning and Setup",
      "Implementing Features",
      "Debugging and Testing",
    ],
  },
  {
    title: "Week 6: Career Development",
    details: [
      "Day 40-41: Resume Building",
      "Crafting an Effective Resume",
      "Highlighting Skills and Projects",
      "Tailoring Resumes for Job Applications",
      "Day 42: LinkedIn Profile Enhancement",
      "Building a Professional LinkedIn Profile",
      "Networking Strategies",
      "Leveraging LinkedIn for Job Search",
      "Day 43: GitHub Profile Building",
      "Creating a Strong GitHub Profile",
      "Showcasing Projects",
      "Contributing to Open Source",
      "Day 44-45: Final Project Presentation and Mock Interviews",
      "Presentation and Demo of the Project",
      "Feedback and Improvements",
      "Mock Technical Interviews",
      "Problem-Solving Strategies",
    ],
  },
];

export default Our45daysIntern;
