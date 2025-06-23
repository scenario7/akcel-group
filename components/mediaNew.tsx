"use client";
import React from "react";
import gp7 from "@/images/GP/8.jpg";
import { Montserrat, Open_Sans } from "next/font/google";
import Marquee from "react-fast-marquee";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const marquee = ["Press Releases", "Events", "In the News", "Podcasts"];

const NewMediaSection = () => {
  return (
    <div className="flex flex-col w-full pt-10 bg-white">
      <Marquee
        className="group absolute z-20 w-screen bg-[#000000] transition-all ease-in-out"
        gradient
        speed={50}
        gradientColor="black"
      >
        {Array(5)
          .fill(marquee)
          .flat()
          .map((element, index) => (
            <h1
              key={index}
              className={`${openSans.className} italic font-bold py-2 text-white text-lg uppercase`}
            >
              {element} &nbsp;•&nbsp;
            </h1>
          ))}
      </Marquee>
      <div
        className="relative flex items-center justify-center h-96 bg-cover bg-center"
        style={{ backgroundImage: `url('${gp7.src}')` }}
      >
        <div className="absolute inset-0 bg-black/70 z-10 opacity-70" />
        <div className="absolute flex gap-5 items-center flex-col z-20">
          <h1
            className={`${montserrat.className} text-6xl font-bold`}
          >
            MEDIA
          </h1>
          <p className={`${openSans.className} text-white font-semibold`}>
            Discover our journey through press, stories, and milestone moments.
          </p>
                        <a
                href='/media'
                className={`${openSans.className} tracking-tight inline-flex items-center gap-1 px-3 py-2 hover:bg-[#da291c] hover:text-white text-black bg-white transition-all mt-5`}
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
        </div>
      </div>
    </div>
  );
};

export default NewMediaSection;
