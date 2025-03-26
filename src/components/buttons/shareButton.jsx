import React, { useState } from "react";

const ShareButton = () => {
  const [checked, setChecked] = useState(false); // state to manage visibility of options

  const handleChange = () => {
    setChecked(!checked); // toggle visibility state when main button is clicked
  };

  return (
    <div className="relative flex justify-center items-center">
      {/* Main Button (Icon + / -) */}
      <div
        className={`cursor-pointer absolute bg-yellow-400 border-2 border-gray-800 text-gray-800 text-3xl font-bold w-[50px] h-[50px] rounded-full flex justify-center items-center shadow-lg transition-all duration-300 ${
          checked ? "bg-yellow-300 scale-95" : "scale-100"
        }`}
        onClick={handleChange} // click handler to toggle checked state
      >
        {checked ? "-" : "+"} {/* Show "+" when hidden, "-" when visible */}
      </div>

      {/* Option Buttons Container */}
      <div
        className={`absolute transition-all duration-300 ease-in-out ${
          checked ? "opacity-100 visible" : "opacity-0 invisible" // controls visibility of option buttons
        }`}
      >
        {/* Option A */}
        <button
          className={`option option-a bg-gray-800 border-2 border-yellow-400 text-yellow-400 w-16 h-16 rounded-full font-bold shadow-lg mb-4 ${
            checked ? "translate-y-[-90px]" : ""
          }`}
        >
          A
        </button>
        {/* Option B */}
        <button
          className={`option option-b bg-gray-800 border-2 border-yellow-400 text-yellow-400 w-16 h-16 rounded-full font-bold shadow-lg mb-4 ml-16 ${
            checked ? "translate-y-[-65px] translate-x-[65px]" : ""
          }`}
        >
          B
        </button>
        {/* Option C */}
        <button
          className={`option option-c bg-gray-800 border-2 border-yellow-400 text-yellow-400 w-16 h-16 rounded-full font-bold shadow-lg ml-32 ${
            checked ? "translate-x-[90px]" : ""
          }`}
        >
          C
        </button>
      </div>
    </div>
  );
};

export default ShareButton;
