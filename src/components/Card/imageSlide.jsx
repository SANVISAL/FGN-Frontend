import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SkillPercent from "../../components/CircularProgress/skillPercent";
import html from "../../assets/logo/html.svg";
import skillIcon from "../../assets/menuIcon/skillIcon.svg";
import { motion, AnimatePresence } from "framer-motion";
const images = [
  <SkillPercent images={html} value={90} text={"HTML"} isCurved={true} />,
  <SkillPercent images={html} value={50} text={"HTML"} />,
  <SkillPercent images={html} value={60} text={"HTML"} />,
  <SkillPercent images={html} value={90} text={"HTML"} />,
  <SkillPercent images={html} value={20} text={"HTML"} />,
  <SkillPercent images={html} value={90} text={"HTML"} />,
  <SkillPercent images={html} value={80} text={"HTML"} />,
];
const imagesPerPage = 4;

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - imagesPerPage : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + imagesPerPage < images.length ? prev + 1 : 0
    );
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {/* Image Display */}
      <div className="overflow-hidden w-auto">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center w-full"
        >
          {images
            .slice(currentIndex, currentIndex + imagesPerPage)
            .map((Component, index) => (
              <div key={index} className="w-full flex justify-center">
                {Component}
              </div>
            ))}
        </motion.div>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={handlePrev}
          className="w-12 h-12 flex bg-green-500 items-center justify-center border-2 border-white rounded-full text-white hover:bg-gray-700 transition"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Updated text to show images per page and total images */}
        <span className="text-white text-lg">{`${Math.min(
          currentIndex + imagesPerPage,
          images.length
        )} / ${images.length}`}</span>

        <button
          onClick={handleNext}
          className="w-12 h-12 flex bg-green-500 items-center justify-center border-2 border-white rounded-full text-white hover:bg-gray-700 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
