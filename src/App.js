import React from "react";

import LoginPage from "./pages/Login/LoginPage";
import SignUp from "./pages/SignUp/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Courses from "./pages/Courses/Courses/Courses";
import Home from "./pages/Home/Home";
import "./mastercss/InputStyle.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<LoginPage />} /> */}
        {/* <Route path="/" element={<LoginPage />} /> */}
        <Route path="/" element={<SignUp />} />
        {/* <Route path="/" element={<Courses />} /> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/" element={<HomeCourses />} /> */}
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
