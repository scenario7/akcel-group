"use client";
import React from "react";
import { Montserrat, Open_Sans } from "next/font/google";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import Navbar from "@/components/navbar";
import Locations from "@/components/locations";
import CustomFooter from "@/components/customfooter";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ContactPage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="bg-white flex flex-col items-center py-20">
        <div className="bg-gradient-to-b from-transparent to-[#da291c] w-[2px] h-20 mb-5" />

        <h1
          className={`${montserrat.className} text-3xl font-semibold text-black`}
        >
          Contact Us
        </h1>
        <p
          className={`${openSans.className} text-center text-base md:text-lg mt-2 mb-10 max-w-3xl text-black`}
        >
          Wed love to hear from you. Reach out with your questions, feedback,
          or collaboration ideas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
          {/* Contact Details */}
          <div className="flex flex-col gap-6 text-black">
            <div className="flex items-start gap-4">
              <FaPhone className="text-[#da291c] text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-black">Phone</h3>
                <p className="text-sm">+44 20 7946 0123</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-[#da291c] text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-black">Email</h3>
                <p className="text-sm">contact@akcelgroup.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#da291c]"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#da291c]"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#da291c]"
              required
            />
            <button
              type="submit"
              className={`${openSans.className} mt-2 bg-[#da291c] text-white py-3 px-6 font-semibold text-sm rounded hover:bg-[#b1121e] transition`}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Locations/>
      <CustomFooter/>
    </div>
  );
};

export default ContactPage;
