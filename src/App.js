import React from "react";
import CustomInput from "./components/CustomInput";
import "./mastercss/InputStyle.css";
import CustomButton from "./components/CustomButton";

const App = () => {
  return (
    <div className="container">
      <div className="subcontainer">
        <div className="childcontainer">
          <h1 className="heading">Hello React</h1>
        </div>
        <div>
          <CustomInput
            label={"Enter Your Name "}
            placeholder={"Enter Your Name:"}
            id={"name"}
            type={"text"}
          />
          <CustomInput
            label={"Enter Your Name "}
            placeholder={"Enter Your Name:"}
            id={"name"}
            type={"text"}
          />
          <CustomInput
            label={"Enter Your Name "}
            placeholder={"Enter Your Name:"}
            id={"name"}
            type={"text"}
          />
          <CustomInput
            label={"Enter Your Name "}
            placeholder={"Enter Your Name:"}
            id={"name"}
            type={"text"}
          />
          <CustomInput
            label={"Enter Your Name "}
            placeholder={"Enter Your Name:"}
            id={"name"}
            type={"text"}
          />
        </div>
        <div className="childcontainer">
          <CustomButton />
        </div>
      </div>
    </div>
  );
};

export default App;
