import React from "react";
import { CheckIcon, DotsVerticalIcon } from "@heroicons/react/outline";
import TableContent from "./TableContent";
const Table = () => {
  return (
    <div className="bg-white lg:w-[68%] w-full rounded-xl">
      <div className="flex items-center justify-between p-6 title">
        <div>
          <h3 className="font-semibold text-gray-600">Projects</h3>
          <h3 className="flex items-center space-x-[1px]">
            <CheckIcon className="w-5 h-5 text-blue-500" />
            <span className="font-semibold text-gray-400">
              <span className="text-gray-600">30 done</span> this month
            </span>
          </h3>
        </div>
        <div>
          <DotsVerticalIcon className="w-5 h-5 text-gray-600 cursor-pointer" />
        </div>
      </div>
      <TableContent />
    </div>
  );
};

export default Table;
