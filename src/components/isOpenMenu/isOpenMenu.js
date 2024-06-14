import React from "react";
import { Link } from "react-router-dom";

const IsOpenMenu = ({ isOpen }) => {
  return (
    <div>
      {isOpen && (
        <div className="bg-gray-100 rounded-lg p-4 shadow-lg flex flex-col -m-4">
          <ul className="flex flex-col space-y-4 pt-4">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-white transition duration-300 font-semibold uppercase bg-white hover:bg-blue-500 rounded-full px-3 py-2 shadow-md hover:shadow-lg"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Services"
                className="text-gray-700 hover:text-white transition duration-300 font-semibold uppercase bg-white hover:bg-blue-500 rounded-full px-3 py-2 shadow-md hover:shadow-lg"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="text-gray-700 hover:text-white transition duration-300 font-semibold uppercase bg-white hover:bg-blue-500 rounded-full px-3 py-2 shadow-md hover:shadow-lg"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Portfolio"
                className="text-gray-700 hover:text-white transition duration-300 font-semibold uppercase bg-white hover:bg-blue-500 rounded-full px-3 py-2 shadow-md hover:shadow-lg"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/ContactPage"
                className="text-gray-700 hover:text-white transition duration-300 font-semibold uppercase bg-white hover:bg-blue-500 rounded-full px-3 py-2 shadow-md hover:shadow-lg"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/Blog"
                className="text-gray-700 hover:text-white transition duration-300 font-semibold uppercase bg-white hover:bg-blue-500 rounded-full px-3 py-2 shadow-md hover:shadow-lg"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/Careers"
                className="text-gray-700 hover:text-white transition duration-300 font-semibold uppercase bg-white hover:bg-blue-500 rounded-full px-3 py-2 shadow-md hover:shadow-lg"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="/FAQ"
                className="text-gray-700 hover:text-white transition duration-300 font-semibold uppercase bg-white hover:bg-blue-500 rounded-full px-3 py-2 shadow-md hover:shadow-lg"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default IsOpenMenu;
