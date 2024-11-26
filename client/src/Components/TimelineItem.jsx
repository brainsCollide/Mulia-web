import React from "react";

const TimelineItem = ({ year, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Year Badge */}
      <div className="bg-blue-500 text-white text-sm font-bold rounded-full w-12 h-12 flex items-center justify-center">
        {year}
      </div>
      {/* Description */}
      <div className="mt-4">
        <p className="text-gray-600 text-balance">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
