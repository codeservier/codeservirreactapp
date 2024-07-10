import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import CustomButton from "../Buttons/CustomButton";
import CustomInput from "../InputFields/CustomInput";
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
    if (!formData.number) {
      newErrors.number = "Number is required.";
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
    <>
     
      <div className="pt-[13rem]">
      <h1 className="text-4xl md:text-8xl font-bold text-center text-[#26baf6] font-lilita underline">
        Contact Us
      </h1>
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center p-8 min-h-screen">
        {/* Right section with image */}
        <div className="w-full md:w-1/2 p-10">
          <img
            src={contactImg}
            alt="Contact Illustration"
            className="w-full h-auto"
          />
        </div>
        {/* Left section with form */}
        <div className="w-full md:w-1/2 md:px-28 p-10 bg-contactbg bg-cover bg-center hover:bg-[#ffffff] duration-500 rounded-lg shadow-md">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 font-lilita text-[#26baf6]">
            Take a meet
          </h1>
          <form onSubmit={handleSubmit}>
            <CustomInput
              id="fullName"
              // label="Full Name"
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
              // label="Email Address"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}

            <CustomInput
              id="number"
              // label="Message"
              placeholder="Enter your mobile number"
              value={formData.number}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="text-red-500 text-xs italic">{errors.message}</p>
            )}
            <CustomInput
              id="message"
              // label="Message"
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
              className="bg-[#000000] hover:bg-[red]  text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
            />
          </form>
        </div>
      </div>
      <div className="container mx-auto pb-12">
        <div className="bg-[#ffffff] p-8 rounded-lg shadow-md mx-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow border">
              <div>
                <span className="text-2xl font-concert block font-bold">
                  Phone Number
                </span>
                <span className="font-concert block">+91 945-579-1624</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow border">
              <div>
                <span className="text-2xl font-concert block font-bold">
                  Email Address
                </span>
                {/* https://www.facebook.com/codeservirtechnologies */}
                {/* https://x.com/CodeServir */}
                {/* https://in.linkedin.com/company/codeservir-technologies-private-limited */}
                {/* https://www.instagram.com/codeservir/ */}
                
                <span className="font-concert block">info@codeservir.com,  coderservir@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow border">
              <div>
                <span className="text-2xl font-concert block font-bold">
                  Address
                </span>
                <span className="font-concert block">
                  1234 Street Name, City, State, ZIP
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow border">
              <div className="flex space-x-4">
                <span className="text-2xl font-concert block font-bold">
                  Social Media
                </span>
                <a
                  href="https://www.facebook.com/codeservirtechnologies"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={30} className="text-blue-600" />
                </a>
                <a
                  href="https://x.com/CodeServir"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={30} className="text-blue-400" />
                </a>
                <a
                  href="https://in.linkedin.com/company/codeservir-technologies-private-limited"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={30} className="text-blue-700" />
                </a>
                <a
                  href="https://www.instagram.com/codeservir/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={30} className="text-pink-600" />
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-8">
            <div className="bg-white p-8 rounded-lg ">
              <h2 className="text-3xl md:text-6xl font-bold text-center mb-8 text-[#26baf6] font-lilita">
                Our Location
              </h2>
              <div className="flex justify-center items-center p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.474672648844!2d144.96305831567417!3d-37.8142179797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5778cdb5c830f0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1605454870952!5m2!1sen!2sau"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
     
    </>
  );
};

export default Contact;
