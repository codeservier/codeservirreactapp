import React from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faDiscord,
  faGithub,
  faDribbble,
  faInstagram,
  faYoutube,
  faTwitter,
  faLinkedin,
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
        { name: "Privacy And Policy", path: "/PrivacyPolicy" },
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
    phone: "+91 9455791624",
    location: "Vishesh Khand Gomti Nagar, Lucknow",
  },
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/codeservir",
      icon: faFacebook,
    },
    { name: "instagram", href: "#", icon: faInstagram },
    { name: "GitHub", href: "#", icon: faGithub },
    { name: "Youtube", href: "#", icon: faYoutube },
    {
      name: "Twitter",
      href: "https://twitter.com/codeservir",
      icon: faTwitter,
    },
    {
      name: "Linkdin",
      href: "https://www.linkedin.com/company/codeservir",
      icon: faLinkedin,
    },
  ],
};

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#000000] text-white relative overflow-hidden w-full font-poppins pt-16 ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* First column with logo, description, and social icons */}
          <div className="    ">
            <img
              src={logo}
              alt="Company Logo"
              className="h-12 w-12 object-cover"
            />
            <h3>
              Enhancing Customer Experience with Innovative Web and Mobile App
              Solutions
            </h3>
            <p className="mt-4 text-gray-400 text-sm max-w-md mx-auto md:mx-0">
              We Innovate, Coffee Helps! A team of mobility experts driven by an
              everlasting passion for app technology!
            </p>
            <div className="flex justify-center md:justify-start space-x-6 mt-4">
              {footerData.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="block"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
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

          {/* Second column with links */}
          <div className="mb-6">
            <h2 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              {footerData.sections[0].title}
            </h2>
            <ul className="text-gray-600 dark:text-gray-400 font-medium">
              {footerData.sections[0].links.map((link, index) => (
                <li key={index} className="mb-2">
                  <span
                    onClick={() => navigate(link.path)}
                    className="hover:underline cursor-pointer"
                  >
                    {link.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Third column with services links */}
          <div className="mb-6">
            <h2 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              {footerData.sections[1].title}
            </h2>
            <ul className="text-gray-600 dark:text-gray-400 font-medium">
              {footerData.sections[1].links.map((link, index) => (
                <li key={index} className="mb-2">
                  <span
                    onClick={() => navigate(link.path)}
                    className="hover:underline cursor-pointer"
                  >
                    {link.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fourth column with contact details */}
          <div className="mb-6">
            <h2 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Contact
            </h2>
            <ul className="text-gray-600 dark:text-gray-400 font-medium">
              <li className="mb-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-2 hover:text-[yellow]"
                />
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
