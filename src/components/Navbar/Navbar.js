import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import IsOpenMenu from "../isOpenMenu/isOpenMenu";

const Navbar = () => {
  const navigate = useNavigate();

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
                style={{background:"red"}}
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
        {isOpen && (IsOpenMenu({isOpen})
)}

      </div>
      {/* Render menu for larger screens */}
      {/* Render menu for larger screens */}
      {/* Render menu for larger screens */}
      {/* Render menu for larger screens */}


      <div className="hidden md:block flex flex-row">
        <ul className="flex justify-between items-center space-x-4">
          <li>
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-500 transition duration-300 font-semibold uppercase bg-white rounded-full px-3 py-1"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Services"
              className="text-gray-700 hover:text-blue-500 transition duration-300 font-semibold uppercase bg-white rounded-full px-3 py-1"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className="text-gray-700 hover:text-blue-500 transition duration-300 font-semibold uppercase bg-white rounded-full px-3 py-1"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Portfolio"
              className="text-gray-700 hover:text-blue-500 transition duration-300 font-semibold uppercase bg-white rounded-full px-3 py-1"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/ContactPage"
              className="text-gray-700 hover:text-blue-500 transition duration-300 font-semibold uppercase bg-white rounded-full px-3 py-1"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/Blog"
              className="text-gray-700 hover:text-blue-500 transition duration-300 font-semibold uppercase bg-white rounded-full px-3 py-1"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/Careers"
              className="text-gray-700 hover:text-blue-500 transition duration-300 font-semibold uppercase bg-white rounded-full px-3 py-1"
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              to="/FAQ"
              className="text-gray-700 hover:text-blue-500 transition duration-300 font-semibold uppercase bg-white rounded-full px-3 py-1"
            >
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
