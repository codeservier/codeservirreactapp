import React, { useState } from "react";

import CustomInput from "../../components/InputFields/CustomInput";
import CustomButton from "../../components/Buttons/CustomButton";
import CustomCheckbox from "../../components/Checkbox/Checkbox";
import internImg from "../../assets/backgrounds_images/Internship.jpg";
import "tailwindcss/tailwind.css";
import { db, storage } from "../../config/config.js";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const InternshipForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    degree: "",
    otherDegree: "",
    mobile: "",
    collegeName: "",
    amount: "",
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
    collegeName: "",
    amount: "",
  });

  const [loading, setLoading] = useState(false);

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
      id: "collegeName",
      label: "College name",
      type: "text",
      placeholder: "Enter your college name",
    },
    {
      id: "degree",
      label: "Select Your Education",
      type: "select",
      options: [
        "---Select---",
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
      label: "Choose Technology",
      type: "select",
      options: [
        "---Select---",
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
    {
      id: "training",
      label: "Choose Training",
      type: "select",
      options: ["---Select---", "45 Day's", "3 Month", "6 Month", "1 Year"],
    },
    {
      id: "amount",
      label: "Paid amount",
      type: "number",
      placeholder: "Enter Paid Amount",
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
    if (!formData.degree || formData.degree === "---Select---") {
      newErrors.degree = "Education is required.";
      valid = false;
    }
    if (!formData.technology || formData.technology === "---Select---") {
      newErrors.technology = "Technology is required.";
      valid = false;
    }
    if (!formData.training || formData.training === "---Select---") {
      newErrors.training = "Training is required.";
      valid = false;
    }
    if (formData.degree === "Others" && !formData.otherDegree) {
      newErrors.otherDegree = "Please specify your Education.";
      valid = false;
    }
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required.";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits.";
      valid = false;
    }
    if (!formData.collegeName) {
      newErrors.collegeName = "College name is required.";
      valid = false;
    }
    if (!formData.amount) {
      newErrors.amount = "Amount is required.";
      valid = false;
    }
    if (!formData.photo) {
      newErrors.photo = "Payment screenshot is required.";
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
    setLoading(true);

    // Check for duplicate mobile number
    const mobileQuery = query(
      collection(db, "internshipApplications"),
      where("mobile", "==", formData.mobile)
    );
    const mobileQuerySnapshot = await getDocs(mobileQuery);

    if (!mobileQuerySnapshot.empty) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mobile: "Mobile number already exists.",
      }));
      setLoading(false);
      return;
    }

    const emailQuery = query(
      collection(db, "internshipApplications"),
      where("email", "==", formData.email)
    );
    const emailQuerySnapshot = await getDocs(emailQuery);

    if (!emailQuerySnapshot.empty) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email already exists.",
      }));
      setLoading(false);
      return;
    }

    try {
      const currentTimestamp = new Date().toISOString();
      const formDataWithTimestamp = {
        ...formData,
        timestamp: currentTimestamp,
        degree:
          formData.degree === "Others" ? formData.otherDegree : formData.degree,
      };

      if (formData.photo) {
        const photoRef = ref(storage, `photos/${formData.photo.name}`);
        await uploadBytes(photoRef, formData.photo);
        const photoURL = await getDownloadURL(photoRef);
        formDataWithTimestamp.photoURL = photoURL;
        formDataWithTimestamp.photo = null;
      }

      await addDoc(
        collection(db, "internshipApplications"),
        formDataWithTimestamp
      );
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        degree: "---Select---",
        otherDegree: "",
        mobile: "",
        collegeName: "",
        amount: "",
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" h-screen  flex justify-center   bg-gradient-to-r from-blue-500 to-red-400">
      <div className=" flex mt-20  items-center justify-center ">
        <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden max-w-6xl w-full relative">
          <div className="md:w-1/2 w-full relative p-4 flex flex-col justify-start">
            <div
              className="absolute inset-0 bg-cover bg-center md:opacity-100 opacity-60 "
              style={{ backgroundImage: `url(${internImg})` }}
            ></div>
            <div className="relative">
              <h1 className="text-4xl font-bold text-white font-lilita">
                INTERNSHIP PROGRAM
              </h1>
              <p className="font-concert text-3xl font-bold text-[#2196F3] mb-4">
                Join our internship program and gain valuable experience in the
                field.
              </p>
            </div>
          </div>

          <div className="md:w-1/2 w-full p-8 ">
            <h2 className="font-concert text-2xl font-bold mb-6 text-gray-700">
              Internship Joining Form
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4  p-6 ">
                {formFields.map((field) =>
                  field.type === "select" ? (
                    <div key={field.id}   >
                      <label
                        className="block text-gray-700 font-bold "
                        htmlFor={field.id}
                      >
                        {field.label}
                      </label>
                      <select
                        id={field.id}
                        value={formData[field.id]}
                        onChange={handleChange}
                        className="font-concert shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      >
                        {field.options.map((option, index) => (
                          <option
                            className="font-concert"
                            key={index}
                            value={option}
                          >
                            {option}
                          </option>
                        ))}
                      </select>
                      {field.id === "degree" && formData.degree === "Others" && (
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
                    <div key={field.id} className="mb-1">
                      <label
                        className="block text-gray-700 font-bold 2"
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

                <div className="col-span-1 md:col-span-2 mb-4">
                  <label
                    className="block text-gray-700 font-bold"
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
                  {errors.photo && (
                    <p className="text-red-500 text-xs italic">{errors.photo}</p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <CustomButton
                  type="submit"
                  label="Submit"
                  className="btn2 w-full bg-black text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 p-5"
                />
              </div>

              {loading && (
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipForm;
