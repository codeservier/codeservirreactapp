import React, { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import CoursesComponent from "../../../components/Courses/CourseCompnent";
import Footer from "../../../components/Footer/Footer";

const Courses = () => {
  const [courseList, setCourseList] = useState([
    {
      id: "1",
      courseName: "DSA",
      description: "Data Structure and algorithm with Experiment",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/codeservirreactapp.appspot.com/o/course%2Fdsa.webp?alt=media&token=95f1d340-dd64-43dc-8bf0-723b596a29b9",
    },
    {
      id: "2",
      courseName: "DSA",
      description: "Data Structure and algorithm with Experiment",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/codeservirreactapp.appspot.com/o/course%2Fdsa.webp?alt=media&token=95f1d340-dd64-43dc-8bf0-723b596a29b9",
    },
    {
      id: "3",
      courseName: "DSA",
      description: "Data Structure and algorithm with Experiment",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/codeservirreactapp.appspot.com/o/course%2Fdsa.webp?alt=media&token=95f1d340-dd64-43dc-8bf0-723b596a29b9",
    },
    {
      id: "3",
      courseName: "DSA",
      description: "Data Structure and algorithm with Experiment",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/codeservirreactapp.appspot.com/o/course%2Fdsa.webp?alt=media&token=95f1d340-dd64-43dc-8bf0-723b596a29b9",
    },
  ]);

  const handleOnClick = ({ data }) => {};
  return (
    <>
      <Navbar />
      <div className="bg-[#2A629A] h-screen flex flex-col justify-center items-center relative z-10">
        <h1 className="bg-red-600 text-white font-semibold mt-10">
          Our Courses
        </h1>
        <div className="coursemainContainer text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {courseList.map((data) => (
              <CoursesComponent data={data} clickOnItem={handleOnClick} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
