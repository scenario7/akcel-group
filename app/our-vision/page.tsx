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
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1600&q=100&auto=format&fit=crop&dpr=2",
  },
  {
    letter: "K",
    word: "Knowledge",
    description:
      "Knowledge empowers us to innovate and make informed decisions.",
    image:
      "https://images.unsplash.com/photo-1492366254240-43affaefc3e3?w=1600&q=100&auto=format&fit=crop&dpr=2",
  },
  {
    letter: "C",
    word: "Consistency",
    description:
      "Clarity and Consistency ensure we stay focused and reliable in our actions.",
    image:
      "https://images.unsplash.com/photo-1469026140142-cb239ea68152?w=1600&q=100&auto=format&fit=crop&dpr=2",
  },
  {
    letter: "E",
    word: "Excellence",
    description:
      "Excellence is our commitment to delivering the highest standards in everything we do.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1600&q=100&auto=format&fit=crop&dpr=2",
  },
  {
    letter: "L",
    word: "Legacy",
    description:
      "Legacy inspires us to create lasting impact for future generations.",
    image:
      "https://images.unsplash.com/photo-1469026140142-cb239ea68152?w=1600&q=100&auto=format&fit=crop&dpr=2",
  },
];

const Page = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <HeroTemplate
        image="https://images.unsplash.com/photo-1513759565286-20e9c5fad06b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Our Vision"
        subtitle="To be the world’s leading conglomerate brand ,where speed meets substance, and passion meets precision , transforming how people compete, connect, live, and innovate."
      />
      <div className="bg-white flex flex-col items-center gap-5 py-5 pb-20">
                <div className="bg-gradient-to-b from-transparent to-[#da291c] w-[2px] h-20 "></div>

        <h1
          className={`${montserrat.className} text-center text-3xl font-semibold text-black`}
        >
          What AKCEL stands for
        </h1>
      </div>
      <div className="">
        {letters.map((letter, index) => (
          <div
            style={{
              backgroundImage: `url(${letter.image})`,
              backgroundSize: "cover",
              backgroundPosition: "bottom",
            }}
            key={index}
            className="relative h-96"
          >
            <div className="absolute inset-0 bg-black/70 z-10 opacity-70" />

            <div className="absolute z-20 flex gap-5 flex-col px-10 py-10 justify-center h-full">
              <h2
                className={`${montserrat.className} text-8xl font-bold uppercase`}
              >
                {letter.word.split(" ").map((w, i) => (
                  <span key={i}>
                    <span className="text-[#da291c]">{w.charAt(0)}</span>
                    {w.slice(1)}{" "}
                  </span>
                ))}
              </h2>
              <p className={`${openSans.className} font-semibold pl-2`}>
                {letter.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <CustomFooter />
    </div>
  );
};

export default Page;
