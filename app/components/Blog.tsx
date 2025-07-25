"use client";

import React from "react";
import Image from "next/image";

import BlogImg from "../../assets/blog-img1.avif";
import { FaArrowRightLong } from "react-icons/fa6";

const BlogMembers = [
  {
    name: "How AI is Revolutionizing Marketing: 5 Strategies You Need to Know",
    role: "Oct 10, 2024",
    image: BlogImg,
  },
  {
    name: "How AI is Revolutionizing Marketing: 5 Strategies You Need to Know",
    role: "Oct 10, 2024",
    image: BlogImg,
  },
  {
    name: "How AI is Revolutionizing Marketing: 5 Strategies You Need to Know",
    role: "Oct 10, 2024",
    image: BlogImg,
  },

];

const Blog = () => {
  return (
    <section id="blog" className="bg-black text-white py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-block bg-white/10 text-sm px-4 py-1 rounded-full mb-4">
          Blog
        </span>
        <h2 className="text-4xl font-semibold mb-2">Recent articles from our blog</h2>
        <p className="text-gray-400 mb-12">
          We&apos;re a group of dedicated professionals, who are very passionate about AI.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {BlogMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#05070c] border border-[#00185e] rounded-xl overflow-hidden shadow-md"
            >
              {/* IMAGE + ICONS */}
              <div className="relative group">
                <Image
                  src={BlogImg}
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
                <h3 className=" text-white text-base">
                  {member.name}
                </h3>


                </div>
                <div className="flex justify-between cursor-pointer hover:text-gray-400">
                                 <p className="text-sm text-gray-400">{member.role}</p>
                                 <FaArrowRightLong />
                </div>
   
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-full flex items-center justify-center text-center mt-5">
        <button className="flex items-center gap-1 cursor-pointer border border-gray-500 text-sm px-3 py-2 rounded-xl hover:border-gray-400 hover:bg-gray-900">Visit Our blog <FaArrowRightLong /></button>
      </div>
    </section>
  );
};

export default Blog;
