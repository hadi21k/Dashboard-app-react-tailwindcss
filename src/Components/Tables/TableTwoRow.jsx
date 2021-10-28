import { DotsVerticalIcon } from "@heroicons/react/solid";
const TableTwoRow = ({ img, price, text, status }) => {
  return (
    <tr>
      <td className="px-6 py-2">
        <div className="flex items-center w-full mr-24 space-x-1">
          <div className="grid w-10 h-10 place-items-center">
            <img src={img} className="w-full h-full" alt="Spotify" />
          </div>
          <h3 className="text-xs font-semibold text-gray-600 sm:text-base">
            {text}
          </h3>
        </div>
      </td>
      <td>
        <h3 className="mr-8 text-sm font-semibold text-gray-600">${price}</h3>
      </td>
      <td>
        <h3 className="mr-6 text-xs font-bold text-gray-600">{status}</h3>
      </td>
      <td>
        <div className="grid mr-6 place-items-center">
          <div className="h-[4px] relative w-[50%] rounded-xl bg-gray-300">
            <span className="absolute inset-0 w-[50%] h-full bg-[#00cc00] rounded-xl"></span>
          </div>
        </div>
      </td>
      <td>
        <h3 className="px-3">
          <DotsVerticalIcon className="w-5 h-5 text-gray-500" />
        </h3>
      </td>
    </tr>
  );
};

export default TableTwoRow;
