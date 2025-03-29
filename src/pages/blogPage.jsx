import React, { useState } from "react";
import { Label, SeeMoreButton, BlogCard } from "../components";
import { loginImage } from "../assets";
import blogIcon from "../assets/menuIcon/blogIcon.svg";

const CardData = [
  {
    id: 1,
    date: "03 May 2023",
    title: "Elevate your mornings with perfectly brewed coffee",
  },
  { id: 2, date: "10 June 2023", title: "The secrets to better UI/UX design" },
  { id: 3, date: "15 July 2023", title: "How to optimize website performance" },
  { id: 4, date: "20 Aug 2023", title: "The future of web development" },
  { id: 5, date: "10 Sept 2023", title: "Building accessible websites" },
  { id: 6, date: "02 Oct 2023", title: "Why design systems matter" },
];

const BlogPage = ({ onCardClick }) => {
  const [visibleCard, setVisibleCard] = useState(3);
  const handleSeeMore = () => {
    setVisibleCard((prev) => Math.min(prev + 3, CardData.length));
  };

  if (!onCardClick) {
    console.error("onCardClick is missing!");
    return null;
  }

  return (
    <div className="w-full h-auto bg-gray-900 border border-orange-600 flex flex-col rounded-xl py-8 px-8 gap-6">
      <Label Icon={blogIcon} text="BLOG " />
      <div className="w-full h-auto flex flex-col gap-6">
        <div className="w-full font-bold flex flex-row gap-3">
          <h2 className="text-5xl">Latest</h2>
          <h2 className="text-green-500 text-5xl">Insights</h2>
        </div>
        <h2>
          Hi, my name is Brown Reddick and I began using WordPress when I first
          started. I have spent most of my waking hours for the last ten years
          designing, programming, and operating WordPress sites.
        </h2>

        {/* Dynamically Render Cards */}
        <div className="w-full h-auto flex flex-col gap-8">
          {CardData.slice(0, visibleCard).map((card) => (
            <div
              key={card.id}
              className="w-full h-auto flex lg:flex-row flex-col bg-gray-600 border border-gray-600 items-center justify-center gap-4 rounded-xl"
            >
              <div className="w-auto h-auto">
                <BlogCard
                  width="350px"
                  height="320px"
                  image={loginImage}
                  onclick={onCardClick}
                />
              </div>
              <div className="w-auto h-auto flex flex-col items-start justify-center gap-6 px-4">
                <h2>UI Design, {card.date}</h2>
                <h2 className="font-bold text-2xl">{card.title}</h2>
                <SeeMoreButton
                  text="See More"
                  onClick={() => onCardClick(card)}
                />
              </div>
            </div>
          ))}
        </div>
        {/* See More Button */}
        {visibleCard < CardData.length && (
          <div className="w-full flex justify-center mt-4">
            <SeeMoreButton text="See More" onClick={handleSeeMore} />{" "}
            {/* ✅ Fixed onClick */}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
