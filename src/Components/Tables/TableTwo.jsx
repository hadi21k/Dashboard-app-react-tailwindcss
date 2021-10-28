import {
  fifthRowData,
  firstRowData,
  fourthRowData,
  secondRowData,
  sixthRowData,
  thirdRowData,
} from "./TableTwoData";
import TableTwoRow from "./TableTwoRow";

const TableTwo = () => {
  return (
    <div className="w-full mt-4 mb-4 overflow-x-auto">
      <table className="w-full bg-white rounded-xl">
        <thead>
          <tr>
            <td className="p-6 font-semibold text-gray-600">Projects table</td>
          </tr>
        </thead>
        <tbody>
          <tr className="text-xs font-semibold text-gray-400">
            <td className="px-6 py-2 w-[25%]">Project</td>
            <td className="w-[15%]">Budget</td>
            <td className="w-[15%]">Status</td>
            <td className="w-[35%]">Completion</td>
            <td className="w-[10%]">Action</td>
          </tr>
          <TableTwoRow {...firstRowData} />
          <TableTwoRow {...secondRowData} />
          <TableTwoRow {...thirdRowData} />
          <TableTwoRow {...fourthRowData} />
          <TableTwoRow {...fifthRowData} />
          <TableTwoRow {...sixthRowData} />
        </tbody>
      </table>
    </div>
  );
};

export default TableTwo;
