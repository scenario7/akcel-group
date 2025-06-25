import React from "react";
import NavBar from "@/components/navbar";
import HeroTemplate from "@/components/herotemplate";
import CustomFooter from "@/components/customfooter";
import { Montserrat, Open_Sans } from "next/font/google";
import Marquee from "react-fast-marquee";
import { akcelBusinesses } from "../companyData";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const flagUrls = [
  { src: "https://flagcdn.com/gb.svg", alt: "UK" },
  { src: "https://flagcdn.com/ae.svg", alt: "UAE" },
  { src: "https://flagcdn.com/in.svg", alt: "India" },
  { src: "https://flagcdn.com/ie.svg", alt: "Ireland" },
  { src: "https://flagcdn.com/it.svg", alt: "Italy" },
];

const Page = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <HeroTemplate
        image="https://images.unsplash.com/photo-1513759565286-20e9c5fad06b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Establishing Excellence Across Industries"
        subtitle=""
      />
      <div className="flex flex-col items-start bg-[#ffffff]">
        <div className="flex flex-col items-start p-10">
          <div className="flex justify-between w-full">
            <div>
              {/* Who We Are */}
              <h1
                className={`${montserrat.className} text-3xl font-semibold text-black`}
              >
                Who We Are
              </h1>
              <p className={`${openSans.className} text-lg mt-4 text-black`}>
                Headquartered in Dubai, AKCEL Group is a diversified global
                enterprise with a cross-continental footprint spanning Europe,
                India, the Middle East, the UK, and the US. We operate across
                high-growth, future-focused sectors—Motorsport, Media, Real
                Estate, IT & Technology, Education, and Mining—with a mission to
                redefine industries through innovation, design, and
                human-centered experiences.
              </p>
              <p className={`${openSans.className} text-lg mt-4 text-black`}>
                From its foundations in technology and innovation, AKCEL Group
                has grown into a visionary enterprise with a dynamic presence
                across real estate, media, motorsport, education, and mining.
                Our journey reflects a future-focused mindset, where each
                venture is driven by a desire to shape industries, elevate human
                potential, and create meaningful, connected ecosystems.
              </p>
              <p className={`${openSans.className} text-lg mt-4 text-black`}>
                From cutting-edge digital platforms and AI infrastructure to
                smart homes, racing circuits, learning ecosystems, and
                resource-driven ventures, we are building a connected,
                future-ready world—where technology, creativity, education, and
                sustainability converge.
              </p>
            </div>
            <Marquee
              gradient
              speed={40}
              pauseOnHover={true}
              className="my-10 mx-10"
            >
              {flagUrls.map((flag) => (
                <img
                  key={flag.alt}
                  src={flag.src}
                  alt={flag.alt}
                  className="w-24 h-16 object-cover mx-6 shadow"
                />
              ))}
            </Marquee>
          </div>

          {/* What We Do */}
          <div className="flex justify-between w-full">
            <div>
              <h1
                className={`${montserrat.className} text-3xl font-semibold text-black mt-20`}
              >
                What We Do
              </h1>
              <p className={`${openSans.className} text-lg mt-4 text-black`}>
                We leverage deep-rooted expertise to build integrated ecosystems
                across:
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  {
                    title: "Motorsport",
                    desc: "Driving performance, precision, and excellence on and off the track.",
                  },
                  {
                    title: "Media & Entertainment",
                    desc: "Shaping narratives and digital platforms that inform, engage, and inspire.",
                  },
                  {
                    title: "Real Estate",
                    desc: "Designing future-ready spaces that combine timeless aesthetics with smart, sustainable functionality.",
                  },
                  {
                    title: "IT & Technology",
                    desc: "Delivering transformative solutions in AI, cloud, and digital infrastructure.",
                  },
                  {
                    title: "Education",
                    desc: "Creating inclusive, forward-thinking learning models that shape tomorrow’s talent.",
                  },
                  {
                    title: "Mining & Resources",
                    desc: "Engaging in responsible and efficient resource exploration to fuel industry and innovation.",
                  },
                ].map((item, index) => (
                  <li key={index} className="relative pl-6 text-black">
                    <span className="absolute left-0 top-1 text-[#da291c] text-xl leading-5">
                      •
                    </span>
                    <span className={`${openSans.className} text-lg`}>
                      <strong>{item.title}:</strong> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-20 mx-10">
                {akcelBusinesses.slice(0, 6).map((company) => (
                  <div key={company.image} className="flex flex-col items-center">
                    <img
                      src={company.image}
                      alt={company.title}
                      className="w-40 h-28 object-cover shadow mb-3"
                    />
                    <span className={`text-black font-medium text-center ${openSans.className}`}>{company.title}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <CustomFooter />
    </div>
  );
};

export default Page;
