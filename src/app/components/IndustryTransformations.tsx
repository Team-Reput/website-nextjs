
   "use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function IndustryTransformations() {
  const industries = [
    {
      title: "Textile & Fashion",
    //   description: "Our platform enhances the textile and fashion industry by offering sustainable and traceable solutions.",
      img: "/textile&fashion.png", // Replace with actual image path
    },
    {
      title: "Food & Beverage",
    //   description:"Revolutionizing food production with traceability and sustainability, helping track every ingredient.",
      img: "/food&Beverage.png", // Replace with actual image path
    },
    {
      title: "Personal Care",
    //   description:"Optimizing personal care products to ensure traceability and transparency throughout the manufacturing process.",
      img: "/personalCare.png", // Replace with actual image path
    },
    {
      title: "Jewellery",
    //   description:"Providing secure and verified data for jewellery sourcing, ensuring authenticity and sustainability.",
      img: "/Jewellery.png", // Replace with actual image path
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-16">
      {/* Header Section */}
       
      <div className="text-center mb-20">

         <h2 className=" text-xl md:text-xl font-semibold mb-10 text-[#29442C]">
         What we do
        </h2>
        <h2 className="text-black text-3xl md:text-4xl font-semibold">
          Powering Transformation{" "}
          <span className="text-green-600">Across Industries</span>
        </h2>
        <p className="text-gray-600 mt-4 text-sm md:text-base">
          Our platform is designed to adapt to the complex realities of high-impact industries from soil to shelf, mine to market.
        </p>
      </div>

      {/* Industry Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Card Image */}
            <div className="w-full h-[500px] relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src={industry.img}
                alt={industry.title}
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Card Title */}
            {/* <h3 className="mt-4 text-xl font-semibold text-black">{industry.title}</h3> */}
            {/* Card Description */}
            {/* <p className="text-gray-600 mt-2 text-sm">{industry.description}</p> */}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
