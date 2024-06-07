import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed text-bold top-[3.5rem] left-1/2 transform -translate-x-1/2 w-11/12 max-w-4xl bg-white rounded-[2rem] shadow-lg p-5">
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
    </nav>
  );
};

export default Navbar;
