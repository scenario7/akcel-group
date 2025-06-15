import React from "react";
import { notFound } from "next/navigation";
import { akcelCompanies } from "@/app/companyData";
import NavBar from "@/components/navbar";
import HeroTemplate from "@/components/herotemplate";
import CustomFooter from "@/components/customfooter";
import Image from "next/image";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export async function generateStaticParams() {
  return akcelCompanies.map((company) => ({
    slug: company.slug,
  }));
}

const CompanyPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  // Await the params Promise
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
        <div className="bg-gradient-to-b from-transparent to-[#da291c] w-[2px] h-20 mb-5"></div>

        <Image
          src={company.logo}
          alt={`${company.title} Logo`}
          className="w-32 h-auto mb-6"
          width={160}
          height={64}
        />

        {company.description.split("\n\n").map((para, index) => (
          <p
            key={index}
            className={`${openSans.className} text-center text-lg mt-4 w-full max-w-3xl text-black`}
          >
            {para}
          </p>
        ))}

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {company.images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`${company.title} image ${index + 1}`}
              className="w-64 h-40 object-cover rounded-lg shadow"
            />
          ))}
        </div>

        {company.link && (
          <a
            href={company.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${openSans.className} mt-6 text-blue-600 underline`}
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