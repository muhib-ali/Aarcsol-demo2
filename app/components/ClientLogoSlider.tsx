'use client';
import React from 'react';

const logos = [
  "https://framerusercontent.com/images/h5WOBUhYYjeVnpWYWlAfdU8oWo.svg",
  "https://framerusercontent.com/images/uY1RnObcjrMQRKuFL1uizIcRfEE.svg",
  "https://framerusercontent.com/images/JXTMelr57HN02rRxeu1MXwqNA.svg",
  "https://framerusercontent.com/images/WaDIceyIVlKt6JjSFZmVPWgOxjQ.svg",
  "https://framerusercontent.com/images/3ZRYsiev58kaT1w8TsKWgrrxWtg.svg",
  "https://framerusercontent.com/images/5eluztMMgYnccVQoQ034ZNnofc.svg",
];

const ClientLogoSlider = () => {
  return (
    <section className="w-full py-10 bg-black text-white text-center overflow-hidden relative">
      <h2 className="text-md  text-[#696969] mb-6 z-10 relative">Trusted by our clients</h2>

      <div className="relative mx-auto max-w-[820px] overflow-hidden">
        {/* Fading edges */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

        {/* Slider track */}
        <div className="slider-track flex gap-12 w-max animate-scroll px-10">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client ${index + 1}`}
              className="h-6 opacity-60 grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>

      {/* Inline keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ClientLogoSlider;
