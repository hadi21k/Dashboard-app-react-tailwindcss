const OrderContent = ({ icon, text, date }) => {
  return (
    <div className="flex items-center space-x-3">
      {icon}
      <div className="flex flex-col">
        <div className="text-sm font-semibold text-gray-800">{text}</div>
        <div className="text-xs font-medium text-gray-600">{date}</div>
      </div>
    </div>
  );
};

export default OrderContent;
