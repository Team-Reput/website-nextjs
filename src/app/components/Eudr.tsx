"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import map from "../../../public/map.png"
import { useContact } from "./ContactContext";


export default function Eudr() { 

      const { scrollToContact } = useContact();
  

  return (
    <section className="relative  bg-gradient-to-r from-[#1B3323] to-[#0B1E13] py-16 px-6 md:px-16">
      <div className=" max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          {/* <div className="text-3xl md:text-4xl font-semibold text-white leading-snug">
            Curious About  EUDR, <br />
             <span className="text-green-800">BRSR Core <span className="text-white">or</span> CSRD? </span> <br />
            <div className="text-sm">Check your compliance readiness in seconds.</div>
          </div> */}
           

            <div className="text-3xl md:text-4xl font-semibold text-white leading-snug">
  Curious About EUDR, <br />
  <span className="shimmer-gold">BRSR Core</span> 
  <span className="text-white"> or </span> 
  <span className="shimmer-gold">CSRD</span> <br />
  <div className="text-sm">Check your compliance readiness in seconds.</div>
</div>




          <button onClick={scrollToContact} className="relative mt-6 bg-green-500 text-black font-medium px-6 py-3 rounded flex items-center gap-2 overflow-hidden transition-all duration-300 group">
            {/* <span className="relative z-10">Explore the complainer tracker →</span> */}
            <span className="relative z-10">Contact Us →</span>
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
  <div className="relative w-full h-full overflow-hidden bottom-18 right-8">
    {/* <div className="absolute inset-0 [clip-path:inset(0_0_50%_0)]"> */}
      {/* <iframe src="/globe2.html" title="3D Globe" className="block w-full h-full border-0" /> */}
      <Image src={map} alt="map" 
          />
    {/* </div> */}
  </div>
</motion.div>





      </div>
    </section>
  );
}
