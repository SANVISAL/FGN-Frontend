import React from "react";
import { Label, ImageSlider } from "../components";
import skillIcon from "../assets/menuIcon/skillIcon.svg";
const SkillPage = () => {
  return (
    <div className="w-full h-auto bg-gray-900 flex flex-col rounded-xl  py-8 px-8 gap-10 ">
      <Label Icon={skillIcon} text="Skill" />
      <div className="w-full h-auto flex flex-col gap-14">
        <div className="w-full h-[15%] font-bold flex flex-row gap-3">
          <h2 className="text-5xl">My</h2>
          <h2 className="text-green-500 text-5xl">Advantages</h2>
        </div>
        <h2>
          Hi, my name is Brown Reddick and I began using WordPress when first
          began. spent most of my waking hours for the last ten years designing,
          programming and operating WordPress sites go beyond with exclusive
          designer.
        </h2>
        <div className="w-full h-auto lg:h-[50%] flex flex-row items-center justify-center gap-8">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
