import React from "react";
import "../../mastercss/css/animate.css";

const Navbar = ({ userName }) => {
  return (
    <div>
      <div className="navbar">{userName}</div>
    </div>
  );
};

export default Navbar;
