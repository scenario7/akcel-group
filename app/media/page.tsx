'use client'
import HeroTemplate from "@/components/herotemplate";
import Navbar from "@/components/navbar";
import React, { useState } from "react";
import { Montserrat, Open_Sans } from "next/font/google";
import CustomFooter from "@/components/customfooter";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const MediaPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Sample media data
  const mediaItems = [
    {
      id: 1,
      type: "Article",
      title: "AKCEL Group Expands Motorsport Portfolio with New Racing Circuit",
      excerpt: "Our latest motorsport venture marks a significant milestone in precision engineering and performance excellence.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      date: "March 15, 2024",
      sector: "Motorsport",
      readTime: "5 min read"
    },
    {
      id: 2,
      type: "Podcast",
      title: "The Future of AI Infrastructure: A Deep Dive",
      excerpt: "Industry leaders discuss transformative AI solutions and digital infrastructure innovations.",
      image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=400&h=250&fit=crop",
      date: "March 12, 2024",
      sector: "Technology",
      readTime: "45 min listen"
    },
    {
      id: 3,
      type: "News",
      title: "Sustainable Smart Homes: Redefining Urban Living",
      excerpt: "AKCEL's real estate division launches innovative sustainable housing solutions across major cities.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop",
      date: "March 10, 2024",
      sector: "Real Estate",
      readTime: "3 min read"
    },
    {
      id: 4,
      type: "Video",
      title: "Next-Gen Learning: Education Reimagined",
      excerpt: "Exploring how technology is transforming educational experiences and creating inclusive learning environments.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      date: "March 8, 2024",
      sector: "Education",
      readTime: "12 min watch"
    },
    {
      id: 5,
      type: "Article",
      title: "Responsible Mining: Innovation Meets Sustainability",
      excerpt: "How AKCEL Group is pioneering efficient and environmentally conscious resource exploration.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
      date: "March 5, 2024",
      sector: "Mining",
      readTime: "7 min read"
    },
    {
      id: 6,
      type: "Podcast",
      title: "Media Evolution: From Traditional to Digital",
      excerpt: "Industry experts discuss the transformation of media landscapes and digital engagement strategies.",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=250&fit=crop",
      date: "March 3, 2024",
      sector: "Media",
      readTime: "38 min listen"
    },
    {
      id: 7,
      type: "News",
      title: "Global Expansion: AKCEL Opens New European Hub",
      excerpt: "Strategic expansion continues with the opening of our new European headquarters in Amsterdam.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop",
      date: "February 28, 2024",
      sector: "Technology",
      readTime: "4 min read"
    },
    {
      id: 8,
      type: "Article",
      title: "Precision Engineering in Modern Motorsport",
      excerpt: "Behind the scenes look at how cutting-edge technology drives performance in competitive racing.",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=250&fit=crop",
      date: "February 25, 2024",
      sector: "Motorsport",
      readTime: "6 min read"
    },
    {
      id: 9,
      type: "Video",
      title: "Smart Cities: Building Tomorrow's Infrastructure",
      excerpt: "Exploring how integrated technology and sustainable design create the cities of the future.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=250&fit=crop",
      date: "February 22, 2024",
      sector: "Real Estate",
      readTime: "15 min watch"
    }
  ];

  const sectors = ["All", "Motorsport", "Technology", "Real Estate", "Education", "Mining", "Media"];

  const filteredItems = selectedFilter === "All" 
    ? mediaItems 
    : mediaItems.filter(item => item.sector === selectedFilter);

interface SectorColors {
    [key: string]: string;
}

const getSectorColor = (sector: string): string => {
    const colors: SectorColors = {
        "Motorsport": "bg-red-100 text-red-800",
        "Technology": "bg-blue-100 text-blue-800",
        "Real Estate": "bg-green-100 text-green-800",
        "Education": "bg-purple-100 text-purple-800",
        "Mining": "bg-yellow-100 text-yellow-800",
        "Media": "bg-pink-100 text-pink-800"
    };
    return colors[sector] || "bg-gray-100 text-gray-800";
};


  return (
    <div className="flex flex-col min-h-screen" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Hero Section */}
      <Navbar />
        <HeroTemplate image="" title="" subtitle="The latest news, insights, and stories from across AKCEL Group"/>

      {/* Main Content */}
      <div className="flex-1 bg-white">
        <div className="mx-auto px-10 md:px-20 py-12">
          
          {/* Filter Buttons */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3">
              {sectors.map((sector) => (
                <button
                  key={sector}
                  onClick={() => setSelectedFilter(sector)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedFilter === sector
                      ? "bg-[#da291c] text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  {sector}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Showing {filteredItems.length} {filteredItems.length === 1 ? 'result' : 'results'} 
              {selectedFilter !== "All" && ` for "${selectedFilter}"`}
            </p>
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group cursor-pointer"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Sector Tag */}
                  <div className="mb-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getSectorColor(item.sector)}`}>
                      {item.sector}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 
                    className={`text-xl font-semibold tracking-tight text-black mb-3 group-hover:text-[#da291c] transition-colors duration-200 line-clamp-2 ${montserrat.className}`}
                  >
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p 
                    className={`text-gray-700 text-sm mb-4 line-clamp-3 ${openSans.className}`}

                  >
                    {item.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span style={{ fontFamily: 'Open Sans, sans-serif' }}>{item.date}</span>
                    <span style={{ fontFamily: 'Open Sans, sans-serif' }}>{item.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      <CustomFooter />
    </div>
  );
};

export default MediaPage;