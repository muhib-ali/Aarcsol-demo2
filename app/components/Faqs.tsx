"use client";

import React, { useState } from "react";
import { FaTimes, FaPlus } from "react-icons/fa";

const faqData = [
  {
    question: "What services does Noctis offer?",
    answer:
      "We offer AI-powered business solutions including automation tools, predictive analytics, and system integration services tailored to your organization.",
  },
  {
    question: "How does the monthly subscription work?",
    answer:
      "Our subscription-based model offers continuous AI support and optimization. Each plan includes regular updates, performance monitoring, and priority support. You can choose from our Starter, Growth, or Enterprise plans, depending on your business needs.",
  },
  {
    question: "Can Noctis integrate AI with our existing systems?",
    answer:
      "Absolutely! We specialize in seamless AI integration with legacy systems, cloud platforms, and enterprise applications.",
  },
  {
    question: "How long does it take to implement an AI solution?",
    answer:
      "Implementation timelines vary by project scope but typically range from 2 to 8 weeks, depending on complexity and readiness.",
  },
  {
    question: "Can Noctis integrate AI with our existing systems?",
    answer:
      "Yes, integration is a core part of our service. We ensure all solutions work fluidly with your existing infrastructure.",
  },
  {
    question: "What industries can benefit from Noctis’ AI solutions?",
    answer:
      "Our solutions are ideal for healthcare, finance, retail, manufacturing, and many more — any industry looking to improve decision-making with data-driven AI.",
  },
];

const Faqs = () => {

const [activeIndex, setActiveIndex] = useState<number | null>(null);

const toggleFaq = (index: number) => {
  setActiveIndex(activeIndex === index ? null : index);
};


  return (
    <section id="faqs" className="bg-black text-white py-20 px-4">
      <div className="max-w-[1130px] mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full md:w-1/2">
            <span className="inline-block bg-white/10 text-sm px-4 py-1 rounded-full mb-6">
              FAQs
            </span>
            <h2 className="text-4xl font-semibold mb-2">Frequently</h2>
            <h2 className="text-4xl font-semibold mb-10">Asked Questions</h2>
          </div>

          {/* Right FAQ Cards */}
          <div className="w-full md:w-1/2 space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-[#00185e] bg-black rounded-xl overflow-hidden transition-all duration-300"
              >
                <div
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center cursor-pointer px-6 py-5 text-white hover:bg-[#0e111a] transition"
                >
                  <span className="text-base font-medium">
                    {faq.question}
                  </span>
                  <div
                    className={`transition-transform duration-300 ${
                      activeIndex === index ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <FaPlus className="text-white text-sm" />
                  </div>
                </div>

                <div
                  className={`px-6 text-gray-400 text-sm overflow-hidden transition-all duration-700 ${
                    activeIndex === index ? "max-h-40 py-3" : "max-h-0 py-0"
                  }`}
                >
                  <div className="opacity-80">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
