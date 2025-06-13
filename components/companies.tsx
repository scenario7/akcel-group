"use client";
import React from "react";
import { Montserrat, Open_Sans } from "next/font/google";
import academy from "@/images/academy.png";
import remax from "@/images/remax.png";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const companies = [
    {
        name: "Akcel GP",
        image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", // Business team
        logo: academy,
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero nulla, iaculis quis accumsan nec, tempus id dui. Morbi ipsum leo, mattis et diam sit."
    },
    {
        name: "Jetking Technologies",
        image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80", // Technology/IT office
        logo: "",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero nulla, iaculis quis accumsan nec, tempus id dui. Morbi ipsum leo, mattis et diam sit."
    },
    {
        name: "Remax India",
        image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80", // Real estate
        logo: remax,
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero nulla, iaculis quis accumsan nec, tempus id dui. Morbi ipsum leo, mattis et diam sit."
    },
    {
        name: "Remax India",
        image:
            "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80", // Modern building
        logo: remax,
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero nulla, iaculis quis accumsan nec, tempus id dui. Morbi ipsum leo, mattis et diam sit."
    },
    {
        name: "Remax India",
        image:
            "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80", // Real estate handshake
        logo: remax,
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero nulla, iaculis quis accumsan nec, tempus id dui. Morbi ipsum leo, mattis et diam sit."
    },
];

const Companies = () => {
  return (
    <div className="flex flex-col items-center p-10 bg-[#ffffff] w-screen gap-10">
      <div className="bg-gradient-to-b from-transparent to-[#da291c] w-[2px] h-20 mb-5"></div>
      <h1
        className={`${montserrat.className} text-center text-3xl font-semibold text-black`}
      >
        Brands
      </h1>
    <div className="w-full overflow-x-auto py-10 scrollbar-hide">
      <div className="flex px-10 space-x-10 animate-scroll-infinite" style={{ minWidth: "max-content" }}>
        {companies.concat(companies).map((company, index) => (
        <div
          key={index}
          className="relative flex flex-col items-start justify-end gap-5 w-96 h-96 bg-cover bg-center rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out"
          style={{ backgroundImage: `url(${company.image})` }}
        >
          <div className="backdrop-blur-sm bg-black/30 px-5 py-5 rounded-md w-full flex items-center gap-5">
            {/* <img src={company.logo?.src} alt="" className="rounded-2xl bg-white" /> */}
            <div className="flex-col">
            <h2
              className={`${montserrat.className} text-2xl font-semibold text-left`}
            >
              {company.name}
            </h2>
            <p className={`${openSans.className} text-left`}>
              {company.description}
            </p>
            </div>
          </div>
        </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes scroll-infinite {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
        }
        .animate-scroll-infinite {
        display: flex;
        width: max-content;
        animation: scroll-infinite 40s linear infinite;
        }
      `}</style>
    </div>
    </div>
  );
};

export default Companies;
