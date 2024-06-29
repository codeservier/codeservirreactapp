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
import PrivacyandPolicy from "./pages/PrivacyAndPolicy/PrivacyandPolicy.js";
import TermAndCondition from "./pages/TermAndCondition/TermAndCondition.js";
import TodoCompany from "./pages/Todocompany/TodoCompany.js";
import InternshipForm from "./pages/InternshipForm/InternshipForm.js";
import Admin from "./pages/Admin/Admin.js";
import img from "./assets/backgrounds_images/bg_1.jpg";
import Courses from "./pages/Courses/Courses.js";
import ComingSoon from "./pages/ComingSoon/ComingSoon.js";
import Our3MontIntern from "./pages/Courses/OurInternship/Our3MonthIntern/Our3MontIntern.js";
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
        <Route path="/TermAndCondition" element={<TermAndCondition />} />
        <Route path="/PrivacyandPolicy" element={<PrivacyandPolicy />} />
        <Route path="/TodoCompany" element={<TodoCompany />} />
        <Route path="/InternshipForm" element={<InternshipForm />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/ComingSoon" element={<ComingSoon />} />
        <Route path="/Our3MontIntern" element={<Our3MontIntern />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
