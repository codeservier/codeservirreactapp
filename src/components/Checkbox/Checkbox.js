import React from "react";

const CustomCheckbox = ({ id, label, checked, onChange}) => {
  return (
    <div className="flex items-center mb-2">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="mr-2 leading-tight"
      />
      <label htmlFor={id} className="text-gray-700 font-concert">
        {label}
      </label>
    </div>
  );
};

export default CustomCheckbox;