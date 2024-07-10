import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
      { to: "/TermAndCondition", label: "Term and Condition" },
      { to: "/PrivacyandPolicy", label: "Privacy and Policy" },
    ],
  },
  { to: "/InternshipForm", label: "Internship", highlight: true },
];

const Navbar = ({ authData }) => {
  const navigate = useNavigate();
  const [menuData, setMenuData] = useState(baseMenuData);
  const [dropdownVisible, setDropdownVisible] = useState(false);

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

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-[1.5rem] hidden lg:block left-1/2 transform -translate-x-1/2 w-11/12 max-w-4xl lg:bg-white rounded-[2rem] p-5 ">
      <div className="lg:hidden">
        <ul className="flex flex-col items-center space-y-4">
          {menuData.map((item, index) => (
            <li key={index} className="w-full">
              {item.dropdown ? (
                <div className="relative w-full">
                  <button
                    onClick={() => handleLinkClick(item.to)}
                    className={`block w-full text-center font-concert text-gray-700 hover:text-blue-500 transition duration-300 font-semibold uppercase bg-white rounded-full px-3 py-1 ${
                      item.highlight ? "highlight" : ""
                    }`}
                  >
                    {item.label}
                    {item.highlight && (
                      <FontAwesomeIcon icon={faStar} className="ml-2" />
                    )}
                  </button>
                  <ul
                    className={`absolute left-0 mt-2 w-40 bg-white border shadow-lg rounded-lg py-2 ${
                      dropdownVisible ? "block" : "hidden"
                    }`}
                  >
                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                      <li key={dropdownIndex}>
                        <span
                          onClick={() => handleLinkClick(dropdownItem.to)}
                          className="font-concert text-gray-700 hover:text-blue-500 block px-4 py-2 text-sm cursor-pointer"
                        >
                          {dropdownItem.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <button
                  onClick={() => handleLinkClick(item.to)}
                  className={`block w-full text-center font-concert text-gray-700 hover:text-blue-500 transition duration-300 font-semibold uppercase bg-white rounded-full px-3 py-1 ${
                    item.highlight ? "highlight" : ""
                  }`}
                >
                  {item.label}
                  {item.highlight && (
                    <FontAwesomeIcon icon={faStar} className="ml-2" />
                  )}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden lg:block">
        <ul className="font-concert flex justify-between items-center space-x-4">
          {menuData.map((item, index) => (
            <li
              key={index}
              className={`relative ${item.dropdown ? "group" : ""}`}
              onMouseEnter={item.dropdown ? () => setDropdownVisible(true) : undefined}
              onMouseLeave={item.dropdown ? () => setDropdownVisible(false) : undefined}
            >
              {item.dropdown ? (
                <div className="relative">
                  <span
                    onClick={() => handleLinkClick(item.to)}
                    className={`font-concert text-gray-700 hover:text-blue-500 transition duration-300 font-semibold uppercase bg-white rounded-full px-3 py-1 ${
                      item.highlight ? "highlight" : ""
                    }`}
                  >
                    {item.label}
                    {item.highlight && (
                      <FontAwesomeIcon icon={faStar} className="ml-2" />
                    )}
                  </span>
                  <ul
                    className={`absolute left-0 mt-2 w-40 bg-white border shadow-lg rounded-lg py-2 ${
                      dropdownVisible ? "block" : "hidden"
                    }`}
                  >
                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                      <li key={dropdownIndex}>
                        <span
                          onClick={() => handleLinkClick(dropdownItem.to)}
                          className="font-concert text-gray-700 hover:text-blue-500 block px-4 py-2 text-sm cursor-pointer"
                        >
                          {dropdownItem.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <span
                  onClick={() => handleLinkClick(item.to)}
                  className={`font-concert text-gray-700 hover:text-blue-500 transition duration-300 font-semibold uppercase bg-white rounded-full px-3 py-1 cursor-pointer ${
                    item.highlight ? "highlight" : ""
                  }`}
                >
                  {item.label}
                  {item.highlight && (
                    <FontAwesomeIcon icon={faStar} className="ml-2" />
                  )}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
