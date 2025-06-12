"use client";
import React, { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";
import RotatingText from "@/animations/RotatingText/RotatingText";
import { motion } from "framer-motion";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const HeroSection = () => {
  const images = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1682401101972-5dc0756ece88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573882077407-90354b357c52?q=80&w=2057&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  ];

  const rotatingWords = [
    "innovation.",
    "talent.",
    "performance.",
    "hospitality.",
    "motorsports.",
    "learning.",
    "ambition.",
    "futures.",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  console.log(currentImage);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen">
      {/* Background images with fade transition */}
      <div className="absolute flex max-w-screen h-full -z-10 opacity-50">
        <img src={images[0]} alt="" className="object-cover w-[20%]"/>
        <img src={images[1]} alt="" className="object-cover w-[20%]"/>
        <img src={images[2]} alt="" className="object-cover w-[20%]"/>
        <img src={images[3]} alt="" className="object-cover w-[20%]"/>
        <img src={images[4]} alt="" className="object-cover w-[20%]"/>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent opacity-100 -z-5" />

      {/* Rotating Text */}
      <div className="absolute flex top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl font-semibold ${montserrat.className} p-3`}
        >
          Accelerating
        </h1>
        <motion.div
          layout
          transition={{ type: "spring", duration: 0.6, damping: 20 }}
          className="bg-[#da291c] p-3 rounded-xl"
        >
          <RotatingText
            texts={rotatingWords}
            mainClassName={`text-5xl sm:text-6xl md:text-7xl font-semibold ${montserrat.className}`}
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden"
            rotationInterval={3000}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
