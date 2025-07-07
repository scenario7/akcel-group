'use client'
import React from "react";
import { Montserrat } from "next/font/google";
import Waves from "@/animations/Waves/Waves";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

interface HeroTemplateProps {
  title: string;
  subtitle?: string;
  image: string;
}

const HeroTemplate: React.FC<HeroTemplateProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div
      className="relative flex flex-col items-center justify-center w-full py-10 md:py-24"
      style={{
      }}
    >
      <Waves
      lineColor="#e33439"
      backgroundColor="rgba(227, 52, 57, 0.2)"
      waveSpeedX={0.02}
      waveSpeedY={0.01}
      waveAmpX={40}
      waveAmpY={20}
      friction={0.9}
      tension={0.01}
      maxCursorMove={120}
      xGap={12}
      yGap={36}
      className="absolute inset-0 bg-gradient-to-b from-[#da291c] to-black"
      />
      <h1
        className={`${montserrat.className} font-bold text-white text-3xl md:text-6xl uppercase text-center relative z-10 px-10`}
        style={{
          textShadow: "0 2px 50px rgba(0,0,0,0.55)",
        }}
      >
        {title}
      </h1>
      {subtitle && (
      <p className="text-white tracking-tight font-semibold text-center text-3xl mt-5 relative z-10" >{subtitle}</p>
      )}
    </div>
  );
};

export default HeroTemplate;
