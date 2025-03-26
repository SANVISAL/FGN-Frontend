import React from "react";

const StraightProgress = ({ value, text, side = 150 }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-[300px] sm:max-w-[500px] lg:max-w-[650px]">
      {/* Text & Percentage */}
      <div className="text-gray-700 flex flex-row justify-between w-full px-2">
        <p className="text-white text-xs sm:text-sm lg:text-base">{text}</p>
        <p className="text-white text-xs sm:text-sm lg:text-base">{value}%</p>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-300 rounded h-2 relative">
        <div
          className="bg-orange-600 h-2"
          style={{
            width: `${value}%`,
            transition: "width 0.5s ease-in-out",
          }}
        ></div>
      </div>
    </div>
  );
};

export default StraightProgress;
