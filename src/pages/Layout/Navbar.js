import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/svgfiles/logo.svg";
import { auth } from "../../config/config.js";

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
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updatedMenuData = [...baseMenuData];

    if (authData && authData.role === "admin") {
      const isAdminAdded = updatedMenuData[6].dropdown.some((item) =>
        ["/Admin", "/TodoCompany"].includes(item.to)
      );

      if (!isAdminAdded) {
        const adminMenuItems = [
          { to: "/Admin", label: "Admin" },
          { to: "/TodoCompany", label: "Finance" },
        ];

        updatedMenuData[6].dropdown.push(...adminMenuItems);
      }
    }

    setMenuData(updatedMenuData);
  }, [authData]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
    setIsOpenMenu(false); // Close menu on link click
  };

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        navigate("/LoginPage");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  const handleLogin = () => {
    navigate("/LoginPage");
  };

  const handleSignup = () => {
    navigate("/SignUp");
  };

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div
      className={`sticky py-4 top-0  shadow-gray-50  w-full ${
        scrolled ? " bg-black z-50 " : "bg-black "
      }`}
    >
      <div className="flex container w-full mx-auto justify-between items-center px-4">
        <div className="flex items-center space-x-2 md:space-x-2">
          <img src={logo} alt="Logo" className="h-9 md:h-12" />
        </div>

        <div className="hidden md:flex flex-grow justify-center items-center space-x-4">
          <ul className="flex space-x-4">
            {menuData.map((item, index) => (
              <li
                key={index}
                className={`relative ${item.dropdown ? "group" : ""}`}
                onMouseEnter={
                  item.dropdown ? () => setDropdownVisible(true) : undefined
                }
                onMouseLeave={
                  item.dropdown ? () => setDropdownVisible(false) : undefined
                }
              >
                {item.dropdown ? (
                  <div className="relative">
                    <span
                      onClick={() => handleLinkClick(item.to)}
                      className={`font-concert text-white hover:text-blue-500 transition duration-300 font-semibold uppercase rounded-full px-3 py-1 cursor-pointer ${
                        item.highlight ? "highlight" : ""
                      }`}
                    >
                      {item.label}
                      {item.highlight && (
                        <FontAwesomeIcon icon={faStar} className="ml-2 text-red-700 bg-red-500" />
                      )}
                    </span>
                    <ul
                      className={`absolute left-0 mt-2 w-40 bg-black border shadow-lg rounded-lg py-2 ${
                        dropdownVisible ? "block" : "hidden"
                      }`}
                    >
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <li key={dropdownIndex}>
                          <span
                            onClick={() => handleLinkClick(dropdownItem.to)}
                            className="font-concert text-white hover:text-blue-500 block px-4 py-2 text-sm cursor-pointer"
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
                    className={`font-concert text-white hover:text-blue-500 transition duration-300 font-semibold uppercase rounded-full px-3 py-1 cursor-pointer ${
                      item.highlight ? "highlight" : ""
                    }`}
                  >
                    {item.label}
                    {item.highlight && (
                      <FontAwesomeIcon icon={faStar} className="ml-2 textred bg-blue-600" />
                    )}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          {authData && authData.name ? (
            <div className="hidden md:flex items-center space-x-2">
              <h1 className="text-lg md:text-xl font-semibold">
                {authData.name}
              </h1>
              <button
                onClick={handleLogout}
                className="bg-[#21c4ff] text-white text-lg px-4 md:px-6 py-1 rounded-full hover:scale-105 hover:bg-black transition duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={handleLogin}
                className="hidden lg:block  text-white text-lg border-2 border-white md:text-xl px-4 md:px-6 py-1 rounded-full hover:scale-105 hover:border-none hover:bg-[#ff8c33] transition duration-300"
              >
                Login
              </button>
              <button
                className="lg:hidden text-gray-700 pr-4 focus:outline-none"
                onClick={toggleMenu}
              >
                <FontAwesomeIcon
                  icon={faBars}
                  className="h-6 w-6"
                />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 z-50 left-0 w-full h-full bg-black bg-opacity-50 transition-transform duration-300 ${
          isOpenMenu ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <div className="bg-[orange] p-5">
        <button
                className="lg:hidden text-gray-700 pr-4 focus:outline-none absolute top-5 right-0 z-50"
                onClick={toggleMenu}
              >
                <FontAwesomeIcon
                  icon={faTimes}
                  className="h-6 w-6 "
                />
              </button>
          <ul className="flex flex-col items-center space-y-4">
            {menuData.map((item, index) => (
              <li key={index} className="w-full">
                {item.dropdown ? (
                  <div className="relative w-full">
                    <button
                      onClick={() => handleLinkClick(item.to)}
                      className={`block w-full text-center font-concert text-white hover:text-blue-500 transition duration-300 font-semibold uppercase rounded-full px-3 py-1 ${
                        item.highlight ? "highlight" : ""
                      }`}
                    >
                      {item.label}
                      {item.highlight && (
                        <FontAwesomeIcon icon={faStar} className="ml-2" />
                      )}
                    </button>
                    <ul className="absolute left-0 mt-2 w-full bg-white border shadow-lg rounded-lg py-2">
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
                    className={`block w-full text-center font-concert text-white hover:text-blue-500 transition duration-300 font-semibold uppercase rounded-full px-3 py-1 ${
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
      </div>
    </div>
  );
};

export default Navbar;
