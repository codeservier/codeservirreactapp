import React from "react";
import CustomButton from "../../components/Buttons/CustomButton";
import CustomInput from "../../components/InputFields/CustomInput";
import headerBg from "../../assets/header-bg.jpg";
import { useState } from "react";
import maya from "../../assets/news-2.png";
import googleLogo from "../../assets/googlelogo.png";
import facebookLogo from "../../assets/facbooklogo.png";
import githubLogo from "../../assets/githublogo.png";
import { auth } from "../../config/config";
import { useNavigate } from "react-router-dom";
import '../../mastercss/InputStyle.css';

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
    event.preventDefault();
  };

  const gotsignup = () => {
    navigate("/signup");
  };

  return (
    <>
      <div className="container1">
        <div className="header">
          <img alt="" src={headerBg} />
        </div>
        <form onSubmit={handleonsubmit}>
          <div className="lrcontainer">
            <div className="right">
              <img alt="" src={maya} width={400} height={400} />
            </div>
            <div className="left">
              <h1 className="contactheading">Login </h1>

              <div className="leftchild">
                <CustomInput
                  placeholder={"Enter your Email:"}
                  id={"email"}
                  type={"text"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span id="erroremail"></span>

                <span id="errormobnumber"></span>
                <CustomInput
                  placeholder={"Enter your Password:"}
                  id={"password"}
                  type={"text"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span id="errorpassword"></span>
              </div>

              <div className="btn">
                <CustomButton classn={"btn2"} />
              </div>
              <div>Sign with other apps!</div>

              <div className="logos">
                <img src={googleLogo} alt="Google" width={40} height={40} />
                <img src={facebookLogo} alt="Facebook" width={40} height={40} />
                <img src={githubLogo} alt="GitHub" width={40} height={40} />
              </div>
              <div style={{ marginBottom: 34 }}>
                <a style={{ cursor: "pointer" }} onClick={gotsignup}>
                  Go to Sign Up
                </a>
              </div>
            </div>
          </div>
        </form>

        {/* <Footer /> */}
      </div>
    </>
  );
};

export default LoginPage;
