import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import IsOpenMenu from "../isOpenMenu/isOpenMenu";

// JSON data for menu items
const menuData = [
  { to: "/", label: "Home" },
  { to: "/Services", label: "Services" },
  { to: "/About", label: "About" },
  { to: "/ContactPage", label: "Contact" },
  { to: "/FAQ", label: "FAQ" },
  { to: "/Courses", label: "Courses" },
  { to: "/InternshipForm", label: "Our Internship", highlight: true },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <style>
        {`
          @keyframes blink {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
          }

          .blink {
            animation: blink 1s infinite;
          }

          .highlight {
            background-color: yellow;
            color: red;
          }
        `}
      </style>
      <nav className="fixed top-[3.5rem] left-1/2 transform -translate-x-1/2 w-11/12 max-w-4xl md:bg-white rounded-[2rem] p-5 md:shadow-lg " >
        <div className="block md:hidden">
          <button
            className="focus:outline-none absolute top-0 right-0 p-3"
            onClick={toggleNavbar}
          >
            <svg
              className="h-6 w-6 text-gray-700 -mt-6"
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
          <div
            className={`transition-max-height duration-[2000ms] ease-out p-8 ${
              isOpen ? "max-h-screen" : "max-h-0"
            }`}
          >
            <IsOpenMenu isOpen={isOpen} />
          </div>
        </div>

        <div className="hidden md:block">
          <ul className="font-concert flex justify-between items-center space-x-4">
            {menuData.map((item, index) => (
              <li key={index} className={item.highlight ? "blink" : ""}>
                <Link
                  to={item.to}
                  className={`font-concert text-gray-700 hover:text-blue-500 transition duration-300 font-semibold uppercase bg-white rounded-full px-3 py-1 ${
                    item.highlight ? "highlight" : ""
                  }`}
                >
                  {item.highlight && (
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                  )}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
