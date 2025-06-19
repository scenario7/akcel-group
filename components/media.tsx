"use client";

import React from "react";
import { Montserrat } from "next/font/google";
import { Open_Sans } from "next/font/google";
import gp6 from "@/images/GP/6.jpg";
import gp7 from "@/images/GP/7.jpg";
import gp8 from "@/images/GP/8.jpg";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const MediaSection = () => {
  const mediaItems = [
    {
      name: "Press Releases",
      link: "/press-releases",
      img: gp6.src,
    },
    {
      name: "In The News",
      link: "/in-the-news",
      img: gp7.src,
    },
    {
      name: "Events",
      link: "/events",
      img: gp8.src,
    },
  ];

  return (
    <div className="flex flex-col items-start bg-[#ffffff]">
      <div className="flex items-center gap-10 py-5 px-20">
        <div className="flex flex-col items-center gap-5">
          <h1
            className={`${montserrat.className} text-center text-3xl font-semibold text-black`}
          >
            Media
          </h1>
        </div>
        <div className="bg-gradient-to-b from-transparent via-[#da291c] to-transparent w-[2px] h-20"></div>
        <p className={`${openSans.className} text-black`}>
          Discover our journey through press, stories, and milestone moments.
        </p>
      </div>

      <div className="flex w-screen flex-col md:flex-row">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-start w-full h-96 px-10 py-10 justify-end transition-all duration-1000 ease-out bg-center bg-cover"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="absolute inset-0 bg-black/30 z-10 opacity-70" />
            <div className="z-20">
              <h1 className={`${montserrat.className} text-xl font-semibold text-white`}>
                {item.name}
              </h1>
              <a
                href={item.link}
                className={`${openSans.className} tracking-tight inline-flex items-center gap-1 px-3 py-2 hover:bg-[#da219c] hover:text-white text-black bg-white transition-all mt-5`}
              >
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaSection;
