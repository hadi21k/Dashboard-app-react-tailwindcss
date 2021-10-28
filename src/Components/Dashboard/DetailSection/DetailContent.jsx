import React from "react";
import Rocket from "../../../Assets/images/illustrations/rocket-white.png";
import ReadMoreComp from "./ReadMoreComp";
const DetailContent = () => {
  return (
    <div className="flex flex-wrap flex-col justify-between w-full col-span-3 p-6 space-y-6 lg:w-[60%] bg-white border rounded-xl md:space-y-0 md:flex-row">
      <div className="flex flex-col items-start justify-between px-4 w-full lg:w-[60%] py-6 space-y-4 text-content">
        <div>
          <h3 className="text-base font-semibold text-gray-600">
            Build by developers
          </h3>
          <h2 className="text-xl font-bold text-gray-800">Soft UI Dashboard</h2>
          <p className="max-w-lg mt-2 text-base font-semibold text-gray-500">
            From colors, cards, typography to complex elements, you will find
            the full documentation.
          </p>
        </div>
        <ReadMoreComp colorText="text-gray-700" borderColor="border-gray-600" />
      </div>
      <div className="image-content bg-gradient-to-br from-blue-400 to-blue-700 p-3 rounded-xl overflow-hidden w-full lg:w-[40%] flex items-center justify-center">
        <img
          src={Rocket}
          alt="Ivanick"
          className="w-full transition-all duration-700 transform lg:hover:scale-125 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default DetailContent;
