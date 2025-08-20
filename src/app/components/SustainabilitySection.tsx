"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SustainabilitySection() {
  const cards = [
    {
      category: "Accreditations",
      title: "Global Recognition",
      description:
        "Our platform is accredited by top global organizations ensuring unmatched credibility and transparency in sustainability reporting.",
      images: ["/gri.png", "/sasb.png", "/pcaf.png", "/issb.png"],
    },
    {
      category: "Science-Based",
      title: "Rooted in Science",
      description:
        "Built on credible, peer-reviewed science adhering to international standards, ensuring accuracy and reliability in every report.",
      images: ["/iso1.png", "/greenhouse.png", "/pcaf.png", "/defra.png"],
    },
    {
      category: "Expert Team",
      title: "Built By Climate Scientists",
      description:
        "Created by scientists, researchers, and technologists with deep expertise in the sustainability sector from world-renowned institutions.",
      images: ["/mit.png", "/standford.png", "/pcaf.png", "/issb.png"],
    },
    {
      category: "Data Security & Privacy",
      title: "Enterprise Security",
      description:
        "We provide a secure platform that protects all your data with the highest levels of data protection and privacy compliance.",
      images: ["/iso2.png", "/iso3.png", "/iso4.png", "/soc2.png"],
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-16">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className=" text-black text-3xl md:text-4xl font-semibold">
          Sustainably Empowering{" "}
          <span className="text-green-600 italic font-bold">The Future</span>
        </h2>
        <p className="text-gray-600 mt-4 text-sm md:text-base">
          Leading the global transition to sustainability through science-backed
          solutions and transparent reporting
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center ">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition text-[#29442C]"
          >
            {/* Category */}
            <p className="  text-sm font-medium text-[#29442C]">{card.category}</p>

            {/* Title */}
            <h3 className="text-xl font-bold text-[#29442C] mt-1">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-[#29442C] mt-2 text-sm">{card.description}</p>

            {/* Logos */}
            <div className="flex flex-wrap gap-20 mt-6 ml-20">
              {card.images.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt="logo"
                  width={70}
                  height={70}
                  className="object-contain"
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
