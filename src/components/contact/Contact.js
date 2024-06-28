import React, { useState } from "react";
import CustomButton from "../Buttons/CustomButton";
import CustomInput from "../InputFields/CustomInput";
import Textarea from "../InputFields/Textarea";
import { db } from "../../config/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import contactImg from "../../assets/contactimg.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "", // Clear error when user starts typing
    }));
  };

  const validate = () => {
    let valid = true;
    let newErrors = {};

    if (!formData.fullName) {
      newErrors.fullName = "Full name is required.";
      valid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email address is required.";
      valid = false;
    }
    if (!formData.message) {
      newErrors.message = "Message is required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    try {
      const docRef = await addDoc(collection(db, "contactMessages"), {
        ...formData,
        timestamp: Timestamp.fromDate(new Date()), // Adding timestamp here
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Message sent successfully!");
      setFormData({
        fullName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="container mx-auto py-12 pt-[10rem] ">
      <div className="bg-[#ffffff] p-8 rounded-lg shadow-md border">
        <h1 className="text-4xl md:text-8xl font-bold text-center mb-8 text-[#26baf6] font-lilita">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow border">
            <div>
              <span className="text-3xl font-concert block font-bold">Phone Number</span>
              <span className="font-concert block">+91 522 316 9897</span>
              <span className="font-concert block">+91-9455791624</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow border">
            <div>
              <span className="text-3xl font-concert block font-bold">Email Address</span>
              <span className="font-concert block">coderservir@gmail.com</span>
              <span className="font-concert block">info@codeservir.com ,</span>
            </div>
          </div>
         
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center py-8 min-h-screen">
        {/* Right section with image */}
        <div className="w-full md:w-1/2 p-10">
          <img
            src={contactImg}
            alt="Contact Illustration"
            className="w-full h-auto"
          />
        </div>
        {/* Left section with form */}
        <div className="w-full md:w-1/2 p-20 bg-contactbg bg-cover bg-center hover:bg-[#ffffff] duration-500 rounded-lg shadow-md">
          <h1 className="text-3xl md:text-8xl font-bold text-center mb-8 font-lilita text-[#26baf6]">
            Take a meet
          </h1>
          <form onSubmit={handleSubmit}>
   
              <CustomInput
                id="fullName"
                label="Full Name"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs italic">{errors.fullName}</p>
              )}

    
              <CustomInput
                id="email"
                label="Email Address"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">{errors.email}</p>
              )}
              <CustomInput
                id="message"
                label="Message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className="text-red-500 text-xs italic">{errors.message}</p>
              )}
      
            <CustomButton
              type="submit"
              label="Send Message"
              className="bg-[#000000] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;