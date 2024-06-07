import React, { useEffect } from "react";
import CustomInput from "../../../components/InputFields/CustomInput";
import CustomButton from "../../../components/Buttons/CustomButton";
import headerBg from "../../../assets/header-bg.jpg";
import maya from "../../../assets/news-2.png";
import { useState } from "react";
import googleLogo from "../../../assets/googlelogo.png";
import facebookLogo from "../../../assets/facbooklogo.png";

import githubLogo from "../../../assets/githublogo.png";
import { db, auth } from "../../../config/config";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [mobnumber, setmobnumber] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setconfpassword] = useState("");
  const [redirectToHome, setRedirectToHome] = useState(false);

  const handleonsubmit = (event) => {
    const errorfname = document.getElementById("errorfname");
    const errorfnameColor = document.getElementById("fname");

    const erroremail = document.getElementById("erroremail");
    const erroremailColor = document.getElementById("email");

    const errormobnumber = document.getElementById("errormobnumber");
    const errormobnumberColor = document.getElementById("mobnumber");

    const errorpassword = document.getElementById("errorpassword");
    const errorpasswordColor = document.getElementById("password");

    const errorcpassword = document.getElementById("errorcpassword");
    const errorcpasswordColor = document.getElementById("cpassword");

    if (fname === "") {
      errorfname.innerHTML = "Please Enter Something";
      errorfnameColor.classList.add("errorColor");
    } else {
      errorfname.innerHTML = "";
      errorfnameColor.classList.remove("errorColor");
    }

    if (email === "") {
      erroremail.innerHTML = "Please Enter Something";
      erroremailColor.classList.add("errorColor");
    } else {
      erroremail.innerHTML = "";
      erroremailColor.classList.remove("errorColor");
    }
    if (mobnumber === "") {
      errormobnumber.innerHTML = "Please Enter Something";
      errormobnumberColor.classList.add("errorColor");
    } else {
      errormobnumber.innerHTML = "";
      errormobnumberColor.classList.remove("errorColor");
    }
    if (password === "") {
      errorpassword.innerHTML = "Please Enter Something";
      errorpasswordColor.classList.add("errorColor");
    } else {
      errorpassword.innerHTML = "";
      errorpasswordColor.classList.remove("errorColor");
    }
    if (confpassword === "") {
      errorpassword.innerHTML = "Please Enter Something";
      errorcpasswordColor.classList.add("errorColor");
    } else {
      errorcpassword.innerHTML = "";
      errorcpasswordColor.classList.remove("errorColor");
    }
    event.preventDefault();

    const signupdata = {
      name: fname,
      email: email,
      mobile: mobnumber,
      password: password,
      cpassword: confpassword,
    };

    console.log("Full name " + fname);

    if (
      fname === "" ||
      email === "" ||
      mobnumber === "" ||
      password === "" ||
      confpassword === ""
    ) {
      console.log("Enter all details...");
    } else {
      submitData(signupdata);
    }
  };

  const submitData = async (signupdata) => {
    const { email, password } = signupdata;
    console.log(signupdata);

    try {
      await auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          alert("Login Succussfully");
          // saving database
          db.collection("SignUp")
            .add(signupdata)
            .then(() => {
              alert("Data saved successfully...");
              // empty the input field
              // setFname("");
              // setEmail("");
              // setmobnumber("");
              // setPassword("");
              // setconfpassword("");
              // setRedirectToHome(true);
              navigate("/");
            })

            .catch((error) => {
              alert("There is a error occured..." + error.message);
            });
          //////////////////////////////////////
        })
        .catch((e) => {
          alert(e);

          // empty the input field
          // setFname("");
          // setEmail("");
          // setmobnumber("");
          // setPassword("");
          // setconfpassword("");
          /////////////////////////////////////////
        });
    } catch (e) {
      console.log("Problem occurred", e);
    }
  };

  const gotoLogin = () => {
    navigate("/LoginPage");
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl p-8 space-y-8 bg-white rounded-lg shadow-md mt-10">
        <div className="flex justify-center">
          <img
            alt="header background"
            src={headerBg}
            className="w-full h-32 object-cover rounded-t-lg"
          />
        </div>
        <form onSubmit={handleonsubmit} className="space-y-6">
          <h1 className="text-2xl font-bold text-center">Sign Up</h1>
          <div className="space-y-4">
            <CustomInput
              id="fname"
              type="text"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              placeholder="Enter your Full Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <span id="errorfname" className="text-red-600"></span>
            <CustomInput
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <span id="erroremail" className="text-red-600"></span>
            <CustomInput
              id="mobnumber"
              type="text"
              value={mobnumber}
              onChange={(e) => setmobnumber(e.target.value)}
              placeholder="Enter your Phone Number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <span id="errormobnumber" className="text-red-600"></span>
            <CustomInput
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <span id="errorpassword" className="text-red-600"></span>
            <CustomInput
              id="cpassword"
              type="password"
              value={confpassword}
              onChange={(e) => setconfpassword(e.target.value)}
              placeholder="Confirm your Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4"
            />
            <span id="errorcpassword" className="text-red-600"></span>
          </div>
          <div className="flex justify-center">
            <CustomButton className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300" />
          </div>
          <div className="text-center text-gray-600">
            Sign up with other apps
          </div>
          <div className="flex justify-center space-x-4">
            <img src={googleLogo} alt="Google" className="w-10 h-10" />
            <img src={facebookLogo} alt="Facebook" className="w-10 h-10" />
            <img src={githubLogo} alt="GitHub" className="w-10 h-10" />
          </div>
          <div className="text-center mt-4">
            <a
              onClick={gotoLogin}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Go to Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
