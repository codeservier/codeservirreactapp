import React from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faDiscord, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const footerData = {
  sections: [
    {
      title: "Links",
      links: [
        { name: "About", path: "/About" },
        { name: "Services", path: "/Services" },
        { name: "Brand Center", path: "/brand-center" },
        { name: "Blog", path: "/blog" },
      ],
    },
    {
      title: "Help center",
      links: [
        { name: "Discord Server", href: "#" },
        { name: "Twitter", href: "#" },
        { name: "Facebook", href: "#" },
        { name: "Contact Us", path: "/ContactPage" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", path: "/services/web-development" },
        { name: "App Development", path: "/services/app-development" },
        { name: "UI/UX Design", path: "/services/ui-ux-design" },
        { name: "SEO", path: "/services/seo" },
      ],
    },
  ],
  contact: {
    email: "info@gmail.com",
    phone: "+91 9455791624",
    location: "Vishesh Khand Gomti Nagar, Lucknow",
  },
  social: [
    { name: "Facebook", href: "#", icon: faFacebook },
    { name: "Discord", href: "#", icon: faDiscord },
    { name: "GitHub", href: "#", icon: faGithub },
    { name: "Dribbble", href: "#", icon: faDribbble },
  ],
};

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#000000] text-white relative overflow-hidden w-full font-poppins">
      <div className="absolute inset-x-0 bottom-0 h-16 bg-white dark:bg-gray-900 transform -skew-y-6"></div>
      <div className="mx-auto px-4 py-6 sm:px-6 lg:px-8 max-w-screen-xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-center md:text-left">
          {/* First column with logo, description, and social icons */}
          <div className="mb-6">
            <img src={logo} alt="Company Logo" className="h-[150px] mx-auto md:mx-0" />
           
            <div className="flex justify-center md:justify-start space-x-6 mt-4">
              {footerData.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <FontAwesomeIcon icon={social.icon} className="h-5 w-5 hover:text-[yellow]" />
                  <span  className="sr-only">{social.name} page</span>
                </a>
              ))}
            </div>
          </div>

          {/* Second column with links */}
          <div className="mb-6">
            <h2 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              {footerData.sections[0].title}
            </h2>
            <ul className="text-gray-600 dark:text-gray-400 font-medium">
              {footerData.sections[0].links.map((link, index) => (
                <li key={index} className="mb-2">
                  <span onClick={() => navigate(link.path)} className="hover:underline cursor-pointer">
                    {link.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Third column with help center links */}
          <div className="mb-6">
            <h2 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              {footerData.sections[1].title}
            </h2>
            <ul className="text-gray-600 dark:text-gray-400 font-medium">
              {footerData.sections[1].links.map((link, index) => (
                <li key={index} className="mb-2">
                  <a onClick={() => navigate(link.path)} className="hover:underline">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Fourth column with services links */}
          <div className="mb-6">
            <h2 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              {footerData.sections[2].title}
            </h2>
            <ul className="text-gray-600 dark:text-gray-400 font-medium">
              {footerData.sections[2].links.map((link, index) => (
                <li key={index} className="mb-2">
                  <span onClick={() => navigate(link.path)} className="hover:underline cursor-pointer">
                    {link.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fifth column with contact details */}
          <div className="mb-6">
            <h2 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Contact
            </h2>
            <ul className="text-gray-600  dark:text-gray-400 font-medium">
              <li className="mb-2 ">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 hover:text-[yellow]" />
                {footerData.contact.email}
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                {footerData.contact.phone}
              </li>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                {footerData.contact.location}
              </li>
            </ul>
          </div>
        </div>
        {/* Horizontal line */}
        <hr className="my-6 border-gray-200 dark:border-gray-700 lg:my-8" />

        {/* Footer bottom section */}
        <div className="flex flex-col-reverse items-center justify-center sm:flex-row sm:items-center">
          {/* Copyright notice */}
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center mb-4 sm:mb-0">
            © 2023{" "}
            <a href="#" className="hover:underline">
              CODESERVIR TECHNOLOGIES
            </a>
            . All Rights Reserved.
          </span>

          {/* Social media icons */}
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
