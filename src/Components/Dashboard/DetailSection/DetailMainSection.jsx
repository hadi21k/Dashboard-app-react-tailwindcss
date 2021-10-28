import React from "react";
import DetailContent from "./DetailContent";

import DetailSecondContent from "./DetailSecondContent";

const DetailMainSection = () => {
  return (
    <div className="flex flex-wrap space-y-4 lg:space-x-[2%] mt-2 lg:space-y-0">
      <DetailContent />
      <DetailSecondContent />
    </div>
  );
};

export default DetailMainSection;
