'use client';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Montserrat, Open_Sans } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const CompanyHeader = ({ title, subtitle }: { title: string, subtitle: string }) => {
  return (
    <div className="absolute z-10 h-full w-full flex flex-col items-center justify-center text-white text-center">
      <h1 className={`${montserrat.className} text-6xl md:text-8xl font-bold uppercase`}>
        {title}
      </h1>
      <TypeAnimation
        sequence={[subtitle, 1000]}
        wrapper="span"
        speed={50}
        className={`${openSans.className} tracking-tight italic font-semibold text-2xl`}
        repeat={Infinity}
      />
    </div>
  );
};

export default CompanyHeader;
