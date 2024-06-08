import React from "react";
import logo from "../../assets/logo.png";

const Logobtn = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-10 ">
        <div className="flex flex-col items-center">
          <img src={logo} alt="Logo" className="h-40" />
          <h2 className="text-[#ffb907] text-2xl mt-[-3.5rem]">
            code<span className="text-[#1dceff]">servir.com</span>
          </h2>
        </div>
        <div>
          <button className="bg-[#000000] text-white px-4 py-2 rounded-[5rem] hidden md:block mr-4 hover:bg-blue-600 transition duration-300">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logobtn;
