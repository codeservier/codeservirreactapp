import React, { useState,useEffect } from "react";
import { FaClipboard, FaClipboardCheck } from "react-icons/fa";
import Logobtn from "../../../../components/Logobtn/Logobtn";
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";


const cppTutorialData1 = [
  { id: "overview", heading: "Overview of C++" },
  { id: "basics", heading: "Basics of C++" },
  { id: "variables", heading: "Variables and Constants in C++" },
  // Add more sections with IDs as needed
];

const cppTutorialData = [
  {
    heading: "Overview of C++",
    content: {
      intro:
        "C++ is the most used and most popular programming language developed by Bjarne Stroustrup. It is a high-level and object-oriented programming language used for large applications, game development, and operating system programming. This tutorial will cover all basic to advanced topics of C++.",
      example: ``,
      questions: [],
    },
  },
  {
    heading: "Basics of C++",
    content: {
      intro:
        "C++ is a cross-platform programming language used to create high-performance applications. It was developed as an extension of the C language, providing high-level control over system resources and memory.",
      example: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!";
    return 0;
}`,
      questions: [
        "What is C++?",
        "Who created C++?",
        "How does C++ differ from C?",
      ],
    },
  },
  {
    heading: "Variables and Constants in C++",
    content: {
      intro:
        "Variables and constants are fundamental in C++ for storing data that can be manipulated during program execution.",
      example: `#include <iostream>
using namespace std;

int main() {
    int a = 10;
    const float pi = 3.14;
    cout << "Value of a: " << a << endl;
    cout << "Value of pi: " << pi << endl;
    return 0;
}`,
      questions: [
        "What is a variable?",
        "What is a constant?",
        "How do you declare a variable in C++?",
      ],
    },
  },
  // Add other sections similarly...
  {
    heading: "Data Types and Literals in C++",
    content: {
      intro:
        "C++ supports various data types such as int, float, char, and more. Literals are fixed values used in the code.",
      example: ``,
      questions: [],
    },
  },
  {
    heading: "Operators in C++",
    content: {
      intro:
        "C++ provides a rich set of operators for arithmetic, comparison, logical operations, etc.",
      example: ``,
      questions: [],
    },
  },
  {
    heading: "Input/Output in C++",
    content: {
      intro: "Input/Output operations in C++ are performed using streams.",
      example: ``,
      questions: [],
    },
  },
  {
    heading: "Control Statements in C++",
    content: {
      intro:
        "Control statements like if-else, switch, loops control the flow of execution in a C++ program.",
      example: ``,
      questions: [],
    },
  },
  {
    heading: "Functions in C++",
    content: {
      intro:
        "Functions are blocks of code that perform specific tasks and can be called from other parts of the program.",
      example: `#include <iostream>
using namespace std;

int add(int a, int b) {
    return a + b;
}

int main() {
    int sum = add(10, 20);
    cout << "Sum: " << sum;
    return 0;
}`,
      questions: [
        "What is a function in C++?",
        "How do you define a function?",
        "What are the benefits of using functions?",
      ],
    },
  },
  {
    heading: "Pointers and References in C++",
    content: {
      intro:
        "Pointers and references are used for memory management and manipulation.",
      example: ``,
      questions: [],
    },
  },
  {
    heading: "Arrays in C++",
    content: {
      intro:
        "Arrays are collections of elements of the same type stored in contiguous memory locations.",
      example: ``,
      questions: [],
    },
  },
  {
    heading: "Strings in C++",
    content: {
      intro: "Strings are sequences of characters used for text manipulation.",
      example: ``,
      questions: [],
    },
  },
  {
    heading: "Structures and Union in C++",
    content: {
      intro:
        "Structures and unions are user-defined data types that allow grouping of variables of different types.",
      example: ``,
      questions: [],
    },
  },
  {
    heading: "Dynamic Memory Management in C++",
    content: {
      intro:
        "Dynamic memory management in C++ is done using pointers and operators like new and delete.",
      example: ``,
      questions: [],
    },
  },
  {
    heading: "Object-Oriented Programming in C++",
    content: {
      intro:
        "C++ supports object-oriented programming, including concepts such as classes, objects, inheritance, polymorphism, and encapsulation.",
      example: `#include <iostream>
using namespace std;

class Dog {
public:
    void bark() {
        cout << "Woof!";
    }
};

int main() {
    Dog myDog;
    myDog.bark();
    return 0;
}`,
      questions: [
        "What is a class?",
        "What is an object?",
        "Explain inheritance in C++.",
      ],
    },
  },
  {
    heading: "Encapsulation and Abstraction in C++",
    content: {
      intro:
        "Encapsulation and abstraction are fundamental principles of object-oriented programming.",
      example: ``,
      questions: [],
    },
  },
  {
    heading: "Polymorphism in C++",
    content: {
      intro:
        "Polymorphism allows functions and operators to behave differently based on the types of their arguments.",
      example: ``,
      questions: [],
    },
  },
  {
    heading: "Function Overloading in C++",
    content: {
      intro:
        "Function overloading allows multiple functions with the same name but different parameters.",
      example: ``,
      questions: [],
    },
  },
  {
    heading: "Operator Overloading in C++",
    content: {
      intro:
        "Operator overloading allows custom definitions for operators to work with user-defined data types.",
      example: ``,
      questions: [],
    },
  },
  {
    heading: "Inheritance in C++",
    content: {
      intro:
        "Inheritance allows the creation of new classes based on existing classes, promoting code reuse.",
      example: ``,
      questions: [],
    },
  },
  {
    heading: "Virtual Functions in C++",
    content: {
      intro: "Virtual functions enable dynamic polymorphism in C++.",
      example: ``,
      questions: [],
    },
  },
  {
    heading: "Exception Handling in C++",
    content: {
      intro:
        "Exception handling provides a way to manage errors and exceptional conditions in C++.",
      example: ``,
      questions: [],
    },
  },
  {
    heading: "Files and Streams in C++",
    content: {
      intro:
        "Files and streams handle file input and output operations in C++.",
      example: ``,
      questions: [],
    },
  },
  {
    heading: "Templates in C++",
    content: {
      intro:
        "Templates enable generic programming in C++, allowing functions and classes to operate with any data type.",
      example: ``,
      questions: [],
    },
  },
  {
    heading: "STL in C++",
    content: {
      intro:
        "The Standard Template Library (STL) provides a set of common classes and functions, such as algorithms, iterators, and containers.",
      example: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> myVector = {1, 2, 3, 4, 5};
    for (int i : myVector) {
        cout << i << " ";
    }
    return 0;
}`,
      questions: [
        "What is the C++ Standard Library?",
        "What are some common containers in the Standard Library?",
        "How do iterators work in C++?",
      ],
    },
  },
  {
    heading: "Iterators in C++",
    content: {
      intro:
        "Iterators are used to traverse through the elements of a container in the STL.",
      example: ``,
      questions: [],
    },
  },
  {
    heading: "Preprocessors in C++",
    content: {
      intro:
        "Preprocessor directives are used to define macros and include files before the compilation of the program.",
      example: ``,
      questions: [],
    },
  },
  {
    heading: "Namespace in C++",
    content: {
      intro:
        "Namespaces are used to organize code into logical groups and prevent name conflicts.",
      example: ``,
      questions: [],
    },
  },
  {
    heading: "Advanced C++",
    content: {
      intro:
        "Advanced topics in C++ include template metaprogramming, move semantics, and more.",
      example: ``,
      questions: [],
    },
  },
  {
    heading: "C vs C++",
    content: {
      intro:
        "C is a procedural programming language, while C++ is a multi-paradigm language that supports both procedural and object-oriented programming.",
      example: ``,
      questions: [],
    },
  },
  {
    heading: "C++ vs Java",
    content: {
      intro:
        "C++ is a compiled language with manual memory management, whereas Java is an interpreted language with automatic garbage collection.",
      example: ``,
      questions: [],
    },
  },
  {
    heading: "Competitive Programming in C++",
    content: {
      intro:
        "C++ is widely used in competitive programming due to its performance and rich standard library.",
      example: ``,
      questions: [],
    },
  },
  {
    heading: "Interview Questions in C++",
    content: {
      intro:
        "Common interview questions on C++ cover basics, OOP concepts, STL, and advanced topics.",
      example: ``,
      questions: [],
    },
  },
];

const Cpp = () => {
  const [selectedHeading, setSelectedHeading] = useState(0); // Initialize with 0 for "Overview of C++"
  const [copied, setCopied] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleHeadingClick = (index) => {
    setSelectedHeading(index);
    if (window.innerWidth < 768) {
      setSidebarOpen(false); // Close sidebar on small screens when a menu item is clicked
    }
    setCopied(false); // Reset copied state when changing section
  };

  const handleCopyClick = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    // Close sidebar on larger screens initially
    if (window.innerWidth >= 768) {
      setSidebarOpen(false);
    }
  }, []);

  return (
    <>
               <Logobtn/>

      <div className="relative z-50">
        <Navbar />
      </div>
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 md:pt-[10rem] pt-[6rem]">
        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 rounded-md bg-gray-200 text-gray-800"
        >
          {sidebarOpen ? "Close" : "Menu"}
        </button>
        <nav
          className={`w-full md:w-1/4 bg-gray-200 p-4 ${
            sidebarOpen ? "block" : "hidden md:block"
          }`}
        >
          <ul>
            {cppTutorialData.map((section, index) => (
              <li key={index} className="mb-2">
                <button
                  onClick={() => handleHeadingClick(index)}
                  className={`text-left w-full text-lg font-semibold ${
                    selectedHeading === index ? "text-blue-600" : "text-gray-800 hover:underline"
                  }`}
                >
                  {section.heading}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <main className="w-full md:w-3/4 p-8 bg-white shadow-md">
          <div>
            <h1 className="text-3xl font-bold mb-4 text-blue-700 animate-fadeIn">
              {cppTutorialData[selectedHeading].heading}
            </h1>
            <div className="text-lg mb-4 animate-fadeIn">
              <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
              <p>{cppTutorialData[selectedHeading].content.intro}</p>
            </div>
            {cppTutorialData[selectedHeading].content.example && (
              <div className="text-lg mb-4 animate-fadeIn">
                <h2 className="text-2xl font-semibold mb-2">Example</h2>
                <pre className="bg-gray-100 p-4 rounded-lg relative">
                  <code>
                    {cppTutorialData[selectedHeading].content.example}
                  </code>
                  <button
                    onClick={() =>
                      handleCopyClick(
                        cppTutorialData[selectedHeading].content.example
                      )
                    }
                    className="absolute top-2 right-2 text-blue-600"
                  >
                    {copied ? <FaClipboardCheck /> : <FaClipboard />}
                  </button>
                </pre>
              </div>
            )}
            {cppTutorialData[selectedHeading].content.questions.length > 0 && (
              <div className="text-lg animate-fadeIn">
                <h2 className="text-2xl font-semibold mb-2">Questions</h2>
                <ul className="list-disc ml-6">
                  {cppTutorialData[selectedHeading].content.questions.map(
                    (question, index) => (
                      <li key={index}>{question}</li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Cpp;