import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Logobtn from "../../components/Logobtn/Logobtn";
import CustomInput from "../../components/InputFields/CustomInput";
import CustomButton from "../../components/Buttons/CustomButton";
import CustomCheckbox from "../../components/Checkbox/Checkbox";
import internImg from "../../assets/backgrounds_images/Internship.jpg";
import "tailwindcss/tailwind.css";

const InternshipForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    degree: "bachelor",
    skills: "",
    interests: {
      webdev: false,
      datascience: false,
      ai: false,
      mobiledev: false,
    },
  });

  const formFields = [
    { id: "name", label: "Full Name", type: "text", placeholder: "Enter your full name" },
    { id: "email", label: "Email Address", type: "email", placeholder: "Enter your email address" },
    { id: "degree", label: "Degree", type: "select", options: ["Bachelor's Degree", "Master's Degree", "PhD"] },
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
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-red-400 min-h-screen">
      <Logobtn />

      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden max-w-6xl w-full">
          <div
            className="md:w-1/2 w-full bg-cover bg-center flex flex-col justify-start p-4 backdrop-blur-lg"
            style={{ backgroundImage: `url(${internImg})` }}
          >
            <h1 className="  text-4xl font-bold text-yellow-400 font-lilita">
              INTERNSHIP PROGRAM
            </h1>
            <p className=" font-concert text-white mb-4">
              Join our internship program and gain valuable experience in the
              field.
            </p>
          </div>
          <div className="md:w-1/2 w-full p-8">
            <h2 className=" font-concert text-2xl font-bold mb-6 text-gray-700">
              Internship Joining Form
            </h2>
            <form onSubmit={handleSubmit}>
              {formFields.map((field) =>
                field.type === "select" ? (
                  <div key={field.id} className="mb-4 ml-8 mr-8">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor={field.id}>
                      {field.label}
                    </label>
                    <select
                      id={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      className="font-concert shadow appearance-none border rounded w-full p-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      {field.options.map((option, index) => (
                        <option className="font-concert" key={index} value={option.toLowerCase()}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <CustomInput
                    key={field.id}
                    id={field.id}
                    label={field.label}
                    placeholder={field.placeholder}
                    type={field.type}
                    value={formData[field.id]}
                    onChange={handleChange}
                  />
                )
              )}

              <div className="mb-6 ml-8 mr-8">
                <label className="font-concert  block text-gray-700 text-sm font-bold mb-2">
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

              <div className="font-concert  flex items-center justify-between ml-8 mr-8">
                <CustomButton className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Navbar/>
      <Footer />
    </div>
  );
};

export default InternshipForm;