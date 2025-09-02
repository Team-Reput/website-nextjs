"use client";

import Image from "next/image";
import { useContact } from "../../../components/ContactContext"; 

export default function ComplianceScreen() {

  const { scrollToContact } = useContact(); 
  
  return (
    <div className="flex flex-col items-start  justify-center min-h-screen bg-[#EAFCF3]">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold ml-33 text-start text-black w-[1222px] px-4">
        Does my business meet CBAM’s phased compliance requirements?{" "}
        <span className="text-green-700">for goods imported into the EU</span>
      </h1>

      {/* Middle Background Image */}
      <div className="relative w-full  h-[410px] my-2">
        <Image
          src="/circleCard.png"  
          alt="CBAM Compliance"
          fill
          className="object-cover"
        />
      </div>

      {/* Button */}
      <div className="w-full ml-35 max-w-6xl justify-start mt-5">
        <button onClick={scrollToContact} className="px-6 py-3    bg-black text-white rounded-lg shadow-lg hover:bg-gray-800 transition">
          Know more →
        </button>
      </div>

    </div>
  );
}
 








// import { motion } from "framer-motion";

// interface Step {
//   year: string;
//   percentage: number;
//   label: string;
//   description: string;
// }

// const steps: Step[] = [
//   {
//     year: "2024",
//     percentage: 40,
//     label: "before 1 January 2024",
//     description: "emissions data coverage required under transitional reporting."
//   },
//   {
//     year: "2024",
//     percentage: 50,
//     label: "calendar year 2024",
//     description: "emissions data coverage with verified direct emissions for covered CN codes."
//   },
//   {
//     year: "2025",
//     percentage: 60,
//     label: "During calendar year 2025",
//     description: "emissions data coverage including both direct and indirect emissions."
//   },
//   {
//     year: "2026",
//     percentage: 70,
//     label: "During calendar year 2026",
//     description: "emissions data coverage with full verification ahead of certificate purchase obligations."
//   },
//   {
//     year: "2026",
//     percentage: 80,
//     label: "After 31 December 2026",
//     description: "or higher emissions data coverage with mandatory purchase and surrender of CBAM certificates."
//   }
// ];

// export default function Cbamtimeline() {
//   return (
//     <div className="bg-green-50 py-12 px-6">
//       <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-black">
//         Does my business meet CBAM’s phased compliance requirements?{" "}
//         <span className="text-green-600">for goods imported into the EU</span>
//       </h2>

//       <div className="flex flex-col md:flex-row items-center justify-center gap-10">
//         {steps.map((step, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//             className="flex flex-col items-center text-center max-w-[250px]"
//           >
//             {/* Circular Percentage */}
//             <div className="relative flex items-center justify-center w-32 h-32 rounded-full bg-green-900 text-white font-bold text-xl shadow-lg">
//               <div>
//                 <div>{step.year}</div>
//                 <div>{step.percentage}%</div>
//               </div>
//               {/* Arrow for connection */}
//               {index < steps.length - 1 && (
//                 <div className="absolute right-[-70px] top-1/2 -translate-y-1/2 hidden md:block">
//                   ➝
//                 </div>
//               )}
//             </div>

//             {/* Label */}
//             <p className="mt-3 font-semibold italic text-green-800">
//               {step.label}
//             </p>

//             {/* Description */}
//             <p className="mt-2 text-sm text-gray-700">{step.description}</p>
//           </motion.div>
//         ))}
//       </div>

//       <div className="flex justify-center mt-10">
//         <button className="bg-black text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-gray-800 transition">
//           Know more →
//         </button>
//       </div>
//     </div>
//   );
// }














// import { motion } from "framer-motion";

// interface Step {
//   year: string;
//   percentage: number;
//   curvedLabel: string;
//   description: string;
// }

// const steps: Step[] = [
//   {
//     year: "2024",
//     percentage: 40,
//     curvedLabel: "before 1 January 2024",
//     description: "emissions data coverage required under transitional reporting.",
//   },
//   {
//     year: "2024",
//     percentage: 50,
//     curvedLabel: "calendar year 2024",
//     description:
//       "emissions data coverage with verified direct emissions for covered CN codes.",
//   },
//   {
//     year: "2025",
//     percentage: 60,
//     curvedLabel: "During calendar year 2025",
//     description:
//       "emissions data coverage including both direct and indirect emissions.",
//   },
//   {
//     year: "2026",
//     percentage: 70,
//     curvedLabel: "During calendar year 2026",
//     description:
//       "emissions data coverage with full verification ahead of certificate purchase obligations.",
//   },
//   {
//     year: "2026",
//     percentage: 80,
//     curvedLabel: "After 31 December 2026",
//     description:
//       "or higher emissions data coverage with mandatory purchase and surrender of CBAM certificates.",
//   },
// ];

// export default function CBAMTimeline() {
//   return (
//     <div className="bg-green-50 py-12 px-6">
//       {/* Heading */}
//       <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
//         Does my business meet CBAM’s phased compliance requirements?{" "}
//         <span className="text-green-600">for goods imported into the EU</span>
//       </h2>

//       {/* Timeline Circles */}
//       <div className="flex flex-col md:flex-row items-center justify-center gap-16">
//         {steps.map((step, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             className="relative flex flex-col items-center text-center max-w-[220px]"
//           >
//             {/* Circle with year + % */}
//             <div className="relative flex items-center justify-center w-36 h-36 rounded-full bg-green-900 text-white font-bold text-xl shadow-lg">
//               <div>
//                 <div>{step.year}</div>
//                 <div>{step.percentage}%</div>
//               </div>
//             </div>

//             {/* Curved Label using SVG Path */}
//             <svg
//               viewBox="0 0 200 100"
//               className="absolute top-[-60px] w-[200px] h-[100px] text-green-900"
//             >
//               <path
//                 id={`curve-${index}`}
//                 d="M 10,90 A 90,90 0 0,1 190,90"
//                 fill="transparent"
//                 stroke="none"
//               />
//               <text
//                 width="500"
//                 textAnchor="middle"
//                 className="fill-green-900 font-semibold text-[12px] italic"
//               >
//                 <textPath href={`#curve-${index}`} startOffset="50%">
//                   {step.curvedLabel}
//                 </textPath>
//               </text>
//             </svg>

//             {/* Arrow */}
//             {index < steps.length - 1 && (
//               <div className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden md:block">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={2}
//                   stroke="currentColor"
//                   className="w-6 h-6 text-green-800"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//               </div>
//             )}

//             {/* Description */}
//             <p className="mt-2 text-sm text-gray-700">{step.description}</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Button */}
//       <div className="flex justify-start mt-12 px-6 md:px-24">
//         <button className="bg-black text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-gray-800 transition">
//           Know more →
//         </button>
//       </div>
//     </div>
//   );
// }
