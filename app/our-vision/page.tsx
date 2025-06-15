import React from "react";
import NavBar from "@/components/navbar";
import HeroTemplate from "@/components/herotemplate";
import CustomFooter from "@/components/customfooter";
import { Montserrat, Open_Sans } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const letters = [
  {
    letter: "A",
    word: "Aspiration",
    description:
      "Aspiration drives us to set ambitious goals and reach new heights.",
  },
  {
    letter: "K",
    word: "Knowledge",
    description:
      "Knowledge empowers us to innovate and make informed decisions.",
  },
  {
    letter: "C",
    word: "Consistency",
    description:
      "Clarity and Consistency ensure we stay focused and reliable in our actions.",
  },
  {
    letter: "E",
    word: "Excellence",
    description:
      "Excellence is our commitment to delivering the highest standards in everything we do.",
  },
  {
    letter: "L",
    word: "Legacy",
    description:
      "Legacy inspires us to create lasting impact for future generations.",
  },
];

const visionData = [
  {
    title: "Mission",
    description:
      "Innovation and performance across sectors to transform life. We enhance how people live, work, feel and enjoy.",
    color: "#da291c",
  },
  {
    title: "Vision",
    description:
      "To lead in delivering high-impact solutions and experiences across technology, lifestyle, sports and entertainment.",
    color: "#000000",
  },
  {
    title: "Values",
    description:
      "AKCEL Group is built around the concept of transforming aspiration into legacy. That idea is embedded in our name itself:",
    color: "#da291c",
  },
];

const Page = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <HeroTemplate
        image="https://images.unsplash.com/photo-1513759565286-20e9c5fad06b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Our Vision"
        subtitle=""
      />
      <div className="flex gap-10 flex-col items-center bg-[#ffffff]">
        <div className="bg-gradient-to-b from-transparent to-[#da291c] w-[2px] h-20 mb-5"></div>
        <h1
          className={`${montserrat.className} text-center text-3xl font-semibold text-black`}
        >
          History and Milestones
        </h1>
        <div className="flex justify-between pt-10 px-10">
          {visionData.map((item, index) => (
            <div
              style={{ backgroundColor: item.color }}
              className="p-10 text-center"
              key={index}
            >
              <h2
                className={`${montserrat.className} text-2xl font-semibold text-white`}
              >
                {item.title}
              </h2>
              <p
                className={`${openSans.className} tracking-tight mt-4 text-white`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-b from-transparent to-[#da291c] w-[2px] h-20 mb-5"></div>
        <h1
          className={`${montserrat.className} text-center text-3xl font-semibold text-black`}
        >
          What AKCEL stands for
        </h1>
        <div className="grid grid-cols-5 gap-8 w-full p-20">
          {letters.map((letter, index) => (
            <div
              key={index}
              className="flex flex-col items-center group transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center w-20 h-20 rounded-full border-4 border-[#da291c] bg-white shadow-lg mb-4 transition-colors duration-300 group-hover:bg-[#da291c] group-hover:text-white">
                <h3
                  className={`${montserrat.className} text-black text-3xl font-black transition-colors duration-300 group-hover:text-white`}
                >
                  {letter.letter}
                </h3>
              </div>
              <h4
                className={`${montserrat.className} text-lg font-semibold text-[#da291c] mb-2 transition-colors duration-300 group-hover:text-black`}
              >
                {letter.word}
              </h4>
            </div>
          ))}
        </div>
      </div>
      <CustomFooter />
    </div>
  );
};

export default Page;
