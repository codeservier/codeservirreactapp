import React, { useEffect } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const footerData = {
  sections: [
    {
      title: "Links",
      links: [
        { name: "About", path: "/About" },
        { name: "Services", path: "/Services" },
        { name: "Contact Us", path: "/ContactPage" },
        { name: "Term And Condition", path: "/TermAndCondition" },
        { name: "Privacy And Policy", path: "/PrivacyandPolicy" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", path: "/Services" },
        { name: "App Development", path: "/Services" },
        { name: "UI/UX Design", path: "/Services" },
        { name: "SEO", path: "/Services" },
        { name: "Blockchain", path: "/Services" },
      ],
    },
  ],
  contact: {
    email: "info@codeservir.com",
    phone: "+91 945-579-1624",
    location: "4/37 Vibhav Khand Gomti Nagar, Lucknow, Uttar Pradesh, 226010 ",
  },
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/codeservirtechnologies",
      icon: faFacebook,
    },
    { name: "Instagram", href: "#", icon: faInstagram },
    { name: "GitHub", href: "#", icon: faGithub },
    { name: "YouTube", href: "#", icon: faYoutube },
    {
      name: "Twitter",
      href: "https://x.com/CodeServir",
      icon: faTwitter,
    },
    {
      name: "LinkedIn",
      href: "https://in.linkedin.com/company/codeservir-technologies-private-limited",
      icon: faLinkedin,
    },
  ],
};

const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-black  text-white relative overflow-hidden w-full font-poppins pt-16  ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* First column with logo, description, and social icons */}
          <div>
            <img
              src={logo}
              alt="Company Logo"
              className="w-36 h-36 -mt-8 object-cover sticky bottom-0 "
            />
            <h3>
              Enhancing Customer Experience with Innovative Web and Mobile App
              Solutions
            </h3>
          </div>

          {/* Second column with links */}
          <div className="mb-6">
            <h2 className="mb-4 text-sm font-semibold uppercase underline text-white">
              {footerData.sections[0].title}
            </h2>
            <ul className="text-white font-medium">
              {footerData.sections[0].links.map((link, index) => (
                <li key={index} className="mb-1">
                  <span
                    onClick={() => handleLinkClick(link.path)}
                    className="hover:underline cursor-pointe text-sm"
                  >
                    {link.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Third column with services links */}
          <div className="mb-6">
          <h2 className="mb-4 text-sm font-semibold uppercase underline text-white">
          {footerData.sections[1].title}
            </h2>
            <ul className="text-white font-medium">
              {footerData.sections[1].links.map((link, index) => (
                <li key={index} className="mb-1">
                  <span
                    onClick={() => handleLinkClick(link.path)}
                    className="hover:underline cursor-pointer  text-sm"
                  >
                    {link.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fourth column with contact details */}
          <div className="mb-6">
          <h2 className="mb-4 text-sm font-semibold uppercase underline text-white">
          Contact
            </h2>
            <ul className="text-white font-medium">
              <li className="mb-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-2 hover:text-[yellow]  text-sm"
                />
                {footerData.contact.email}
              </li>
              <li className="mb-1">
                <FontAwesomeIcon icon={faPhone} className="mr-1  text-sm" />
                {footerData.contact.phone}
              </li>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1  text-sm " />
                {footerData.contact.location}
              </li>
            </ul>
          </div>
        </div>  

        <div className="flex justify-between flex-col md:flex-row">
         
          <p className="mt-4 text-white text-sm max-w-md mx-auto md:mx-0">
            We Innovate, Coffee Helps! A team of mobility experts driven by an
            everlasting passion for app technology!
          </p>
          <div className="flex justify-center md:justify-start space-x-6 mt-4">
            {footerData.social.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-900 dark:hover:text-white"
              >
                <FontAwesomeIcon
                  icon={social.icon}
                  className="h-5 w-5 hover:text-[yellow]"
                />
                <span className="sr-only">{social.name} page</span>
              </a>
            ))}
          </div>
        </div>

        {/* Horizontal line */}
      </div>
        <hr className=" border-gray-600 lg:my-8 my-8 mx-10" />

        {/* Footer bottom section */}
        <div className="flex mx-10 flex-col-reverse my-8 items-center justify-center sm:flex-row sm:items-center">
          {/* Copyright notice */}
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center mb-4 sm:mb-0">
            © 2023{" "}
            <a href="#" className="hover:underline">
              CODESERVIR TECHNOLOGIES
            </a>
            . All Rights Reserved.
          </span>
        </div>
    </footer>
  );
};

export default Footer;
