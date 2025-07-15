"use client";
import React, { useState } from "react";
import { Montserrat, Open_Sans } from "next/font/google";
import { FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from "react-icons/fa";
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

  interface ChangeEvent {
    target: {
      name: keyof ContactFormData;
      value: string;
    };
  }

  const handleChange = (e: ChangeEvent) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  console.log(handleChange)
  interface SubmitEvent {
    preventDefault: () => void;
  }

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="bg-gradient-to-b from-transparent to-[#da291c] w-[2px] h-16 mb-6 mx-auto" />
            
            <h1 className={`${montserrat.className} text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4`}>
              Get in Touch
            </h1>
            <p className={`${openSans.className} text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed`}>
              We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h2 className={`${montserrat.className} text-2xl sm:text-3xl font-semibold text-gray-900 mb-8`}>
                Contact Information
              </h2>
              
              <div className="space-y-8">
                <div className="group">
                  <div className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                    <div className="flex-shrink-0">
                      <FaEnvelope className="text-[#da291c] text-xl mt-1" />
                    </div>
                    <div>
                      <h3 className={`${montserrat.className} font-semibold text-lg text-gray-900 mb-2`}>
                        Email Address
                      </h3>
                      <p className={`${openSans.className} text-gray-600`}>
                        contact@akcelgroup.com
                      </p>
                      <p className={`${openSans.className} text-sm text-gray-500 mt-1`}>
                        We&apos;ll respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                    <div className="flex-shrink-0">
                      <FaMapMarkerAlt className="text-[#da291c] text-xl mt-1" />
                    </div>
                    <div>
                      <h3 className={`${montserrat.className} font-semibold text-lg text-gray-900 mb-2`}>
                        Office Location
                      </h3>
                      <p className={`${openSans.className} text-gray-600`}>
                        London, United Kingdom
                      </p>
                      <p className={`${openSans.className} text-sm text-gray-500 mt-1`}>
                        Multiple locations available
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                    <div className="flex-shrink-0">
                      <FaClock className="text-[#da291c] text-xl mt-1" />
                    </div>
                    <div>
                      <h3 className={`${montserrat.className} font-semibold text-lg text-gray-900 mb-2`}>
                        Response Time
                      </h3>
                      <p className={`${openSans.className} text-gray-600`}>
                        Monday - Friday
                      </p>
                      <p className={`${openSans.className} text-sm text-gray-500 mt-1`}>
                        9:00 AM - 6:00 PM GMT
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg border border-gray-100">
                <h2 className={`${montserrat.className} text-2xl sm:text-3xl font-semibold text-gray-900 mb-2`}>
                  Send us a Message
                </h2>
                <p className={`${openSans.className} text-gray-600 mb-8`}>
                  Fill out the form below and we&apos;ll get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className={`${montserrat.className} block text-sm font-medium text-gray-700 mb-2`}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        placeholder="John Doe"
                        className={`${openSans.className} w-full px-4 py-3 border text-black placeholder-black/30 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#da291c] focus:border-transparent transition-colors duration-300`}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={`${montserrat.className} block text-sm font-medium text-gray-700 mb-2`}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        placeholder="john@example.com"
                        className={`${openSans.className} w-full px-4 py-3 border border-gray-300 text-black placeholder-black/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#da291c] focus:border-transparent transition-colors duration-300`}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className={`${montserrat.className} block text-sm font-medium text-gray-700 mb-2`}>
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      placeholder="How can we help you?"
                      className={`${openSans.className} w-full px-4 py-3 border border-gray-300 text-black placeholder-black/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#da291c] focus:border-transparent transition-colors duration-300`}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={`${montserrat.className} block text-sm font-medium text-gray-700 mb-2`}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      rows={6}
                      placeholder="Please describe your inquiry in detail..."
                      className={`${openSans.className} w-full px-4 py-3 border border-gray-300 text-black placeholder-black/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#da291c] focus:border-transparent transition-colors duration-300 resize-none`}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className={`${openSans.className} w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#da291c] text-white py-3 px-8 font-semibold text-sm rounded-lg hover:bg-[#b1121e] focus:outline-none focus:ring-2 focus:ring-[#da291c] focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 active:scale-95`}
                  >
                    <FaPaperPlane className="text-sm" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Locations />
      <CustomFooter />
    </div>
  );
};

export default ContactPage;