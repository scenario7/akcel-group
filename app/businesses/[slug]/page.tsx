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

// Animated Scroll Chevrons Component


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
    <div className="flex flex-col">
      <div className="flex flex-col h-screen w-screen">
        <NavBar />

        <div
          className="relative w-full h-full"
          style={{
            backgroundImage: `url(${company.companies[0].images[1]})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black opacity-100 z-5" />
          <CompanyHeader
            title={company.subtitle}
            subtitle={company.description}
          />
        </div>
      </div>
      {/* <div className="flex flex-col items-start bg-white py-10 px-10">
        {company.description.split("\n\n").map((para, index) => (
          <p
            key={index}
            className={`${openSans.className} text-left text-lg w-full  text-black`}
          >
            {para}
          </p>
        ))}
      </div> */}

      <div className="bg-white pt-8">
        <h2
          className={`text-black text-3xl font-semibold mb-8 text-left px-10 ${montserrat.className}`}
        >
          Brands
        </h2>
        <div className="flex flex-col mx-auto">
          {company.companies.map((c, index) => {
            return (
              <div className={`flex ${index%2===0 ? 'flex-row' : 'flex-row-reverse'} items-center`} key={index}>
                <div className="w-1/2 flex flex-col items-center px-20 gap-10">
                  <img
                    src={c.logo.src}
                    alt=""
                    className="h-36 w-48 object-contain"
                  />
                  <p
                    className={`${openSans.className} text-black text-lg tracking-tight`}
                  >
                    {c.description}
                  </p>
                  <a
                    href="/press-releases"
                    className={`${openSans.className} w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#da291c] text-white font-medium hover:bg-gray-900 transition-colors`}
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
                <img src={c.images[0]} alt="" className="w-1/2" />
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