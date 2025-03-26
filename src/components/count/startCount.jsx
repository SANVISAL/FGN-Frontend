import { useEffect, useState } from "react";

const StatCounter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value, 10);
    if (start === end) return;

    const duration = 7000; // Animation duration in ms
    const incrementTime = 50; // Interval speed
    const step = Math.ceil(end / (duration / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="w-1/4 text-center">
      <strong className="text-4xl text-orange-400">{count}+</strong>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-8  p-6 rounded-lg">
      <div className="w-[150px] h-auto flex flex-col">
        <StatCounter value={5} />
        <p className="text-gray-400 text-[16px]">Year Of Experience</p>
      </div>
      <div className="w-[150px] h-auto flex flex-col">
        <StatCounter value={12} />
        <p className="text-gray-400 text-[16px]">Handle Project</p>
      </div>
      <div className="w-[170px] h-auto flex flex-col">
        <StatCounter value={5} />
        <p className="text-gray-400 text-[16px]">Open Source Libraries</p>
      </div>
      <div className="w-[100px] h-auto flex flex-col">
        <StatCounter value={18} />
        <p className="text-gray-400 text-[16px]">Awards Won</p>
      </div>
    </div>
  );
};

export default StatsSection;
