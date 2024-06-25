import React from "react";
import "tailwindcss/tailwind.css";

const CustomInput = ({ style, placeholder, label, id, type, onChange, value }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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