import React from "react";
import { ServiceCard, Label } from "../components";
import Icon01 from "../assets/menuIcon/serviceIcon/Icon01.svg";
import Icon02 from "../assets/menuIcon/serviceIcon/Icon02.svg";
import Icon03 from "../assets/menuIcon/serviceIcon/Icon03.svg";
import Icon04 from "../assets/menuIcon/serviceIcon/Icon04.svg";
// import homeIcon from "../assets/homeIcon.svg";
import serviceIcon from "../assets/menuIcon/serviceIcon.svg";
const ServicePage = () => {
  return (
    <div className="w-full h-auto bg-gray-900 flex flex-col rounded-xl  border border-orange-600  py-8 px-8 gap-10 ">
      <Label Icon={serviceIcon} text="Service" />
      <div className="w-full h-auto flex flex-col gap-6">
        <div className="w-full h-[15%] font-bold flex flex-row gap-3">
          <h2 className="text-5xl">My</h2>
          <h2 className="text-green-500 text-5xl">Service</h2>
        </div>
        <h2>
          Hi, my name is Brown Reddick and I began using WordPress when first
          began. spent most of my waking hours for the last ten years designing,
          programming and operating WordPress sites go beyond with exclusive
          designer.
        </h2>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ServiceCard number="01" text="UI/UX Design" Icon={Icon01} />
            <ServiceCard number="02" text="Web Development" Icon={Icon02} />
            <ServiceCard number="03" text="SEO / Marketing" Icon={Icon03} />
            <ServiceCard number="04" text="Branding & Strategy" Icon={Icon04} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
