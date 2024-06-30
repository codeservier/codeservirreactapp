import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Logobtn from "../../components/Logobtn/Logobtn";
import CustomInput from "../../components/InputFields/CustomInput";
import CustomButton from "../../components/Buttons/CustomButton";
import CustomCheckbox from "../../components/Checkbox/Checkbox";
import internImg from "../../assets/backgrounds_images/Internship.jpg";
import "tailwindcss/tailwind.css";
import { db, storage } from "../../config/config.js";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const InternshipForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    degree: "",
    otherDegree: "",
    mobile: "",
    interests: {
      webdev: false,
      datascience: false,
      ai: false,
      mobiledev: false,
    },
    timestamp: null,
    photo: null,
    photoURL: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    degree: "",
    mobile: "",
  });

  const formFields = [
    {
      id: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
    },
    {
      id: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Enter your email address",
    },
    {
      id: "mobile",
      label: "Mobile Number",
      type: "number",
      placeholder: "Enter your mobile number",
    },
    {
      id: "degree",
      label: "Select Your Education",
      type: "select",
      options: [
        "Select",
        "B.Tech",
        "BCA",
        "MCA",
        "M.Tech",
        "Diploma",
        "Others",
      ],
    },
    {
      id: "technology",
      label: " Choose Technology",
      type: "select",
      options: [
        "Select",
        "PHP",
        "Android",
        "iOS",
        "ASP.NET",
        "Python",
        "React Native",
        "Flutter",
        "MERN Full Stack",
        "Blockchain",
        "Machine Learning And IOT",
        "Not Yet Decided",
      ],
    },
  ];


  const handleChange = (e) => {
    const { id, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        interests: {
          ...prevData.interests,
          [id]: checked,
        },
      }));
    } else if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        photo: files[0],
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
    if (!formData.degree || formData.degree === "select") {
      newErrors.degree = "Education is required.";
      valid = false;
    }
    if (!formData.technology || formData.technology === "select") {
      newErrors.technology = "Technology is required.";
      valid = false;
    }
    if (formData.degree === "others" && !formData.otherDegree) {
      newErrors.otherDegree = "Please specify your Education.";
      valid = false;
    }
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required.";
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
      const currentTimestamp = new Date().toISOString();
      const formDataWithTimestamp = {
        ...formData,
        timestamp: currentTimestamp,
        degree:
          formData.degree === "others" ? formData.otherDegree : formData.degree,
      };

      if (formData.photo) {
        const photoRef = ref(storage, `photos/${formData.photo.name}`);
        await uploadBytes(photoRef, formData.photo);
        const photoURL = await getDownloadURL(photoRef);
        formDataWithTimestamp.photoURL = photoURL;
        formDataWithTimestamp.photo = null; // Remove photo file from formData
      }

      await addDoc(
        collection(db, "internshipApplications"),
        formDataWithTimestamp
      );
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        degree: "Select",
        otherDegree: "",
        mobile: "",
        interests: {
          webdev: false,
          datascience: false,
          ai: false,
          mobiledev: false,
        },
        timestamp: null,
        photo: null,
        photoURL: "",
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
          <div className="md:w-1/2 w-full relative p-4 flex flex-col justify-start">
            <div
              className="absolute inset-0 bg-cover bg-center md:opacity-100 opacity-60"
              style={{ backgroundImage: `url(${internImg})` }}
            ></div>
            <div className="relative z-10">
              <h1 className="text-4xl font-bold text-[red] font-lilita">
                INTERNSHIP PROGRAM
              </h1>
              <p className="font-concert text-black mb-4">
                Join our internship program and gain valuable experience in the
                field.
              </p>
            </div>
          </div>

          <div className="md:w-1/2 w-full p-8">
            <h2 className="font-concert text-2xl font-bold mb-6 text-gray-700">
              Internship Joining Form
            </h2>
            <form onSubmit={handleSubmit}>
              {formFields.map((field) =>
                field.type === "select" ? (
                  <div key={field.id} className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor={field.id}
                    >
                      {field.label}
                    </label>
                    <select
                      id={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      className="mb-5 font-concert shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      {field.options.map((option, index) => (
                        <option
                          className="font-concert"
                          key={index}
                          value={option.toLowerCase()}
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                    {field.id === "degree" && formData.degree === "others" && (
                      <input
                        type="text"
                        id="otherDegree"
                        value={formData.otherDegree}
                        onChange={handleChange}
                        placeholder="Please specify your education"
                        className="font-concert shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
                      />
                    )}
                    {errors[field.id] && (
                      <p className="text-red-500 text-xs italic">
                        {errors[field.id]}
                      </p>
                    )}
                  </div>
                ) : (
                  <div key={field.id} className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor={field.id}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="font-concert shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors[field.id] && (
                      <p className="text-red-500 text-xs italic">
                        {errors[field.id]}
                      </p>
                    )}
                  </div>
                )
              )}

              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold "
                  htmlFor="photo"
                >
                  Payment Screenshot
                </label>
                <input
                  type="file"
                  id="photo"
                  onChange={handleChange}
                  className="font-concert shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              

              <CustomButton type="submit"  label="Submit" className={"bg-[blue] rounded-lg text-white p-2"} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipForm;
