import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Services from "../Services.js/Services";
import Footer from "../../components/Footer/Footer";
import logo from "../../assets/logo.png";
import Logobtn from "../../components/Logobtn/Logobtn";

const ServicesInner = () => {
  return (
    <div>
      <Navbar />
      <Logobtn />
      <Services />
      <Footer />
    </div>
  );
};

export default ServicesInner;
