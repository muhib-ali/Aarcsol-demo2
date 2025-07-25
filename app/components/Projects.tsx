"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import arImage from "../../assets/ar-image1.jpeg";

const projects = [
  {
    title: "Personalized Product Recommendations",
    tag: "Retail & E-commerce",
    description:
      "Built an AI-driven recommendation engine for an online retailer that personalizes shopping experiences for users, increasing sales by 15% and improving customer retention through dynamic product suggestions based on behavior and preferences.",
    image: "",
  },
  {
    title: "Fraud Detection in Real-Time",
    tag: "Finance",
    description:
      "Created a machine learning model to detect fraudulent transactions for a banking institution. The AI system identifies suspicious patterns in real-time, reducing fraud incidents by 30% and saving the company millions in fraud-related costs.",
    image: "/projects/finance.jpg",
  },
  {
    title: "Enhancing Customer Service with Chatbots",
    tag: "Customer Service",
    description:
      "Designed an AI-powered chatbot for a global retail brand to handle customer service inquiries. The chatbot resolves 60% of queries without human intervention, reducing wait times and improving customer satisfaction by 30%.",
    image: "/projects/chatbot.jpg",
  },
];

const Projects = () => {
  // Inject custom CSS for unsticky logic
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @media (max-width: 1023px) {
        .custom-unsticky {
          position: static !important;
          top: auto !important;
        }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <section id="projects" className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 mt-12 lg:mt-[12%] lg:sticky top-32 z-10 bg-black">
          <span className="bg-white/10 text-sm px-4 py-1 rounded-full mb-4 inline-block">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            Some Of Our Projects
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Each of these projects demonstrates how AI can deliver measurable
            results in different industries.
          </p>
        </div>

        {/* RIGHT PROJECT LIST */}
        <div className="lg:w-1/2 max-h-[600px] overflow-y-auto pr-1 sm:pr-2 scrollbar-hide space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-[#00185e] rounded-xl p-1"
            >
              <div className="w-full bg-gradient-to-br from-black/75 to-black rounded-xl p-5">
                {/* Image */}
                <div className="rounded-lg w-full h-48 sm:h-60 md:h-72 overflow-hidden border border-[#00185e] mb-4">
                  <Image
                    src={arImage}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Tag */}
                <span className="inline-block bg-gradient-to-b from-[#00185e] to-black border border-[#00185e] text-sm text-white px-4 py-1 rounded-full mb-3">
                  {project.tag}
                </span>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
