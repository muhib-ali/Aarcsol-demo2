"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full mt-10 h-screen overflow-hidden text-white">

      {/* 🎥 Background Video */}
      <video
        src="https://framerusercontent.com/assets/QJPlCz2pqqlNwL2Rij5UXA1DxY.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* 🔳 Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* ✨ Content */}
      <div className="relative mt-5 z-20 flex flex-col items-center justify-center h-full px-6 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-block px-4 py-2 mb-6 text-sm font-medium border border-white/20 rounded-full backdrop-blur-sm bg-white/10"
        >
          ✨ NoctisAI
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, filter: "blur(12px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mb-6"
        >
          Transform Your Business <br /> With Custom AI Solutions
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-gray-300 text-lg max-w-2xl mb-10"
        >
          We specialize in delivering cutting-edge AI solutions designed to empower businesses across all industries.
        </motion.p>

        {/* ✅ Buttons (no animation here) */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-[#031d67] hover:bg-[#1f4de2] transition-colors duration-300 text-white font-medium px-6 py-3 rounded-xl">
            Book a Free Consultation
          </button>
          <button className="border border-white/30 hover:border-white/50 text-white font-medium px-6 py-3 rounded-xl flex items-center gap-2 transition duration-300">
            Our Services <span className="text-lg">→</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
