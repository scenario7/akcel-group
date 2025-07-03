"use client";
import React from "react";
import { Montserrat, Open_Sans } from "next/font/google";
import Marquee from "react-fast-marquee";
import DotGrid from "@/animations/DotGrid/DotGrid";

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
    <div className="flex flex-col w-full pt-6 sm:pt-8 md:pt-10 bg-white">
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
              className={`${openSans.className} italic font-bold py-1.5 sm:py-2 text-white text-sm sm:text-base md:text-lg uppercase`}
            >
              {element} &nbsp;•&nbsp;
            </h1>
          ))}
      </Marquee>

      <div className="flex flex-col lg:flex-row min-h-96">
        {/* Left Section - Media */}
        <div className="flex-1 order-2 lg:order-1">
          <div
            className="relative flex items-end justify-start h-60 md:h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://gulfbusiness.com/wp-content/uploads/2025/06/Atiqa-Mir-2.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/90 z-10 opacity-90" />
            <div className="relative z-20 flex flex-col items-start mb-4 sm:mb-6 md:mb-8 ml-4 sm:ml-6 md:ml-8 gap-2 max-w-[90%] sm:max-w-none">
              <div
                className={`px-2 sm:px-3 py-1 text-xs sm:text-sm ${openSans.className} uppercase font-semibold animate-blink-bg text-white`}
                style={{ transition: "background-color 0.5s" }}
              >
                Latest
              </div>
              <style jsx>{`
                @keyframes blink-bg {
                  0%, 100% { background-color: #da291c; }
                  50% { background-color: #000; }
                }
                .animate-blink-bg {
                  animation: blink-bg 2s infinite;
                }
              `}</style>
              <h2
                className={`${montserrat.className} text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 leading-tight`}
              >
                Atiqa Mir joins Akcel GP
              </h2>
              <a
                href="/news"
                className={`${openSans.className} tracking-tight inline-flex items-center hover:font-semibold gap-1 px-3 sm:px-4 py-2 hover:bg-[#da291c] hover:text-white text-black bg-white transition-all text-sm sm:text-base`}
              >
                View All News
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 sm:w-4 sm:h-4 ml-1"
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

        {/* Right Section - Latest News */}
        <div className="flex-1 bg-black p-4 sm:p-6 md:p-8 relative overflow-hidden order-1 lg:order-2">
          {/* DotGrid as background */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
              pointerEvents: "none",
            }}
          >
            <DotGrid
              dotSize={5}
              gap={15}
              baseColor="#da291c30"
              activeColor="#da291c"
              proximity={120}
              shockRadius={250}
              shockStrength={5}
              resistance={750}
              returnDuration={1.5}
            />
          </div>
          {/* Content above DotGrid */}
          <div className="h-full flex flex-col justify-center relative z-10 min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
            <div className="mb-4 sm:mb-6">
              <p
                className={`${montserrat.className} text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold text-center text-white mb-2 leading-tight px-2`}
              >
                From newsroom features to major moments — see how we&apos;re shaping
                conversations.
              </p>
            </div>

            <div className="mt-4 sm:mt-6 gap-2 sm:gap-4 md:gap-6 lg:gap-10 flex flex-col sm:flex-row">
              <a
                href="/podcasts"
                className={`${openSans.className} w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#da291c] text-white font-medium hover:bg-gray-900 transition-colors text-sm sm:text-base`}
              >
                Podcasts
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 sm:w-4 sm:h-4"
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

              <a
                href="/press-releases"
                className={`${openSans.className} w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#da291c] text-white font-medium hover:bg-gray-900 transition-colors text-sm sm:text-base`}
              >
                Press Releases
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 sm:w-4 sm:h-4"
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

              <a
                href="/events"
                className={`${openSans.className} w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#da291c] text-white font-medium hover:bg-gray-900 transition-colors text-sm sm:text-base`}
              >
                Events
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 sm:w-4 sm:h-4"
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
      </div>
    </div>
  );
};

export default NewMediaSection;