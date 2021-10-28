const MoneySection = ({ percent, value, icon, state }) => {
  return (
    <div className="flex items-center justify-between px-3 py-5 duration-500 transform bg-white shadow-xl transtion-all hover:translate-y-1 rounded-xl">
      <div className="flex flex-col space-y-2 text-section">
        <h3 className="font-bold text-gray-500">{state}</h3>
        <div className="flex items-center space-x-1">
          <p className="text-lg font-semibold text-gray-800">${value}</p>
          {percent > 0 ? (
            <span className="mt-2 text-sm font-bold text-green-500">
              +{percent}%
            </span>
          ) : (
            <span className="mt-2 text-sm font-bold text-red-500">
              {percent}%
            </span>
          )}
        </div>
      </div>
      <div className="logo-section">
        <div className="flex items-center justify-center text-white bg-gradient-to-br from-blue-300 to-blue-600 h-14 w-14 rounded-xl">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default MoneySection;
