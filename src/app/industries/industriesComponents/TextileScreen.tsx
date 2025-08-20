// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function TextileScreen() {
//   return (
//     <section className="relative w-full bg-white py-12">
//       <div className="relative w-[80%] mx-auto">
//         {/* Background Image */}
//         <Image
//           src="/Wireframe.png" // replace with your image path
//           alt="Textile Products"
//           width={1200}
//           height={600}
//           className="rounded-2xl shadow-lg object-cover"
//         />

//         {/* Text Overlay */}
//         <motion.div
//           className="absolute top-10 left-10 bg-black/50 text-white p-6 rounded-xl max-w-sm"
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-3xl font-bold mb-3">
//             RePut.ai For <span className="text-green-400">Textile Products</span>
//           </h2>
//           <p className="mb-5 text-gray-200">
//             Empower your textile business with end-to-end product traceability
//             and sustainability reporting.
//           </p>
//           <button className="bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-5 rounded-lg transition">
//             Case Study →
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }







"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TextileScreen() {
  return (
    <section className="relative w-full h-[90vh]">
      {/* Background Image */}
      <Image
        src="/Wireframe.png" // replace with your hero image path
        alt="Hero Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-none"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center px-10 md:px-20">
        <motion.div
          className="  text-white p-1 rounded-xl max-w-lg"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            RePut.ai For <span className="text-white">Textile Products</span>
          </h1>
          <p className="mb-6 text-lg text-gray-200">
            Empower your textile business with end-to-end product traceability
            and sustainability reporting.
          </p>
          {/* <motion.button
            className="bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Case Study →
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
}
