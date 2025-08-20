"use client";

// import Image from "next/image";
import { motion } from "framer-motion";
import { useContact } from "./ContactContext";


export default function Earth() {

    const { scrollToContact } = useContact();
  

  return (
    <section className="relative  bg-gradient-to-r from-[#1B3323] to-[#0B1E13] py-16 px-6 md:px-16">
      <div className=" max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
{/* <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10"> */}
        
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <div className="text-3xl md:text-4xl font-semibold text-white leading-snug">
            Design From Modern, <br />
             <span className="text-green-800">global supply chains </span> <br />
            <div className="text-sm">RePut power value chains  across Asia Europe, America and the  Global South.</div>
          </div>
          {/* <button className="mt-6 bg-green-500 hover:bg-green-600 text-black font-medium px-6 py-3 rounded flex items-center gap-2 transition">
            Get started →
          </button> */}

          <button className="relative mt-6 bg-green-500 text-black font-medium px-6 py-3 rounded flex items-center gap-2 overflow-hidden transition-all duration-300 group">
            <span className="relative z-10" onClick={scrollToContact} >Get started →</span>
            {/* Black diagonal line */}
            <span className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <span className="absolute w-[2px] h-full bg-black rotate-[30deg] left-3 transition-all duration-300 group-hover:opacity-0"></span>
            </span>
          </button>
        </motion.div>

        {/* Right Image */}
 {/* Right Globe (upper half only, doesn’t change section height) */}
 

 <motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="
    pointer-events-none
    absolute right-0 -bottom-[75%]   /* 👈 bleed below the section */
    z-30
    w-[380px] h-[380px] md:w-[480px] md:h-[480px]
  "
>
  <div className="relative w-full h-full rounded-full overflow-hidden">
    <div className="absolute inset-0 [clip-path:inset(0_0_50%_0)]">
      <iframe src="/globe2.html" title="3D Globe" className="block w-full h-full border-0" />
    </div>
  </div>
</motion.div>





      </div>
    </section>
  );
}
