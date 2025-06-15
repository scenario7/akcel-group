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
        title="Leadership"
        subtitle=""
      />
      <div className="flex flex-col items-center bg-[#ffffff]">
        <div className="bg-gradient-to-b from-transparent to-[#da291c] w-[2px] h-20 mb-5"></div>
        <h1
          className={`${montserrat.className} text-center text-3xl font-semibold text-black`}
        >
          Leadership
        </h1>
        <div className="flex flex-col items-center p-10">
          <img
            src="https://gulfbusiness.com/wp-content/uploads/2025/04/094A6197.jpg"
            alt=""
            className="w-32 object-cover h-32 rounded-full object-top"
          />
          <div className="flex flex-col items-center mt-4">
          <h2 className={`${montserrat.className} text-black text-2xl`}>Amit Kaushal</h2>
          <h2 className={`${openSans.className} text-black/70 font-semibold tracking-tight`}>Chairman, AKCEL Group</h2>
          </div>
          <p className={`${openSans.className} text-center text-lg mt-4 w-3/4 text-black`}>
            Amit Kaushal, Founder and Chairman of AKCEL Group, is a globally recognized entrepreneur and venture capitalist, known for his strategic, results-driven approach to creating long-term value across multiple sectors. With over 25 years of experience across corporate leadership and entrepreneurship, Amit has built a portfolio of ventures that span the UK, Ireland, India, the US, and the UAE.
          </p>
          <p className={`${openSans.className} text-center text-lg mt-4 w-3/4 text-black`}>
            His career began in India and progressed through senior roles in global financial institutions including Bank of New York Mellon, Wells Fargo, Santander, Barclays, and UBS in the UK. In 2001, he launched his first venture in IT consulting and training, which laid the foundation for AKCEL Group’s growth into a multi-sector enterprise.
          </p>
          <p className={`${openSans.className} text-center text-lg mt-4 w-3/4 text-black`}>
            Under his leadership, the Group has scaled operations internationally, serving Fortune 500 clients and launching standout ventures like AKCEL GP, a high-performance Formula Racing Team based in the UAE. Amit is passionate about fostering innovation, developing talent, and shaping the future of motorsports, real estate, and education.
          </p>
          <p className={`${openSans.className} text-center text-lg mt-4 w-3/4 text-black`}>
            Based in London, he continues to play an active role in driving strategic growth, overseeing investments, and providing mentorship across the Group.
          </p>
        </div>
      </div>
      <CustomFooter />
    </div>
  );
};

export default Page;
