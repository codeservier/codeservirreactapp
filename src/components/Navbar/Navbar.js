import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed text-bold top-[3.5rem] left-1/2 transform -translate-x-1/2 w-11/12 max-w-4xl md:bg-white rounded-[2rem] p-5 md:shadow-lg">
      {/* Conditionally render content based on screen size */}
      <div className="block md:hidden">
        {/* Render toggle button for small screens */}
        <button
          className="focus:outline-none absolute top-0 right-0 p-3"
          onClick={toggleNavbar}
        >
          <svg
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
        {/* Render menu for small screens */}
        {isOpen && (
          <div className="bg-gray-100 rounded-lg p-4 shadow-md">
            <ul className="md:flex justify-between items-center space-x-4 pt-4">
              <li>
                <a
                  href="#home"
                  className="text-gray-700 hover:text-blue-500 transition duration-300 font-semibold uppercase bg-white rounded-full px-3 py-1"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-700 hover:text-blue-500 transition duration-300 font-semibold uppercase bg-white rounded-full px-3 py-1"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-blue-500 transition duration-300 font-semibold uppercase bg-white rounded-full px-3 py-1"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-700 hover:text-blue-500 transition duration-300 font-semibold uppercase bg-white rounded-full px-3 py-1"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-blue-500 transition duration-300 font-semibold uppercase bg-white rounded-full px-3 py-1"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-gray-700 hover:text-blue-500 transition duration-300 font-semibold uppercase bg-white rounded-full px-3 py-1"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="text-gray-700 hover:text-blue-500 transition duration-300 font-semibold uppercase bg-white rounded-full px-3 py-1"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-700 hover:text-blue-500 transition duration-300 font-semibold uppercase bg-white rounded-full px-3 py-1"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      {/* Render menu for larger screens */}
      <div className="hidden md:block">
        <ul className="flex justify-between items-center space-x-4">
          <li>
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-500 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-500 transition duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-500 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="text-gray-700 hover:text-blue-500 transition duration-300"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-500 transition duration-300"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className="text-gray-700 hover:text-blue-500 transition duration-300"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#careers"
              className="text-gray-700 hover:text-blue-500 transition duration-300"
            >
              Careers
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="text-gray-700 hover:text-blue-500 transition duration-300"
            >
              FAQ
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
