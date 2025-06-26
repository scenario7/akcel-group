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
    <div className="flex flex-col">
      <div className="flex flex-col h-screen w-screen">
        <NavBar />

        <div
          className="relative w-full h-full"
          style={{
            backgroundImage: `url(${company.companies[0].images[0]})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black/50 opacity-100 z-5" />
          <CompanyHeader title={company.title} subtitle={company.subtitle} />
        </div>
      </div>
      <div className="flex flex-col items-start bg-white py-10 px-10">
        {company.description.split("\n\n").map((para, index) => (
          <p
            key={index}
            className={`${openSans.className} text-left text-lg w-full  text-black`}
          >
            {para}
          </p>
        ))}
      </div>

      <div className="bg-white  ">
        <h2
          className={`text-black text-3xl font-semibold mb-8 text-left px-10 ${montserrat.className}`}
        >
          Brands
        </h2>
        <div className="flex flex-col mx-auto">
          {company.companies.map((c, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  className={`relative gap-5 items-center px-10 py-20 flex`}
                  // style={{
                  //   backgroundImage: `url(${
                  //     c.images && c.images.length > 0 && c.images[0]
                  //       ? c.images[0]
                  //       : "https://source.unsplash.com/1600x900/?business,office"
                  //   })`,
                  //   backgroundSize: "cover",
                  //   backgroundPosition: "bottom",
                  // }}
                >
                  {/* <div className="absolute inset-0 bg-black backdrop-blur-[1px] opacity-80 z-0" /> */}

                  {/* Set relative z-index so it's above the overlay, and keep it in the layout */}
                  <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start md:items-center w-full">
                    <div className="flex flex-col">
                      <img
                        src={c.logo.src}
                        alt={c.title}
                        className="object-contain mb-4 w-96 h-48 bg-white p-10"
                      />
                      <a
                        href={c.slug}
                        className={`${openSans.className} tracking-tight inline-flex items-center justify-center gap-1 px-3 py-2 bg-white text-[#da291c] text-sm transition-all mt-5 font-semibold`}
                      >
                        Visit Website
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 ml-1"
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
                    <div className="flex flex-col gap-10 flex-1">
                      <p
                        className={`${openSans.className} tracking-tight text-black text-lg text-left`}
                      >
                        {c.description}
                      </p>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <CustomFooter />
    </div>
  );
};

export default CompanyPage;
