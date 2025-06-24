import React from "react";
import { notFound } from "next/navigation";
import { akcelBusinesses } from "@/app/companyData";
import NavBar from "@/components/navbar";
import HeroTemplate from "@/components/herotemplate";
import CustomFooter from "@/components/customfooter";
import { Montserrat, Open_Sans } from "next/font/google";
import Marquee from "react-fast-marquee";

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
      <NavBar />

      <HeroTemplate image={company.image} title={company.title} subtitle="" />

      <div className="flex flex-col items-start bg-white py-10 px-10">
        {company.subtitle && (
          <blockquote
            className={`italic text-2xl text-left max-w-4xl text-[#da291c] mb-10 ${montserrat.className}`}
          >
            “{company.subtitle}”
          </blockquote>
        )}

        {company.description.split("\n\n").map((para, index) => (
          <p
            key={index}
            className={`${openSans.className} text-left text-lg mt-10 w-full  text-black`}
          >
            {para}
          </p>
        ))}
      </div>

      <div className="bg-white py-12 ">
        <h2
          className={`text-black text-3xl font-semibold mb-8 text-left px-10 ${montserrat.className}`}
        >
          Brands
        </h2>
        <div className="flex flex-col gap-20 mx-auto p-10">
          {company.companies.map((c, index) => (
            <React.Fragment key={index}>
              <div className="flex gap-5 items-center">
                <div className="flex flex-col">
                  <img
                    src={c.logo.src}
                    alt={c.title}
                    className="object-contain mb-4 w-96 h-48"
                  />
                  <a
                    href={c.slug}
                    className={`${openSans.className} tracking-tight inline-flex items-center gap-1 px-3 py-2 bg-[#da291c] text-white text-sm transition-all mt-5`}
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
                <div className="flex flex-col items-start gap-10 pl-10">
                  <Marquee gradient speed={30}>
                    {c.images.map((im, idx) => (
                      <img
                        src={im}
                        alt=""
                        key={idx}
                        className="w-48 h-36 object-cover mx-5"
                      />
                    ))}
                  </Marquee>
                  <p
                    className={`${openSans.className} tracking-tight text-black text-center`}
                  >
                    {c.description}
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <CustomFooter />
    </div>
  );
};

export default CompanyPage;
