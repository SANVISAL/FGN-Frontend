import React from "react";
import StraightProgress from "../CircularProgress/straight";

const SkillPercentStraight = ({ images, value, text, side = 150 }) => {
  return (
    <div className="w-auto h-auto flex flex-row items-center justify-center gap-2">
      <img src={images} alt="Skill Icon" width={36} height={36} />
      <StraightProgress value={value} text={text} side={side} />
    </div>
  );
};

export default SkillPercentStraight;
