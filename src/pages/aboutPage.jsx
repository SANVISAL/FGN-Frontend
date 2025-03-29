import React from "react";
import Label from "../components/label/Label";
import aboutIcon from "../assets/menuIcon/aboutIcon.svg";
import { StatsSection } from "../components";

const AboutPage = () => {
  return (
    <div className="w-full h-auto bg-gray-900 border border-orange-600 flex flex-col rounded-xl  py-8 px-8 gap-10 ">
      <div className="w-full h-[6%]">
        <Label Icon={aboutIcon} text="ABOUT" />
      </div>
      <div className="w-full h-[90%]  flex flex-col gap-2">
        <div className="w-full h-[15%] font-bold flex flex-row gap-3">
          <h1>About</h1>
          <h1 className="text-green-500">Me</h1>
        </div>
        <h2>
          Hi, my name is Brown Reddick and I began using WordPress when first
          began. spent most of my waking hours for the last ten years designing,
          programming and operating WordPress sites go beyond with exclusive
          designer.
        </h2>
        <div className="w-auto h-[12%] grid lg:grid-cols-3 grid-cols-2 gap-2">
          <div className="w-auto h-auto flex flex-row rounded-full border-2 border-gray-600 items-center justify-center">
            <h2>HTML & CSS(95%)</h2>
          </div>
          <div className="w-auto h-auto flex flex-row rounded-full border-2 border-gray-600 items-center justify-center">
            <h2>HTML & CSS(95%)</h2>
          </div>
          <div className="w-auto h-auto flex flex-row rounded-full border-2 border-gray-600 items-center justify-center">
            <h2>HTML & CSS(95%)</h2>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col gap-4">
          <div className="w-auto h-auto flex lg:flex-row flex-col justify-start lg:gap-16 gap-2">
            <div className="w-auto h-auto flex flex-row gap-2">
              <div className="w-auto h-auto flex flex-row">
                <h3>Phone :</h3>
              </div>
              <div className="w-auto h-auto">
                <h3>+(2) 870 174 302</h3>
              </div>
            </div>
            <div className="w-auto h-auto  flex flex-row gap-4">
              <div className="w-auto h-auto flex">
                <h3>Skype :</h3>
              </div>
              <div className="w-auto h-auto flex">
                <h3>brown@com</h3>
              </div>
            </div>
          </div>
          <div className="w-auto h-auto flex lg:flex-row flex-col lg:gap-16 gap-2 ">
            <div className="w-auto h-auto flex flex-row gap-2">
              <div className="w-auto h-auto flex flex-row">
                <h3>Phone :</h3>
              </div>
              <div className="w-auto h-auto flex">
                <h3>+(2) 870 174 302</h3>
              </div>
            </div>
            <div className="w-auto h-auto flex flex-row gap-2">
              <div className="w-auto h-auto flex">
                <h3>Skype :</h3>
              </div>
              <div className="w-auto h-auto flex">
                <h3>brown@com</h3>
              </div>
            </div>
          </div>
          <div className="w-auto h-auto flex flex-row">
            <div className="w-auto h-auto flex flex-row gap-4">
              <div className="w-auto h-auto  flex">
                <h3>Skype :</h3>
              </div>
              <div className="w-auto h-auto flex">
                <h3>brown@com</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto ">
          <StatsSection />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
