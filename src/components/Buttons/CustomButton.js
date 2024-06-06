import React from "react";
import "../../mastercss/InputStyle.css";

const CustomButton = ({ classn }) => {
  return (
    <div>
      <button className={classn}>Submit</button>
    </div>
  );
};

export default CustomButton;
