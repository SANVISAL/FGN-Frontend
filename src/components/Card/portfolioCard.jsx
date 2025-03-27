import React from "react";

const PortfolioCard = ({
  width = "700px",
  height = "320px",
  image,
  onClick,
}) => {
  return (
    <div
      className="relative flex items-center justify-center border-2 border-gray-500 rounded-lg cursor-pointer transition-all duration-500 group"
      style={{
        width,
        height,
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={onClick}
    >
      {/* Hover Effects */}
      <div className="absolute top-0 right-0 w-1/5 h-1/5 bg-gray-500 opacity-50 rounded-br-full transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:rounded-lg"></div>
      <div className="absolute bottom-0 left-0 w-1/5 h-1/5 bg-gray-500 opacity-50 rounded-tl-full transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:rounded-lg flex items-center justify-center">
        <span className="hidden group-hover:block text-white opacity-100  text-stroke text-stroke-white text-stroke-2 font-bold text-4xl flex items-center justify-center">
          Design Specialization
        </span>
      </div>
    </div>
  );
};

export default PortfolioCard;
