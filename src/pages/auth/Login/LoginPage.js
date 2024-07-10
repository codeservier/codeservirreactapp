import React from "react";
import CustomButton from "../../../components/Buttons/CustomButton";
import CustomInput from "../../../components/InputFields/CustomInput";
import headerBg from "../../../assets/header-bg.jpg";
import { useState } from "react";
import maya from "../../../assets/news-2.png";
import googleLogo from "../../../assets/googlelogo.png";
import facebookLogo from "../../../assets/facbooklogo.png";
import githubLogo from "../../../assets/githublogo.png";
import { auth, db } from "../../../config/config";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import Logobtn from "../../../components/Logobtn/Logobtn";
import Footer from "../../../components/Footer/Footer";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithEmailAndPassword = async () => {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(
        email,
        password
      );
      const user = userCredential.user;
      alert("Sign in successful");
      // Retrieve user data from the database
      const userDoc = await db.collection("users").doc(user.uid).get();
      if (userDoc.exists) {
        const userData = userDoc.data();
        console.log("User data:", userData);
        if (userData.role === "admin") {
          navigate("/Admin", { state: { email: email } });
        } else {
          navigate("/", { state: { email: email, userData: userData } });
        }
      } else {
        console.error("No such user document!");
        alert("No user data found.");
      }
    } catch (error) {
      console.error("Sign in error:", error);
      // Handle specific error codes
      let errorMessage;
      switch (error.code) {
        case "auth/invalid-email":
          errorMessage = "The email address is badly formatted.";
          break;
        case "auth/user-disabled":
          errorMessage = "The user account has been disabled.";
          break;
        case "auth/user-not-found":
          errorMessage =
            "There is no user record corresponding to this identifier. The user may have been deleted.";
          break;
        case "auth/wrong-password":
          errorMessage =
            "The password is invalid or the user does not have a password.";
          break;
        case "auth/invalid-credential":
          errorMessage =
            "The supplied auth credential is incorrect, malformed, or has expired.";
          break;
        default:
          errorMessage = error.message || "An unknown error occurred.";
          break;
      }
      alert(`Sign in failed: ${errorMessage}`);
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
    navigate("/SignUp");
  };

  return (
    <>
               <Logobtn/>

      <div className="relative z-50">
        <Navbar />
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 pt-[5rem]">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
          <div className="flex justify-center">
            <img
              alt="header background"
              src={headerBg}
              className="w-full h-32 object-cover rounded-t-lg"
            />
          </div>
          <form onSubmit={handleonsubmit} className="space-y-6">
            <h1 className="text-6xl font-bold text-center font-lilita text-[#26baf6] ">
              Login
            </h1>
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
              <CustomButton className="btn2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 p-5" />
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
      <Footer />
    </>
  );
};

export default LoginPage;
