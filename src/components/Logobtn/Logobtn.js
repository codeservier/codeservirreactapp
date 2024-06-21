import React from "react";
import logo from "../../assets/logo.png";

const Logobtn = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-4 md:px-10">
        <div className="flex flex-col items-center md:mt-0 mt-6">
          <img src={logo} alt="Logo" className="h-20 md:h-40" />
          <h2 className="text-[#ffb907] text-lg md:text-2xl mt-[-1.5rem] md:mt-[-3.5rem]">
          code<span className="text-[#1dceff]">servir.com</span>
          </h2>
        </div>
        <div className="md:flex hidden space-x-4 mt-6 p-2 rounded-3xl md:mt-0 shadow-lg bg-white hover:translate-x-2 duration-500">
  <button className="bg-[#21c4ff] text-white text-lg md:text-1xl px-6 md:px-6 py-1 rounded-full hover:scale-105 hover:bg-[#000000] transition duration-300">
    Login
  </button>
  <button className="bg-[#ff8800] text-white text-lg md:text-1xl px-6 md:px-3 py-1 rounded-full hover:scale-105 hover:bg-[#000000] transition duration-300">
    Register
  </button>
</div>
      </div>
    </div>
  );
};

export default Logobtn;