import React from "react";

const TableRow = ({ isOnline, setIsOnline, img, borderBottom }) => {
  return (
    <tr
      className={`text-gray-400  border-gray-300  ${
        borderBottom ? "" : "border-b"
      }`}
    >
      <td className="py-4 px-6 w-[40%]">
        <div className="flex items-center w-full mr-24 space-x-4 ">
          <img src={img} alt="Squares" className="w-10 h-10 rounded-2xl" />
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900">Marie Eric</h3>
            <p className="text-sm text-gray-400 ">marie@creative-tim.com</p>
          </div>
        </div>
      </td>
      <td className="w-[20%]">
        <div className="flex flex-col w-full pr-12">
          <h3 className="font-medium text-gray-700 text-">Managaer</h3>
          <p className="text-sm font-normal">Organization</p>
        </div>
      </td>
      <td className="w-[15%]">
        <div className="flex items-center justify-start w-full pr-12 ">
          <button
            onClick={() => setIsOnline(!isOnline)}
            className="p-1 text-xs font-semibold text-white uppercase rounded bg-gradient-to-r from-[#00a700]  to-[#00be00]"
          >
            Online
          </button>
        </div>
      </td>
      <td className="w-[15%] pr-12  text-sm">23/4/2021</td>
      <td className="w-[10%] pr-12  text-sm">Edit</td>
    </tr>
  );
};

export default TableRow;
