"use client";

import React from "react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$999",
    subtitle: "Ideal for small businesses or startups looking to integrate basic AI solutions.",
    features: [
      "AI-Powered Automation",
      "Tailored AI setup",
      "Monthly Performance Report",
      "24/7 Email support",
      "AI training sessions",
    ],
  },
  {
    name: "Growth",
    price: "$2,499",
    subtitle: "Ideal for growing businesses seeking advanced AI capabilities.",
    features: [
      "All Starter Plan Features",
      "Tailored AI integration for up to 4 business processes",
      "AI-driven insights and recommendations",
      "Access to a custom-built dashboard",
      "Bi-Weekly Optimization",
    ],
  },
  {
    name: "Enterprise",
    price: "$3,999",
    subtitle: "Ideal for Larger businesses looking for full-scale AI integration.",
    features: [
      "All Growth Plan Features",
      "Custom AI solutions for up to 10 processes",
      "Advanced Machine Learning Models",
      "Dedicated Account Manager",
      "Weekly Reports & Strategy Sessions",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <span className="inline-block bg-white/10 px-4 py-1 text-sm rounded-full mb-4">
          Pricing
        </span>
        <h2 className="text-4xl font-bold mb-4">Our Pricing Plans</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          We offer a range of options to meet the needs of different-sized businesses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-[#060913] border border-[#00185e] rounded-xl p-8 text-left"
          >
            <span className="inline-block bg-white/10 px-4 py-1 text-sm rounded-full mb-4">
              {plan.name}
            </span>
            <h3 className="text-3xl font-semibold mb-1">{plan.price}<span className="text-sm font-normal">/month</span></h3>
            <p className="text-sm text-gray-400 mb-6">Pause or cancel anytime</p>
            <p className="text-gray-300 mb-6">{plan.subtitle}</p>

            <button className="bg-[#031d67] hover:bg-[#1f4de2] transition-colors duration-300 ease-in-out cursor-pointer text-white text-sm px-6 py-2 rounded-md mb-6 w-full">
              Get Started
            </button>

            <p className="text-sm text-gray-400 mb-2 font-medium">Includes:</p>
            <ul className="text-sm text-gray-300 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-500">✔</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
