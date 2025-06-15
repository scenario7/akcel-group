"use client";

import React, { useEffect, useRef } from "react";
import { Montserrat } from "next/font/google";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Leadership = () => {
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((ref) => {
        if (!ref) return;
        const speed = 0.4;
        const offset = window.scrollY - ref.offsetTop;
        ref.style.backgroundPosition = `center ${offset * speed}px`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center bg-[#ffffff]">
      <div className="bg-gradient-to-b from-transparent to-[#da291c] w-[2px] h-20 mb-5"></div>
      <h1 className={`${montserrat.className} text-center text-3xl font-semibold text-black`}>
        Leadership
      </h1>

      <div className="flex w-screen py-10 flex-col md:flex-row">
        {[{
          name: "Amit Kaushal",
          title: "Chairman AKCEL Group",
          img: "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&w=1959&auto=format&fit=crop",
        },
        {
          name: "Establishing a Foundation of Success",
          title: "Read More",
          img: "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2079&auto=format&fit=crop",
        }].map((item, index) => (
          <div
            key={index}
            ref={(el) => { sectionRefs.current[index] = el; }}
            className="relative flex flex-col items-start w-full h-96 px-10 py-10 justify-end transition-all duration-1000 ease-out bg-fixed bg-center bg-cover"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="absolute inset-0 bg-black/30 z-10 opacity-70" />
            <div className="z-20">
              <h1 className={`${montserrat.className} text-xl font-semibold text-white`}>
                {item.name}
              </h1>
              <h2 className={`${openSans.className} text-lg font-medium tracking-tighter text-white`}>
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;
