import React from 'react';
import 'tailwindcss/tailwind.css';
import Navbar from '../../components/Navbar/Navbar';
import Logobtn from '../../components/Logobtn/Logobtn';
import Footer from '../../components/Footer/Footer';

const coursesData = [
  {
    id: 1,
    title: "JavaScript",
    description: "Learn the fundamentals of JavaScript, the programming language of the web.",
    image: "https://via.placeholder.com/150/0000FF/FFFFFF/?text=JavaScript"
  },
  {
    id: 2,
    title: "C++",
    description: "Master the powerful features of C++ for high-performance applications.",
    image: "https://via.placeholder.com/150/FF0000/FFFFFF/?text=C++"
  },
  {
    id: 3,
    title: "Web Development",
    description: "Build modern and responsive websites using HTML, CSS, and JavaScript.",
    image: "https://via.placeholder.com/150/00FF00/FFFFFF/?text=WebDev"
  },
  {
    id: 4,
    title: "Python",
    description: "Learn Python, a versatile language for web development, data analysis, and more.",
    image: "https://via.placeholder.com/150/FFFF00/FFFFFF/?text=Python"
  },
  {
    id: 5,
    title: "React",
    description: "Dive into React and learn how to build dynamic user interfaces.",
    image: "https://via.placeholder.com/150/FFA500/FFFFFF/?text=React"
  }
];

const Courses = () => {
  return (
    <>
        <Logobtn />

<div className="relative z-50">
  <Navbar />
</div>


    <div className="min-h-screen bg-gray-100 md:p-40 pt-40 px-5 ">
    <h1 className="text-4xl font-bold text-center mb-10">Our Courses</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {coursesData.map(course => (
        <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
          <img src={course.image} alt={course.title} className="w-full h-48 object-cover"/>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-700 mb-4">{course.description}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Learn More</button>
          </div>
        </div>
      ))}
    </div>
  </div>
  <Footer/>
  </>
  
  );
}

export default Courses;
