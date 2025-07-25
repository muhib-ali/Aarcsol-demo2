import React from "react";
import { FaXTwitter, FaLinkedin, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="relative z-0 text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://framerusercontent.com/assets/QJPlCz2pqqlNwL2Rij5UXA1DxY.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-[-1]" />

      {/* Footer Content */}
      <footer className="px-4 pt-20 pb-10 relative z-10">
        <div className="max-w-[1130px] mx-auto flex flex-col md:flex-row justify-between gap-12 border-b border-white/10 pb-12">
          {/* Left Side */}
          <div className="md:w-1/3 space-y-5">
            <h1 className="text-xl font-bold flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              Noctis
            </h1>
            <p className="text-sm text-gray-400">
              Noctis stands at the forefront of AI innovation, empowering
              businesses to thrive in the digital world.
            </p>
            <div className="flex gap-4 mt-4">
              <FaXTwitter className="text-xl hover:scale-110 transition" />
              <FaLinkedin className="text-xl hover:scale-110 transition" />
              <FaYoutube className="text-xl hover:scale-110 transition" />
            </div>
          </div>

          {/* Right Side */}
          <div className="md:w-2/3 grid grid-cols-2 gap-10 text-sm place-items-center">
            {/* Links */}
            <div className="text-left">
              <h4 className="text-gray-400 font-medium mb-3">Links</h4>
              <ul className="flex  flex-wrap justify-start gap-x-4 gap-y-2">
                {[
                  "Intro",
                  "Services",
                  "Projects",
                  "Pricing",
                  "FAQs",
                  "Contact",
                  "Blog",
                  "404",
                ].map((link, idx) => (
                  <li
                    key={idx}
                    className="hover:underline hover:text-white cursor-pointer transition"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="text-left">
              <h4 className="text-gray-400 font-medium mb-3">Legal</h4>
              <ul className="flex justify-center gap-4 flex-wrap">
                <li className="hover:underline hover:text-white cursor-pointer transition">
                  Privacy policy
                </li>
                <li className="hover:underline hover:text-white cursor-pointer transition">
                  Terms & Conditions
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="max-w-[1130px] mx-auto pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-2">
          <div>
            Designed in <span className="font-medium text-white">Framer</span> By{" "}
            <span className="font-medium text-white">Thaer</span>
          </div>
          <div>
            BG video by <span className="font-medium text-white">Daniel Field</span>
          </div>
          <div>© Copyright 2024</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
