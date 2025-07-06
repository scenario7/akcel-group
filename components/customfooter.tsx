import React from "react";
import whiteLogo from "@/images/whiteLogo.png";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import ShinyText from "@/animations/ShinyText/ShinyText";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const CustomFooter = () => {
  return (
    <footer className="bg-black w-full px-6 md:px-10 pt-10">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        {/* Logo and Socials */}
        <div className="flex flex-col items-center md:items-start text-white gap-4 w-full md:w-auto">
          <img src={whiteLogo.src} alt="Logo" className="h-20 md:h-24" />
          <div className="flex items-center gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="bg-white rounded-full p-2 hover:bg-gray-200 transition"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row justify-between w-full md:w-2/3 gap-6 text-white">
          <div
            className={`flex flex-col gap-2 ${openSans.className} font-semibold`}
          >
            <Link href="/">Home</Link>
            <Link href="/leadership">Leadership</Link>
            <Link href="/our-story">Our Story</Link>
          </div>
          <div
            className={`flex flex-col gap-2 ${openSans.className} font-semibold`}
          >
            <Link href="/careers">Careers</Link>
            <Link href="/media">Media</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
          <div
            className={`flex flex-col gap-2 ${openSans.className} font-semibold`}
          >
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-10">
      <ShinyText text="© Copyright 2025 AKCEL Group | All Rights Reserved" className={`${openSans.className} text-xs md:text-sm`} disabled={false}/>
      </div>
    </footer>
  );
};

export default CustomFooter;
