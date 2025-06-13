"use client";
import React from "react";
import { Montserrat, Open_Sans } from "next/font/google";


const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const letters = [
  {
    letter: "A",
    fullform: "Aspiration",
  },
  {
    letter: "K",
    fullform: "Knowledge",
  },
  {
    letter: "C",
    fullform: "Consistency",
  },
  {
    letter: "E",
    fullform: "Excellence",
  },
  {
    letter: "L",
    fullform: "Legacy",
  },
];

const Abbreviation = () => {
  return (
    <div className="bg-[#ffffff] px-20 py-10 flex justify-between items-center w-full">
      <div className="flex flex-col items-center">
        <h1
          className={`${montserrat.className} text-center text-3xl font-semibold text-[#da291c]`}
        >
          What does AKCEL stand for?
        </h1>
        {/* <p
          className={`${openSans.className} text-center text-lg mt-4 text-black`}
        >
          AKCEL Group is built around the concept of transforming aspiration into legacy. That idea is embedded in the name itself:
        </p> */}
      </div>
      <div className="flex items-center gap-5">
        {letters.map((letter, index) => (
          <div key={index} className="flex flex-col gap-3 items-center justify-center text-[#da291c] bg-white backdrop-opacity-50 rounded-full w-48 h-48 hover:bg-black hover:text-white duration-500 transition-all ease-in-out">
            <h1 className={`${montserrat.className} text-6xl font-black`}>
              {letter.letter}
            </h1>
            <p className={`${openSans.className} font-semibold text-center`}>
              {letter.fullform}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Abbreviation;
