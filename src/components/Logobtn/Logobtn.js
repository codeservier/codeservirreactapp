import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/config.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import IsOpenMenu from "../isOpenMenu/isOpenMenu.js";

const Logobtn = ({ authData }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false); // State for IsOpenMenu toggle
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    setIsOpenMenu(!isOpenMenu); // Toggle IsOpenMenu state
  };

  return (
    <>
      <div
        className={`fixed bg-white w-full z-50 transition-colors duration-300 p-5 ${
          scrolled ? "bg-white shadow-md " : ""
        }`}
      >
        <div className="flex justify-between items-center px-4 md:px-10 lg:py-0 ">
          <div className="flex items-center space-x-2 md:space-x-4">
            <img src={logo} alt="Logo" className="h-28 md:h-24 absolute" />
       
          </div>
          <div className="flex items-center space-x-4 p-4 bg-white  rounded-lg">
            {authData && authData.name ? (
              <div className="flex items-center space-x-2">
                <h1 className="text-lg md:text-xl font-semibold">
                  {authData.name}
                </h1>
                <button
                  onClick={handleLogout}
                  className="hidden md:block bg-[#21c4ff] text-white text-lg px-4 md:px-6 py-1 rounded-full hover:scale-105 hover:bg-black transition duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={handleLogin}
                className="hidden lg:block bg-[#21c4ff] text-white text-lg md:text-xl px-4 md:px-6 py-1 rounded-full hover:scale-105 hover:bg-black transition duration-300"
              >
                Login
              </button>
            )}
            <button
              className="lg:hidden text-gray-700  pr-4 focus:outline-none"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon
                icon={isOpenMenu ? faTimes : faBars}
                className="h-6 w-6"
              />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 transition-transform duration-300 ${
          isOpenMenu ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <IsOpenMenu isOpen={isOpenMenu} authData={authData} />
      </div>
    </>
  );
};

export default Logobtn;
