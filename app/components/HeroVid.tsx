'use client';
import React, { useRef, useState } from 'react';

const HeroVid = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="w-full px-4 py-10 flex justify-center items-center bg-black">
      <div className="relative w-full max-w-5xl rounded-xl overflow-hidden border border-[#262626] bg-[#050505] flex justify-center items-center">

        {/* 📽️ Video */}
        <video
          ref={videoRef}
          src="https://framerusercontent.com/assets/z2vl0TiqVsgNx29cNkOoy5zluk4.mp4"
          muted
          loop
          playsInline
          preload="metadata"
          onClick={handleTogglePlay}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          controls={isPlaying}
          className={`w-[80%] h-auto object-cover rounded-xl mx-auto block cursor-pointer transition duration-500 ${
            isPlaying ? 'brightness-100' : 'brightness-[0.5]'
          }`}
        />

        {/* ▶️ Play Button Overlay (only if not playing) */}
        {!isPlaying && (
          <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
           <button
  onClick={handleTogglePlay}
  className="group flex items-center justify-center gap-2 bg-black/80 text-white text-base px-4 py-4 rounded-full border border-white/20 transition-all duration-300"
>
  {/* ▶ Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-4 h-4 ml-1 fill-current"
  >
    <path
      d="M228.23,134.69,84.15,222.81A8,8,0,0,1,72,216.12V39.88a8,8,0,0,1,12.15-6.69l144.08,88.12A7.82,7.82,0,0,1,228.23,134.69Z"
      opacity="0.2"
    ></path>
    <path d="M232.4,114.49 88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"></path>
  </svg>

  {/* 👇 Appear only on hover */}
  <span
    className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-[200px] group-hover:opacity-100 transition-all duration-500 whitespace-nowrap"
  >
    How We Work
  </span>
</button>

          </div>
        )}
      </div>
    </section>
  );
};

export default HeroVid;
