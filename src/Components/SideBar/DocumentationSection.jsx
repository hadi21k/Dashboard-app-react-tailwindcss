import { StarIcon } from "@heroicons/react/outline";
const DocumentationSection = () => {
  return (
    <div className="relative w-full px-4 py-6 shadow-2xl rounded-xl shadow-3xl documentation">
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-blue-700 opacity-60 rounded-xl"></span>
      <div className="relative flex items-center justify-center w-10 h-10 bg-white shadow-2xl rounded-xl">
        <StarIcon className="w-5 h-5 text-blue-500" />
      </div>
      <div className="relative mt-4 text">
        <h3 className="text-lg font-semibold text-white">Need Help?</h3>
        <p className="mt-2 text-sm font-semibold text-white">
          Please check our docs
        </p>
        <button className="w-full py-2 mt-4 text-sm font-semibold text-gray-900 uppercase transition-all duration-500 transform bg-gray-100 shadow-2xl hover:bg-gray-200 hover:text-gray-900 hover:translate-y-1 rounded-xl ">
          Documentation
        </button>
      </div>
    </div>
  );
};

export default DocumentationSection;
