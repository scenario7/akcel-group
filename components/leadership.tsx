"use client";

import React, { useRef } from "react";
import { Montserrat } from "next/font/google";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Leadership = () => {
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);

  return (
    <div className="flex flex-col items-start bg-[#ffffff]">
      <div className="flex items-center gap-10 py-5 px-20">
        <div className="flex flex-col items-center gap-5">
          <h1
            className={`${montserrat.className} text-center text-3xl font-semibold text-black`}
          >
            Legacy & Leadership
          </h1>
        </div>
        <div className="bg-gradient-to-b from-transparent via-[#da291c] to-transparent w-[2px] h-20"></div>
        <p className={`${openSans.className} text-black`}>
          Guided by visionaries, built on legacy — shaping tomorrow with purpose and integrity.
        </p>
      </div>

      <div className="flex w-screen flex-col md:flex-row">
        {[
          {
            name: "Amit Kaushal",
            title: "Chairman AKCEL Group",
            img: "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&w=1959&auto=format&fit=crop",
            link : '/leadership'
          },
          {
            name: "Establishing a Foundation of Success",
            title:
              "At AKCEL Group, we believe in building enduring legacies through innovation, integrity, and impact. Our journey is rooted in a deep commitment to excellence across diverse industries—from real estate and entertainment to media and lifestyle. We are more than a business group; we are a vision-driven collective shaping the future with purpose and precision.",
            img: "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2079&auto=format&fit=crop",
            link : '/our-story'
          },
        ].map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            className="relative flex flex-col items-start w-full h-96 px-10 py-10 justify-end transition-all duration-1000 ease-out bg-center bg-cover"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="absolute inset-0 bg-black/30 z-10 opacity-70" />
            <div className="z-20">
              <h1
                className={`${montserrat.className} text-xl font-semibold text-white`}
              >
                {item.name}
              </h1>
              <h2
                className={`${openSans.className} font-medium tracking-tighter text-white`}
              >
                {item.title}
              </h2>
              <a
                href={item.link}
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
        ))}
      </div>
    </div>
  );
};

export default Leadership;
