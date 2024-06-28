import React from "react";
import privacy from "../../assets/maintance.jpg";
import Logobtn from "../../components/Logobtn/Logobtn";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/contact/Contact";

const PrivacyPolicy = () => {
  return (
    <>
      <Logobtn />

      <div className="relative z-50">
        <Navbar />
      </div>
      <div className="container mx-auto py-8 pt-[10rem]">
        <h1 className="text-7xl font-bold text-center mb-6 text-[#26baf6] font-lalita">Privacy Policy</h1>
      
        <div className="flex flex-wrap justify-center items-start">
          {/* Side Image */}
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
            <img
              src={privacy}
              alt="Privacy Policy"
              className="rounded-lg "
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-2/3 lg:pl-8">
            <p className="text-gray-800 mb-6">
              Codeservir Technologies ("we", "us", or "our") is committed to
              protecting your privacy. This Privacy Policy outlines how we
              collect, use, disclose, and safeguard your information when you
              visit our website or engage with our web application and mobile
              app services.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-800 mb-6">
              We may collect personal information, such as your name, email
              address, phone number, and company details, when you voluntarily
              submit it to us or through our website contact forms. We also
              collect non-personal information such as browser type, IP address,
              and pages visited to improve our website and services.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              How We Use Your Information
            </h2>
            <ul className="list-disc text-gray-800 mb-6 pl-4">
              <li>
                To provide and maintain our services, including web app and
                mobile app development.
              </li>
              <li>
                To communicate with you, respond to inquiries, and provide
                support.
              </li>
              <li>
                To personalize your experience and deliver relevant content.
              </li>
              <li>
                To improve our website, services, and customer experience.
              </li>
              <li>To comply with legal obligations.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Information Sharing
            </h2>
            <p className="text-gray-800 mb-6">
              We do not sell, trade, or otherwise transfer your personal
              information to outside parties unless we provide you with advance
              notice, except as described below:
            </p>
            <ul className="list-disc text-gray-800 mb-6 pl-4">
              <li>
                With trusted third parties who assist us in operating our
                website, conducting our business, or servicing you, as long as
                those parties agree to keep this information confidential.
              </li>
              <li>
                When required by law or to protect ours or others' rights,
                property, or safety.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Data Security
            </h2>
            <p className="text-gray-800 mb-6">
              We implement security measures to protect your personal
              information from unauthorized access, alteration, disclosure, or
              destruction.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Your Choices
            </h2>
            <p className="text-gray-800 mb-6">
              You can choose not to provide certain information, but this may
              limit your ability to use some features of our services.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-800 mb-6">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on our
              website.
            </p>
          </div>
        </div>
      </div>
      <Contact/>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
