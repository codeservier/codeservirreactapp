import React from "react";
import "./ContactCss.css";
import headerBg from "../../assets/header-bg.jpg";
import maya from "../../assets/news-2.png";
import CustomInput from "../CustomInput";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";
import CustomButton from "../CustomButton";
import { useState } from "react";
import Textarea from "../Textarea";
import { db } from "../../config/config";

export default function Contact() {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [areacode, setAreacode] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [contactData, setContactData] = useState(null);

  const handleSubmit = (event) => {
    const errorfname = document.getElementById("errorf");
    const errorColorfname = document.getElementById("fname");

    const errorlname = document.getElementById("errorl");
    const errorColorlname = document.getElementById("lname");

    const errorarea = document.getElementById("errorarea");
    const errorColorarea = document.getElementById("areacode");

    const errorcity = document.getElementById("errorcity");
    const errorColorcity = document.getElementById("city");

    const errormessage = document.getElementById("errormessage");
    const errorColormessage = document.getElementById("message");

    if (fname === "") {
      errorfname.innerHTML = "Please Enter Something";
      errorColorfname.classList.add("errorColor");
    } else {
      errorfname.innerHTML = "";
      errorColorfname.classList.remove("errorColor");
    }

    if (email === "") {
      errorlname.innerHTML = "Please Enter Something";
      errorColorlname.classList.add("errorColor");
    } else {
      errorlname.innerHTML = "";
      errorColorlname.classList.remove("errorColor");
    }

    if (areacode === "") {
      errorarea.innerHTML = "Please Enter Something";
      errorColorarea.classList.add("errorColor");
    } else if (areacode) {
    } else {
      errorarea.innerHTML = "";
      errorColorarea.classList.remove("errorColor");
    }

    if (city === "") {
      errorcity.innerHTML = "Please Enter Something";
      errorColorcity.classList.add("errorColor");
    } else {
      errorcity.innerHTML = "";
      errorColorcity.classList.remove("errorColor");
    }

    if (message === "") {
      errormessage.innerHTML = "Please Enter Something";
      errorColormessage.classList.add("errorColor");
    } else {
      errormessage.innerHTML = "";
      errorColormessage.classList.remove("errorColor");
    }

    const contactData = {
      name: fname,
      email: email,
      areacode: areacode,
      city: city,
      message: message,
    };
    if (
      fname === "" ||
      email === "" ||
      areacode === "" ||
      city === "" ||
      message === ""
    ) {
      alert("Something Went Wrong!");
    } else {
      submitData(contactData);
    }

    event.preventDefault();
  };

  const submitData = async (contactData) => {
    console.log(contactData);

    try {
      // adding data to firebase collection
      // const documentRef = await firestore
      db.collection("contact")
        .add(contactData)
        .then(() => {
          alert("data submitted successfully...");
        })
        .catch((error) => {
          console.log("error" + error);
          alert("There is a problem occured");
        });
    } catch (e) {
      console.log("Error ", e);
    }
  };

  return (
    <>
      <div className="container1">
        <Navbar />
        <h2>
          Hello :{" "}
          {contactData && contactData.name && contactData.name
            ? contactData.name
            : ""}
        </h2>

        <div className="header">
          <img alt="" src={headerBg} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="lrcontainer">
            <div className="right">
              <img alt="" src={maya} width={500} height={500} />
            </div>
            <div className="left">
              <h1 className="contactheading">Let's Contact Us</h1>

              <div className="leftchild">
                <CustomInput
                  // label={"Enter Your First Name: "}
                  id={"fname"}
                  type={"text"}
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  placeholder={"Enter your Full Name:"}
                />
                <span id="errorf"></span>
                <CustomInput
                  // label={"Enter Your Last Name: "}
                  placeholder={"Enter your Email:"}
                  id={"lname"}
                  type={"text"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span id="errorl"></span>

                <CustomInput
                  // label={"Enter Your Area Code:"}
                  placeholder={"Pin Code:"}
                  id={"areacode"}
                  type={"number"}
                  value={areacode}
                  onChange={(e) => setAreacode(e.target.value)}
                />
                <span id="errorarea"></span>

                <CustomInput
                  // label={"Enter Your City Name: "}
                  placeholder={"City Name:"}
                  id={"city"}
                  type={"text"}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <span id="errorcity"></span>

                <Textarea
                  placeholder={"Enter Your Message:"}
                  // label={"Your Message"}
                  id={"message"}
                  value={message}
                  type={"textarea"}
                  onChange={(e) => setMessage(e.target.value)}
                ></Textarea>
                <span id="errormessage"></span>
              </div>
              <div className="btn">
                <CustomButton classn={"btn2"} />
              </div>
            </div>
          </div>
        </form>

        <Footer />
      </div>
    </>
  );
}
