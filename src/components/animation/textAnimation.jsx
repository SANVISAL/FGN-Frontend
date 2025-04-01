import React, { useState, useEffect } from "react";

const TextAnimation = () => {
  const texts = ["Networking", "IT Services", "Development Software"];
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];

    const interval = setInterval(() => {
      if (index < currentText.length) {
        setDisplayedText((prev) => prev + currentText[index]);
        setIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setDisplayedText(""); // Clear text
          setIndex(0); // Reset index
          setTextIndex((prev) => (prev + 1) % texts.length); // Move to next text
        }, 1000); // Pause before switching text
      }
    }, 100);

    return () => clearInterval(interval);
  }, [index, textIndex]);

  return (
    <div className="relative w-full text-white font-mono text-lg">
      <span className="border-r-2 border-white animate-blink text-green-500">
        {displayedText}
      </span>
    </div>
  );
};

export default TextAnimation;
