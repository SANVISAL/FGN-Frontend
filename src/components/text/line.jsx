import React from "react";

const Line = () => {
  return (
    <div className="w-[40px] h-auto flex flex-col items-center">
      <div className="w-[30px] h-[30px] bg-gray-400 rounded-full flex  items-center justify-center">
        <div className="w-[10px] h-[10px] bg-orange-600 rounded-full"></div>
      </div>
      <div className="w-[2px] h-[95px] bg-gray-400 rounded-full"></div>
      <div className="w-[30px] h-[30px] bg-gray-400 rounded-full flex  items-center justify-center">
        <div className="w-[10px] h-[10px] bg-orange-600 rounded-full"></div>
      </div>
      <div className="w-[2px] h-[95px] bg-gray-400 rounded-full"></div>
      <div className="w-[30px] h-[30px] bg-gray-400 rounded-full flex  items-center justify-center">
        <div className="w-[10px] h-[10px] bg-orange-600 rounded-full"></div>
      </div>
      <div className="w-[2px] h-[45px] bg-gray-400 rounded-full"></div>
    </div>
  );
};
export default Line;
