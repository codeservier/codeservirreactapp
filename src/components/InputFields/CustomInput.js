import React from "react";
import "tailwindcss/tailwind.css";

const CustomInput = ({
  style,
  placeholder,
  label,
  id,
  type,
  onChange,
  value,
}) => {
  return (
    <div className="mb-4 ml-8 mr-8">
      <div className="mb-2">
        <label className="block text-gray-700 font-bold mb-2" htmlFor={id}>
          {label}
        </label>
      </div>
      <input
        className="shadow appearance-none border rounded w-full p-5  text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        style={style}
      />
    </div>
  );
};

export default CustomInput;
