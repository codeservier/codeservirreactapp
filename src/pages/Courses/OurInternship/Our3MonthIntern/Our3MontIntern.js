import React from "react";
import internimg from "../../../../assets/courses/internship/internimg2.jpg";
import Logobtn from "../../../../components/Logobtn/Logobtn";
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
const Our3MontIntern = () => {
  const navigate = useNavigate();
  return (
    <>
           <Logobtn/>

      <div className="relative z-50">
        <Navbar />
      </div>
      <div className="bg-gray-100 p-8">
        <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden  mt-[10rem]">
          <div className="relative">
            <img
              src={internimg} // Replace with your image path or URL
              alt="Internship Program"
              className="w-full h-64 object-cover "
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
    title: "Week 1-2: Introduction to C++",
    details: [
      "Week 1: Basics of C++",
      "Day 1: Introduction to Programming, Installing IDEs",
      "Day 2: Basic Syntax, Data Types, Variables",
      "Day 3: Operators and Expressions",
      "Day 4: Control Structures: If-else, Switch-case",
      "Day 5: Loops: For, While, Do-while",
      "Day 6: Functions: Declaration, Definition, and Calling",
      "Day 7: Recap and Q&A",
      "Week 2: Advanced C++ Concepts",
      "Day 1: Arrays and Strings",
      "Day 2: Pointers and References",
      "Day 3: Dynamic Memory Allocation",
      "Day 4: Structures and Unions",
      "Day 5: File Handling",
      "Day 6: Introduction to OOP: Classes and Objects",
      "Day 7: Recap and Q&A",
    ],
  },
  {
    title: "Week 3-4: Object-Oriented Programming in C++",
    details: [
      "Week 3: OOP Fundamentals",
      "Day 1: Constructors and Destructors",
      "Day 2: Inheritance",
      "Day 3: Polymorphism: Function Overloading, Operator Overloading",
      "Day 4: Polymorphism: Virtual Functions",
      "Day 5: Abstraction and Encapsulation",
      "Day 6: Templates: Function and Class Templates",
      "Day 7: Recap and Q&A",
      "Week 4: Advanced OOP Concepts",
      "Day 1: Exception Handling",
      "Day 2: Standard Template Library (STL): Introduction and Importance",
      "Day 3: STL Containers: Vector, List, Deque",
      "Day 4: STL Containers: Set, Map, Stack, Queue",
      "Day 5: Iterators and Algorithms",
      "Day 6: Lambda Expressions",
      "Day 7: Recap and Q&A",
    ],
  },
  {
    title: "Week 5-6: Data Structures Basics",
    details: [
      "Week 5: Fundamental Data Structures",
      "Day 1: Introduction to Data Structures, Complexity Analysis",
      "Day 2: Arrays and Linked Lists",
      "Day 3: Stacks: Implementation and Applications",
      "Day 4: Queues: Implementation and Applications",
      "Day 5: Recursion and Recursive Algorithms",
      "Day 6: Recap and Q&A",
      "Day 7: Mini Project Assignment",
      "Week 6: Trees and Graphs",
      "Day 1: Introduction to Trees, Binary Trees",
      "Day 2: Binary Search Trees",
      "Day 3: AVL Trees and Balanced Trees",
      "Day 4: Graphs: Representation and Traversal (BFS, DFS)",
      "Day 5: Graph Algorithms: Shortest Path, MST",
      "Day 6: Recap and Q&A",
      "Day 7: Project Checkpoint",
    ],
  },
  {
    title: "Week 7-8: Advanced Data Structures",
    details: [
      "Week 7: Heaps and Hashing",
      "Day 1: Heaps: Implementation and Applications",
      "Day 2: Priority Queues",
      "Day 3: Hash Tables: Implementation and Collision Resolution",
      "Day 4: Hashing Applications",
      "Day 5: Tries: Implementation and Applications",
      "Day 6: Recap and Q&A",
      "Day 7: Project Checkpoint",
      "Week 8: Advanced Trees and Graphs",
      "Day 1: Segment Trees",
      "Day 2: Fenwick Trees",
      "Day 3: Disjoint Set Union (DSU)",
      "Day 4: Advanced Graph Algorithms: Floyd-Warshall, Dijkstra",
      "Day 5: Network Flow Algorithms",
      "Day 6: Recap and Q&A",
      "Day 7: Project Checkpoint",
    ],
  },
  {
    title: "Week 9-10: Algorithms and Problem Solving",
    details: [
      "Week 9: Sorting and Searching Algorithms",
      "Day 1: Sorting Algorithms: Bubble, Selection, Insertion",
      "Day 2: Advanced Sorting: Merge Sort, Quick Sort",
      "Day 3: Searching Algorithms: Linear, Binary",
      "Day 4: Pattern Matching Algorithms",
      "Day 5: Backtracking Algorithms",
      "Day 6: Recap and Q&A",
      "Day 7: Competitive Programming Problems",
      "Week 10: Dynamic Programming and Greedy Algorithms",
      "Day 1: Introduction to Dynamic Programming (DP)",
      "Day 2: Classic DP Problems (Knapsack, LCS)",
      "Day 3: Advanced DP Problems",
      "Day 4: Greedy Algorithms: Introduction and Problems",
      "Day 5: Greedy Algorithms: Advanced Problems",
      "Day 6: Recap and Q&A",
      "Day 7: Competitive Programming Problems",
    ],
  },
  {
    title: "Week 11-12: Preparation for Placements",
    details: [
      "Week 11: Mock Interviews and Coding Tests",
      "Day 1: Resume Building Workshop",
      "Day 2: Mock Technical Interviews",
      "Day 3: Mock Coding Tests",
      "Day 4: Peer Code Reviews",
      "Day 5: Behavioral Interview Preparation",
      "Day 6: Recap and Q&A",
      "Day 7: Project Finalization",
      "Week 12: Final Project and Review",
      "Day 1: Final Project Presentations",
      "Day 2: Project Feedback and Improvements",
      "Day 3: Individual Assessments",
      "Day 4: Group Discussions and Problem Solving",
      "Day 5: Industry Expert Talks and Networking",
      "Day 6: Recap and Q&A",
      "Day 7: Program Conclusion and Certification",
    ],
  },
];

export default Our3MontIntern;
