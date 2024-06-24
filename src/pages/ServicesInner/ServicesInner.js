import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Services from "../Services.js/Services";
import Footer from "../../components/Footer/Footer";
import logo from "../../assets/logo.png";
import Logobtn from "../../components/Logobtn/Logobtn";

const ServicesInner = () => {
  return (
    <div>
      <Logobtn />

      <div className="relative z-50">
        <Navbar />
      </div>
      <Services />
      <Footer />
    </div>
  );
};

export default ServicesInner;
