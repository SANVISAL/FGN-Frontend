import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgress = ({ value, text, side = 65, isCurved = true }) => {
  console.log("Received isCurved:", isCurved);
  return (
    <div className="flex flex-col items-center">
      <div style={{ width: side, height: side }}>
        <CircularProgressbar
          value={value}
          text={`${value}%`}
          styles={buildStyles({
            textColor: "#A0A0A0",
            pathColor: "#E85124",
            trailColor: "#3A3A3A",
            strokeWidth: 12,
            strokeLinecap: isCurved ? "round" : undefined, // Toggle curved or straight
            strokeLinejoin: "miter",
          })}
        />
      </div>
      <h2>{text}</h2>
    </div>
  );
};

export default CircularProgress;
