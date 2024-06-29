import React from "react";
import SideImage from "../../assets/backgrounds_images/termbg2.png"; // Replace with your side image path
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Logobtn from "../../components/Logobtn/Logobtn";
import termbg from "../../assets/backgrounds_images/termbg.jpg"

const TermsOfService = () => {
  return (
    <div className="bg-termbg">
      <Logobtn />
      <div className="relative z-50">
        <Navbar />
      </div>
      <div className="container mx-auto px-4 py-8 pt-[10rem] flex flex-col items-center ">
        <h1 className="text-8xl font-bold mb-6 font-lilita text-[#26baf6] text-center">
          Terms & Condition's
        </h1>
        <div className="w-full md:w-3/4 flex flex-col items-center">
          {/* Side Image */}
          <div className="w-1/2 mb-8">
            <img
              src={SideImage}
              alt="Side Image"
              className=""
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-3/4 lg:pl-8">
            <div className="text-gray-800 space-y-8">
              <div>
                <h2 className="text-3xl font-semibold text-[#09caff] mb-4">
                  Acceptance of Terms
                </h2>
                <p className="text-gray-800 mb-6 text-xl ">
                  By accessing our website or using our services, you agree to
                  comply with these Terms of Service. If you do not agree with
                  any part of these terms, please do not use our website or
                  services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  2. Services
                </h2>
                <p className="text-gray-800 mb-6">
                  Codeservir Technologies offers customized solutions for web
                  application and mobile application development. Our services
                  are tailored to meet your specific business needs, delivering
                  high-quality, innovative digital solutions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  3. User Responsibilities
                </h2>
                <p className="text-gray-800 mb-6">
                  You agree to use our services responsibly and in compliance
                  with all applicable laws and regulations. You are responsible
                  for maintaining the confidentiality of any login information
                  associated with your account.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  4. Intellectual Property
                </h2>
                <p className="text-gray-800 mb-6">
                  All content, trademarks, logos, and intellectual property
                  rights related to our services are the property of Codeservir
                  Technologies. You may not use, reproduce, or distribute any
                  content from our website or services without prior written
                  consent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
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
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  6. Limitation of Liability
                </h2>
                <p className="text-gray-800 mb-6">
                  Codeservir Technologies shall not be liable for any direct,
                  indirect, incidental, special, or consequential damages
                  resulting from the use or inability to use our services,
                  including but not limited to loss of profits, data, or
                  business interruption.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  7. Changes to Terms
                </h2>
                <p className="text-gray-800 mb-6">
                  Codeservir Technologies reserves the right to update or modify
                  these Terms of Service at any time. We will notify you of any
                  changes by posting the updated terms on our website. Continued
                  use of our services after such modifications shall constitute
                  your consent to the updated terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;