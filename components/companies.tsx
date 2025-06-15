"use client";
import React from "react";
import { Montserrat, Open_Sans } from "next/font/google";
import { akcelCompanies } from "@/app/companyData";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Companies = () => {
  return (
    <div className="flex flex-col items-center p-10 bg-[#ffffff] w-screen gap-10">
      <div className="bg-gradient-to-b from-transparent to-[#da291c] w-[2px] h-20 mb-5"></div>
      <h1
        className={`${montserrat.className} text-center text-3xl font-semibold text-black`}
      >
        Brands
      </h1>
      <div className="w-screen flex justify-center">
        <div className="grid grid-cols-2 items-center gap-10 gap-x-20 py-10 px-10">
          {akcelCompanies.map((company) => (
            <div
              key={company.title}
              className="flex flex-col items-center bg-white p-6 gap-5 w-full max-w-3xl hover:bg-[#da291c] hover:text-white group backdrop-blur-2xl transition-all ease-in-out duration-200 h-full min-h-[220px]"
              style={{ height: "100%" }}
            >
              <img
                src={typeof company.logo === "string" ? company.logo : company.logo.src}
                alt={company.title}
                className="h-36 w-36 object-contain rounded-lg p-2 bg-white"
              />
              <div className="flex flex-col flex-1">
                <h2
                  className={`${montserrat.className} text-xl text-center font-semibold text-black mb-2 group-hover:text-white`}
                >
                  {company.title}
                </h2>
                <p
                  className={`${openSans.className} text-gray-700 text-center text-base group-hover:text-white`}
                >
                  {company.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
