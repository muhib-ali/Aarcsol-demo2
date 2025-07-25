"use client";

import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import testimg from "../../assets/testimonial_img1.jpg";

const testimonials = [
  {
    name: "Mark J.",
    role: "Operations Manager",
    image: "/mark.jpg",
    quote:
      "The AI automation tools provided by Noctis have revolutionized our internal processes. We've reduced manual tasks by 35%, allowing our team to focus on higher-value work.",
    title: "Unmatched Efficiency and Innovation!",
  },
  {
    name: "Emily T.",
    role: "VP of Marketing",
    image: "/emily.jpg",
    quote:
      "Thanks to the AI-driven predictive insights from Noctis, we’ve gained deep insights into customer behavior.",
    title: "Incredible Customer Insights!",
  },
  {
    name: "David R.",
    role: "CEO, TechNova",
    image: "/ceo.jpg",
    quote:
      "Noctis's AI-powered solutions have been a game-changer for our company. Their personalized recommendation engine boosted our sales by 20% in just three months!",
    title: "Game-Changing AI Solutions!",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-black text-white py-20 px-4 relative">
      <div className="max-w-5xl mx-auto ">
        <div className="max-w-5xl text-center">
        <span className="inline-block bg-white/10 text-sm px-4 py-1 rounded-full mb-4">
          Testimonials
        </span>
        <h2 className="text-4xl font-semibold mb-2">
          Kind Words From Our Clients
        </h2>
        <p className="text-gray-400 mb-12">
          Success stories of different clients in various industries.
        </p>
        </div>


        {/* Marquee container with fade overlays */}
        <div className="relative overflow-hidden group">
          {/* LEFT & RIGHT FADES */}
          <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Slider */}
          <div className="flex gap-6 w-max animate-scroll group-hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-[#000b2c] to-black border border-[#00185e] min-w-[350px] max-w-[350px] rounded-xl p-6 flex-shrink-0"
              >
                {/* Stars */}
                <div className="flex items-center mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={16} />
                  ))}
                </div>
                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">{testimonial.title}</h3>
                {/* Quote */}
                <p className="text-sm text-gray-300 mb-6">{testimonial.quote}</p>
                {/* User */}
                <div className="flex items-center gap-3">
                  <Image
                    src={testimg}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="font-medium text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
