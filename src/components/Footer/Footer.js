import React from "react";
import logo from "../../assets/logo.png"; // Replace with the path to your logo

const footerData = {
  sections: [
    {
      title: "Links",
      links: [
        { name: "About", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Brand Center", href: "#" },
        { name: "Blog", href: "#" },
      ],
    },
    {
      title: "Help center",
      links: [
        { name: "Discord Server", href: "#" },
        { name: "Twitter", href: "#" },
        { name: "Facebook", href: "#" },
        { name: "Contact Us", href: "#" },
      ],
    },
  ],
  contact: {
    email: "contact@yourcompany.com",
    phone: "+123456789",
    location: "123 Street Name, City, Country",
  },
  social: [
    { name: "Facebook", href: "#", iconPath: "" },
    { name: "Discord", href: "#", iconPath: "" },
    { name: "GitHub", href: "#", iconPath: "" },
    { name: "Dribbble", href: "#", iconPath: "" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-[#000000] relative overflow-hidden">
      {/* Curved bottom edge */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-white dark:bg-gray-900 transform -skew-y-6"></div>

      <div className="mx-auto px-4 py-6 sm:px-6 lg:px-8 max-w-screen-xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* First column with logo, description, and social icons */}
          <div className="mb-6">
            <img src={logo} alt="Logo" className="h-20 mx-auto md:mx-0" />
            <p className=" text-gray-600 dark:text-gray-400">
              CodeServir is a family of futuristic solutions with complete End
              to End Web Development, App Development, Designing, UI/UX, Tech
              Consultation, Search Engine Optimization, Social Media Marketing,
              Content Creation, Cloud Solutios and many more services .
            </p>
            <div className="flex justify-center md:justify-start space-x-6 mt-4">
              {footerData.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={social.iconPath}></path>
                  </svg>
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
                  <a href={link.href} className="hover:underline">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Third column with contact details */}
          <div className="mb-6">
            <h2 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Contact
            </h2>
            <ul className="text-gray-600 dark:text-gray-400 font-medium">
              <li className="mb-2">{footerData.contact.email}</li>
              <li className="mb-2">{footerData.contact.phone}</li>
              <li>{footerData.contact.location}</li>
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
              YourCompany™
            </a>
            . All Rights Reserved.
          </span>

          {/* Social media icons */}
          <div className="flex space-x-6 sm:justify-end">
            {footerData.social.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={social.iconPath}></path>
                </svg>
                <span className="sr-only">{social.name} page</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
