"use client";
import React from "react";
import { Montserrat, Open_Sans } from "next/font/google";
import { FaClock, FaExternalLinkAlt } from "react-icons/fa";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const podcastData = [
  {
    title: "Reimagining Global Leadership",
    subtitle: "Innovation & Impact",
    duration: "00:15:06",
    image:
      "https://images.unsplash.com/photo-1581091012184-7c2a4bfe3f99?q=80&w=400&auto=format&fit=crop",
    link: "/podcasts/global-leadership",
    bgColor: "bg-[#4e3b35]",
  },
  {
    title: "Building the Future: AKCEL in Real Estate",
    subtitle: "Vision & Strategy",
    duration: "00:20:01",
    image:
      "https://images.unsplash.com/photo-1548946526-f69e2424cf45?q=80&w=400&auto=format&fit=crop",
    link: "/podcasts/real-estate",
    bgColor: "bg-[#b1121e]",
  },
  {
    title: "Accelerating Ambition through Innovation",
    subtitle: "Technology & Growth",
    duration: "00:26:32",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=400&auto=format&fit=crop",
    link: "/podcasts/innovation",
    bgColor: "bg-[#6c6c6c]",
  },
  {
    title: "The AKCEL Blueprint: Leading Across Borders",
    subtitle: "Leadership & Culture",
    duration: "00:11:46",
    image:
      "https://images.unsplash.com/photo-1573497019417-35f5f7f2c79b?q=80&w=400&auto=format&fit=crop",
    link: "/podcasts/blueprint",
    bgColor: "bg-[#f26522]",
  },
];

const Podcasts = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-10 py-10 bg-white">
      <div className="bg-gradient-to-b from-transparent to-[#da291c] w-[2px] h-20 mb-5" />
      <h1 className={`${montserrat.className} text-3xl font-semibold text-black`}>
        Podcasts
      </h1>
      <p
        className={`${openSans.className} text-center text-base md:text-lg mt-2 mb-10 max-w-3xl text-black`}
      >
        Join us as we dwell into thought–provoking conversations on all things business.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {podcastData.map((podcast, index) => (
          <div key={index} className="flex flex-col border shadow-md hover:shadow-xl transition duration-300">
            <div className="relative h-48">
              <img
                src={podcast.image}
                alt={podcast.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute top-2 left-2 bg-red-600 text-white p-1 rounded-full">
                ▶
              </div>
            </div>
            <div className={`${podcast.bgColor} text-white p-4 flex flex-col justify-between flex-grow`}>
              <div>
                <h3 className={`${montserrat.className} font-semibold text-lg leading-snug`}>
                  {podcast.title}
                </h3>
                <p className={`${openSans.className} text-sm mt-1`}>{podcast.subtitle}</p>
                <div className="flex items-center text-sm mt-2 gap-2">
                  <FaClock className="text-white opacity-80" />
                  <span>{podcast.duration}</span>
                </div>
              </div>
              <a
                href={podcast.link}
                className="mt-4 inline-flex items-center text-white hover:underline gap-2 text-sm"
              >
                Click to Read More <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Podcasts;
