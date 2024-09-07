import React from "react";
import internimg from "../../../../assets/courses/internship/internimg2.jpg";
import Logobtn from "../../../Layout/Logobtn";
import Navbar from "../../../Layout/Navbar";
import Footer from "../../../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
const Our1YearCourse = () => {
  const navigate = useNavigate();
  return (
    <>
    
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
                12 Months Training Program
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
    {coursePlan.map((month, index) => (
      <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-2">{month.title}</h3>
        {month.details.map((week, weekIndex) => (
          <div key={weekIndex} className="ml-4 mb-1">
            <h4 className="text-lg font-semibold">{week.title}</h4>
            {week.details.map((day, dayIndex) => (
              <p key={dayIndex} className="ml-4 mb-1">
                {day}
              </p>
            ))}
          </div>
        ))}
      </div>
    ))}
  </div>
);

const coursePlan = [
  {
    title: "Month 1-3: Foundation in Programming and Data Structures",
    details: [
      {
        title: "Week 1-4: Introduction to C++ Programming",
        details: [
          "Basics of C++",
          "Variables, Data Types, Operators",
          "Control Structures (Loops, Conditionals)",
        ],
      },
      {
        title: "Week 5-8: Advanced C++ and Data Structures",
        details: [
          "Functions, Recursion",
          "Arrays, Strings, Pointers",
          "Linked Lists, Stacks, Queues",
        ],
      },
      {
        title: "Week 9-12: Algorithms and Problem Solving",
        details: [
          "Sorting and Searching Algorithms",
          "Trees, Graphs, Hashing",
          "Problem Solving Strategies and Competitive Programming",
        ],
      },
    ],
  },
  {
    title: "Month 4-6: Object-Oriented Programming and Java",
    details: [
      {
        title: "Week 13-16: Object-Oriented Programming with Java",
        details: [
          "OOP Concepts",
          "Inheritance, Polymorphism, Encapsulation",
          "Exception Handling, File Handling",
        ],
      },
      {
        title: "Week 17-20: Advanced Java and Android Development",
        details: [
          "Android Studio Setup and Basics",
          "Activities, Fragments, UI Design",
          "Networking, SQLite, Firebase Integration",
        ],
      },
      {
        title: "Week 21-24: Android Project Development",
        details: [
          "Building a Complete Android App",
          "Material Design Guidelines",
          "Deployment on Google Play Store",
        ],
      },
    ],
  },
  {
    title: "Month 7-9: Python Programming and Django Development",
    details: [
      {
        title: "Week 25-28: Introduction to Python",
        details: [
          "Basics of Python Syntax",
          "Data Structures in Python",
          "Functions, Modules, Packages",
        ],
      },
      {
        title: "Week 29-32: Web Development with Django",
        details: [
          "Django Framework Basics",
          "Models, Views, Templates",
          "CRUD Operations, Authentication",
        ],
      },
      {
        title: "Week 33-36: Django Project Development",
        details: [
          "Building a Dynamic Web Application",
          "REST APIs with Django Rest Framework",
          "Deployment on Heroku or AWS",
        ],
      },
    ],
  },
  {
    title: "Month 10-12: Full Stack Development with MERN Stack",
    details: [
      {
        title: "Week 37-40: Frontend Development with HTML/CSS and JavaScript",
        details: [
          "HTML5, CSS3 Styling Techniques",
          "Responsive Web Design",
          "DOM Manipulation, Event Handling",
        ],
      },
      {
        title: "Week 41-44: React.js and Redux",
        details: [
          "Introduction to React.js",
          "Components, Props, State Management",
          "Redux for State Management",
        ],
      },
      {
        title: "Week 45-48: Node.js, Express.js, and MongoDB",
        details: [
          "Backend Development with Node.js and Express.js",
          "MongoDB and Mongoose for Database Management",
          "RESTful API Development and Integration",
        ],
      },
      {
        title: "Week 49-52: MERN Stack Project Development",
        details: [
          "Integrating Frontend and Backend",
          "Authentication and Authorization",
          "Deployment on AWS or Firebase",
        ],
      },
    ],
  },
  {
    title: "Career Development and Placement Support",
    details: [
      {
        title: "Resume Building and LinkedIn Enhancement",
        details: [
          "Crafting Effective Resumes",
          "Optimizing LinkedIn Profiles",
        ],
      },
      {
        title: "Mock Interviews and HR Connections",
        details: [
          "Practice Sessions for Technical and HR Interviews",
          "Connecting Students with Industry Professionals",
        ],
      },
      {
        title: "Direct Campus Placements and Referrals",
        details: [
          "Facilitating Placement Drives",
          "Referrals to Partner Companies",
        ],
      },
    ],
  },
];

export default Our1YearCourse;
