import React, { useState } from "react";
import CustomInput from "../../../components/InputFields/CustomInput";
import CustomButton from "../../../components/Buttons/CustomButton";
import maya from "../../../assets/backgrounds_images/signupbg.jpg"; // Import your image here
import googleLogo from "../../../assets/googlelogo.png";
import facebookLogo from "../../../assets/facbooklogo.png";
import githubLogo from "../../../assets/githublogo.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import Logobtn from "../../../components/Logobtn/Logobtn";
import Footer from "../../../components/Footer/Footer";
import {auth, db} from "../../../config/config.js"

const SignUp = () => {
  const navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [mobnumber, setMobnumber] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfpassword] = useState("");
  const [errors, setErrors] = useState({
    fname: "",
    email: "",
    mobnumber: "",
    password: "",
    confpassword: "",
  });

  const handleOnSubmit = (event) => {
    event.preventDefault();

    // Validate form fields
    const errorsCopy = { ...errors };

    if (!fname.trim()) {
      errorsCopy.fname = "Please enter your full name";
    } else {
      errorsCopy.fname = "";
    }

    if (!email.trim()) {
      errorsCopy.email = "Please enter your email";
    } else {
      errorsCopy.email = "";
    }

    if (!mobnumber.trim()) {
      errorsCopy.mobnumber = "Please enter your phone number";
    } else {
      errorsCopy.mobnumber = "";
    }

    if (!password.trim()) {
      errorsCopy.password = "Please enter your password";
    } else {
      errorsCopy.password = "";
    }

    if (!confpassword.trim()) {
      errorsCopy.confpassword = "Please confirm your password";
    } else if (password.trim() !== confpassword.trim()) {
      errorsCopy.confpassword = "Passwords do not match";
    } else {
      errorsCopy.confpassword = "";
    }

    setErrors(errorsCopy);

    // Submit data if there are no errors
    if (
      errorsCopy.fname ||
      errorsCopy.email ||
      errorsCopy.mobnumber ||
      errorsCopy.password ||
      errorsCopy.confpassword
    ) {
      return;
    }

    const signupdata = {
      name: fname,
      email: email,
      mobile: mobnumber,
      password: password,
      cpassword: confpassword,
    };

    console.log("Signup Data: ", signupdata);

    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        db.collection("users").doc(userCredential.user.uid).set(signupdata)
          .then(() => {
            alert("User data saved  and Sign up successfully");
            navigate("/"); // Navigate to success page
          })
          .catch((error) => {
            alert("Error saving user data: ", error);
          });
      })
      .catch((error) => {
       alert("Error creating user: ", error);
      });
  };

  const gotoLogin = () => {
    navigate("/LoginPage");
  };

  return (
    <>
      <Logobtn />
      <div className="relative z-50">
        <Navbar />
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-100 pt-[6rem] pb-10">
        <div className="w-full max-w-6xl p-8 bg-white rounded-lg shadow-md mt-10 flex flex-col md:flex-row md:space-x-8">
          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              alt="Image Alt Text"
              src={maya} // Replace with your image source
              className="object-cover rounded-lg"
            />
          </div>
          {/* Form Section */}
          <form onSubmit={handleOnSubmit} className="md:w-1/2 w-full px-8 space-y-6">
            <h1 className="text-4xl md:text-6xl text-[#26baf6] font-bold text-center mb-8">Sign Up</h1>
            <div className="space-y-4">
              <CustomInput
                id="fname"
                type="text"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                placeholder="Enter your Full Name"
                className={`w-full px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                  errors.fname ? "border-red-500" : ""
                }`}
              />
              {errors.fname && (
                <span className="text-red-600 ml-2">{errors.fname}</span>
              )}
              <CustomInput
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                className={`w-full px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <span className="text-red-600 ml-2">{errors.email}</span>
              )}
              <CustomInput
                id="mobnumber"
                type="text"
                value={mobnumber}
                onChange={(e) => setMobnumber(e.target.value)}
                placeholder="Enter your Phone Number"
                className={`w-full px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                  errors.mobnumber ? "border-red-500" : ""
                }`}
              />
              {errors.mobnumber && (
                <span className="text-red-600 ml-2">{errors.mobnumber}</span>
              )}
              <CustomInput
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password"
                className={`w-full px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                  errors.password ? "border-red-500" : ""
                }`}
              />
              {errors.password && (
                <span className="text-red-600 ml-2">{errors.password}</span>
              )}
              <CustomInput
                id="cpassword"
                type="password"
                value={confpassword}
                onChange={(e) => setConfpassword(e.target.value)}
                placeholder="Confirm your Password"
                className={`w-full px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                  errors.confpassword ? "border-red-500" : ""
                }`}
              />
              {errors.confpassword && (
                <span className="text-red-600 ml-2">
                  {errors.confpassword}
                </span>
              )}
            </div>
            <div className="flex justify-center">
              <CustomButton
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 p-5"
                onClick={handleOnSubmit}
              >
                Sign Up
              </CustomButton>
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
      <Footer />
    </>
  );
};

export default SignUp;