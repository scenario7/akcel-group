import React from "react";
import { notFound } from "next/navigation";
import { akcelCompanies } from "@/app/companyData";
import NavBar from "@/components/navbar";
import HeroTemplate from "@/components/herotemplate";
import CustomFooter from "@/components/customfooter";
import Image from "next/image";
import { Open_Sans } from "next/font/google";
import Carousel from "@/components/carousel";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export async function generateStaticParams() {
  return akcelCompanies.map((company) => ({
    slug: company.slug,
  }));
}

// 👇 Now this MUST be an async component to handle the Promise params
const CompanyPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  // 👇 Await the params to get the actual slug value
  const { slug } = await params;
  
  const company = akcelCompanies.find((item) => item.slug === slug);

  if (!company) return notFound();

  return (
    <div className="flex flex-col">
      <NavBar />

      <HeroTemplate
        image={company.images[0]}
        title={company.title}
        subtitle=""
      />

      <div className="flex flex-col items-center bg-white py-10 px-4">
        <div className="bg-gradient-to-b from-transparent to-[#da291c] w-[2px] h-20"></div>

        <Image
          src={company.logo}
          alt={`${company.title} Logo`}
          className="w-32 h-auto"
          width={160}
          height={64}
        />

        <Carousel images={company.images} title={company.title} />

        {company.description.split("\n\n").map((para, index) => (
          <p
            key={index}
            className={`${openSans.className} text-center text-lg mt-10 w-full max-w-6xl text-black`}
          >
            {para}
          </p>
        ))}

        {company.link && (
          <a
            href={company.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${openSans.className} mt-6 text-white tracking-tight font-semibold p-3 bg-[#da291c] `}
          >
            Visit Website
          </a>
        )}
      </div>

      <CustomFooter />
    </div>
  );
};

export default CompanyPage;