import React from "react";

const Label = ({ Icon, text }) => {
  return (
    <div className="w-[140px] h-[35px] flex flex-row items-center justify-center border border-gray-500 rounded-2xl gap-3 px-2 py-2">
      <img src={Icon} alt="icon" className="w-4 h-4" />
      <span className="text-white text-[12px] font-semibold">{text}</span>
    </div>
  );
};
export default Label;
