import React from "react";
import "tailwindcss/tailwind.css";
import image from  "../../assets/commingsoon/commingsoon.png"

const ComingSoon = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#c0f3ff]">
      <div className="absolute   inset-0">
        <dotlottie-player
          src="https://lottie.host/7857b3fe-6a5f-43f6-909f-8703a414e919/bwTMjIz1wb.json"
          background="transparent"
          speed="1"
          style={{ width: "100%", height: "100%" }}
          loop
          autoplay
        ></dotlottie-player>
      </div>
      <div className="relative z-10 bg-white bg-opacity-80 rounded-lg shadow-lg p-8 max-w-3xl text-center">
        <img src={image} alt="Coming Soon" className="w-40 h-40 mx-auto mb-4" />
        <h1 className="text-5xl font-bold text-blue-500 mb-4 animate-bounce">
          Coming Soon
        </h1>
        <p className="text-gray-700 mb-8">
         "We're working hard to bring this page to you soon. Stay tuned!"
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
