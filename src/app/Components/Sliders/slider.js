"use client";
import React, { useState } from "react";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";

const Slider = () => {
  const slides = [
    {
      url: "https://littardohawk-my.sharepoint.com/personal/aryan_singh_littardo_com/Documents/Microsoft%20Teams%20Chat%20Files/Frame%20382.png",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="mx-auto max-w-full h-[320px] my-4 px-4 relative group z-0">
      {console.log("currentIndex", currentIndex)}
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <button
        onClick={() => prevSlide()}
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 cursor-pointer"
      >
        <ArrowLeftCircleIcon className="w-10 h-10 text-yellow-shade-11" />
      </button>
      {/* Right Arrow */}
      <button
        onClick={() => nextSlide()}
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 cursor-pointer"
      >
        <ArrowRightCircleIcon className="w-10 h-10 text-yellow-shade-11" />
      </button>
      <div className="absolute top-12 right-2/4 py-4 gap-3">
        <h2 className="text-yellow-shade-8 text-5xl font-semibold mb-5">For you deals</h2>
        <h3 className="text-yellow-shade-4 text-2xl font-medium">Get Up to 50% cashback all Paytm </h3>
      </div>
      <div className="absolute bottom-14 start-2/4 py-4 gap-3">
        {slides.map((slide, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`mr-2 rounded-full cursor-pointer ${currentIndex==slideIndex?"bg-yellow-shade-2 p-2.5":"bg-yellow-shade-9 p-1.5"}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
