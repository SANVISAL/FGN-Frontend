import React from "react";

const Button = ({
  onClick,
  disabled = false,
  className,
  children,
  bgColor = "bg-blue-500",
  textColor = "text-orange-500",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${bgColor} ${textColor} ${className} px-4 py-2 rounded`}
    >
      {children}
    </button>
  );
};

export default Button;
