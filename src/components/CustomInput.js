import React from "react";
import "../mastercss/InputStyle.css";

const CustomInput = ({ placeholder, label, id, type }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>{label}</label>
      <input id={id} placeholder={placeholder} type={type} />
    </div>
  );
};

export default CustomInput;
