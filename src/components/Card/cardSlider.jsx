import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function CardSlider() {
  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Developer",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      review:
        "Working with Reddick is a game-changer. Their coding expertise and commitment to quality make every project a success.",
    },
    {
      id: 2,
      name: "Mily Martin",
      role: "CEO @ IT Theme",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      review:
        "Reddick exceeds expectations with top-tier coding skills. Reliable, collaborative, and a true asset to any project. Highly recommended.",
    },
    {
      id: 3,
      name: "John Doe",
      role: "Project Manager",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      review:
        "Fantastic developer! Delivered beyond expectations. Great communication and professionalism.",
    },
    {
      id: 4,
      name: "Sarah Lee",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      review:
        "Sarah is an amazing engineer. Always delivers high-quality code and works well with the team.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(testimonials.length / 2);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-4xl mx-auto text-center p-6 bg-gray-900 text-white rounded-xl shadow-lg">
      {/* Testimonial Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials
          .slice(currentIndex * 2, currentIndex * 2 + 2)
          .map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col justify-between items-center p-4 bg-gray-800 rounded-lg shadow-md 
                      h-[350px]" // ✅ Ensures all cards have the same height
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full border-4 border-gray-700"
              />
              <p className="text-lg italic mt-3 flex-1">{testimonial.review}</p>{" "}
              {/* ✅ Added flex-1 to make text take flexible space */}
              <h3 className="mt-3 font-bold text-xl">{testimonial.name}</h3>
              <p className="text-gray-400">{testimonial.role}</p>
            </div>
          ))}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center mt-6 space-x-6">
        <button
          onClick={prevSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600"
        >
          <FaArrowLeft />
        </button>

        <span className="text-gray-400">
          {currentIndex + 1} / {totalSlides}
        </span>

        <button
          onClick={nextSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
