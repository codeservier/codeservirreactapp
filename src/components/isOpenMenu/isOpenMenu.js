import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

// Define JSON data for menu items
const menuData = [
  { to: "/", label: "Home" },
  { to: "/Services", label: "Services" },
  { to: "/About", label: "About" },
  { to: "/Portfolio", label: "Portfolio" },
  { to: "/ContactPage", label: "Contact" },
  { to: "/Blog", label: "Blog" },
  { to: "/Careers", label: "Careers" },
  { to: "/FAQ", label: "FAQ" }
];

const IsOpenMenu = ({ isOpen }) => {
  return (
    <div className="" >
      {isOpen && (
        <div className="bg-gray-100 rounded-lg p-4 shadow-lg flex flex-col -m-4">
          <ul className="flex flex-col space-y-4 pt-4">
            <div className="flex justify-between items-center px-4 md:px-10">
              <div className="flex flex-col items-center">
                <img src={logo} alt="Logo" className="h-20 " />
                <h2 className="text-[#ffb907] text-lg md:text-2xl mt-[-1.5rem] md:mt-[-3.5rem]">
                  code<span className="text-[#1dceff]">servir.com</span>
                </h2>
              </div>
            </div>

            {/* Render menu items dynamically */}
            {menuData.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  className="text-gray-700 hover:text-white transition duration-300 font-semibold uppercase bg-white hover:bg-blue-500 rounded-full px-3 py-2 shadow-md hover:shadow-lg"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li className="flex justify-center mt-6"> {/* Centering the buttons */}
              <div className="space-x-4 p-2 rounded-3xl md:mt-0 shadow-lg bg-white shadow-gray-500">
                <button className="bg-[#21c4ff] text-white text-lg md:text-1xl px-6 md:px-6 py-1 rounded-full hover:translate-y-1 hover:bg-[#ffd739] transition duration-300 shadow-lg shadow-gray-500">
                  Login
                </button>
                <button className="bg-[#ff8800] text-white text-lg md:text-1xl px-6 md:px-3 py-1 rounded-full hover:translate-y-1 hover:bg-[#ffd739] transition duration-300 shadow-lg shadow-gray-500">
                  Register
                </button>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default IsOpenMenu;