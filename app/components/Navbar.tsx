'use client';
import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="w-full text-center relative">
      <style jsx>{`
        @media (max-width: 1234px) {
          .custom-nav {
            width: 80vw !important;
          }
        }
      `}</style>

      <nav className="custom-nav fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[90vw] lg:w-[60vw] flex justify-between lg:justify-center items-center gap-4 py-3 px-4 text-white bg-[#050606] border border-white/20 rounded-[14px] backdrop-blur-md shadow-sm">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/icons/A-logo.svg"
            alt="Logo"
            className="w-auto h-9 object-cover object-center"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-4 text-sm">
          {['services', 'projects', 'pricing', 'faqs', 'contact', 'blog'].map((item) => (
            <li
              key={item}
              className="hover:bg-[#2c2c2c] transition-colors duration-300 py-2 px-3 rounded-xl cursor-pointer"
            >
              <a href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
            </li>
          ))}
        </ul>

        {/* Buy Button */}
        <div className="hidden lg:block">
          <button className="bg-[#031d67] hover:bg-[#1f4de2] transition-colors duration-300 py-2 px-5 rounded-2xl">
            Buy Template
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-[70px] left-1/2 -translate-x-1/2 z-40 w-[90vw] bg-[#050606] text-white rounded-[14px] px-6 py-4 flex flex-col items-start gap-4 border border-white/20 shadow-md lg:hidden">
          {['services', 'projects', 'pricing', 'faqs', 'contact', 'blog'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="w-full text-left py-2 px-3 hover:bg-[#2c2c2c] rounded-xl transition-all"
              onClick={() => setMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <button
            onClick={() => setMenuOpen(false)}
            className="bg-[#031d67] hover:bg-[#1f4de2] transition-colors duration-300 py-2 px-5 rounded-2xl w-full"
          >
            Buy Template
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
