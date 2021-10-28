import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

const ReadMoreComp = ({ colorText, borderColor }) => {
  return (
    <div
      className={`flex ${colorText} items-center p-3 mt-2 space-x-2 transition-all duration-500 border-2 border-transparent cursor-pointer rounded-xl hover:${borderColor} group`}
    >
      <h3 className="font-semibold">Read More</h3>
      <ArrowRightIcon className="w-4 h-4 transition-all duration-500 group-hover:translate-x-1" />{" "}
    </div>
  );
};

export default ReadMoreComp;
