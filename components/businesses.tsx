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
    <div className="flex flex-col items-start bg-white relative overflow-hidden">
      {/* Header Section */}
      <div className="flex md:flex-row flex-col md:items-center justify-start gap-3 md:gap-10 py-5 px-6 sm:px-10 md:px-20">
          <h1
            className={`${montserrat.className} text-xl md:text-3xl font-semibold text-black text-left md:w-[25%]`}
          >
            Businesses
          </h1>
        <div className="bg-gradient-to-r md:bg-gradient-to-b from-transparent via-[#da291c] to-transparent md:w-[2px] md:h-20 h-[2px] w-32"></div>
        <p className={`${openSans.className} text-sm md:text-lg text-black`}>
          At AKCEL Group, we create enduring value through innovation,
          integrity, and strategic clarity. Operating across diverse industries,
          we are a vision-led collective shaping the future with purpose and
          precision.
        </p>
      </div>

      {/* Grid Section */}
      <div className="w-full md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {akcelBusinesses.map((company, index) => (
            <div
              key={index}
              className={`relative h-96 w-full overflow-hidden shadow-xl group transition-all ${
                index === 0 ? "md:col-span-3" : "col-span-1"
              }`}
              style={{
                backgroundImage: `url(${company.image})`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
              }}
            >
              {/* Red hover overlay */}
              <div className="absolute inset-0 bg-black/70 group-hover:from-[#da291c] group-hover:to-[#000000] group-hover:bg-gradient-to-t opacity-80 transition-colors duration-300 z-20" />

              {/* Content */}
              <div className="absolute flex flex-col justify-center h-full w-full z-30 p-5 text-white transition-all duration-300">
                <h2
                  className={`${montserrat.className} text-3xl font-semibold uppercase mb-4`}
                >
                  {company.title}
                </h2>
                <p
                  className={`${openSans.className} md:hidden group-hover:block transition-all md:text-lg mb-4`}
                >
                  {company.description.split(" ").slice(0, 20).join(" ")}...
                </p>

                {/* Read More Button */}
                <a
                  href={`businesses/${company.slug}`}
                  className={`md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-[#da291c] md:text-md text-sm font-semibold px-4 py-2 shadow w-fit`}
                >
                  Read More
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
