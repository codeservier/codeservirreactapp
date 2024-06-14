import React from "react";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Navbar from "../../components/Navbar/Navbar";
import logo from "../../assets/logo.png"; // Ensure you have a logo image in the specified path
import Footer from "../../components/Footer/Footer";
import LandingPage from "../LandingPage/LandingPage";
import Services from "../Services.js/Services";
import OurProjects from "../OurProjects/OurProjects";
import Logobtn from "../../components/Logobtn/Logobtn";
import ContactPage from "../Contact/Contact";

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/LoginPage");
  };

  const handleSignup = () => {
    navigate("/SignUp");
  };

  return (
    <div>
      <div className="min-h-screen bg-[#fff]">
        <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <Navbar />

          <Logobtn />
          <div className=" md:mt-[30px]">
          <LandingPage />

          </div>
        </div>

        <div className=" mx-8 mt-[-100px]">
          <Services />
        </div>

        <div>
          <OurProjects />
        </div>
        <div>{/* <ContactPage /> */}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
