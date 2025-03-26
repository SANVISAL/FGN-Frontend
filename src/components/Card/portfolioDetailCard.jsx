import React from "react";
import Label from "../label/Label";
import { serviceIcon, loginImage } from "../../assets";
import SkillPercent from "../CircularProgress/skillPercent";
import html from "../../assets/logo/html.svg";
import SkillPercentStraight from "../CircularProgress/skillPercentStraight";
const PortfolioDetailPage = () => {
  return (
    <div className="w-full h-auto bg-gray-900 flex flex-col rounded-xl  py-8 px-8 gap-10 ">
      <Label Icon={serviceIcon} text="Project Detail" />
      <div className="w-full h-auto flex flex-col gap-6">
        <div className="w-full h-auto font-bold flex flex-row  gap-3">
          <h2 className="text-3xl font-bold">
            Three wine glasses filled with candies
          </h2>
        </div>
        <div className="w-full h-auto flex justify-center overflow-hidden rounded-xl">
          <img src={loginImage} alt="Project Image" />
        </div>
        <div className="w-full h-auto flex flex-row justify-between">
          <div className="w-auto h-auto">
            <h2>CLIENT</h2>
            <h2 className="text-gray-400">Evato theme</h2>
          </div>
          <div className="w-auto h-auto">
            <h2 className="font-bold">SERVICE</h2>
            <h2 className="text-gray-400">Tips & Tricks ,Design</h2>
          </div>
          <div className="w-auto h-auto">
            <h2>DURATION</h2>
            <h2 className="text-gray-400">108hrs</h2>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col gap-2">
          <h2 className="text-3xl font-bold">Project Description</h2>
          <h2 className="text-gray-400">
            Patent authorities globally are grappling with the challenge of
            redefining their approach to handling inventions generated not by
            human ingenuity but by AI. It has sparked considerable debate within
            the intellectual property community. This analysis initiates a
            three-part series that delves into the influence of AI on
            intellectual property rights.
          </h2>
          <div className="w-full flex flex-col justify-center">
            <h2 className="text-gray-400">
              . Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            </h2>
            <h2 className="text-gray-400">
              . Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            </h2>
            <h2 className="text-gray-400">
              . Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            </h2>
          </div>
        </div>
        <div className="w-full flex flex-row justify-between gap-6">
          <div className="w-auto h-auto bg-green-500 rounded-xl overflow-hidden">
            <img src="" alt="image01" width={350} height={250} />
          </div>
          <div className="w-auto h-auto bg-green-500 rounded-xl overflow-hidden">
            <img src="" alt="image02" width={350} height={250} />
          </div>
        </div>
        <div className="w-full h-auto flex flex-col gap-6">
          <h2 className="text-2xl font-bold">Technologies</h2>
          <SkillPercentStraight
            images={html}
            value={90}
            text={"HTML"}
            side={650}
          />
          <SkillPercentStraight
            images={html}
            value={90}
            text={"HTML"}
            side={650}
          />
          <SkillPercentStraight
            images={html}
            value={80}
            text={"HTML"}
            side={650}
          />
          <SkillPercentStraight
            images={html}
            value={50}
            text={"HTML"}
            side={650}
          />
          <SkillPercentStraight
            images={html}
            value={70}
            text={"HTML"}
            side={650}
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailPage;
