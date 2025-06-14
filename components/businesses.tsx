import React from 'react'
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const businesses = [
    {
        name: "Motor Sports",
        image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80"
    },
    {
        name: "IT Services",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
    },
    {
        name: "Entertainment & Media",
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
    },
    {
        name: "Real Estate Development & Brokerage",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
    },
    {
        name: "Alternative Investments",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
    },
    {
        name: "Education & Training",
        image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80"
    }
];

const Businesses = () => {
  return (
    <div className='flex flex-col items-center bg-white'>
        <div className="bg-gradient-to-b from-transparent to-[#da291c] w-[2px] h-20 mb-5"></div>
      <h1
        className={`${montserrat.className} text-center text-3xl font-semibold text-black`}
      >
        Businesses
      </h1>
      <div className='flex gap-20 py-10 px-10'>
        {businesses.map((business, index) => (
            <div
                className="h-96 bg-black flex items-start justify-start hover:scale-105 transition-transform duration-500 ease-in-out px-5 py-5 relative overflow-hidden"
                key={index}
                style={{
                    backgroundImage: `url(${business.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Gradient overlay */}
                <div
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(255,255,255,0))',
                    }}
                />
                <h1
                    className={`${montserrat.className} font-bold text-white text-xl bg-opacity-60 w-48 px-1 py-1 rounded relative z-10`}
                >
                    {business.name}
                </h1>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Businesses