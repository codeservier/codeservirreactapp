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
import Courses from "./pages/Courses/Courses";
import Admin from "./pages/Admin/Admin";
import TodoCompany from "./pages/Todocompany/TodoCompany";
import Cpp from "./pages/Courses/AllCourses/Cpp/Cpp";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import TermAndCondition from "./pages/TermAndCondition/TermAndCondition";
import PrivacyPolicy from "./pages/PrivacyAndPolicy/PrivacyandPolicy";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<ServicesInner />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/TodoCompany" element={<TodoCompany />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/InternshipForm" element={<InternshipForm />} />
        {/* course */}
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Cpp" element={<Cpp />} />

        {/* comming soon */}
        <Route path="/ComingSoon" element={<ComingSoon />} />

        {/* Term and condition  */}
        <Route path="/TermAndCondition" element={<TermAndCondition />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;
