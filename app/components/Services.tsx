"use client";
import React, { useEffect } from "react";
import { FaCircleUser, FaImage } from "react-icons/fa6";
import { GrAttachment } from "react-icons/gr";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Inject animation CSS dynamically
const injectAnimationStyles = () => {
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes slideLTR {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0%); }
    }
    @keyframes slideRTL {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
    .animate-slideLTR {
      animation: slideLTR 50s linear infinite;
    }
    .animate-slideRTL {
      animation: slideRTL 50s linear infinite;
    }
  `;
  document.head.appendChild(style);
};

const Connector = () => (
  <div className="flex items-center gap-1">
    <div className="w-1 h-1 bg-blue-600 rounded-full" />
    <div className="h-0.5 w-2 bg-blue-600" />
    <div className="w-1 h-1 bg-blue-600 rounded-full" />
  </div>
);

const Services = () => {
useEffect(() => {
  injectAnimationStyles();

  const responsiveStyle = document.createElement("style");
  responsiveStyle.innerHTML = `
    @media (max-width: 515px) {
      #services .grid {
        grid-template-columns: 1fr !important;
        grid-template-rows: auto !important;
      }

      #services .grid > * {
        grid-area: auto !important;
      }
    }
  `;
  document.head.appendChild(responsiveStyle);
}, []);


  // Reference for the Box 4 to track when it's in view
  const box4Ref = useRef(null);
  const isBox4InView = useInView(box4Ref, { 
    once: false, // Animation will trigger every time it comes into view
    margin: "-20% 0px -20% 0px" // Trigger animation when 20% of the element is visible
  });

  const topIcons = [1, 2, 3, 4, 5, 6, 7];
  const bottomIcons = [...topIcons].reverse();

  // Bar heights data
  const barHeights = [50, 60, 65, 70, 75, 85, 100];

  // Animation variants for bars
  const barVariants = {
    hidden: { 
      height: "20%",
      opacity: 0.5
    },
    visible: (i:number) => ({
      height: `${barHeights[i]}%`,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: i * 0.1, // Stagger animation for each bar
        ease: "easeOut" as const
      }
    })
  };

  return (
    <section id="services" className="bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block bg-white/10 text-sm px-4 py-1 rounded-full mb-4">
            Services
          </span>
          <h2 className="text-4xl font-semibold mb-4">
            How AI can transform your business
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Our services are designed to optimize efficiency, boost productivity, and deliver measurable results.
          </p>
        </div>

        {/* Custom Grid */}
        <div className="grid grid-cols-5 grid-rows-6 gap-4" style={{ gridAutoFlow: "dense" }}>
          {/* Box 1 - Chat Interface */}
          <div className="bg-gray-900/50 border border-[#00185e] hover:border-blue-500/50 transition-all duration-300 rounded-xl p-6" style={{ gridArea: "1 / 1 / 4 / 4" }}>
            <div className="h-full flex flex-col">
              {/* Customer Message */}
              <div className="flex justify-end items-start gap-3 mb-6">
                <div className="bg-gray-800/50 rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
                  <p className="text-sm text-gray-500">
                    How can Noctis AI help improve my business processes?
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <FaCircleUser className="text-2xl text-gray-300" />
                  <span className="text-xs text-gray-400">Customer</span>
                </div>
              </div>

              {/* AI Assistant Response */}
              <div className="flex items-start gap-3">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold">AI</div>
                  <span className="text-xs text-gray-400">AI Assistant</span>
                </div>
                <div className="bg-gray-800/30 rounded-2xl rounded-tl-sm px-4 py-3 flex-1">
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Noctis AI can significantly improve your business processes by leveraging artificial intelligence to automate repetitive tasks, optimize workflows, and provide data-driven insights.
                  </p>
                </div>
              </div>

              {/* Input area at bottom */}
              <div className="mt-auto pt-4">
                <div className="flex items-center gap-2 bg-gray-800/30 rounded-lg px-3 py-2">
                  <div className="flex-1 text-sm text-gray-500 flex gap-1">
                    <GrAttachment />
                    <FaImage />
                  </div>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mt-2">
                <h4 className="text-xl">Customer Support Chatbots</h4>
                <p className="text-gray-500 text-sm">
                  Build custom NLP-powered chatbots that can handle customer service and other tasks.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 - Machine Learning */}
          <div className="bg-gray-900/50 border border-[#00185e] hover:border-blue-500/50 transition-all duration-300  rounded-xl p-6  relative" style={{ gridArea: "1 / 4 / 4 / 6" }}>
            <div className="h-full flex flex-col">
              <div className="flex-1 flex items-center justify-center relative mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-full h-px bg-blue-500/30"></div>
                  <div className="absolute w-full h-px bg-blue-500/20 top-[41%]"></div>
                  <div className="absolute w-full h-px bg-blue-500/20 bottom-[41%]"></div>
                  <div className="absolute h-full w-px bg-blue-500/30 left-1/2"></div>
                  <div className="absolute h-full w-px bg-blue-500/20 left-[41%]"></div>
                  <div className="absolute h-full w-px bg-blue-500/20 right-[41%]"></div>
                </div>
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center relative z-10">
                  <span className="text-white font-bold text-xl">AI</span>
                </div>
              </div>
              <div className="mt-auto">
                <h3 className="text-xl font-semibold mb-3">Machine Learning Models</h3>
                <p className="text-gray-400 text-sm">Develop and train custom ML models for specific business needs.</p>
              </div>
            </div>
          </div>

          {/* Box 3 - Workflow Automation */}
          <div className="bg-gray-900/50 border border-[#00185e] hover:border-blue-500/50 transition-all duration-300  rounded-xl p-6  overflow-hidden " style={{ gridArea: "4 / 1 / 7 / 3" }}>
            <div className="space-y-3 mb-6 ">
              {/* Top Row - LTR */}
              <div className="overflow-hidden ">
                <div className="flex animate-slideLTR gap-4 w-max">
                  {[...topIcons, ...topIcons].map((num, i) => (
                    <React.Fragment key={`top-${i}`}>
                      <img src={`/icons/Asvg${num}.svg`} className="w-10 h-10 rounded-lg bg-black p-2" alt={`icon ${num}`} />
                      <Connector />
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Bottom Row - RTL */}
              <div className="overflow-hidden">
                <div className="flex animate-slideRTL gap-4 w-max">
                  {[...bottomIcons, ...bottomIcons].map((num, i) => (
                    <React.Fragment key={`bottom-${i}`}>
                      <img src={`/icons/Asvg${num}.svg`} className="w-10 h-10 rounded-lg bg-black p-2" alt={`icon ${num}`} />
                      <Connector />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Workflow Automation</h3>
            <p className="text-gray-400 text-sm">
              We help companies integrate AI tools into their existing software platforms, CRM systems, or marketing channels.
            </p>
          </div>

          {/* Box 4 - Strategy Consulting with Animation */}
          <motion.div
            ref={box4Ref}
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-[#00185e] hover:border-blue-500/50 transition-all duration-300 rounded-xl p-4 hover:shadow-lg hover:shadow-blue-500/10 group relative overflow-hidden"
            style={{ gridArea: "4 / 3 / 7 / 6" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full bg-gray-900/80 rounded-lg p-4 mb-4 relative border border-gray-700/30">
              {/* Conversion Rate Text */}
              <motion.p 
                className="text-sm text-white mb-4 font-semibold"
                initial={{ opacity: 0 }}
                animate={isBox4InView ? { opacity: 1 } : { opacity: 0.7 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Conversion rate: <span className="text-blue-400 font-bold">45%</span>
              </motion.p>

              {/* Bar Chart with Animation */}
              <div className="flex items-end justify-between h-32 w-full mb-3 relative z-10">
                {barHeights.map((height, i) => (
                  <motion.div
                    key={i}
                    className="w-4 bg-gradient-to-t from-blue-600 via-blue-500 to-blue-400 rounded-t shadow group-hover:from-blue-500 group-hover:to-blue-300 transition-colors duration-300"
                    variants={barVariants}
                    initial="hidden"
                    animate={isBox4InView ? "visible" : "hidden"}
                    custom={i}
                    style={{
                      transformOrigin: "bottom"
                    }}
                  />
                ))}
              </div>

              {/* Subtle glow effect */}
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-blue-600/20 to-transparent rounded-b"
                initial={{ opacity: 0 }}
                animate={isBox4InView ? { opacity: 1 } : { opacity: 0.5 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </div>

            {/* Text Below Chart */}
            <motion.h3 
              className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors"
              initial={{ y: 10, opacity: 0 }}
              animate={isBox4InView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0.8 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Strategy Consulting
            </motion.h3>
            <motion.p 
              className="text-gray-400 text-sm leading-relaxed"
              initial={{ y: 10, opacity: 0 }}
              animate={isBox4InView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0.7 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Guide businesses on how to use AI effectively, from strategy development to deployment and scaling for maximum ROI.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;