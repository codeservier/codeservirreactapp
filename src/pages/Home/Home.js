import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS file
import Popup from "../../components/popOn/PoponHome";
import LandingPage from "../LandingPage/LandingPage";
import Services from "../Services.js/Services";
import OurProjects from "../OurProjects/OurProjects";
import DevCycle from "../DevCycle/DevCycle";
import Contact from "../../components/contact/Contact";

const Home = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(true); 

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out", 
      once: true,
    });
  }, []);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="bg-primary">
      {isPopupOpen && <Popup onClose={handleClosePopup} />}
      <div data-aos="fade-up">
        <LandingPage />
      </div>
      <div data-aos="fade-up">
        <Services 
         />
      </div>
      <div data-aos="fade-up">
        <DevCycle />
      </div>
      <div data-aos="fade-up">
        <OurProjects />
      </div>
      <div data-aos="fade-up">
        <Contact />
      </div>
    </div>
  );
};
export default Home;
