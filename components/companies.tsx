"use client";
import React from "react";
import { Montserrat, Open_Sans } from "next/font/google";
import academy from "@/images/academy.png";
import remax from "@/images/remax.png";
import realty from "@/images/realty.png";
import jetking from "@/images/jetking.png";
import entertainment from "@/images/entertainment.png";
import investments from "@/images/investments.png";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const companies = [
  {
    name: "Akcel GP",
    comingSoon: false,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", // Business team
    logo: academy.src,
    description:
      "Backed by the AKCEL Group, AKCEL GP is a UAE-based motorsport team making its mark on the international racing stage. Competing in the Formula Regional European Championship by Alpine (FRECA), the Formula Regional Middle East Championship (FRMEC), and the Formula 4 (F4) series, AKCEL GP is committed to excellence in motorsport. With a clear mission to nurture young racing talent and compete at the highest levels, the team embodies the AKCEL Group's vision of innovation, ambition, and performance at the forefront of global racing. ",
  },
  {
    name: "Akcel Entertainment and Media",
    comingSoon: false,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80", // Technology/IT office
    logo: entertainment.src,
    description:
      "A dynamic and forward-thinking company specializing in media and communication services, including audio/video production, podcasts, event organization, and artist management. Committed to innovation, the company is also expanding into the thriving world of e-gaming, creating opportunities for gamers and content creators alike. With a mission to empower voices, build communities, and shape the future of entertainment, AKCEL Entertainment & Media continues to redefine industry standards and deliver impactful experiences.",
  },
  {
    name: "Jetking Technologies",
    comingSoon: false,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80", // Real estate
    logo: jetking.src,
    description:
      "with a legacy spanning over six decades, JetKing Technologies is a leading provider of cutting-edge IT solutions tailored to businesses across all industries. Specializing in IT infrastructure services, the company delivers comprehensive and customized solutions that meet the evolving needs of its clients. With a commitment to innovation, reliability, and excellence, Jetking Technologies continues to empower businesses with the technology and expertise required to thrive in a rapidly changing digital landscape.",
  },
  {
    name: "Akcel Realty",
    comingSoon: false,
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80", // Modern building
    logo: realty.src,
    description:
      "A premium real estate developer based in the UAE, dedicated to redefining modern living through luxury residential projects and exclusive holiday homes. AKCEL Realty is currently launching new residential developments as joint ventures, the company is set to introduce its own premium residential projects across the country, blending innovation, elegance, and high-end amenities. Expanding its vision beyond traditional real estate, AKCEL Realty is also bringing a unique concept to the market—Formula Racing-themed holiday homes, seamlessly combining luxury with a dynamic, sporty lifestyle.",
  },
  {
    name: "RE/MAX India",
    comingSoon: false,
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80", // Real estate handshake
    logo: remax.src,
    description:
      "Standing as the country’s largest real estate entrepreneur community, with a network of 72+ offices and 684+ agents, RE/MAX India Operates across 25+ states and covers 70% of India’s population. The company is redefining the real estate landscape with its innovative approach, industry expertise, and commitment to empowering entrepreneurs. By fostering a dynamic ecosystem of professionals, RE/MAX India continues to set new benchmarks in real estate excellence and customer service. ",
  },
  {
    name: "Akcel Investments",
    comingSoon: false,
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80", // Real estate handshake
    logo: investments.src,
    description:
      "is all set to redefine investment opportunities by introducing a diverse range of alternative investment products, including Real Estate Funds, Development Funds, and Sports Funds. With a strategic vision to empower investors and drive high-value growth, the company offers innovative Investment solutions designed to unlock new avenues in real estate, infrastructure development, and the dynamic world of sports. Backed by expertise and a commitment to excellence, AKCEL Investments is poised to become a key player in the evolving investment landscape. ",
  },
  {
    name: "Akcel GP Academy",
    comingSoon: false,
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80", // Real estate handshake
    logo: academy.src,
    description:
      "a premier training academy dedicated to developing top-tier talent in two of the UAE’s most promising sectors—IT services and real estate sales. With a strong commitment to professional excellence and skill development, the academy will offer specialized training programs designed to equip individuals with the expertise needed to excel in these dynamic industries. By combining cutting-edge education, industry insights, and hands-on experience, AKCEL Academy aims to empower professionals and drive innovation, growth, and success in the UAE’s thriving business landscape. ",
  },
];

const Companies = () => {
  return (
    <div className="flex flex-col items-center p-10 bg-[#ffffff] w-screen gap-10">
      <div className="bg-gradient-to-b from-transparent to-[#da291c] w-[2px] h-20 mb-5"></div>
      <h1
        className={`${montserrat.className} text-center text-3xl font-semibold text-black`}
      >
        Brands
      </h1>
      <div className="w-screen flex justify-center">
        <div className="grid grid-cols-2 items-center gap-10 gap-x-20 py-10 px-10">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex flex-col items-center bg-white p-6 gap-5 w-full max-w-3xl hover:bg-[#da291c] hover:text-white group backdrop-blur-2xl transition-all ease-in-out duration-200 h-full min-h-[220px]"
              style={{ height: "100%" }}
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-36 w-36 object-contain rounded-lg p-2 bg-white"
              />
              <div className="flex flex-col flex-1">
                <h2
                  className={`${montserrat.className} text-xl text-center font-semibold text-black mb-2 group-hover:text-white`}
                >
                  {company.name}
                </h2>
                <p
                  className={`${openSans.className} text-gray-700 text-center text-base group-hover:text-white`}
                >
                  {company.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
