import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Logobtn from "../../components/Logobtn/Logobtn";
import CustomInput from "../../components/InputFields/CustomInput";
import CustomButton from "../../components/Buttons/CustomButton";
import CustomCheckbox from "../../components/Checkbox/Checkbox";
import internImg from "../../assets/backgrounds_images/Internship.jpg";
import "tailwindcss/tailwind.css";
import { db } from "../../config/config.js";
import { collection, addDoc } from "firebase/firestore";

const InternshipForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    degree: "",
    skills: "",
    interests: {
      webdev: false,
      datascience: false,
      ai: false,
      mobiledev: false,
    },
    timestamp: null, // Added timestamp field
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    degree: "",
    skills: "",
  });

  const formFields = [
    { id: "name", label: "Full Name", type: "text", placeholder: "Enter your full name" },
    { id: "email", label: "Email Address", type: "email", placeholder: "Enter your email address" },
    { id: "degree", label: "Degree", type: "select", options: ["Select", "Bachelor's Degree", "Master's Degree", "PhD"] },
    { id: "skills", label: "Skills", type: "text", placeholder: "Enter your skills" },
  ];

  const checkboxFields = [
    { id: "webdev", label: "Web Development" },
    { id: "datascience", label: "Data Science" },
    { id: "ai", label: "Artificial Intelligence" },
    { id: "mobiledev", label: "Mobile Development" },
  ];

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        interests: {
          ...prevData.interests,
          [id]: checked,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: "",
      }));
    }
  };

  const validate = () => {
    let valid = true;
    let newErrors = {};
    
    if (!formData.name) {
      newErrors.name = "Full name is required.";
      valid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email address is required.";
      valid = false;
    }
    if (!formData.degree) {
      newErrors.degree = "Degree is required.";
      valid = false;
    }
    if (!formData.skills) {
      newErrors.skills = "Skills are required.";
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
      // Add the current timestamp to the formData
      const currentTimestamp = new Date().toISOString();
      const formDataWithTimestamp = { ...formData, timestamp: currentTimestamp };

      await addDoc(collection(db, "internshipApplications"), formDataWithTimestamp);
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        degree: "Select",
        skills: "",
        interests: {
          webdev: false,
          datascience: false,
          ai: false,
          mobiledev: false,
        },
        timestamp: null, // Reset timestamp
      });
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-red-400 min-h-screen">
      <Logobtn />
      <div className="relative z-50">
        <Navbar />
      </div>
      <div className="min-h-screen flex items-center justify-center p-6 pt-[10rem]">
        <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden max-w-6xl w-full">
          <div
            className="md:w-1/2 w-full bg-cover bg-center flex flex-col justify-start p-4 backdrop-blur-lg"
            style={{ backgroundImage: `url(${internImg})` }}
          >
            <h1 className="text-4xl font-bold text-yellow-400 font-lilita">
              INTERNSHIP PROGRAM
            </h1>
            <p className="font-concert text-white mb-4">
              Join our internship program and gain valuable experience in the field.
            </p>
          </div>
          <div className="md:w-1/2 w-full p-8">
            <h2 className="font-concert text-2xl font-bold mb-6 text-gray-700">
              Internship Joining Form
            </h2>
            <form onSubmit={handleSubmit}>
              {formFields.map((field) =>
                field.type === "select" ? (
                  <div key={field.id} className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor={field.id}>
                      {field.label}
                    </label>
                    <select
                      id={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      className="font-concert shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      {field.options.map((option, index) => (
                        <option className="font-concert" key={index} value={option.toLowerCase()}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors[field.id] && <p className="text-red-500 text-xs italic">{errors[field.id]}</p>}
                  </div>
                ) : (
                  <div key={field.id} className="mb-4">
                    <CustomInput
                      id={field.id}
                      label={field.label}
                      placeholder={field.placeholder}
                      type={field.type}
                      value={formData[field.id]}
                      onChange={handleChange}
                    />
                    {errors[field.id] && <p className="text-red-500 text-xs italic">{errors[field.id]}</p>}
                  </div>
                )
              )}

              <div className="mb-6">
                <label className="font-concert block text-gray-700 text-sm font-bold mb-2">
                  Interested Areas
                </label>
                {checkboxFields.map((field) => (
                  <CustomCheckbox
                    key={field.id}
                    id={field.id}
                    label={field.label}
                    checked={formData.interests[field.id]}
                    onChange={handleChange}
                  />
                ))}
              </div>

              <div className="font-concert flex items-center justify-between">
                <CustomButton text="Submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InternshipForm;