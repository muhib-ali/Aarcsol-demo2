'use client'
import React from 'react'
import { FaBook, FaSearch, FaChartLine, FaStar } from 'react-icons/fa'
import { MdMemory } from 'react-icons/md'
import { motion, useAnimation } from 'framer-motion'

const Simplified = () => {
  const cardData = [
    {
      title: '1. Discovery & Customization',
      description:
        'We start by understanding your business needs and goals, tailoring our AI solutions to fit your unique requirements.',
      icon: (
        <motion.div
          variants={{
            initial: { scale: 1, rotate: 0 },
            hover: { scale: 1.2, rotate: 3 },
          }}
          className="flex gap-1 text-4xl text-blue-400 group-hover:animate-icon"
        >
          <FaBook />
          <FaSearch />
        </motion.div>
      ),
    },
    {
      title: '2. Seamless AI Integration',
      description:
        'Once the plan is set, we integrate our AI tools directly into your existing workflows, software, or platforms.',
      icon: (
        <motion.div
          variants={{
            initial: { scale: 1, rotate: 0 },
            hover: { scale: 1.3, rotate: -5 },
          }}
          className="text-5xl text-blue-400 group-hover:animate-icon"
        >
          <MdMemory />
        </motion.div>
      ),
    },
    {
      title: '3. Optimization & Support',
      description:
        'With our monthly subscription, we provide ongoing AI optimization, performance monitoring, and 24/7 support.',
      icon: (
        <motion.div
          variants={{
            initial: { scale: 1, rotate: 0 },
            hover: { scale: 1.2, rotate: 2 },
          }}
          className="flex gap-2 text-4xl text-blue-400 group-hover:animate-icon"
        >
          <FaChartLine />
          <FaStar />
        </motion.div>
      ),
    },
  ]

  return (
    <section className="w-full bg-black text-white py-24 px-4 flex flex-col items-center">
      <h2 className="text-[40px] font-semibold leading-tight text-center mb-4">
        Simplified AI Solutions
      </h2>
      <p className="text-center max-w-2xl text-[#A1A1AA] text-lg mb-16 leading-relaxed">
        With Noctis, AI is simple, scalable, and always working to improve your business.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className="group bg-gradient-to-b from-[#0C0C1C] to-[#000010] border border-[#00185e] rounded-[16px] px-6 py-8 shadow-sm hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
            initial="initial"
            whileHover="hover"
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="mb-6">{card.icon}</div>
            <h3 className="text-white text-[18px] font-semibold mb-3 leading-snug">
              {card.title}
            </h3>
            <p className="text-[#A1A1AA] text-[15px] leading-[1.6] tracking-tight">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Simplified
