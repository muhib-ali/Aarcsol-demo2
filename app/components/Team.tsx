"use client";

import React from "react";
import Image from "next/image";
import { FaLinkedin, FaCommentDots, FaTimes } from "react-icons/fa";
import teamImg from "../../assets/testimonial_img1.jpg";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const teamMembers = [
  {
    name: "Lorian A.",
    role: "Founder & Lead AI Strategist",
    image: teamImg,
  },
  {
    name: "Emily T.",
    role: "Customer Success Manager",
    image: teamImg,
  },
  {
    name: "Mark L.",
    role: "Lead Data Scientist",
    image: teamImg,
  },
  {
    name: "Sarah M.",
    role: "Chief AI Architect",
    image: teamImg,
  },
  {
    name: "David K.",
    role: "Head of AI Integration",
    image: teamImg,
  },
  {
    name: "Rachel P.",
    role: "AI Product Designer",
    image: teamImg,
  },
];

const Team = () => {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-block bg-white/10 text-sm px-4 py-1 rounded-full mb-4">
          About
        </span>
        <h2 className="text-4xl font-semibold mb-2">Meet The Team</h2>
        <p className="text-gray-400 mb-12">
          We&apos;re a group of dedicated professionals, who are very
          passionate about AI.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#05070c] border border-[#00185e] rounded-xl overflow-hidden shadow-md"
            >
              {/* IMAGE + ICONS */}
              <div className="relative group">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={300}
                  className="w-full px-3 rounded-3xl py-3 h-64 object-cover"
                />
                {/* Floating Icons */}
                <div className="absolute inset-0 flex justify-end items-end opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-3 py-2 gap-3">
                  {/* <FaTimes className="text-white hover:opacity-100 opacity-80 cursor-pointer" />
                  <FaCommentDots className="text-white hover:opacity-100 opacity-80 cursor-pointer" />
                  <FaLinkedin className="text-white hover:opacity-100 opacity-80 cursor-pointer" /> */}
                </div>
              </div>

              {/* NAME + ROLE */}
              <div className="px-4 py-3 text-left">
                <div className="flex items-center mb-2 justify-between">
                <h3 className="font-semibold text-white text-base">
                  {member.name}
                </h3>
                <div className="flex gap-2">
               <FaLinkedin className="cursor-pointer hover:text-gray-400 transition-colors duration-300 ease-in-out "/>
                <FaXTwitter className="cursor-pointer hover:text-gray-400 transition-colors duration-300 ease-in-out "/>
                </div>

                </div>

                <p className="text-sm text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
