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

      <div className="flex min-h-96">
        {/* Left Section - Media */}
        <div className="flex-1">
          <div
            className="relative flex items-end justify-start h-96 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://gulfbusiness.com/wp-content/uploads/2025/06/Atiqa-Mir-2.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/90 z-10 opacity-90" />
            <div className="relative z-20 flex flex-col items-start mb-8 ml-8 gap-2">
                <div
                className={`px-3 ${openSans.className} uppercase font-semibold animate-blink-bg`}
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
                className={`${montserrat.className} text-3xl md:text-4xl font-bold text-white mb-3`}
              >
                Atiqa Mir joins Akcel GP
              </h2>
              <a
                href="/news"
                className={`${openSans.className} tracking-tight inline-flex items-center hover:font-semibold gap-1 px-4 py-2 hover:bg-[#da291c] hover:text-white text-black bg-white transition-all`}
              >
                View All News
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

        {/* Right Section - Latest News */}
        <div className="flex-1 bg-black p-8 relative overflow-hidden">
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
          <div className="h-full flex flex-col justify-center relative z-10">
            <div className="mb-6">
              <h2
          className={`${montserrat.className} text-4xl font-bold text-center text-white mb-2`}
              >
          MEDIA
              </h2>
              <p
          className={`${openSans.className} text-gray-200 text-center font-semibold`}
              >
          From newsroom features to major moments — see how we&apos;re shaping
          conversations.
              </p>
            </div>

            <div className="mt-6 gap-10 flex">
              <a
          href="/podcasts"
          className={`${openSans.className} w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#da291c] text-white font-medium hover:bg-gray-900 transition-colors`}
              >
          Podcasts
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
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
          className={`${openSans.className} w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#da291c] text-white font-medium hover:bg-gray-900 transition-colors`}
              >
          Press Releases
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
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
          className={`${openSans.className} w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#da291c] text-white font-medium hover:bg-gray-900 transition-colors`}
              >
          Events
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
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
