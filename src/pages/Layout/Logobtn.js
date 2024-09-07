// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import logo from "../../../assets/logo.png";
// import { auth } from "../../config/config.js";
// import IsOpenMenu from "../../components/isOpenMenu/isOpenMenu.js";

// const baseMenuData = [
//   { to: "/", label: "Home" },
//   { to: "/Services", label: "Services" },
//   { to: "/About", label: "About" },
//   { to: "/ContactPage", label: "Contact" },
//   { to: "/FAQ", label: "FAQ" },
//   { to: "/Courses", label: "Courses" },
//   {
//     label: "More",
//     dropdown: [
//       { to: "/TermAndCondition", label: "Term and Condition" },
//       { to: "/PrivacyandPolicy", label: "Privacy and Policy" },
//     ],
//   },
//   { to: "/InternshipForm", label: "Internship", highlight: true },
// ];

// const Navbar = ({ authData }) => {
//   const navigate = useNavigate();
//   const [menuData, setMenuData] = useState(baseMenuData);
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const [isOpenMenu, setIsOpenMenu] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const updatedMenuData = [...baseMenuData];

//     if (authData && authData.role === "admin") {
//       const isAdminAdded = updatedMenuData[6].dropdown.some((item) =>
//         ["/Admin", "/TodoCompany"].includes(item.to)
//       );

//       if (!isAdminAdded) {
//         const adminMenuItems = [
//           { to: "/Admin", label: "Admin" },
//           { to: "/TodoCompany", label: "Finance" },
//         ];

//         updatedMenuData[6].dropdown.push(...adminMenuItems);
//       }
//     }

//     setMenuData(updatedMenuData);
//   }, [authData]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleLinkClick = (path) => {
//     navigate(path);
//     window.scrollTo(0, 0);
//     setIsOpenMenu(false); // Close menu on link click
//   };

//   const handleLogout = () => {
//     auth
//       .signOut()
//       .then(() => {
//         navigate("/LoginPage");
//       })
//       .catch((error) => {
//         console.error("Error signing out: ", error);
//       });
//   };

//   const handleLogin = () => {
//     navigate("/LoginPage");
//   };

//   const handleSignup = () => {
//     navigate("/SignUp");
//   };

//   const toggleMenu = () => {
//     setIsOpenMenu(!isOpenMenu);
//   };

//   return (
//     <>
//       <div
//         className={`fixed w-full z-50 transition-colors duration-300 p-5 ${
//           scrolled ? "bg-white shadow-md" : "bg-transparent"
//         }`}
//       >
//         <div className="flex justify-between items-center px-4 md:px-10 lg:py-0">
//           <div className="flex items-center space-x-2 md:space-x-4">
//             <img src={logo} alt="Logo" className="h-28 md:h-24" />
//           </div>
//           <div className="flex items-center space-x-4 p-4 bg-white rounded-lg">
//             {authData && authData.name ? (
//               <div className="flex items-center space-x-2">
//                 <h1 className="text-lg md:text-xl font-semibold">
//                   {authData.name}
//                 </h1>
//                 <button
//                   onClick={handleLogout}
//                   className="hidden md:block bg-[#21c4ff] text-white text-lg px-4 md:px-6 py-1 rounded-full hover:scale-105 hover:bg-black transition duration-300"
//                 >
//                   Logout
//                 </button>
//               </div>
//             ) : (
//               <>
//                 <button
//                   onClick={handleLogin}
//                   className="hidden lg:block bg-[#21c4ff] text-white text-lg md:text-xl px-4 md:px-6 py-1 rounded-full hover:scale-105 hover:bg-black transition duration-300"
//                 >
//                   Login
//                 </button>
//                 <button
//                   className="lg:hidden text-gray-700 pr-4 focus:outline-none"
//                   onClick={toggleMenu}
//                 >
//                   <FontAwesomeIcon
//                     icon={isOpenMenu ? faTimes : faBars}
//                     className="h-6 w-6"
//                   />
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>

//       <nav className="fixed top-[1.5rem] hidden lg:block left-1/2 transform -translate-x-1/2 w-11/12 max-w-4xl lg:bg-white rounded-[2rem] p-5">
//         <ul className="font-concert flex justify-between items-center space-x-4">
//           {menuData.map((item, index) => (
//             <li
//               key={index}
//               className={`relative ${item.dropdown ? "group" : ""}`}
//               onMouseEnter={item.dropdown ? () => setDropdownVisible(true) : undefined}
//               onMouseLeave={item.dropdown ? () => setDropdownVisible(false) : undefined}
//             >
//               {item.dropdown ? (
//                 <div className="relative">
//                   <span
//                     onClick={() => handleLinkClick(item.to)}
//                     className={`font-concert text-gray-700 hover:text-blue-500 transition duration-300 font-semibold uppercase bg-white rounded-full px-3 py-1 ${
//                       item.highlight ? "highlight" : ""
//                     }`}
//                   >
//                     {item.label}
//                     {item.highlight && (
//                       <FontAwesomeIcon icon={faStar} className="ml-2" />
//                     )}
//                   </span>
//                   <ul
//                     className={`absolute left-0 mt-2 w-40 bg-white border shadow-lg rounded-lg py-2 ${
//                       dropdownVisible ? "block" : "hidden"
//                     }`}
//                   >
//                     {item.dropdown.map((dropdownItem, dropdownIndex) => (
//                       <li key={dropdownIndex}>
//                         <span
//                           onClick={() => handleLinkClick(dropdownItem.to)}
//                           className="font-concert text-gray-700 hover:text-blue-500 block px-4 py-2 text-sm cursor-pointer"
//                         >
//                           {dropdownItem.label}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ) : (
//                 <span
//                   onClick={() => handleLinkClick(item.to)}
//                   className={`font-concert text-gray-700 hover:text-blue-500 transition duration-300 font-semibold uppercase bg-white rounded-full px-3 py-1 cursor-pointer ${
//                     item.highlight ? "highlight" : ""
//                   }`}
//                 >
//                   {item.label}
//                   {item.highlight && (
//                     <FontAwesomeIcon icon={faStar} className="ml-2" />
//                   )}
//                 </span>
//               )}
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 transition-transform duration-300 ${
//           isOpenMenu ? "transform translate-x-0" : "transform -translate-x-full"
//         }`}
//       >
//         <div className="bg-white p-5">
//           <ul className="flex flex-col items-center space-y-4">
//             {menuData.map((item, index) => (
//               <li key={index} className="w-full">
//                 {item.dropdown ? (
//                   <div className="relative w-full">
//                     <button
//                       onClick={() => handleLinkClick(item.to)}
//                       className={`block w-full text-center font-concert text-gray-700 hover:text-blue-500 transition duration-300 font-semibold uppercase bg-white rounded-full px-3 py-1 ${
//                         item.highlight ? "highlight" : ""
//                       }`}
//                     >
//                       {item.label}
//                       {item.highlight && (
//                         <FontAwesomeIcon icon={faStar} className="ml-2" />
//                       )}
//                     </button>
//                     <ul className="absolute left-0 mt-2 w-40 bg-white border shadow-lg rounded-lg py-2">
//                       {item.dropdown.map((dropdownItem, dropdownIndex) => (
//                         <li key={dropdownIndex}>
//                           <span
//                             onClick={() => handleLinkClick(dropdownItem.to)}
//                             className="font-concert text-gray-700 hover:text-blue-500 block px-4 py-2 text-sm cursor-pointer"
//                           >
//                             {dropdownItem.label}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ) : (
//                   <button
//                     onClick={() => handleLinkClick(item.to)}
//                     className={`block w-full text-center font-concert text-gray-700 hover:text-blue-500 transition duration-300 font-semibold uppercase bg-white rounded-full px-3 py-1 ${
//                       item.highlight ? "highlight" : ""
//                     }`}
//                   >
//                     {item.label}
//                     {item.highlight && (
//                       <FontAwesomeIcon icon={faStar} className="ml-2" />
//                     )}
//                   </button>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
