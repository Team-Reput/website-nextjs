"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function StoriesOfImpact() {
  const caseStudies = [
    {
      title: "Textile Industry Case Study",
      description:
        "A leading textile manufacturer leveraged RePut.ai’s platform to gain real-time visibility into their production line. By implementing predictive analytics, they reduced material wastage by 20% and improved equipment uptime. The integration helped align teams across operations and quality control, resulting in a smoother, data-driven workflow. Discover how digital transformation reshaped their manufacturing efficiency.",
      img: "/textile.png", // Replace with your actual image
    },
    {
      title: "Industry Case Study",
      description:
        "A leading textile manufacturer leveraged RePut.ai’s platform to gain real-time visibility into their production line. By implementing predictive analytics, they reduced material wastage b",
      img: "/industry.png", // Replace with your actual image
    },
    {
      title: "Agri Industry Case Study",
      description:
        "A leading textile manufacturer leveraged RePut.ai’s platform to gain real-time visibility into their production line. By implementing predictive analytics, they reduced material wastage b",
      img: "/agri.png", // Replace with your actual image
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-black text-3xl md:text-4xl font-semibold">
          Stories Of <span className="text-green-600 italic">Impact</span>
        </h2>
      </div>

      {/* First Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-lg mb-8"
      >
        <div className="bg-[#26442E] text-white p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              {caseStudies[0].title}
            </h3>
            <p className="text-sm text-gray-200">{caseStudies[0].description}</p>
          </div>
          {/* <button className="mt-6 bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded text-sm font-medium self-start">
            View case study
          </button> */}
        </div>
        <Image
          src={caseStudies[0].img}
          alt={caseStudies[0].title}
          width={600}
          height={400}
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Second Row - Two Small Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {caseStudies.slice(1).map((study, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="grid grid-cols-2 rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="bg-[#26442E] text-white p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">
                  {study.title}
                </h3>
                <p className="text-sm text-gray-200">{study.description}</p>
              </div>
              {/* <button className="mt-4 bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded text-sm font-medium self-start bottom-4 right-1">
                View case study
              </button> */}
            </div>
            <Image
              src={study.img}
              alt={study.title}
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
