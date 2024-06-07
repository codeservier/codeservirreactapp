import React from "react";
import CustomButton from "../../../components/Buttons/CustomButton";
import CustomInput from "../../../components/InputFields/CustomInput";
import headerBg from "../../../assets/header-bg.jpg";
import { useState } from "react";
import maya from "../../../assets/news-2.png";
import googleLogo from "../../../assets/googlelogo.png";
import facebookLogo from "../../../assets/facbooklogo.png";
import githubLogo from "../../../assets/githublogo.png";
import { auth } from "../../../config/config";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithEmailAndPassword = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      navigate("/", { state: { email: email } });
      console.log("Sign in successful");
    } catch (error) {
      console.error("Sign in failed:", error.message);
    }
  };

  const handleonsubmit = (event) => {
    event.preventDefault();

    const erroremail = document.getElementById("erroremail");
    const erroremailColor = document.getElementById("email");

    const errorpassword = document.getElementById("errorpassword");
    const errorpasswordColor = document.getElementById("password");

    if (email === "") {
      erroremail.innerHTML = "Please Enter Something";
      erroremailColor.classList.add("errorColor");
    } else {
      erroremail.innerHTML = "";
      erroremailColor.classList.remove("errorColor");
    }

    if (password === "") {
      errorpassword.innerHTML = "Please Enter Something";
      errorpasswordColor.classList.add("errorColor");
    } else {
      errorpassword.innerHTML = "";
      errorpasswordColor.classList.remove("errorColor");
    }

    console.log("Email:", email);
    console.log("Password:", password);
    signInWithEmailAndPassword(email, password);
  };

  const gotsignup = () => {
    navigate("/signup");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="flex justify-center">
          <img
            alt="header background"
            src={headerBg}
            className="w-full h-32 object-cover rounded-t-lg"
          />
        </div>
        <form onSubmit={handleonsubmit} className="space-y-6">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <div className="space-y-4">
            <CustomInput
              placeholder="Enter your Email"
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <span id="erroremail" className="text-red-600"></span>
            <CustomInput
              placeholder="Enter your Password"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <span id="errorpassword" className="text-red-600"></span>
          </div>
          <div className="flex justify-center">
            <CustomButton className="btn2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300" />
          </div>
          <div className="text-center text-gray-600">
            Sign in with other apps
          </div>
          <div className="flex justify-center space-x-4">
            <img src={googleLogo} alt="Google" className="w-10 h-10" />
            <img src={facebookLogo} alt="Facebook" className="w-10 h-10" />
            <img src={githubLogo} alt="GitHub" className="w-10 h-10" />
          </div>
          <div className="text-center mt-4">
            <a
              onClick={gotsignup}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Go to Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
