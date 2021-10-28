import React from "react";
import { bodyContent, headerContent } from "../../../Data";
const TableContent = () => {
  return (
    <div className="p-2 overflow-x-auto min-w-screen ">
      <div className="grid grid-cols-6 border-b border-gray-300">
        {headerContent.map(({ title }, index) => (
          <h6
            className={`text-xs font-semibold text-gray-500 py-2 ${
              index === 0 ? "col-span-3" : ""
            }`}
            key={index}
          >
            {title}
          </h6>
        ))}
      </div>
      <div className="sm:px-2">
        {bodyContent.section.map(
          ({ img, text, budget, completion, persons }, index) => (
            <div
              key={index}
              className="grid grid-cols-6 py-1 border-b border-gray-300"
            >
              <div key={index} className="col-span-3">
                <div className="flex items-center space-x-4 ">
                  <img
                    src={img}
                    alt={text}
                    className="w-8 h-8 sm:h-10 sm:w-10"
                  />
                  <h3 className="text-xs font-bold text-gray-700 sm:text-sm">
                    {text}
                  </h3>
                </div>
              </div>
              <div className="flex items-center -space-x-3 overflow-x-hidden members">
                {persons.map(({ img }, index) => (
                  <img
                    src={img}
                    alt="person"
                    key={index}
                    className="w-6 hover:scale-125 hover:z-10 transform transition-all duration-500 h-6 border-[2px] border-white rounded-full "
                  />
                ))}
              </div>
              <div className="budget">
                <h3 className="flex items-center w-full h-full px-2 text-sm font-semibold text-gray-600">
                  {budget}
                </h3>
              </div>
              <div className="flex flex-col items-start completion">
                <span className="text-xs font-semibold text-gray-600 sm:text-sm ">
                  {completion}%
                </span>
                <div className="w-full relative h-[5px] rounded-xl bg-gray-300">
                  <span
                    className={`absolute w-[75%] h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl`}
                  ></span>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TableContent;
