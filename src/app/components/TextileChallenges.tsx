
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; 


export default function TextileChallenges() {


    const router = useRouter();


  const features = [
    {
      title: "RePut Tracechain",
      highlight: "Tracechain",
      description:
        "Gain fully supply chain visibility with blockchain-verification data. From raw material to finished product",
      img: "/tracing.png",
      slug: "tracechain",
    },
    {
      title: "RePut Zero Carbon",
      highlight: "Zero Carbon",
      description:
        "Track carbon emissions across the value chain with blockchain-backed data. Empower reduction with verified insights and reporting.",
      img: "/dashb.png",
      slug: "zerocarbon",
    },
    {
      title: "RePut",
      highlight: "Circle",
      description:
        "Build circular system with verified recycler networks, real-time recovery data and digital proof of impact.",
      img: "/carbon.png",
      slug: "/circle",
    },

  ];

  return (
    <section className="bg-white py-16 px-6 md:px-16">


       <div className="flex flex-col md:flex-row items-center gap-10   md:gap-32 m-20">
        {/* Left Text */}
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-black text-3xl md:text-4xl font-semibold">
            Build For{" "}
            <span className="text-green-600 font-bold">Every Step</span> <br />
            Proven at{" "}
            <span className="text-green-600 font-bold">Every Layer</span>
          </h2>
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            A unified traceable & sustainability platform built on blockchain and
            powered by AI
          </p>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0 w-full md:w-1/2 "
        >
          <Image
            src="/rHeader.png" // replace with your actual image
            alt="Intro Image"
            width={140}
            height={100}
            className="rounded-lg  object-cover ml-[60%]"
          />
        </motion.div>
      </div>


      {/* Features */}
      <div className="flex flex-col gap-28 relative">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-start gap-66 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } relative`}
          >
            {/* Green Dot */}
            <div
              className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-green-500 border-4 border-white z-10"
            ></div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <Image
                src={feature.img}
                alt={feature.title}
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-md m-25"
            >
              <h3 className=" text-black text-xl font-semibold">
                RePut{" "}
                <span className="text-green-600">{feature.highlight}</span>
                <sup>™</sup>
              </h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
              <button  onClick={() => router.push(`/platform/${feature.slug}`)} className="mt-4 px-5 py-2 bg-green-500 text-white text-sm font-medium rounded hover:bg-green-600 transition">
                Explore More
              </button>
            </motion.div>
          </div>
        ))}

        {/* Vertical dotted line */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 border-l-2 border-dotted border-green-500"></div>
      </div>
    </section>
  );
}
