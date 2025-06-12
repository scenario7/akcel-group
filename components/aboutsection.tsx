"use client";
import React from "react";
import { Montserrat, Open_Sans } from "next/font/google";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const countries = [
  {
    name: "United Kingdom",
    flag: "https://flagcdn.com/w320/gb.png",
  },
  {
    name: "United Arab Emirates",
    flag: "https://flagcdn.com/w320/ae.png",
  },
  {
    name: "India",
    flag: "https://flagcdn.com/w320/in.png",
  },
];

const AboutSection = () => {
  return (
    <div className="flex flex-col items-center p-10 bg-white">
      <h1
        className={`${montserrat.className} text-center text-3xl font-semibold text-black`}
      >
        About Us
      </h1>
      <p
        className={`${openSans.className} text-center text-lg mt-4 w-3/4 text-black`}
      >
        AKCEL Group is a UK-based diversified global enterprise with a bold
        vision and a broad portfolio. Spanning real estate, education,
        hospitality, motorsports, and technology, we are united by a single
        mission — to accelerate ambition through innovation, precision, and
        performance.
      </p>
      <div className="flex items-center space-x-20 py-10">
        <img
          src={countries[0].flag}
          alt=""
          className="rounded-full w-20 h-20 object-cover"
        />
        <img
          src={countries[1].flag}
          alt=""
          className="rounded-full w-20 h-20 object-cover object-left"
        />
        <img
          src={countries[2].flag}
          alt=""
          className="rounded-full w-20 h-20 object-cover"
        />
      </div>
            <p
        className={`${openSans.className} text-center text-lg mt-4 w-3/4 text-black`}
      >
        The group has footprints in the United Kingdom, the UAE and India.
        Founded by UK-based Non-Resident Indian serial entrepreneur Amit
        Kaushal, the group boasts of more than a dozen businesses spread across
        the UK, UAE and India.
      </p>
    </div>
  );
};

export default AboutSection;
