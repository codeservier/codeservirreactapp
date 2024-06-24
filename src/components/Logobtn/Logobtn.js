import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { useNavigate, Link } from "react-router-dom";


const Logobtn = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate(); // Get the navigate function from useNavigate


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
  const handleLogin = () => {
    navigate('/LoginPage'); // Use navigate function to redirect to /LoginPage
  };
  const handleSignup = () => {
    navigate('/SignUp'); // Use navigate function to redirect to /LoginPage
  };
  return (
    <div className={`fixed w-full z-50 transition-colors duration-300 ${scrolled ? "bg-[#ffffff]" : ""}`}>
      <div className="flex justify-between items-center px-4 md:px-10 py-4">
        <div className="flex flex-col items-start md:mt-[-24px] mt-6 ">
          <img src={logo} alt="Logo" className="h-20 md:h-40 md:ml-0 md:-mt-0 ml-4 -mt-10"/>
          <h2 className="text-[#ffb907] text-lg md:text-2xl mt-[-1.5rem] md:mt-[-3.5rem]">
            code<span className="text-[#1dceff]">servir.com</span>
          </h2>
        </div>
        <div className="md:flex hidden space-x-4 p-2 rounded-3xl md:mt-[12px] shadow-lg bg-white hover:translate-x-2 duration-500">
          <button onClick={handleLogin} className="bg-[#21c4ff] text-white text-lg md:text-xl px-6 md:px-6 py-1 rounded-full hover:scale-105 hover:bg-[#000000] transition duration-300">
            Login
          </button>
          <button onClick={handleSignup} className="bg-[#ff8800] text-white text-lg md:text-xl px-6 md:px-3 py-1 rounded-full hover:scale-105 hover:bg-[#000000] transition duration-300">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logobtn;
