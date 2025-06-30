"use client";

import React, { useRef } from "react";
import { Montserrat } from "next/font/google";
import { Open_Sans } from "next/font/google";
import amit from "@/images/amit.jpg";

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
    <div className="flex flex-col items-start bg-white relative overflow-hidden">
      {/* Header Section */}
      <div className="flex items-center justify-start gap-10 py-5 px-6 sm:px-10 md:px-20">
        <h1
          className={`${montserrat.className} text-3xl font-semibold text-black text-left w-[20%]`}
        >
          Leadership in Motion
        </h1>
        <div className="bg-gradient-to-b from-transparent via-[#da291c] to-transparent w-[2px] h-20"></div>
        <p className={`${openSans.className} text-lg text-black`}>
          Progress isn’t passive -it’s powered by action, bold thinking, and
          decisive leadership. We lead with agility, foresight, and a commitment
          to shaping the future.
        </p>
      </div>

      <div className="flex flex-col md:flex-row">
        {[
          {
            name: "Amit Kaushal",
            title: "Chairman, AKCEL Group",
            img: amit.src,
            link: "/leadership",
          },
          {
            name: "Performance. Precision. Purpose. Innovation. — The AKCEL Vision.",
            title:
              "At AKCEL Group, we believe in building enduring legacies through innovation, integrity, and impact. Our journey is rooted in a deep commitment to excellence across diverse industries—from real estate and entertainment to media and lifestyle. We are more than a business group; we are a vision-driven collective shaping the future with purpose and precision.",
            img: "https://images.unsplash.com/photo-1492366254240-43affaefc3e3?q=80&w=650&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "/our-vision",
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
            <div className="absolute inset-0 bg-black/70 z-10 opacity-70" />
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
