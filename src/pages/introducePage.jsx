import { Label, LogoRolling, HideButton, CheckButton } from "../components";
import { homeIcon, profile } from "../assets";
import profile01 from "../assets/profile01.jpg";
import React from "react";

const IntroducePage = () => {
  return (
    <div className="w-full h-auto flex flex-col bg-gray-800 border border-gray-800 rounded-xl py-8 px-8 gap-6">
      <div className="w-auto h-auto flex flex-row gap-2">
        <div className="w-auto h-auto flex flex-col gap-12">
          <Label Icon={homeIcon} text="INTRODUCE" />
          <div className="w-full h-auto font-bold justify-center flex flex-col">
            <h1>I Craft The</h1>
            <h1 className="text-green-500">Digital World</h1>
          </div>
          <h3>
            I am a Frontend Developer at heart and, I create features that are
            best suited for the job at hand.
          </h3>
          <div className="w-full h-auto flex flex-row items-center gap-6">
            <CheckButton text="Available for work." />
            <CheckButton text="Full Time Job" />
          </div>
          <HideButton />
        </div>
        <div className="w-auto h-auto flex items-center justify-center overflow-hidden py-20 hidden md:block">
          <img src={profile} alt="profile" className="w-[600px] h-[300px]" />
        </div>
      </div>
      <div className="w-full h-auto flex flex-row items-center gap-4 overflow-hidden">
        <div className="w-auto h-auto flex flex-col border-l-2 border-l-green-500 justify-center pl-4">
          <h3>Trusted</h3>
          <h3>Companies</h3>
        </div>
        <LogoRolling />
      </div>
    </div>
  );
};

export default IntroducePage;
