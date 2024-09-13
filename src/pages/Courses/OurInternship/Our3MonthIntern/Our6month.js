import React from "react";
import internimg from "../../../../assets/courses/internship/internimg2.jpg";
import { useNavigate } from "react-router-dom";

const Our6MonthIntern = () => {
  const navigate = useNavigate();

  return (
    <>
  
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto bg-white shadow-lg overflow-hidden ">
          <div className=" ">
            <img
              src={internimg}
              alt="Internship Program"
              className="w-full h-64 object-cover -z-50 "
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-[#00eaff] font-lilita bg-opacity-75 p-4 rounded">
                INTERNSHIP PROGRAM
              </h1>
            </div>
          </div>
          <div className="px-1 py-3">
            <p className="font-concert text-gray-800 mb-6">
              Join our internship program and gain valuable experience in the field.
            </p>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">
                6 Months Training Program
              </h2>
              {renderCourseDetails()}
            </div>
            <div className="text-center">
              <button
                onClick={() => navigate('/InternshipForm')}
                className="bg-red-600 text-white font-bold py-2 px-4 rounded-full hover:bg-red-700 transition duration-300"
              >
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
      <div key={index} className="bg-gray-100 p-4 ">
        <h3 className="text-xl text-orange-500 font-semibold mb-2">{month.title}</h3>
        {month.details.map((week, weekIndex) => (
          <div key={weekIndex} className="ml-4 mb-1">
            <h4 className="text-lg text-gray-500 font-semibold">{week.title}</h4>
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
    title: "Month 1: Foundation in Programming and Data Structures",
    details: [
      {
        title: "Week 1: Introduction to Programming with C++",
        details: [
          "Basics of C++",
          "Variables, Data Types, and Operators",
          "Control Structures (Loops and Conditionals)",
        ],
      },
      {
        title: "Week 2: Advanced C++ Concepts",
        details: [
          "Functions and Recursion",
          "Arrays and Pointers",
          "Object-Oriented Programming (OOP) Basics",
        ],
      },
      {
        title: "Week 3: Data Structures in C++",
        details: [
          "Introduction to Data Structures",
          "Arrays, Linked Lists",
          "Stacks and Queues",
        ],
      },
      {
        title: "Week 4: Advanced Data Structures",
        details: [
          "Trees (Binary Trees, Binary Search Trees)",
          "Graphs and Graph Algorithms",
          "Hashing and Hash Tables",
        ],
      },
    ],
  },
  {
    title: "Month 2: Algorithms and Problem Solving",
    details: [
      {
        title: "Week 5: Sorting and Searching Algorithms",
        details: [
          "Bubble Sort, Selection Sort, Insertion Sort",
          "Merge Sort, Quick Sort",
          "Binary Search",
        ],
      },
      {
        title: "Week 6: Advanced Algorithms",
        details: [
          "Dynamic Programming",
          "Greedy Algorithms",
          "Backtracking",
        ],
      },
      {
        title: "Week 7: Algorithm Practice and Competitive Programming",
        details: [
          "Solving Problems on Platforms like LeetCode, HackerRank",
          "Time Complexity and Space Complexity Analysis",
        ],
      },
      {
        title: "Week 8: Mock Interviews and Problem Solving Sessions",
        details: [
          "Mock Technical Interviews",
          "Problem Solving Strategies",
        ],
      },
    ],
  },
  {
    title: "Month 3: Introduction to Web Development",
    details: [
      {
        title: "Week 9: HTML and CSS",
        details: [
          "Basics of HTML",
          "CSS for Styling",
          "Responsive Design",
        ],
      },
      {
        title: "Week 10: JavaScript Basics",
        details: [
          "Introduction to JavaScript",
          "DOM Manipulation",
          "Event Handling",
        ],
      },
      {
        title: "Week 11: Advanced JavaScript",
        details: [
          "ES6 Features",
          "Asynchronous JavaScript (Promises, Async/Await)",
          "JavaScript Best Practices",
        ],
      },
      {
        title: "Week 12: Introduction to React.js",
        details: [
          "Basics of React",
          "Components, Props, and State",
          "React Hooks",
        ],
      },
    ],
  },
  {
    title: "Month 4: Full Stack Development with MERN Stack",
    details: [
      {
        title: "Week 13: Node.js and Express.js",
        details: [
          "Introduction to Node.js",
          "Building RESTful APIs with Express.js",
          "Middleware and Routing",
        ],
      },
      {
        title: "Week 14: MongoDB",
        details: [
          "Introduction to NoSQL Databases",
          "CRUD Operations with MongoDB",
          "Mongoose for MongoDB",
        ],
      },
      {
        title: "Week 15: Building a Full Stack Application (Part 1)",
        details: [
          "Setting Up the Project",
          "Building the Backend with Node.js and Express.js",
          "Connecting to MongoDB",
        ],
      },
      {
        title: "Week 16: Building a Full Stack Application (Part 2)",
        details: [
          "Building the Frontend with React",
          "Integrating Frontend and Backend",
          "Authentication and Authorization",
        ],
      },
    ],
  },
  {
    title: "Month 5: Advanced MERN Stack Development",
    details: [
      {
        title: "Week 17: State Management with Redux",
        details: [
          "Introduction to Redux",
          "State Management in React",
          "Integrating Redux with React",
        ],
      },
      {
        title: "Week 18: Advanced Frontend Development",
        details: [
          "Component Libraries (Material-UI, Ant Design)",
          "Optimizing React Applications",
          "Testing React Applications",
        ],
      },
      {
        title: "Week 19: Advanced Backend Development",
        details: [
          "Advanced MongoDB Features",
          "Performance Optimization",
          "Testing Node.js Applications",
        ],
      },
      {
        title: "Week 20: Deployment and DevOps",
        details: [
          "Deploying MERN Applications",
          "Introduction to DevOps",
          "Continuous Integration and Continuous Deployment (CI/CD)",
        ],
      },
    ],
  },
  {
    title: "Month 6: Career Development and Final Project",
    details: [
      {
        title: "Week 21: Resume Building",
        details: [
          "Crafting an Effective Resume",
          "Highlighting Skills and Projects",
          "Tailoring Resumes for Job Applications",
        ],
      },
      {
        title: "Week 22: LinkedIn Profile Enhancement",
        details: [
          "Building a Professional LinkedIn Profile",
          "Networking Strategies",
          "Leveraging LinkedIn for Job Search",
        ],
      },
      {
        title: "Week 23: GitHub Profile Building",
        details: [
          "Creating a Strong GitHub Profile",
          "Showcasing Projects",
          "Contributing to Open Source",
        ],
      },
      {
        title: "Week 24: Final Project and Presentation",
        details: [
          "Working on a Capstone Project",
          "Presentation and Demo of the Project",
          "Feedback and Improvements",
        ],
      },
    ],
  },
];

export default Our6MonthIntern;
