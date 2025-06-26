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

// Sample news data - replace with your actual data
const latestNews = [
  {
    id: 1,
    title: "Major Partnership Announcement Drives Growth",
    excerpt: "New strategic alliance opens doors to expanded market opportunities and enhanced service delivery.",
    date: "December 15, 2024",
    category: "Business"
  },
  {
    id: 2,
    title: "Industry Recognition for Innovation Excellence",
    excerpt: "Company receives prestigious award for breakthrough technology solutions.",
    date: "December 10, 2024",
    category: "Awards"
  },
  {
    id: 3,
    title: "Quarterly Results Exceed Expectations",
    excerpt: "Strong performance across all business segments demonstrates continued momentum.",
    date: "December 5, 2024",
    category: "Financial"
  },
  {
    id: 4,
    title: "New Product Launch Sets Market Standards",
    excerpt: "Revolutionary features and enhanced user experience define next generation offering.",
    date: "November 28, 2024",
    category: "Product"
  }
];

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
            className="relative flex items-center justify-center h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${gp7.src}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90 z-10" />
            <div className="absolute flex gap-5 items-center flex-col z-20">
              <h1 className={`${montserrat.className} text-6xl font-bold text-white`}>
                MEDIA
              </h1>
              <p className={`${openSans.className} text-white font-semibold text-center px-4`}>
                From newsroom features to major moments — see how we&apos;re shaping
                conversations.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="/media"
                  className={`${openSans.className} tracking-tight inline-flex items-center hover:font-semibold gap-1 px-3 py-2 hover:bg-[#da291c] hover:text-white text-black bg-white transition-all`}
                >
                  Press Releases
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
                <a
                  href="/media"
                  className={`${openSans.className} tracking-tight inline-flex items-center hover:font-semibold gap-1 px-3 py-2 hover:bg-[#da291c] hover:text-white text-black bg-white transition-all`}
                >
                  Events
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
                <a
                  href="/media"
                  className={`${openSans.className} tracking-tight inline-flex items-center hover:font-semibold gap-1 px-3 py-2 hover:bg-[#da291c] hover:text-white text-black bg-white transition-all`}
                >
                  Podcasts
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
        </div>

        {/* Right Section - Latest News */}
        <div className="flex-1 bg-gray-50 p-8">
          <div className="h-full flex flex-col">
            <div className="mb-6">
              <h2 className={`${montserrat.className} text-4xl font-bold text-gray-900 mb-2`}>
                LATEST NEWS
              </h2>
              <p className={`${openSans.className} text-gray-600`}>
                Stay updated with our most recent announcements and developments
              </p>
            </div>
            
            <div className="flex-1 space-y-6">
              {latestNews.map((news) => (
                <article key={news.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <div className="flex items-start justify-between mb-2">
                    <span className={`${openSans.className} text-xs font-semibold text-[#da291c] uppercase tracking-wide`}>
                      {news.category}
                    </span>
                    <span className={`${openSans.className} text-xs text-gray-500`}>
                      {news.date}
                    </span>
                  </div>
                  <h3 className={`${montserrat.className} text-lg font-semibold text-gray-900 mb-2 hover:text-[#da291c] transition-colors cursor-pointer`}>
                    {news.title}
                  </h3>
                  <p className={`${openSans.className} text-sm text-gray-600 mb-3`}>
                    {news.excerpt}
                  </p>
                  <a
                    href={`/news/${news.id}`}
                    className={`${openSans.className} text-sm font-medium text-[#da291c] hover:text-gray-900 inline-flex items-center gap-1 transition-colors`}
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3"
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
                </article>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <a
                href="/news"
                className={`${openSans.className} w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#da291c] text-white font-medium hover:bg-gray-900 transition-colors`}
              >
                View All News
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