import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import CustomButton from "../Buttons/CustomButton";
import CustomInput from "../InputFields/CustomInput";
import { db } from "../../config/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import contactImg from "../../assets/svgfiles/contact.svg";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    number: "",
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
        number: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-mywhite py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Right section with image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={contactImg}
            alt="Contact Illustration"
            className="w-full max-w-md"
          />
        </div>

        <div className="w-full md:w-1/2   border rounded-lg p-6 md:p-16">
          <h1 className="text-3xl md:text-5xl font-bold text-center text-boldheading mb-6">
            Get in Touch
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <CustomInput
              id="fullName"
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-7 italic">
                {errors.fullName}
              </p>
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
              id="number"
              label="Mobile Number"
              type="text"
              placeholder="Enter your mobile number"
              value={formData.number}
              onChange={handleChange}
            />
            {errors.number && (
              <p className="text-red-500 text-xs italic">{errors.number}</p>
            )}

            <CustomInput
              id="message"
              label="Message"
              type="text"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              textarea
            />
            {errors.message && (
              <p className="text-red-500 text-xs italic">{errors.message}</p>
            )}

            <CustomButton
              type="submit"
              label="Submit"
              className="w-full bg-[#0c2b46] mt-12 text-white py-2 rounded-lg hover:bg-[#89d5f4] transition duration-300"
            />
          </form>
        </div>
      </div>

      <div className="mt-8 container mx-auto border md:p-6 -lg rounded-lg">
        <section class="">
          <div class="container md:px-6 py-12 mx-auto">
            <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <span className="inline-block p-3 text-primary rounded-full border border-primary">
                  <AiOutlineMail className="w-6 h-6" />
                </span>

                <h2 className="mt-4 text-lg font-medium text-secondary">
                  Email
                </h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Our friendly team is here to help.
                </p>
                <p className="mt-2 text-blue-500 dark:text-blue-400">
                  info@codeservir.com
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <span className="inline-block p-3 text-primary rounded-full border">
                  <MdLocationOn className="w-6 h-6" />
                </span>

                <h2 className="mt-4 text-lg font-medium text-secondary">
                  Office
                </h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Come say hello at our office HQ.
                </p>
                <p className="mt-2 text-blue-500 dark:text-blue-400">
                  37 Vibhav Khand Gomti Nagar, Lucknow, Uttar Pradesh, 226010
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <span className="inline-block p-3 text-primary rounded-full border">
                  <AiOutlinePhone className="w-6 h-6" />
                </span>

                <h2 className="mt-4 text-lg font-medium text-secondary">
                  Phone
                </h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Mon-Fri from 8am to 5pm.
                </p>
                <p className="mt-2 text-blue-500 dark:text-blue-400">
                  +91 945-579-1624
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className=" md:p-6 rounded-lg  ">
          <div className="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d271.4165368915143!2d81.0200616!3d26.8604014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be389340450d3%3A0xefe5d679c62b5a20!2sCodeServir%20Technologies!5e0!3m2!1sen!2sin!4v1689787406804!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
