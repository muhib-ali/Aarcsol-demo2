"use client";
import React from "react";
import { FaChartLine, FaPuzzlePiece, FaRobot, FaHeadset } from "react-icons/fa";
import { MdCampaign } from "react-icons/md";
import { PiTriangleLight } from "react-icons/pi";
import { BiTargetLock } from "react-icons/bi";


const services = [
  {
    icon: (
      <FaChartLine size={36} className="text-blue-500 group-hover:scale-125 transition-transform duration-300" />
    ),
    title: "Predictive Analytics",
    description: "Use AI to analyze historical data and predict future trends.",
  },
  {
    icon: (
      <MdCampaign size={36} className="text-blue-500 group-hover:rotate-6 transition-transform duration-300" />
    ),
    title: "Personalized Marketing Campaigns",
    description: "Use AI to target specific audiences with personalized content.",
  },
  {
    icon: (
      <FaHeadset size={36} className="text-blue-500 group-hover:animate-bounce transition-transform duration-300" />
    ),
    title: "AI Personal Assistants",
    description: "Develop virtual assistants that automate tasks and answer complex queries.",
  },
  {
    icon: (
      <FaPuzzlePiece size={36} className="text-blue-500 group-hover:scale-125 transition-transform duration-300" />
    ),
    title: "AI Integration",
    description: "Help companies integrate AI tools into their existing software platforms.",
  },
  {
    icon: (
      <PiTriangleLight size={36} className="text-blue-500 group-hover:rotate-12 transition-transform duration-300" />
    ),
    title: "AI Content Creation",
    description: "Offer AI-generated videos, images, and text for content marketing.",
  },
  {
    icon: (
      <BiTargetLock size={36} className="text-blue-500 group-hover:scale-110 transition-transform duration-300" />
    ),
    title: "AI-Powered SEO",
    description: "Implement AI tools to optimize content for search engines.",
  },
];

const Services2 = () => {
  return (
    <section className="relative text-white py-20 px-4 overflow-hidden h-auto min-h-screen">
      {/* ✅ Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/A-bg-video.mp4" type="video/mp4" />
        </video>
        {/* ✅ Blackish overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* ✅ Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="mb-16">
          <span className="inline-block bg-white/10 text-sm px-4 py-1 rounded-full mb-4">
            Services
          </span>
          <h2 className="text-4xl font-semibold mb-4">
            Harness The Full Potential of AI
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 group"
            >
              <div className="bg-white/10 p-4 rounded-full">
                {service.icon}
              </div>
              <h3 className="text-md font-bold">{service.title}</h3>
              <p className="text-gray-300 text-sm max-w-xs">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services2;
