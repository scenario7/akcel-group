import React from "react";
import { Montserrat, Open_Sans } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const officeLocations = [
  {
    country: "UAE",
    flag: "https://flagcdn.com/ae.svg",
    address: "1107, Iris Bay, Business Bay Dubai, UAE 00000",
  },
  {
    country: "UK",
    flag: "https://flagcdn.com/gb.svg",
    address: "14/2E Docklands Business Center 10-16, Tiller Road London, UK E14 8PX",
  },
  {
    country: "Italy",
    flag: "https://flagcdn.com/it.svg",
    address: "Via Rassica 25c, Lonato del Garda, Brescia, Italy",
  },
  {
    country: "Ireland",
    flag: "https://flagcdn.com/ie.svg",
    address: "Regus House, Harcourt Center, Harcourt Road, Dublin, Ireland",
  },
];


const Locations = () => {
  return (
    <div className="flex flex-col items-center bg-[#ffffff]">
      <div className="bg-gradient-to-b from-transparent to-[#da291c] w-[2px] h-20 mb-5"></div>
      <h1
        className={`${montserrat.className} text-center text-3xl font-semibold text-black`}
      >
        Our Locations
      </h1>
        <div className="flex justify-between p-10">
            {officeLocations.map((location, index) =>(
                <div key={index} className="flex flex-col w-1/5 px-5 gap-3 items-center">
                    <img src={location.flag} className="h-10"></img>
                    <h3 className={`${montserrat.className} font-semibold text-black`}>{location.country}</h3>
                    <p className={`${openSans.className} text-stone-700 text-center tracking-tight`}>{location.address}</p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Locations;
