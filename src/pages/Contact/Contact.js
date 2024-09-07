import React, { useState } from "react";
import CustomButton from "../../components/Buttons/CustomButton";
import CustomInput from "../../components/InputFields/CustomInput";
import { useNavigate } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import Logobtn from "../Layout/Logobtn";
import Footer from "../../components/Footer/Footer";
import contactImg from "../../assets/logo.png";
import Textarea from "../../components/InputFields/Textarea";
import Contact from "../../components/contact/Contact";

const ContactPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement form submission logic here
  };

  return (
    <>
      <div className="bg-[#ebfbff] min-h-screen">
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
