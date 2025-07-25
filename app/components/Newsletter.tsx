import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-black h-full w-full text-white py-48 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Badge */}
        <span className="inline-block bg-white/10 text-sm px-5 py-1 rounded-full mb-5">
          Newsletter
        </span>

        {/* Heading */}
        <h2 className="text-4xl font-semibold mb-4">Subscribe To Our Newsletter</h2>

        {/* Description */}
        <p className="text-gray-400 px-16 mb-10 text-base">
          Subscribe to our monthly mailing list and receive exclusive AI tips and
          best practices to help grow your business.
        </p>

        {/* Input Field + Button */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="email@gmail.com"
            className="w-full sm:w-[300px] px-6 py-3 rounded-xl bg-[#0b0d12] text-white border border-gray-800 focus:outline-none"
          />
          <button className="bg-[#040509] px-6 py-3 rounded-xl font-medium text-white hover:bg-[#031d67] transition-colors duration-300 ">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
