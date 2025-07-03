import React from "react";
import { notFound } from "next/navigation";
import { akcelBusinesses } from "@/app/companyData";
import NavBar from "@/components/navbar";
import CustomFooter from "@/components/customfooter";
import { Montserrat, Open_Sans } from "next/font/google";
import CompanyHeader from "@/components/businesshero";

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
  // 👇 Await the params to get the actual slug value
  const { slug } = await params;

  const company = akcelBusinesses.find((item) => item.slug === slug);

  if (!company) return notFound();

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <div className="flex flex-col h-screen w-screen">
        <NavBar lightMode />

        <div className="relative w-full h-full flex items-center justify-end">
          <img 
            src={company.companies[0].images[1]} 
            alt="" 
            className="absolute z-0 w-auto h-3/5 sm:h-4/5 object-contain rounded-xl px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20"
          />
          {/* White to transparent gradient overlay from left to right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent z-10" />
          <CompanyHeader
            title={company.subtitle}
            subtitle={company.description}
          />
        </div>
      </div>

      {/* Brands Section */}
      <div className="bg-white pt-6 sm:pt-8">
        <h2
          className={`text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 text-left px-4 sm:px-6 md:px-8 lg:px-10 ${montserrat.className}`}
        >
          Brands
        </h2>
        
        <div className="flex flex-col mx-auto">
          {company.companies.map((c, index) => {
            return (
              <div 
                className={`flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6 lg:gap-0 py-8 lg:py-12`} 
                key={index}
              >
                {/* Content Section */}
                <div className="w-full lg:w-1/2 flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 gap-6 lg:gap-10">
                  <img
                    src={c.logo.src}
                    alt=""
                    className="h-20 w-32 sm:h-24 sm:w-36 md:h-28 md:w-40 lg:h-32 lg:w-44 xl:h-36 xl:w-48 object-contain"
                  />
                  <p
                    className={`${openSans.className} text-black text-sm sm:text-base md:text-lg tracking-tight text-center lg:text-left leading-relaxed`}
                  >
                    {c.description}
                  </p>
                  <a
                    href={c.link}
                    target="_blank"
                    className={`${openSans.className} w-full max-w-xs lg:max-w-none inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#da291c] text-white text-sm sm:text-base font-medium hover:bg-gray-900 transition-colors rounded-md lg:rounded-none`}
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
                </div>
                
                {/* Image Section */}
                <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-10">
                  <img 
                    src={c.images[0]} 
                    alt="" 
                    className="w-full h-auto object-contain rounded-lg lg:rounded-none"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <CustomFooter />
    </div>
  );
};

export default CompanyPage;