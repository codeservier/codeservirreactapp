import React from "react";
import "../../mastercss/InputStyle.css";

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
    <div className="divStyl">
      <div className="labelStyl">
        <label className="clabel">{label}</label>
      </div>
      <input
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
