"use client";
import React from "react";
import { Montserrat } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { akcelBusinesses } from "@/app/companyData";

// Fonts
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Businesses = () => {
  return (
    <div className="flex flex-col items-start bg-white relative overflow-hidden py-10">
      {/* Header Section */}
      <div className="flex items-center gap-10 py-5 px-6 sm:px-10 md:px-20">
        <div className="flex flex-col items-center gap-5">
          <h1 className={`${montserrat.className} text-3xl font-semibold text-black text-center`}>
            Sectors
          </h1>
        </div>
        <div className="bg-gradient-to-b from-transparent via-[#da291c] to-transparent w-[2px] h-20" />
        <p className={`${openSans.className} text-black`}>
          A collective of visionary brands driving impact, innovation, and growth across industries.
        </p>
      </div>

      {/* Grid Section */}
      <div className="w-full px-6 sm:px-10 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-10">
          {akcelBusinesses.map((company, index) => (
            <div
              key={index}
              className="relative h-96 w-full overflow-hidden shadow-xl border border-gray-200 group transition-all"
              style={{
                backgroundImage: `url(${company.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              {/* <div className="absolute inset-0 z-10 transition-all bg-black/50" /> */}
              <div className="absolute inset-0 z-20 transition-all bg-gradient-to-t from-black to-transparent" />

              {/* Content */}
              <div className="absolute flex h-full w-full items-end justify-between z-30 gap-4 text-white text-center px-5 py-5 transition-all duration-300">
                {/* <div className="w-36 h-36 bg-white p-3 hover:scale-110 transition-transform z-20">
                  <img
                    src={company.logo.src}
                    alt={`${company.title} logo`}
                    className="h-36 w-36 object-contain"
                  />
                </div> */}
                <h2 className={`${montserrat.className} text-xl font-semibold text-white`}>
                  {company.title}
                </h2>

                <a
                  href={`businesses/${company.slug}`}
                  className={`${openSans.className} bottom-0 right-0 z-20 text-black w-12 h-12 bg-white font-medium flex items-center justify-center transition-all ease-in-out duration-300 hover:text-white hover:bg-[#da291c] shadow-lg mt-3 opacity-90`}
                  style={{ aspectRatio: "1 / 1" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="-rotate-45 h-5 w-5"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Businesses;
