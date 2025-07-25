"use client";

import React from "react";
import { FaLinkedin, FaYoutube, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-4">Get In Touch</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-12">
          Have questions about our services or ready to transform your business
          with AI? We&apos;re here to help!
        </p>

        <div className="flex flex-col md:flex-row gap-8 bg-[#050609] border border-[#00185e] p-6 md:p-10 rounded-2xl">
          {/* Contact Form */}
          <form className="w-full md:w-2/3 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                className="bg-black text-white border border-[#00185e] px-4 py-3 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-black text-white border border-[#00185e] px-4 py-3 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <textarea
              rows={6}
              placeholder="Message"
              className="bg-black text-white border border-[#00185e] px-4 py-3 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-blue-600"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-b from-[#0043ce] to-[#00185e] py-3 rounded-md font-semibold transition hover:opacity-90"
            >
              Send message
            </button>
          </form>

          {/* Contact Info */}
          <div className="w-full md:w-1/3 text-left space-y-6">
            <div>
              <p className="text-gray-400 mb-1">Email:</p>
              <p className="font-semibold">info@noctis.com</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Phone:</p>
              <p className="font-semibold">(123) 456 7890</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Address:</p>
              <p className="font-semibold">
                Street Address, City, State, Zip Code, Country
              </p>
            </div>
            <div>
              <p className="text-gray-400 mb-2">Follow us:</p>
              <div className="flex items-center gap-4 text-white text-xl">
                <FaXTwitter className="hover:text-blue-500 transition cursor-pointer" />
                <FaLinkedin className="hover:text-blue-500 transition cursor-pointer" />
                <FaYoutube className="hover:text-red-500 transition cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
