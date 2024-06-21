import React from 'react';

const footerData = {
  sections: [
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Brand Center", href: "#" },
        { name: "Blog", href: "#" }
      ]
    },
    {
      title: "Help center",
      links: [
        { name: "Discord Server", href: "#" },
        { name: "Twitter", href: "#" },
        { name: "Facebook", href: "#" },
        { name: "Contact Us", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Licensing", href: "#" },
        { name: "Terms & Conditions", href: "#" }
      ]
    },
    {
      title: "Download",
      links: [
        { name: "iOS", href: "#" },
        { name: "Android", href: "#" },
        { name: "Windows", href: "#" },
        { name: "MacOS", href: "#" }
      ]
    }
  ],
  social: [
    { name: "Facebook", href: "#", iconPath: "" },
    { name: "Discord", href: "#", iconPath: "5" },
    { name: "GitHub", href: "#", iconPath: "" },
    { name: "Dribbble", href: "#", iconPath: "" }
  ]
};

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Curved bottom edge */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-white dark:bg-gray-900 transform -skew-y-6"></div>

      <div className="mx-auto px-4 py-6 sm:px-6 lg:px-8 max-w-screen-xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {footerData.sections.map((section, index) => (
            <div key={index} className="mb-6">
              <h2 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                {section.title}
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                {section.links.map((link, index) => (
                  <li key={index} className="mb-2">
                    <a href={link.href} className="hover:underline">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 lg:my-8" />
        <div className="flex flex-col-reverse items-center justify-center sm:flex-row sm:items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center mb-4 sm:mb-0">
            © 2023 <a href="#" className="hover:underline">YourCompany™</a>. All Rights Reserved.
          </span>
          <div className="flex space-x-6 sm:justify-end">
            {footerData.social.map((social, index) => (
              <a key={index} href={social.href} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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