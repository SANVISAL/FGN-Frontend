import React from "react";
import { Label, CardSlider } from "../components";
import testimonailIcon from "../assets/menuIcon/testimonailIcon.svg";
const TestimonailPage = () => {
  return (
    <div className="w-full h-auto bg-gray-900  border border-orange-600  flex flex-col rounded-xl  py-8 px-8 gap-10 ">
      <Label Icon={testimonailIcon} text="TESTIMONIAL" />
      <div className="w-full h-auto flex flex-col gap-12">
        <div className="w-full h-[15%] font-bold flex flex-row gap-3">
          <h2 className="text-4xl lg:text-5xl">What</h2>
          <h2 className="text-green-500 lg:text-5xl text-4xl">People Say</h2>
        </div>
        <h2>
          Hi, my name is Brown Reddick and I began using WordPress when first
          began. spent most of my waking hours for the last ten years designing,
          programming and operating WordPress sites go beyond with exclusive
          designer.
        </h2>
        <CardSlider />
      </div>
    </div>
  );
};

export default TestimonailPage;
