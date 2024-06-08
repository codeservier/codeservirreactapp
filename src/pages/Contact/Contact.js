import React, { useState } from "react";
import CustomButton from "../../components/Buttons/CustomButton";
import CustomInput from "../../components/InputFields/CustomInput";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you can implement the logic to handle the form submission, such as sending an email or storing the data in a database.
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // After handling the form submission, you can navigate to a different page or show a success message.
    // For example:
    // navigate("/thank-you");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <CustomInput
              placeholder="Your Name"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <CustomInput
              placeholder="Your Email"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <textarea
              placeholder="Your Message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <CustomButton
              type="submit"
              className="btn2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Submit
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
