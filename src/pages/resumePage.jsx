import React from "react";
import { Label, Line } from "../components";
import resumeIcon from "../assets/menuIcon/resumeIcon.svg";
const ResumePage = () => {
  return (
    <div className="w-full h-auto bg-gray-900 flex flex-col rounded-xl  py-8 px-8 gap-10 ">
      <Label Icon={resumeIcon} text="Resume" />
      <div className="w-full h-auto flex flex-col gap-6 relative">
        <div className="w-full h-[15%] font-bold flex flex-row gap-3">
          <h2 className="text-5xl">Work</h2>
          <h2 className="text-green-500 text-5xl">Experience</h2>
        </div>
        <h2>
          Hi, my name is Brown Reddick and I began using WordPress when firsts
          began. spent most of my waking hours for the last ten years designing,
          programming and operating WordPress sites go beyond with exclusive
          designer.
        </h2>
        <div className="w-full h-auto flex flex-col justify-center gap-8 relative">
          <div className="absolute top-0 left-1/3 -translate-x-1/2 hidden md:flex">
            <Line />
          </div>
          <div className="w-auto h-auto flex lg:flex-row flex-col justify-between lg:border-transparent border-2 border-gray-800 rounded-lg px-2">
            {/* 01*/}
            <div className="w-auto h-auto flex lg:flex-col flex-row lg:justify-start justify-between">
              <h2 className="font-bold">Envato Market</h2>
              <h2>Mar, 2022 - Current</h2>
            </div>
            <div className="w-auto lg:w-[350px] h-auto flex flex-col gap-2">
              <h2 className="text-2xl font-bold">Diploma in Computer</h2>
              <h2 className="text-gray-500">
                Owing to advancements in product other designer technologies
                aute voluptate.
              </h2>
            </div>
          </div>
          <div className="w-auto h-auto flex lg:flex-row flex-col justify-between lg:border-transparent border-2 border-gray-800 px-2 rounded-lg">
            {/* 02 */}
            <div className="w-auto h-auto 0 flex lg:flex-col flex-row lg:justify-start justify-between">
              <h2 className="font-bold">Google</h2>
              <h2>2018 - 2022</h2>
            </div>
            <div className="w-auto h-auto lg:w-[350px]  flex flex-col gap-2">
              <h2 className="text-2xl font-bold">BSc in Engineering</h2>
              <h2 className="text-gray-500">
                Owing to advancements in product other designer technologies
                aute voluptate.
              </h2>
            </div>
          </div>
          <div className="w-auto h-auto flex lg:flex-row flex-col justify-between lg:border-transparent border-2 border-gray-800 px-2 rounded-lg">
            {/* 03 */}
            <div className="w-auto h-auto  flex lg:flex-col flex-row lg:justify-start justify-between">
              <h2>Apple</h2>
              <h2>2014-2018</h2>
            </div>
            <div className="w-auto h-auto  flex flex-col lg:w-[350px] gap-2">
              <h2 className="text-2xl font-bold">Php Development</h2>
              <h2 className="text-gray-500">
                Owing to advancements in product other designer technologies
                aute voluptate.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto flex flex-col gap-6 relative">
        <div className="absolute top-42 left-1/3 -translate-x-1/2 hidden md:flex">
          <Line />
        </div>
        <div className="w-full h-[15%] font-bold flex flex-row gap-2">
          <h2 className="text-5xl">My</h2>
          <h2 className="text-green-500 text-5xl">Education</h2>
        </div>
        <h2>
          Hi, my name is Brown Reddick and I began using WordPress when first
          began. spent most of my waking hours for the last ten years designing,
          programming and operating WordPress sites go beyond with exclusive
          designer.
        </h2>
        <div className="w-full h-auto flex flex-col justify-center gap-8">
          <div className="w-auto h-auto flex lg:flex-row flex-col justify-between lg:border-transparent border-2 border-gray-800 px-2 rounded-lg gap-4">
            {/* 04 */}
            <div className="w-auto h-auto flex lg:flex-col flex-row lg:justify-start justify-between">
              <h2 className="font-bold">Envato Market</h2>
              <h2>Mar, 2022 - Current</h2>
            </div>
            <div className="w-auto lg:w-[350px] h-auto flex flex-col gap-4">
              <h2 className="text-2xl font-bold">Diploma in Computer</h2>
              <h2 className="text-gray-500">
                Owing to advancements in product other designer technologies
                aute voluptate.
              </h2>
            </div>
          </div>
          <div className="w-auto h-auto flex lg:flex-row flex-col lg:border-transparent border-2 border-gray-800 justify-between px-2 rounded-lg">
            {/* 05 */}
            <div className="w-auto h-auto flex lg:flex-col flex-row lg:justify-start justify-between">
              <h2 className="font-bold">Google</h2>
              <h2>2018 - 2022</h2>
            </div>
            <div className="w-auto h-auto lg:w-[350px]  flex flex-col gap-2">
              <h2 className="text-2xl font-bold">BSc in Engineering</h2>
              <h2 className="text-gray-500">
                Owing to advancements in product other designer technologies
                aute voluptate.
              </h2>
            </div>
          </div>
          <div className="w-auto h-auto  flex lg:flex-row flex-col lg:border-transparent border-2 border-gray-800 px-2 justify-between rounded-lg">
            {/* 06 */}
            <div className="w-auto h-auto  flex lg:flex-col flex-row lg:justify-start justify-between ">
              <h2>Apple</h2>
              <h2>2014-2018</h2>
            </div>
            <div className="w-auto h-auto  flex flex-col lg:w-[350px] gap-2">
              <h2 className="text-2xl font-bold">Php Development</h2>
              <h2 className="text-gray-500">
                Owing to advancements in product other designer technologies
                aute voluptate.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
