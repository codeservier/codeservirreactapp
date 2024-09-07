import React from "react";

import LoginPage from "./pages/auth/Login/LoginPage";
import SignUp from "./pages/auth/SignUp/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ContactPage from "./pages/Contact/Contact";
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
import Courses from "./pages/Courses/Courses.js";
import ComingSoon from "./pages/ComingSoon/ComingSoon.js";
import Our3MontIntern from "./pages/Courses/OurInternship/Our3MonthIntern/Our3MontIntern.js";
import Cpp from "./pages/Courses/AllCourses/Cpp/Cpp.js";
import Our6MonthIntern from "./pages/Courses/OurInternship/Our3MonthIntern/Our6month.js";
import Our3monthDev from "./pages/Courses/OurInternship/Our3MonthIntern/Our3Monthdev.js";
import Our1YearCourse from "./pages/Courses/OurInternship/Our3MonthIntern/Our1Year.js";
import Our45daysIntern from "./pages/Courses/OurInternship/Our3MonthIntern/Our45dayintern.js";
import Layout from "./pages/Layout/Layout.js";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<ServicesInner />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/ContactPage" element={<ContactPage />} />
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
          <Route path="/Cpp" element={<Cpp />} />
          <Route path="/Our6MonthIntern" element={<Our6MonthIntern />} />
          <Route path="/Our3monthDev" element={<Our3monthDev />} />
          <Route path="/Our1YearCourse" element={<Our1YearCourse />} />
          <Route path="/Our45daysIntern" element={<Our45daysIntern />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
