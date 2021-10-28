import Header from "../Dashboard/Header/Header";
import TableOne from "./TableOne";
import TableTwo from "./TableTwo";

const Tables = () => {
  return (
    <div className="w-screen px-10 py-4 relative min-h-screen lg:ml-[243px] transition-all duration-500 bg-gray-100">
      <Header sectionName="Table" />
      <div className="mt-4 ">
        <TableOne />
        <TableTwo />
      </div>
    </div>
  );
};

export default Tables;
