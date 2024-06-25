import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LandingPage from "../LandingPage/LandingPage";
import Services from "../Services.js/Services";
import OurProjects from "../OurProjects/OurProjects";
import Logobtn from "../../components/Logobtn/Logobtn";
import DevCycle from "../DevCycle/DevCycle";
import Contact from "../../components/contact/Contact";
import Popup from "../../components/popOn/PoponHome"; // Ensure you have this path correct
// import PopupCourse from "../../components/popOn/PopupCourse";

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
    // Show popup when the component mounts
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
    <div className="bg-[#ffffff]">
      {isPopupOpen && <Popup onClose={handleClosePopup} />}
      {/* {isPopupOpen && <PopupCourse onClose={handleClosePopup} />} */}

      <Logobtn authData={authData} />
      <div className="relative z-50">
        <Navbar authData={authData} />
      </div>

      <div className="pt-[150px]">
        <LandingPage />
      </div>
      <div className="bg-white-img bg-[50%] bg-no-repeat bg-cover ">
        <Services />
      </div>
      <DevCycle />
      <div className="">
        <OurProjects />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
