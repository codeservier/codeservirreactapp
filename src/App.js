import React from "react";

import LoginPage from "./pages/auth/Login/LoginPage";
import SignUp from "./pages/auth/SignUp/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ContactPage from "./pages/Contact/Contact";
import OurProjects from "./pages/OurProjects/OurProjects";
import LandingPage from "./pages/LandingPage/LandingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<LandingPage />} /> */}
        {/* <Route path="/LoginPage" element={<LoginPage />} /> */}
        {/* <Route path="/SignUp" element={<SignUp />} /> */}
        {/* <Route path="/" element={<ContactPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
