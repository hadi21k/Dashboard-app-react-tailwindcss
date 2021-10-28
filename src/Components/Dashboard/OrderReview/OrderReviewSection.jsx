import { ArrowUpIcon } from "@heroicons/react/solid";
import React from "react";
import OrderContent from "./OrderContent";
import { fifthData, firstData, fourthData, secondData, sixthData, thirdData } from "./orderData";

const OrderReviewSection = () => {
  return (
    <div className="lg:w-[30%] w-full px-3 py-4 bg-white  rounded-xl">
      <div className="flex flex-col space-y-3 title">
        <h3 className="text-lg font-semibold text-gray-800">Orders review</h3>
        <p className="flex items-center space-x-1">
          <ArrowUpIcon className="w-5 h-5 text-[#00a300]" />
          <span className="font-semibold text-gray-600">
            24% <span className="font-medium text-gray-400">this month</span>
          </span>
        </p>
      </div>
      <div className="flex flex-col mt-6 space-y-6 content">
        <OrderContent {...firstData} />
        <OrderContent {...secondData} />
        <OrderContent {...thirdData} />
        <OrderContent {...fourthData} />
        <OrderContent {...fifthData} />
        <OrderContent {...sixthData} />
      </div>
    </div>
  );
};

export default OrderReviewSection;
