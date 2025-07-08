import React from "react";
import NavBar from "@/components/navbar";
import HeroTemplate from "@/components/herotemplate";
import CustomFooter from "@/components/customfooter";
import { Montserrat, Open_Sans } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

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
        <div className="flex flex-col items-start p-10 mx-auto w-full">
          {/* Who We Are */}
          <div className="w-full">
            <h1
              className={`${montserrat.className} text-4xl font-bold text-black mb-6`}
            >
              Who We Are
            </h1>
            <div className="space-y-6">
              <p className={`${openSans.className} text-[18px] text-black`}>
                Headquartered in Dubai, AKCEL Group is a diversified global
                enterprise with a cross-continental footprint spanning Europe,
                India, the Middle East, the UK, and the US. We operate across
                high-growth, future-focused sectors—Motorsport, Media, Real
                Estate, IT & Technology, Education, and Mining—with a mission to
                redefine industries through innovation, design, and
                human-centered experiences.
              </p>
              <p className={`${openSans.className} text-[18px] text-black`}>
                From its foundations in technology and innovation, AKCEL Group
                has grown into a visionary enterprise with a dynamic presence
                across real estate, media, motorsport, education, and mining.
                Our journey reflects a future-focused mindset, where each
                venture is driven by a desire to shape industries, elevate human
                potential, and create meaningful, connected ecosystems.
              </p>
              <p className={`${openSans.className} text-[18px] text-black`}>
                From cutting-edge digital platforms and AI infrastructure to
                smart homes, racing circuits, learning ecosystems, and
                resource-driven ventures, we are building a connected,
                future-ready world—where technology, creativity, education, and
                sustainability converge.
              </p>
            </div>
          </div>

          {/* What We Do */}
          <div className="w-full mt-14">
            <div className="flex md:flex-row flex-col md:items-center justify-start gap-10 md:gap-10 pb-10">
              <h1
                className={`${montserrat.className} text-4xl font-bold text-black text-left `}
              >
                What we do
              </h1>
              <div className="bg-gradient-to-r md:bg-gradient-to-b from-transparent via-[#da291c] to-transparent md:w-[2px] md:h-20 h-[2px] w-32"></div>
              <p
                className={`${openSans.className} text-xl text-black`}
              >
                We leverage deep-rooted expertise to build integrated ecosystems
                across:
              </p>
            </div>
            <ul className="grid md:grid-cols-2 gap-6">
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
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-[#da291c] text-xl font-bold mt-1">
                    •
                  </span>
                  <div className="text-black">
                    <p
                      className={`${openSans.className} text-3xl tracking-tight font-semibold`}
                    >
                      <span className="text-[#da291c] font-black">
                        {item.title[0]}
                      </span>
                      {item.title.slice(1)}
                    </p>
                    <p
                      className={`${openSans.className} text-[16px] mt-1 text-gray-700`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <CustomFooter />
    </div>
  );
};

export default Page;
