import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTimes } from "@fortawesome/free-solid-svg-icons"; // Import faTimes here
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../config/config";

const baseMenuData = [
  { to: "/", label: "Home" },
  { to: "/Services", label: "Services" },
  { to: "/About", label: "About" },
  { to: "/ContactPage", label: "Contact" },
  { to: "/FAQ", label: "FAQ" },
  { to: "/Courses", label: "Courses" },
  { to: "/InternshipForm", label: "Internship" },
  { to: "/TermAndCondition", label: "Term And Condition" },
  { to: "/PrivacyandPolicy", label: "Privacy & Policy" },
];

const IsOpenMenu = ({ isOpen, authData, onClose }) => {
  const navigate = useNavigate();
  const [menuData, setMenuData] = useState(baseMenuData);

  useEffect(() => {
    const updatedMenuData = [...baseMenuData];
    if (authData && authData !== null && authData.role === "admin") {
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



  const handleMenuItemClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className={`fixed top-24 left-0 w-full h-full bg-gray-100 z-50 overflow-y-auto ${isOpen ? 'block animate-fadeIn' : 'hidden animate-fadeOut'}`}>
      <div className="rounded-lg p-4 flex flex-col items-center justify-center">
       
        <ul className="flex flex-col space-y-4 pt-4 w-full h-full">
          {menuData.map((item, index) => (
            <li key={index} className={item.highlight ? "animate-blink" : ""}>
              <Link
                to={item.to}
                onClick={handleMenuItemClick} // Handle menu item click
                className={`text-gray-700 hover:text-blue-500 transition duration-300 font-semibold uppercase w-10 bg-white rounded-full px-3 py-1 ${item.highlight ? "bg-yellow-200 text-red-500" : ""} menu-item`}
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
    </div>
  );
};

export default IsOpenMenu;
