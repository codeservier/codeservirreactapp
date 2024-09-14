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
  { to: "/Contact", label: "Contact" },
  { to: "/FAQ", label: "FAQ" },
  { to: "/Courses", label: "Courses" },
  { to: "/InternshipForm", label: "Internship", highlight: true },
];

const Navbar = ({ authData }) => {
  const navigate = useNavigate();
  const [menuData, setMenuData] = useState(baseMenuData);
  const [selectedItem, setSelectedItem] = useState(null); // Track selected item
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updatedMenuData = [...baseMenuData];
    if (authData && authData.role === "admin") {
      const isAdminAdded = updatedMenuData[6].dropdown?.some((item) =>
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

  const handleLinkClick = (path, index) => {
    navigate(path);
    window.scrollTo(0, 0);
    setIsOpenMenu(false); // Close menu on link click
    setSelectedItem(index); // Set selected item
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
      className={`sticky py-4 top-0 shadow-gray-50 w-full ${
        scrolled ? " bg-primary border-b rounded-b-sm z-50 " : "bg-primary "
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
                      onClick={() => handleLinkClick(item.to, index)}
                      className={`font-concert text-white hover:text-blue-500 transition duration-300 rounded-full px-3 py-1 cursor-pointer ${
                        item.highlight ? "highlight" : ""
                      } ${
                        selectedItem === index
                          ? "border-b-4 border-white" // Apply border if selected
                          : ""
                      }`}
                    >
                      {item.label}
                      {item.highlight && (
                        <FontAwesomeIcon
                          icon={faStar}
                          className="ml-2 text-red-700 bg-red-500"
                        />
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
                            onClick={() =>
                              handleLinkClick(dropdownItem.to, index)
                            }
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
                    onClick={() => handleLinkClick(item.to, index)}
                    className={`font-concert text-white hover:border transition duration-300 rounded-full px-3 py-1 cursor-pointer ${
                      item.highlight ? "highlight" : ""
                    } ${
                      selectedItem === index
                        ? "border-b border-white" // Apply border if selected
                        : ""
                    }`}
                  >
                    {item.label}
                    {item.highlight && (
                      <FontAwesomeIcon
                        icon={faStar}
                        className="ml-2 textred text-yellow-500"
                      />
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
              <h1 className="text-lg md:text-xl ">{authData.name}</h1>
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
                <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
