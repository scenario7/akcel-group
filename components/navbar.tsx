import React from "react";
import Image from "next/image";
import redLogo from "@/images/redLogo.png";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const navbar = () => {
  return (
    <div className="flex flex-col">
      <div className={`flex justify-between bg-[#ffffff] px-10`}>
        <Image src={redLogo.src} alt="" height={50} width={200} />
        <div className={`flex space-x-10 items-center ${openSans.className} text-black font-semibold tracking-tight`}>
            <a href="">About Us</a>
            <a href="">Careers</a>
            <a href="">Activities</a>
            <a href="">Contact Us</a>
            <a href="">Media</a>
        </div>
      </div>
    </div>
  );
};

export default navbar;
