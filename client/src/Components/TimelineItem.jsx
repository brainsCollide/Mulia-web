import React from "react";

const TimelineItem = ({ year, description }) => {
  return (
    <div className="flex items-start mb-8 relative">
      {/* Year Badge */}
      <div className="absolute -left-8 bg-blue-500 text-white text-sm font-bold rounded-full w-12 h-12 flex items-center justify-center">
        {year}
      </div>
      {/* Description */}
      <div className="ml-8">
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
