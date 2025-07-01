"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Montserrat, Open_Sans } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ScrollChevrons = () => {
  return (
    <div className="flex flex-col -gap-10 items-center">
      {[0, 1, 2].map((i) => (
      <svg
        key={i}
        fill="none"
        strokeWidth="4"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        data-slot="icon"
        className={`w-10 h-10 text-[#000000]`}
        style={{
        animation: "chevronFade 2s infinite",
        animationDelay: `${i * 0.33}s`,
        }}
      >
        <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
        ></path>
      </svg>
      ))}
      <style jsx>{`
      @keyframes chevronFade {
        0%,
        60% {
        opacity: 1;
        }
        80%,
        100% {
        opacity: 0;
        }
      }
      `}</style>
    </div>
  );
};

const CompanyHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="absolute z-10 h-full w-full flex flex-col gap-10 px-20 items-start justify-center text-black text-left">
      <TypeAnimation
        sequence={[title, 1000]}
        wrapper="span"
        speed={50}
        className={`${montserrat.className} text-5xl md:text-8xl font-bold uppercase w-3/4`}
        repeat={Infinity}
        cursor={false}
      />
      <p
        className={`${openSans.className} text-black text-xl text-left font-semibold w-1/2`}
      >
        {subtitle}
      </p>
      <ScrollChevrons/>
    </div>
  );
};

export default CompanyHeader;
