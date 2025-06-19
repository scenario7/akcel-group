import React from "react";
import { notFound } from "next/navigation";
import { akcelBusinesses } from "@/app/companyData";
import NavBar from "@/components/navbar";
import HeroTemplate from "@/components/herotemplate";
import CustomFooter from "@/components/customfooter";
import Image from "next/image";
import { Montserrat, Open_Sans } from "next/font/google";

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

      <div className="flex flex-col items-center bg-white py-10 px-4">
        <div className="bg-gradient-to-b from-transparent to-[#da291c] w-[2px] h-20 mb-6"></div>

        {company.subtitle && (
          <blockquote
            className={`italic text-2xl text-center max-w-4xl text-[#da291c] mb-10 ${montserrat.className}`}
          >
            “{company.subtitle}”
          </blockquote>
        )}

        {company.description.split("\n\n").map((para, index) => (
          <p
            key={index}
            className={`${openSans.className} text-center text-lg mt-10 w-full max-w-6xl text-black`}
          >
            {para}
          </p>
        ))}
      </div>

      <div className="bg-white py-12 px-4">
        <h2
          className={`text-black text-3xl font-semibold mb-8 text-center ${montserrat.className}`}
        >
          Brands
        </h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {company.companies.map((c, index) => (
            <a
              key={index}
              href={`/companies/${c.slug}`}
              className="bg-white rounded-2xl hover:scale-105 transition-transform w-64 flex flex-col items-center p-6"
            >
              <Image
                src={c.logo}
                alt={c.title}
                width={100}
                height={100}
                className="object-contain h-24 w-auto mb-4"
              />
              <h3
                className={`text-xl font-semibold text-center text-black mb-4 ${montserrat.className}`}
              >
                {c.title}
              </h3>
              <a
                href={`/companies/${c.slug}`}
                className="mt-auto bg-[#da291c] text-white text-sm font-semibold px-4 py-2 transition hover:bg-[#b51f16]"
              >
                Read More
              </a>
            </a>
          ))}
        </div>
      </div>

      <CustomFooter />
    </div>
  );
};

export default CompanyPage;
