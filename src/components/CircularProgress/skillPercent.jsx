import React from "react";
import CircularProgress from "./cricular";
const SkillPercent = ({ images, value, text, side = 150, isCurved = true }) => {
  return (
    <div className="w-auto h-auto flex flex-col items-center justify-center gap-2">
      <img src={images} alt="image01" />
      <CircularProgress
        value={value}
        text={text}
        side={side}
        isCurved={isCurved}
      ></CircularProgress>
    </div>
  );
};
export default SkillPercent;
