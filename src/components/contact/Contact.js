import React, { useState } from "react";
import CustomButton from "../Buttons/CustomButton";
import CustomInput from "../InputFields/CustomInput";
import Textarea from "../InputFields/Textarea";
import { db } from "../../config/config";
import contactImg from "../../assets/contactimg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const contactInfo = [
  {
    icon: faPhone,
    label: "Phone Number",
    value: "+1 (234) 567-890",
  },
  {
    icon: faEnvelope,
    label: "Email Address",
    value: "info@csitcompany.com",
  },
  {
    icon: faGlobe,
    label: "Website",
    value: "www.csitcompany.com",
  },
  {
    icon: faGlobe,
    label: "Website",
    value: "www.csitcompany.com",
  },
  {
    icon: faGlobe,
    label: "Website",
    value: "www.csitcompany.com",
  },
  {
    icon: faGlobe,
    label: "Website",
    value: "www.csitcompany.com",
  },
  // Add more contact info as needed
];

const Contact = () => {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    areacode: "",
    city: "",
    message: "",
  });

  const inputFields = [
    { placeholder: "Enter Your Full Name", type: "text", name: "fname" },
    { placeholder: "Enter Your Email", type: "email", name: "email" },
    { placeholder: "Enter Your Area Code", type: "number", name: "areacode" },
    { placeholder: "Enter Your City Name", type: "text", name: "city" },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { fname, email, areacode, city, message } = formData;

    // Validate form fields
    if (!fname || !email || !areacode || !city || !message) {
      alert("Please fill out all fields.");
      return;
    }

    const contactData = {
      name: fname,
      email: email,
      areacode: areacode,
      city: city,
      message: message,
    };

    try {
      // Add data to Firebase collection
      await db.collection("contact").add(contactData);
      alert("Data submitted successfully!");
      // Clear form fields after submission
      setFormData({
        fname: "",
        email: "",
        areacode: "",
        city: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting data: ", error);
      alert("An error occurred, please try again later.");
    }
  };

  return (
    <>
      <div className="container mx-auto py-12">
        <div className="bg-[#ffffff] p-8 rounded-lg shadow-md">
          <h1 className="text-4xl md:text-8xl font-bold text-center mb-8 text-[#26baf6] font-lilita">
            Contact Us
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow"
              >
                <FontAwesomeIcon
                  icon={info.icon}
                  className="text-2xl text-[#26baf6]"
                />
                <div>
                  <span className=" text-3xl font-concert block font-bold">{info.label}</span>
                  <span className=" font-concert block">{info.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center py-8 min-h-screen">
          {" "}
          {/* Right section with image */}
          <div className="w-full md:w-1/2 p-10">
            <img
              src={contactImg}
              alt="Contact Illustration"
              className="w-full h-auto"
            />
          </div>
          {/* Left section with form */}
          <div className="w-full md:w-1/2 p-8 bg-contactbg bg-cover bg-center hover:bg-[#ffffff] duration-500 rounded-lg shadow-md">
            <h1 className="text-3xl md:text-8xl font-bold text-center mb-8 font-lilita text-[#26baf6]">
               Take a meet
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              {inputFields.map((field, index) => (
                <CustomInput
                  key={index}
                  placeholder={field.placeholder}
                  type={field.type}
                  value={formData[field.name]}
                  onChange={handleChange}
                  name={field.name}
                  className="w-full"
                />
              ))}
              <Textarea
                placeholder="Enter Your Message"
                value={formData.message}
                onChange={handleChange}
                name="message"
                className="w-full"
              />
              <div className="text-center">
                <CustomButton
                  type="submit"
                  className="btn2 bg-[#dda242] text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Submit
                </CustomButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
