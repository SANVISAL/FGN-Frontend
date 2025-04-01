import React from "react";
import { Label, PortfolioCard, SeeMoreButton } from "../components";
import { loginImage, portfolioIcon } from "../assets";
// import portfolioIcon from "../assets/menuIcon/portfolioIcon.svg";

const PortfolioPage = ({ onCardClick }) => {
  if (!onCardClick) {
    console.error("onCardClick is missing!");
    return null;
  }
  return (
    <div className="w-auto h-auto bg-gray-800 flex  border border-gray-800  flex-col rounded-xl  py-8 px-8 gap-6 ">
      <Label Icon={portfolioIcon} text="Portfolio " />
      <div className="w-full h-auto flex flex-col gap-6">
        <div className="w-full h-auto font-bold flex flex-row gap-3">
          <h2 className="text-5xl">Feature</h2>
          <h2 className="text-green-500 text-5xl">Projects</h2>
        </div>
        <h2>
          Hi, my name is Brown Reddick and I began using WordPress when first
          began. spent most of my waking hours for the last ten years designing,
          programming and operating WordPress sites go beyond with exclusive
          designer.
        </h2>
        <div className="lg:w-full h-auto lg:h-[50%] flex flex-row items-center justify-center gap-8">
          <PortfolioCard
            width="700px"
            height="320px"
            image={loginImage}
            onClick={onCardClick}
          />
        </div>
        <div className="w-full h-auto flex lg:flex-row flex-col items-center justify-center gap-4">
          <div className="w-auto p-4 bg-gray-900 border-2 border-gray-500 rounded-xl">
            <PortfolioCard
              width="310px"
              height="300px"
              image={loginImage}
              onClick={onCardClick}
            />
          </div>
          <div className="w-auto p-4 bg-gray-900 border-2 border-gray-500 rounded-xl">
            <PortfolioCard
              width="310px"
              height="300px"
              image={loginImage}
              onClick={onCardClick}
            />
          </div>
          {/* <div className="flex-1 px-4 py-4 bg-green-600">
            <PortfolioCard
              width="370px"
              height="320px"
              image={loginImage}
              onClick={onCardClick}
            />
          </div> */}
        </div>
        <div className="lg:w-full h-auto lg:h-[50%] flex flex-row items-center justify-center gap-8">
          <PortfolioCard
            width="700px"
            height="320px"
            image={loginImage}
            onClick={onCardClick}
          />
        </div>
        <div className="w-full h-auto flex flex-row items-center justify-center">
          <SeeMoreButton text="See More" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
