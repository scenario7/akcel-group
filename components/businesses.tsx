"use client";
import React from "react";
import { Montserrat } from "next/font/google";
import { Open_Sans } from "next/font/google";

// Fonts
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Images
import academy from "@/images/academy.png";
import remax from "@/images/remax.png";
import realty from "@/images/realty.png";
import jetking from "@/images/jetking.png";
import entertainment from "@/images/entertainment.png";
import investments from "@/images/investments.png";
import gp from "@/images/gp.png";

const companies = [
  {
    name: "Akcel GP",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    logo: gp.src,
  },
  {
    name: "Akcel Entertainment",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    logo: entertainment.src,
  },
  {
    name: "Jetking Technologies",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    logo: jetking.src,
  },
  {
    name: "Akcel Realty",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    logo: realty.src,
  },
  {
    name: "RE/MAX India",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    logo: remax.src,
  },
  {
    name: "Akcel Investments",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    logo: investments.src,
  },
  {
    name: "Akcel GP Academy",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    logo: academy.src,
  },
];

const Businesses = () => {
  // Duplicate companies array to simulate infinite scroll
  const scrollingCompanies = [...companies, ...companies];

  return (
    <div className="flex flex-col items-center bg-white relative overflow-hidden py-10">
      <div className="bg-gradient-to-b from-transparent to-[#da291c] w-[2px] h-20 mb-5"></div>
      <h1
        className={`${montserrat.className} text-center text-3xl font-semibold text-black mb-10`}
      >
        Brands
      </h1>

      <div className="w-full overflow-hidden">
        <div
          className="flex whitespace-nowrap animate-scroll gap-10 px-10 py-10"
          style={{ animation: "scroll 30s linear infinite" }}
        >
          {scrollingCompanies.map((company, index) => (
            <div
              key={index}
              className="relative h-96 w-72 flex-shrink-0 hover:scale-105 hover:shadow-md transition-all overflow-hidden shadow-xl border border-gray-200 group"
              style={{
                backgroundImage: `url(${company.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 z-10 opacity-70 transition-all group-hover:bg-black/40" />

              {/* Content */}
              <div className="absolute flex-col h-full w-full flex items-center justify-center z-20 gap-4 text-white text-center px-4 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent z-10 opacity-" />

                <div className="w-36 bg- rounded-full p-3 hover:scale-110 transition-transform z-20">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h1
                  className={`${montserrat.className} font-semibold text-xl drop-shadow-md z-20`}
                >
                  {company.name}
                </h1>

                <a
                  href="#"
                  className={`${openSans.className} z-20 bg-transparent px-4 py-2 rounded-md font-medium flex items-center gap-2 transition-all ease-in-out duration-300 text-white hover:bg-white hover:text-[#da291c] shadow-lg mt-3 opacity-90`}
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
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

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Businesses;
