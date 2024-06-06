import React, { useEffect } from "react";
import CustomInput from "../../components/InputFields/CustomInput";
import Footer from "../../components/Footer/Footer";
import CustomButton from "../../components/Buttons/CustomButton";
import headerBg from "../../assets/header-bg.jpg";
import maya from "../../assets/news-2.png";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import googleLogo from "../../assets/googlelogo.png";
import facebookLogo from "../../assets/facbooklogo.png";

import githubLogo from "../../assets/githublogo.png";
import { db, auth } from "../../config/config";
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
    navigate("/login");
  };
  return (
    <>
      {/* {redirectToHome && <Navigate to="/Home" />} */}

      <div className="container1">
        <Navbar />

        <div className="header">
          <img alt="" src={headerBg} />
        </div>
        <form onSubmit={handleonsubmit}>
          <div className="lrcontainer">
            <div className="right">
              <img alt="" src={maya} width={400} height={400} />
            </div>
            <div className="left">
              <h1 className="contactheading">Sign Up </h1>

              <div className="leftchild">
                <CustomInput
                  id={"fname"}
                  type={"text"}
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  placeholder={"Enter your Full Name:"}
                />
                <span id="errorfname"></span>
                <CustomInput
                  placeholder={"Enter your Email:"}
                  id={"email"}
                  type={"text"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span id="erroremail"></span>
                <CustomInput
                  placeholder={"Enter your Phone Number:"}
                  id={"mobnumber"}
                  type={"text"}
                  value={mobnumber}
                  onChange={(e) => setmobnumber(e.target.value)}
                />
                <span id="errormobnumber"></span>
                <CustomInput
                  placeholder={"Enter your Password:"}
                  id={"password"}
                  type={"password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span id="errorpassword"></span>
                <CustomInput
                  style={{ marginBottom: 20 }}
                  placeholder={"Confirm your Password:"}
                  id={"cpassword"}
                  type={"password"}
                  value={confpassword}
                  onChange={(e) => setconfpassword(e.target.value)}
                />
                <span id="errorcpassword"></span>
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
                <a style={{ cursor: "pointer" }} onClick={gotoLogin}>
                  Go to Login
                </a>
              </div>
            </div>
          </div>
        </form>

        <Footer />
      </div>
    </>
  );
};

export default SignUp;
