import React from "react";
import { notFound } from "next/navigation";
import { akcelBusinesses } from "@/app/companyData";
import NavBar from "@/components/navbar";
import CustomFooter from "@/components/customfooter";
import { Montserrat, Open_Sans } from "next/font/google";
import CompanyHeader from "@/components/businesshero";
import HeroTemplate from "@/components/herotemplate";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export async function generateStaticParams() {
  return akcelBusinesses.map((company) => ({
    slug: company.slug,
  }));
}

// 👇 Now this MUST be an async component to handle the Promise params
const CompanyPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const comingSoonSlugs = ["education", "investment"];

  if (comingSoonSlugs.includes(slug)) {
    return (
      <div className="flex flex-col bg-black min-h-screen text-white text-center">
        <NavBar />
        <div className="mt-20 flex flex-col h-full gap-10 items-center justify-center px-10 py-10">
          <h1
            className={`text-4xl sm:text-5xl font-bold mb-4 ${montserrat.className}`}
          >
            Coming Soon
          </h1>
          <p
            className={`text-lg sm:text-xl max-w-xl mx-auto ${openSans.className}`}
          >
            We&apos;re working hard to bring you more information on our work in{" "}
            <span className="font-semibold capitalize text-[#da291c]">
              {slug}
            </span>
            . Stay tuned!
          </p>
          <a
            href={`/`}
            className={`bg-[#da291c] text-white md:text-md text-sm font-semibold px-4 py-2 `}
          >
            Homepage
          </a>
        </div>
        <div className="mt-auto w-full">
          <CustomFooter />
        </div>
      </div>
    );
  }

  const company = akcelBusinesses.find((item) => item.slug === slug);
  if (!company) return notFound();

  return (
    <div className="flex flex-col bg-gradient-to-b from-black to-black/80">
      {/* Hero Section */}
      <NavBar />
      <div className="relative flex flex-col min-h-screen w-full">
        <div className="absolute z-0 w-full h-full flex items-center md:justify-end">
          <div className="relative w-full md:w-8/12 h-full">
            <img
              src={company.companies[0].images[1]}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black md:from-black via-black/80 to-transparent z-10 " />
          </div>

          <CompanyHeader
            title={company.subtitle}
            subtitle={company.description}
          />
        </div>
      </div>

      {/* Brands Section */}
      <div className="bg-white">
        <HeroTemplate title="Brands" subtitle="" image="" />

        <div className="flex flex-col mx-auto">
          {company.companies.map((c, index) => (
            <div
              className={`flex flex-col lg:flex-row ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-6 lg:gap-0`}
              key={index}
            >
              <div className="w-full lg:w-1/2 flex flex-col gap-5 items-center">
                <img
                  src={c.logo.src}
                  alt=""
                  className="h-20 w-32 md:h-24 md:w-36 object-contain"
                />
                <p
                  className={`${openSans.className} text-black text-sm md:text-[16px] tracking-tight text-justify lg:text-justify leading-relaxed px-14`}
                >
                  {c.description}
                </p>
                {c.link && (
                  <a
                    href={c.link}
                    target="_blank"
                    className={`${openSans.className} max-w-xs lg:max-w-none inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#da291c] text-white text-sm sm:text-base font-medium hover:bg-gray-900 transition-colors rounded-md lg:rounded-none`}
                  >
                    Visit Website
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                )}
              </div>

                <img
                  src={c.images[0]}
                  alt=""
                  className="h-full md:w-1/2 object-cover rounded-lg lg:rounded-none"
                />
            </div>
          ))}
        </div>
      </div>

      <CustomFooter />
    </div>
  );
};

export default CompanyPage;
