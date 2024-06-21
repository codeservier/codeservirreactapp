import React from "react";

import LoginPage from "./pages/auth/Login/LoginPage";
import SignUp from "./pages/auth/SignUp/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ContactPage from "./pages/Contact/Contact";
import OurProjects from "./pages/OurProjects/OurProjects";
import LandingPage from "./pages/LandingPage/LandingPage";
import Services from "./pages/Services.js/Services";
import ServicesInner from "./pages/ServicesInner/ServicesInner";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Blog from "./pages/Blog/Blog";
import Careers from "./pages/Careers/Careers";
import FAQ from "./pages/FAQ/FAQ";
import DevCycle from "./pages/DevCycle/DevCycle";
import InternshipForm from "./pages/InternshipForm/InternshipForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<ServicesInner />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/InternshipForm" element={<InternshipForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
