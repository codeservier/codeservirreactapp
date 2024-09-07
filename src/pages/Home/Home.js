import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Navbar from "../Layout/Navbar.js";
import Footer from "../../components/Footer/Footer";
import LandingPage from "../LandingPage/LandingPage";
import Services from "../Services.js/Services";
import OurProjects from "../OurProjects/OurProjects";
import Logobtn from "../Layout/Logobtn.js";
import DevCycle from "../DevCycle/DevCycle";
import Contact from "../../components/contact/Contact";
import Popup from "../../components/popOn/PoponHome";   

import { auth, db } from "../../config/config.js"; // Adjust the import path as needed
import { doc, getDoc } from "firebase/firestore";
const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true); // Add state for popup visibility
  const navigate = useNavigate();
  const [authData, setAuthData] = useState({});

  const handleLogin = () => {
    navigate("/LoginPage");
  };

  const handleSignup = () => {
    navigate("/SignUp");
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    setIsPopupOpen(true);
  }, []);

  useEffect(() => {
    const fetchAuthData = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          // Retrieve user data from the database
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists) {
            const userData = userDoc.data();
            console.log("User data:", userData);
            setAuthData(userData);
          } else {
            console.error("No such user document!");
            alert("No user data found.");
          }
        } catch (error) {
          console.error("Error fetching auth data: ", error);
        }
      }
    };

    fetchAuthData();
  }, [navigate]);

  return (
    <div className="bg-[#000000]">
      {isPopupOpen && <Popup onClose={handleClosePopup} />}

      <div className="  min-h-screen bg-no-repeat  ">
        <LandingPage />
      </div>
      <div className="bg-white-img bg-[50%] bg-no-repeat bg-cover ">
        <Services />
      </div>
      <DevCycle />
      
        <OurProjects />
   
      <Contact />
    </div>
  );
};

export default Home;
