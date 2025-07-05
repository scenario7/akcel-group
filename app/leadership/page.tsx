import React from "react";
import NavBar from "@/components/navbar";
import HeroTemplate from "@/components/herotemplate";
import CustomFooter from "@/components/customfooter";
import { Montserrat, Open_Sans } from "next/font/google";
import amit from "@/images/amitnew.jpg";

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
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <HeroTemplate
        image="https://images.unsplash.com/photo-1513759565286-20e9c5fad06b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Leadership"
        subtitle=""
      />

      <section className="flex flex-col items-center bg-white py-16 px-6 md:px-20">
        <div className="bg-gradient-to-b from-transparent to-[#da291c] w-[2px] h-20 mb-5" />

        <article className="flex flex-col md:flex-row gap-10 items-start w-full">
          <div className="bg-black w-full md:w-1/4 flex flex-col justify-between overflow-hidden shadow-lg">
            <img
              src={amit.src}
              alt="Amit Kaushal"
              className="w-full h-[50%] object-cover object-top"
            />
            <div className="text-center px-4 py-3 flex flex-col justify-center">
              <h2
                className={`${montserrat.className} text-2xl text-white font-semibold`}
              >
                Amit Kaushal
              </h2>
              <p
                className={`${openSans.className} text-white/70 font-semibold tracking-tight`}
              >
                Chairman, AKCEL Group
              </p>
            </div>
          </div>

          <div className="space-y-6 text-black flex-1">
            <p className={`${openSans.className} text-lg`}>
              Amit Kaushal, Founder and Chairman of AKCEL Group, is a globally
              recognized entrepreneur and venture capitalist, known for his
              strategic, results-driven approach to creating long-term value
              across multiple sectors. With over 25 years of experience across
              corporate leadership and entrepreneurship, Amit has built a
              portfolio of ventures that span the UK, Ireland, India, the US,
              and the UAE.
            </p>

            <p className={`${openSans.className} text-lg`}>
              His career began in India and progressed through senior roles in
              global financial institutions including Bank of New York Mellon,
              Wells Fargo, Santander, Barclays, and UBS in the UK. In 2001, he
              launched his first venture in IT consulting and training, which
              laid the foundation for AKCEL Groups growth into a multi-sector
              enterprise.
            </p>
            <blockquote
              className={`${openSans.className} bg-black/5 text-xl italic text-gray-700 border-l-4 border-[#da291c] pl-4 py-5`}
            >
              &ldquo;True leadership is not about titles or authority—its about
              vision, responsibility, and the courage to act when it matters
              most. At our core, we lead by empowering others to succeed.&ldquo;
              <br />
              <span className="text-sm not-italic font-medium text-gray-600">
                — Amit Kaushal, CEO
              </span>
            </blockquote>
            <p className={`${openSans.className} text-lg`}>
              Under his leadership, the Group has scaled operations
              internationally, serving Fortune 500 clients and launching
              standout ventures like AKCEL GP, a high-performance Formula Racing
              Team based in the UAE. Amit is passionate about fostering
              innovation, developing talent, and shaping the future of
              motorsports, real estate, and education.
            </p>

            <p className={`${openSans.className} text-lg`}>
              Based in London, he continues to play an active role in driving
              strategic growth, overseeing investments, and providing mentorship
              across the Group.
            </p>
          </div>
        </article>
      </section>

      <CustomFooter />
    </div>
  );
};

export default Page;
