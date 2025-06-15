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
        title="Our Story"
        subtitle=""
      />
      <div className="flex flex-col items-center bg-[#ffffff]">
        <div className="bg-gradient-to-b from-transparent to-[#da291c] w-[2px] h-20 mb-5"></div>
        <h1
          className={`${montserrat.className} text-center text-3xl font-semibold text-black`}
        >
          History and Milestones
        </h1>
        <div className="flex flex-col items-center p-10">
          <div className="flex flex-col items-center mt-4">
          </div>
            <p className={`${openSans.className} text-center text-lg mt-4 w-3/4 text-black`}>
            Founded by seasoned entrepreneur Amit Kaushal, AKCEL Group draws on over 25 years of corporate expertise. Our journey began with IT consulting and training services in the UK, supporting leading firms across sectors including Automotive, Energy, Banking, Healthcare, Retail, Telecom, and Media.
            </p>
            <p className={`${openSans.className} text-center text-lg mt-4 w-3/4 text-black`}>
            Today, we operate across the UK, Ireland, India, the US, and the UAE. In India, we own and operate Jetking — one of the country’s largest IT training networks with over 100 centres. Our recent entry into UAE real estate through a branded residence partnership with BNW marks our continued growth in high-potential sectors.
            </p>
            <p className={`${openSans.className} text-center text-lg mt-4 w-3/4 text-black`}>
            At the forefront of our portfolio is AKCEL GP, our flagship high-performance Formula Racing Team. More than just a racing outfit, AKCEL GP embodies our core values of speed, precision, and innovation. Centred in the UAE, the team is driving a long-term vision to establish the region as a global motorsports hub by nurturing local talent and placing them on the world stage.
            </p>
            <p className={`${openSans.className} text-center text-lg mt-4 w-3/4 text-black`}>
            Looking ahead, AKCEL Group is expanding into alternative investments, from angel funding to venture capital, while strengthening its commitment to developing future-ready talent in motorsports, real estate, and IT.
            </p>
        </div>
      </div>
      <CustomFooter />
    </div>
  );
};

export default Page;
