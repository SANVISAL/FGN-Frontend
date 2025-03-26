import React from "react";

const Label = ({ Icon, text }) => {
  return (
    <div className="w-[150px] h-[50px] flex flex-row items-center justify-center border-2 border-orange-500 rounded-xl gap-3 px-2 py-2">
      <img src={Icon} alt="icon" className="w-6 h-6" />
      <span className="text-white font-semibold">{text}</span>
    </div>
  );
};
export default Label;
