import React from "react";
import SideImage from "../../assets/Iot.jpg"; // Replace with your side image path
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Logobtn from "../../components/Logobtn/Logobtn";

const TermsOfService = () => {
  return (
    <>
      <Logobtn />

      <div className="relative z-50">
        <Navbar />
      </div>
      <div className="container mx-auto px-4 py-8 pt-[10rem]">
        <div className="flex flex-wrap items-start">
          {/* Side Image */}
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
            <img
              src={SideImage}
              alt="Side Image"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-2/3 lg:pl-8">
            <h1 className="text-7xl font-bold mb-6 font-lilita text-[#26baf6]">Terms of Service</h1>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-800 mb-6">
              By accessing our website or using our services, you agree to
              comply with these Terms of Service. If you do not agree with any
              part of these terms, please do not use our website or services.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              2. Services
            </h2>
            <p className="text-gray-800 mb-6">
              Codeservir Technologies offers customized solutions for web
              application and mobile application development. Our services are
              tailored to meet your specific business needs, delivering
              high-quality, innovative digital solutions.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              3. User Responsibilities
            </h2>
            <p className="text-gray-800 mb-6">
              You agree to use our services responsibly and in compliance with
              all applicable laws and regulations. You are responsible for
              maintaining the confidentiality of any login information
              associated with your account.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              4. Intellectual Property
            </h2>
            <p className="text-gray-800 mb-6">
              All content, trademarks, logos, and intellectual property rights
              related to our services are the property of Codeservir
              Technologies. You may not use, reproduce, or distribute any
              content from our website or services without prior written
              consent.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              5. Privacy
            </h2>
            <p className="text-gray-800 mb-6">
              Your privacy is important to us. Please review our{" "}
              <a href="/PrivacyPolicy" className="text-blue-500">
                Privacy Policy
              </a>{" "}
              to understand how we collect, use, and protect your personal
              information.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-800 mb-6">
              Codeservir Technologies shall not be liable for any direct,
              indirect, incidental, special, or consequential damages resulting
              from the use or inability to use our services, including but not
              limited to loss of profits, data, or business interruption.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              7. Changes to Terms
            </h2>
            <p className="text-gray-800 mb-6">
              Codeservir Technologies reserves the right to update or modify
              these Terms of Service at any time. We will notify you of any
              changes by posting the updated terms on our website. Continued use
              of our services after such modifications shall constitute your
              consent to the updated terms.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              8. Contact Us
            </h2>
            <p className="text-gray-800 mb-6">
              If you have any questions or concerns regarding these Terms of
              Service, please contact us at:
            </p>
            <ul className="list-disc text-gray-800 mb-6 pl-4">
              <li>Codeservir Technologies</li>
              <li>www.codeservir.com</li>
              <li>9455791624</li>
              <li>info@codeservir.com</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsOfService;
