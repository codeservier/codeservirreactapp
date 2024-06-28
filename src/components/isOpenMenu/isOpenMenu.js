import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {} from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";

// Define JSON data for menu items
const baseMenuData = [
  { to: "/", label: "Home" },
  { to: "/Services", label: "Services" },
  { to: "/About", label: "About" },
  { to: "/ContactPage", label: "Contact" },
  { to: "/FAQ", label: "FAQ" },
  { to: "/Courses", label: "Courses" },
  { to: "/InternshipForm", label: "Internship", },
  { to: "/TermAndCondition", label: "Term AndC ondition",  },
  { to: "/PrivacyPolicy", label: "Privacy & Policy", },
];

const IsOpenMenu = ({ isOpen, authData }) => {
  const navigate = useNavigate();
  const [menuData, setMenuData] = useState(baseMenuData);

  useEffect(() => {
    const updatedMenuData = [...baseMenuData];
    if (authData && authData !== null&&authData.role=='admin') {
      const adminMenuItems = [
        { to: "/Admin", label: "Admin" },
        { to: "/TodoCompany", label: "Finance" },
      ];

      adminMenuItems.forEach((item) => {
        if (!updatedMenuData.find((menuItem) => menuItem.to === item.to)) {
          updatedMenuData.push(item);
        }
      });
    }

    setMenuData(updatedMenuData);
  }, [authData]);

  const handleLogin = () => {
    navigate("/LoginPage"); // Use navigate function to redirect to /LoginPage
  };
  const handleSignup = () => {
    navigate("/SignUp"); // Use navigate function to redirect to /LoginPage
  };
  return (
    <div className="">
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

            <li className="flex justify-center mt-6">
              {" "}
              {/* Centering the buttons */}
              <div className="space-x-4 p-2 rounded-3xl md:mt-0 shadow-lg bg-white shadow-gray-500">
                <button
                  onClick={handleLogin}
                  className="bg-[#21c4ff] text-white text-lg md:text-1xl px-6 md:px-6 py-1 rounded-full hover:translate-y-1 hover:bg-[#ffd739] transition duration-300 shadow-lg shadow-gray-500"
                >
                  Login
                </button>
                <button
                  onClick={handleSignup}
                  className="bg-[#ff8800] text-white text-lg md:text-1xl px-6 md:px-3 py-1 rounded-full hover:translate-y-1 hover:bg-[#ffd739] transition duration-300 shadow-lg shadow-gray-500"
                >
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
