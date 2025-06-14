import React from "react";
import whiteLogo from "@/images/whiteLogo.png";
import { Open_Sans } from "next/font/google";



const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const CustomFooter = () => {
  return (
    <div className="flex items-center justify-between bg-black w-screen px-10 py-10">
      <div className="flex flex-col items-start w-1/4">
        <div
          className={`flex flex-col items-start text-left ${openSans.className} gap-2 text-white font-semibold tracking-tight`}
        >
          <div className="flex items-start gap-2 justify-center text-xs">
            <img
              src="https://flagcdn.com/ae.svg"
              alt="UAE Flag"
              className="w-6 h-4 mb-2"
            />
            <p className="">1107, Iris Bay, Business Bay Dubai, UAE 00000</p>
          </div>
          <div className="flex items-start gap-2 justify-center text-xs">
            <img
              src="https://flagcdn.com/gb.svg"
              alt="UK Flag"
              className="w-6 h-4 mb-2"
            />
            <p className="">
              14/2E Docklands Business Center 10-16, Tiller Road London, UK E14 8PX
            </p>
          </div>
          <div className="flex items-start gap-2 justify-center text-xs">
            <img
              src="https://flagcdn.com/it.svg"
              alt="Italy Flag"
              className="w-6 h-4 mb-2"
            />
            <p className="">
              Via Rassica 25c, Lonato del Garda, Brescia, Italy
            </p>
          </div>
          <div className="flex items-start gap-2 justify-center text-xs">
            <img
              src="https://flagcdn.com/ie.svg"
              alt="Ireland Flag"
              className="w-6 h-4 mb-2"
            />
            <p className="">
              Regus House, Harcourt Center, Harcourt Road, Dublin, Ireland
            </p>
          </div>
        </div>
      </div>
      <img src={whiteLogo.src} alt="" className="h-36" />
      <div className="flex flex-col justify-between h-full gap-10 items-end w-1/4">
        <div
          className={`flex flex-col gap-2 items-end ${openSans.className} font-semibold tracking-tight text-xs`}
        >
          <a href="" className="text-white/70  hover:text-white transition-all">
            Careers
          </a>
          <a href="" className="text-white/70  hover:text-white transition-all">
            About Us
          </a>
          <a href="" className="text-white/70  hover:text-white transition-all">
            Media
          </a>
          <a href="" className="text-white/70  hover:text-white transition-all">
            Activities
          </a>
          <a href="" className="text-white/70  hover:text-white transition-all">
            Contact Us
          </a>
        </div>
        <div className="flex items-center gap-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="bg-white rounded-full p-2 hover:bg-gray-200 transition"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill="#fff" />
              <path
                d="M8.339 17H6.167V10.667h2.172V17zM7.253 9.8a1.253 1.253 0 1 1 0-2.506 1.253 1.253 0 0 1 0 2.506zM17 17h-2.167v-3.2c0-.763-.014-1.744-1.063-1.744-1.064 0-1.227.832-1.227 1.69V17H10.38V10.667h2.08v.863h.03c.29-.55 1-1.13 2.06-1.13 2.204 0 2.61 1.45 2.61 3.34V17z"
                fill="#000"
              />
            </svg>
          </a>
          {/* Twitter */}
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="bg-white rounded-full p-2 hover:bg-gray-200 transition"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill="#fff" />
              <path
                d="M19.633 7.997c-.485.215-1.007.36-1.555.426a2.72 2.72 0 0 0 1.193-1.5 5.437 5.437 0 0 1-1.724.659A2.713 2.713 0 0 0 12.07 10.1a7.7 7.7 0 0 1-5.59-2.835a2.713 2.713 0 0 0 .84 3.624a2.7 2.7 0 0 1-1.229-.34v.034a2.713 2.713 0 0 0 2.176 2.66a2.72 2.72 0 0 1-1.226.047a2.714 2.714 0 0 0 2.534 1.885A5.44 5.44 0 0 1 5 17.027a7.68 7.68 0 0 0 4.164 1.22c5.002 0 7.735-4.143 7.735-7.735c0-.118-.003-.236-.008-.353a5.52 5.52 0 0 0 1.352-1.41z"
                fill="#000"
              />
            </svg>
          </a>
          {/* Instagram */}
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="bg-white rounded-full p-2 hover:bg-gray-200 transition"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill="#fff" />
              <g>
                <rect
                  x="7"
                  y="7"
                  width="10"
                  height="10"
                  rx="3"
                  stroke="#000"
                  strokeWidth="1.5"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="2.5"
                  stroke="#000"
                  strokeWidth="1.5"
                />
                <circle cx="15.5" cy="8.5" r="0.75" fill="#000" />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CustomFooter;
