import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import IsOpenMenu from "../isOpenMenu/isOpenMenu";

// JSON data for menu items
const baseMenuData = [
  { to: "/", label: "Home" },
  { to: "/Services", label: "Services" },
  { to: "/About", label: "About" },
  { to: "/ContactPage", label: "Contact" },
  { to: "/FAQ", label: "FAQ" },
  { to: "/Courses", label: "Courses" },
  {
    label: "More",
    dropdown: [
      { to: "/TermAndCondition", label: "Term and condition" },
      { to: "/PrivacyandPolicy", label: "Privacy and Policy" },
    ],
  },
  { to: "/InternshipForm", label: "Internship", highlight: true },
];

const Navbar = ({ authData }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [menuData, setMenuData] = useState(baseMenuData);

  useEffect(() => {
    const updatedMenuData = [...baseMenuData];

    if (authData && authData !== null && authData.role === "admin") {
      // Check if admin menu items are already added
      const isAdminAdded = updatedMenuData[6].dropdown.some((item) =>
        ["/Admin", "/TodoCompany"].includes(item.to)
      );

      if (!isAdminAdded) {
        const adminMenuItems = [
          { to: "/Admin", label: "Admin" },
          { to: "/TodoCompany", label: "Finance" },
        ];

        updatedMenuData[6].dropdown.push(...adminMenuItems); // Add admin items to the dropdown under "More"
      }
    }

    setMenuData(updatedMenuData);
  }, [authData]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .dropdown-menu {
            animation: fadeIn 0.3s ease-out;
          }

          .dropdown-menu li {
            transition: all 0.3s ease-out;
          }

          .dropdown-menu li:hover {
            background-color: #f3f4f6;
          }
        `}
      </style>
      <nav className="fixed top-[3.5rem] left-1/2 transform -translate-x-1/2 w-11/12 max-w-4xl md:bg-white rounded-[2rem] p-5 md:shadow-lg">
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
            <IsOpenMenu isOpen={isOpen} authData={authData} />
          </div>
        </div>

        <div className="hidden md:block">
          <ul className="font-concert flex justify-between items-center space-x-4 ">
            {menuData.map((item, index) => (
              <li
                key={index}
                className={`relative ${item.dropdown ? "group" : ""}`}
                onMouseEnter={item.dropdown ? handleMouseEnter : undefined}
                onMouseLeave={item.dropdown ? handleMouseLeave : undefined}
              >
                {item.dropdown ? (
                  <>
                    <span
                      className={`font-concert text-gray-700 hover:text-blue-500 transition duration-300 font-semibold uppercase bg-white rounded-full px-3 py-1 ${
                        item.highlight ? "highlight" : ""
                      }`}
                    >
                      {item.label}
                    </span>
                    <ul
                      className={`absolute left-0 mt-2 w-40 bg-[#ffffff] border shadow-lg rounded-lg py-2 ${
                        isOpen ? "dropdown-menu" : "hidden"
                      }`}
                    >
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <li key={dropdownIndex}>
                          <Link
                            to={dropdownItem.to}
                            className="font-concert text-gray-700 hover:text-blue-500 block px-4 py-2 text-sm"
                          >
                            {dropdownItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
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
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
