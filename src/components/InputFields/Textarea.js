import React from "react";

const Textarea = ({ placeholder, label, id, type, onChange, value }) => {
  return (
    <div className="mb-4 ml-8 mr-8">
      <div className="mb-2">
        <label className="block text-gray-700 font-bold mb-2" htmlFor={id}>
          {label}
        </label>
      </div>
      <textarea
        className="shadow appearance-none border rounded w-full p-5  text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
      />
    </div>
  );
};

export default Textarea;
