import React from "react";

import LoginPage from "./pages/Login/LoginPage";
import SignUp from "./pages/SignUp/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Courses from "./pages/Courses/Courses/Courses";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Courses" element={<Courses />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
