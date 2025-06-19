"use client";
import React, { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";
import RotatingText from "@/animations/RotatingText/RotatingText";
import { motion } from "framer-motion";
import gp from '@/images/GP/6.jpg'

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const HeroSection = () => {
  const images = [
    gp.src,
    "https://plus.unsplash.com/premium_photo-1682401101972-5dc0756ece88?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  ];

  const rotatingWords = ["Motorsports", "Entertainment", "Real Estate", "Education", "Mining", "Investments"];
  const [currentImage, setCurrentImage] = useState(0);
  const [prevImage, setPrevImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevImage(currentImage);
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImage, images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Crossfade Images */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <motion.img
          key={`prev-${prevImage}`}
          src={images[prevImage]}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full object-cover"
        />
        <motion.img
          key={`current-${currentImage}`}
          src={images[currentImage]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black/50 opacity-100 -z-5" />

      {/* Left-aligned Text */}
      <div className="absolute flex gap-5 top-[40%] left-6 sm:left-12 md:left-20 text-white text-left">
        <motion.h1
          layout
          transition={{ type: "spring", duration: 0.6, damping: 20 }}
          className={`text-5xl sm:text-6xl md:text-6xl font-semibold ${montserrat.className} mb-2`}
        >
          AKCEL Group | 
        </motion.h1>
        <motion.div
          layout
          transition={{ type: "spring", duration: 0.6, damping: 20 }}
          className="leading-tight"
        >
          <RotatingText
            texts={rotatingWords}
            mainClassName={`text-5xl sm:text-6xl md:text-6xl font-semibold ${montserrat.className}`}
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.05}
            splitLevelClassName="overflow-hidden"
            rotationInterval={3000}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
