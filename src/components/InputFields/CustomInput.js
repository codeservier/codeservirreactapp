import React from "react";
import "tailwindcss/tailwind.css";

const CustomInput = ({ style, placeholder, label, id, type, onChange, value }) => {
  return (
    <div className="mb-4 relative">
      <label className="block text-sm font-bold text-gray-600 ml-1" htmlFor={id}>
        {label}
      </label>
      <input
        className=" appearance-none border rounded-xl w-full py-4 px-3 text-gray-300   leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={style}
      />
    
    </div>
  );
};

export default CustomInput;