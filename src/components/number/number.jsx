import React from "react";

const NumberComponent = ({ number }) => {
  return (
    <div className="text-5xl text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer">
      {number}
    </div>
  );
};

export default NumberComponent;
