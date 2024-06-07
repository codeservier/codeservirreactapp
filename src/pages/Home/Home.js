import React from "react";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Navbar from "../../components/Navbar/Navbar";
import logo from "../../assets/logo.png"; // Ensure you have a logo image in the specified path
import Footer from "../../components/Footer/Footer";
import LandingPage from "../LandingPage/LandingPage";
import Services from "../Services.js/Services";
import OurProjects from "../OurProjects/OurProjects";

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
      <div className="min-h-screen bg-[#e4feff]">
        <div>
          <Navbar />
        </div>
        <div className="flex justify-between items-center px-10 ">
          <div className="flex flex-col items-center">
            <img src={logo} alt="Logo" className="h-40" />
            <h2 className="text-[#ffb907] text-2xl mt-[-3.5rem]">
              code<span className="text-[#1dceff]">servir.com</span>
            </h2>
          </div>
          <div>
            <button
              onClick={handleLogin}
              className="bg-blue-500 text-white px-4 py-2 rounded-[5rem] mr-4 hover:bg-blue-600 transition duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div>
          <LandingPage />
        </div>

        <div>
          <Services />
        </div>

        <div>
          <OurProjects />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
