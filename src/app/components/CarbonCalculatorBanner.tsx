"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useContact } from "./ContactContext";


export default function CarbonCalculatorBanner() {
    const { scrollToContact } = useContact();

  return (
    <section className="bg-gradient-to-r from-[#1B3323] to-[#0B1E13] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
            Get a quick and easy <br />
            calculation of your company’s 
            <div className="shimmer-gold">Carbon Footprint</div>
          </h2>
 

          <button className="relative mt-6 bg-green-500 text-black font-medium px-6 py-3 rounded flex items-center gap-2 overflow-hidden transition-all duration-300 group">
            <span className="relative z-10" onClick={scrollToContact}>Get started →</span>
            {/* Black diagonal line */}
            <span className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <span className="absolute w-[2px] h-full bg-black rotate-[30deg] left-3 transition-all duration-300 group-hover:opacity-0"></span>
            </span>
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0 absolute right-0 mt-20 flex items-center justify-end"
        >
          <Image
            src="/calc.png" // Replace with your actual calculator image path
            alt="Calculator"
            width={450}
            height={450}
            className="object-contain "
          />
        </motion.div>
      </div>
    </section>
  );
}








//  "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useContact } from "./ContactContext";

// export default function CarbonCalculatorBanner() {
//   const { scrollToContact } = useContact();

//   return (
//     <section className="bg-gradient-to-r from-[#1B3323] to-[#0B1E13] py-12 md:py-16 px-4 sm:px-6 md:px-16 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row items-center justify-between">
          
//           {/* Left Text Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="w-full md:max-w-xl text-center md:text-left z-10 relative"
//           >
//             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight sm:leading-snug">
//               Get a quick and easy <br className="hidden sm:block" />
//               <span className="sm:hidden">calculation of your company's </span>
//               <span className="hidden sm:inline">calculation of your company's</span>
//               <br className="hidden sm:block" />
//               <div className="shimmer-gold mt-1 sm:mt-0">Carbon Footprint</div>
//             </h2>

//             <button 
//               onClick={scrollToContact}
//               className="relative mt-6 sm:mt-8 bg-green-500 text-black font-medium px-6 py-3 sm:px-8 sm:py-4 rounded-lg flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 group hover:bg-green-400 mx-auto md:mx-0 text-sm sm:text-base"
//             >
//               <span className="relative z-10">Get started →</span>
//               {/* Black diagonal line */}
//               <span className="absolute top-0 left-0 w-full h-full pointer-events-none">
//                 <span className="absolute w-[2px] h-full bg-black rotate-[30deg] left-3 transition-all duration-300 group-hover:opacity-0"></span>
//               </span>
//             </button>
//           </motion.div>

//           {/* Right Image - Hidden on Mobile */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="hidden md:flex flex-shrink-0 absolute right-0 top-1/2 transform -translate-y-1/2 items-center justify-end"
//           >
//             <Image
//               src="/calc.png"
//               alt="Calculator"
//               width={450}
//               height={450}
//               className="object-contain max-w-[350px] lg:max-w-[450px] xl:max-w-[500px]"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }