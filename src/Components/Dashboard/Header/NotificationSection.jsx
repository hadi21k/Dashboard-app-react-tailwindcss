import React, { useState } from "react";
import IvanaSquare from "../../../Assets/images/ivana-square.jpg";
import { ClockIcon } from "@heroicons/react/solid";
const NotificationSection = ({ showNoti }) => {
  return (
    <div
      className={`absolute right-0 top-[102%] min-h-[230px] origin-top rounded-xl w-full md:w-[280px] bg-white shadow-2xl z-10  px-6 py-3 transform duration-200 ease-out transition-all ${
        showNoti ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <div>
        <div className="flex items-center px-2 py-2 space-x-2 transition-all duration-500 hover:bg-white rounded-xl">
          <img
            src={IvanaSquare}
            alt="Ivana Square"
            className="w-10 h-10 rounded-xl"
          />
          <div className="flex flex-col space-y-2">
            <h3 className="text-sm font-semibold ">
              New Message from{" "}
              <span className="font-bold text-red-500">Ivana</span>
            </h3>
            <div className="flex items-center space-x-2">
              <ClockIcon className="w-5 h-5 text-gray-600" />
              <div className="text-sm font-semibold text-gray-600">13 minutes ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSection;
