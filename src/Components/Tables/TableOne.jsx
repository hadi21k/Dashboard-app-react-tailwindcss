import React, { useState } from "react";
import Squares from "../../Assets/images/marie.jpg";
import TableRow from "./TableRow";
const TableOne = () => {
  const [isOnline, setIsOnline] = useState(false);
  return (
    <div className="w-full overflow-x-auto">
      <table className="table w-full bg-white rounded-xl">
        <thead>
          <tr>
            <td className="p-6 font-semibold text-gray-600">Authors table</td>
          </tr>
        </thead>
        <tbody>
          <tr className="text-xs font-medium text-gray-400 border-b border-gray-300 ">
            <td className="w-[40%] py-2 px-6">Author</td>
            <td className="w-[20%]">Function</td>
            <td className="w-[15%]">Status</td>
            <td className="w-[15%]">Employed</td>
            <td className="w-[10%]">Action</td>
          </tr>
          <TableRow
            isOnline={isOnline}
            setIsOnline={setIsOnline}
            img={Squares}
          />
          <TableRow
            isOnline={isOnline}
            setIsOnline={setIsOnline}
            img={Squares}
          />
          <TableRow
            isOnline={isOnline}
            setIsOnline={setIsOnline}
            img={Squares}
          />
          <TableRow
            isOnline={isOnline}
            setIsOnline={setIsOnline}
            img={Squares}
          />
          <TableRow
            isOnline={isOnline}
            setIsOnline={setIsOnline}
            img={Squares}
            borderBottom={true}
          />
        </tbody>
      </table>
    </div>
  );
};
export default TableOne;
