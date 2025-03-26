import { useRef } from "react";

const sections = [
  { id: "home", text: "Home", bgColor: "bg-gray-900" },
  { id: "about", text: "About Me", bgColor: "bg-gray-800" },
  { id: "portfolio", text: "Portfolio", bgColor: "bg-gray-700" },
  { id: "contact", text: "Contact", bgColor: "bg-gray-600" },
];

const SlideSection = () => {
  const scrollContainerRef = useRef(null);

  const handleScroll = (index) => {
    const section = document.getElementById(sections[index].id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative h-full w-full overflow-y-auto scroll-smooth">
      {/* Sidebar Navigation */}
      <div className="fixed right-5 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 p-3 bg-gray-800 rounded-xl shadow-lg">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => handleScroll(index)}
            className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-green-500 text-white rounded-full transition duration-300"
          >
            {section.text[0]} {/* First letter as icon */}
          </button>
        ))}
      </div>

      {/* Scrollable Sections */}
      <div className="h-screen overflow-y-auto snap-mandatory snap-y scroll-smooth">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className={`${section.bgColor} h-screen flex items-center justify-center text-white text-3xl font-bold`}
          >
            {section.text}
          </section>
        ))}
      </div>
    </div>
  );
};

export default SlideSection;
