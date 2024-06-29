import React from "react";
import { ReactComponent as PathCurve } from "../../assets/svgfiles/pathCurve.svg"; // Ensure the path is correct



const DevCycle = () => {
  return (
    <div className="relative p-10 bg-[#0c2b46]">
      <h1 className="text-4xl md:text-8xl font-semibold text-center mb-3 md:mb-10 text-[#26baf6] font-lilita">Development Cycle</h1>
      <div className="relative w-full h-[600px]">
        <PathCurve className="absolute w-full h-full" />
      </div>
    </div>
  );
};

export default DevCycle;