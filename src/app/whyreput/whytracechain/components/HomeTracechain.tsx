"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HomeTracechain() {
  return (
    <section className="relative w-full h-[90vh]">
      {/* Background Image */}
      <Image
        src="/whyhomet1.png"
        alt="Hero Banner"
        fill
        priority
        className="object-cover"
      />
      {/* <div className="justify-right items-right w-[1100px] h-[100vh] flex">
        <video src="/tracechainHomeWhy.mp4"  muted autoPlay loop playsInline className="object-contain w-[100vh] h-[100vh]"/>
      </div> */}


      {/* Overlay */}
      <div className="absolute inset-0 bg-none"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center px-4 sm:px-10 md:px-20">
        <motion.div
          className="text-white p-1 rounded-xl max-w-full md:max-w-lg"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[56px] sm:text-5xl lg:text-[56px] text-[#29442C] w-[565px] font-bold mb-4 leading-tight">
            Why Choose Reput TraceChain: 
          </h1>

          <p className="mb-6 text-base sm:text-lg md:text-xl lg:text-[22px] text-[#29442C] max-w-full md:max-w-[607px]">
            Trust, Transparency, and Control in Every Transaction
          </p>

          {/* Button (optional) */}
          <motion.button
            className="bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact us →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}





















// "use client";

// export default function HomeTracechain() {
//   return (
//     <section className="w-full bg-white py-12">
//       <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         {/* Left Content */}
//         <div className="space-y-6 text-center md:text-left">
//           <h2 className="text-3xl md:text-4xl font-bold text-green-900 leading-snug">
//             Why Choose Reput <br /> TraceChain:
//           </h2>
//           <p className="text-gray-600 text-base md:text-lg">
//             Trust, Transparency, and Control in Every Transaction
//           </p>
//           <button className="px-6 py-3 bg-green-900 text-white rounded-lg shadow-md hover:bg-green-800 transition">
//             Contact us →
//           </button>
//         </div>

//         {/* Right Video */}
//         <div className="w-[100vh] h-[300px] bottom-40 md:h-[100vh] lg:h-[100vh] relative  overflow-hidden shadow-lg">
//           <video
//             src="/tracechainHomeWhy.mp4"
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="absolute inset-0 w-full h-full object-cover "
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


