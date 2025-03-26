import React from "react";
import checkIcon from "../../assets/menuIcon/checkIcon.svg";
const CheckButton = ({ text }) => {
  return (
    <div className="w-auto h-auto flex flex-row">
      <div className="w-auto h-auto flex flex-row ">
        <img src={checkIcon} alt="icon" width={20} height={20} />
        <img src={checkIcon} alt="icon" width={20} height={20} />
      </div>
      <p className="text-gray-400">{text}</p>
    </div>
  );
};

export default CheckButton;
