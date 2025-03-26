import React from "react";
const InputField = ({
  type = String,
  value,
  onChange,
  placeholder,
  width = "w-64",
  height = "h-10",
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${width} ${height} px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
    />
  );
};
export default InputField;
