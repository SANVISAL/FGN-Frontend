import React, { useState } from "react";

const DownloadButton = ({
  width = "160px",
  height = "48px",
  fontSize = "lg",
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label
      className={`relative flex items-center rounded-full border-2 border-orange-500 cursor-pointer transition-all duration-400 ease-in-out p-1.5 ${
        isChecked ? "w-[57px] border-green-500" : `w-[${width}]`
      }`}
      style={{ width: isChecked ? "57px" : width }}
    >
      <input
        type="checkbox"
        className="hidden"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <div
        className={`rounded-full bg-orange-500 flex justify-center items-center transition-all duration-400 ease-in-out relative ${
          isChecked ? "rotate-180" : ""
        }`}
        style={{
          width: height,
          height: height,
          boxShadow: isChecked ? "0 0 0 0 rgba(255, 255, 255, 0.7)" : "none",
        }}
      >
        {/* Icon (Checkmark) */}
        <svg
          className={`w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-400 ease-in-out ${
            isChecked ? "opacity-0 invisible" : "opacity-100 visible"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>

        {/* Square (Installed Indicator) */}
        <div
          className={`w-4 h-4 bg-white rounded-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-400 ease-in-out ${
            isChecked ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        />
      </div>

      {/* Text: Install */}
      <span
        className={`text-white text-${fontSize} absolute right-4 bottom-3.5 transition-all duration-400 ease-in-out ${
          isChecked ? "opacity-0 invisible" : "opacity-100 visible"
        }`}
      >
        Download CV
      </span>

      {/* Text: Installed */}
      <span
        className={`text-white text-${fontSize} absolute right-14 bottom-3.5 transition-all duration-400 ease-in-out ${
          isChecked ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        Downloaded
      </span>
    </label>
  );
};

export default DownloadButton;
