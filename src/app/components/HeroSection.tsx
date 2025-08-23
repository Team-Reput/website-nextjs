


// "use client";
// import React, { useState, useEffect, useCallback, useRef } from "react";
// import { ReactTyped } from "react-typed";
// import Typed from "typed.js";
// import { AnimatePresence, motion } from "framer-motion";
// import { useContact } from "../components/ContactContext";

// import AnimatedOctagon from "./AnimatedOctagon";  
// import Globe3D from "./Globe3D";                 
// import ComplaintWidget from "./ComplaintWidget";

// type Visual = "octagon" | "globe" | "compliance";

// export default function HeroSection() {
//   const backgroundImage = "/homeBack.png";
//   const { scrollToContact } = useContact();

//   const leftContents = [
//     {
//       heading: "Your Only Source Of Truth For",
//       typedWords: ["Transparent", "compliance", "Circular", "Sustainable"], // ✅ added Sustainability
//       subHeading: "Supply Chains",
//       description:
//         "Built for global brands and trusted across industries, Reput connects end-to-end data seamlessly. Supplier data, product origin, regulatory requirements, and authenticity checks all come together in one real-time, verifiable platform.",
//     },
//   ];

//   const [currentContent, setCurrentContent] = useState(0);
//   const [visual, setVisual] = useState<Visual>("octagon");
//   const typedInstance = useRef<Typed | null>(null);

//   useEffect(() => {
//     const contentInterval = setInterval(() => {
//       setCurrentContent((prev) => (prev + 1) % leftContents.length);
//     }, 6000);
//     return () => clearInterval(contentInterval);
//   }, [leftContents.length]);

//   const content = leftContents[currentContent];

//   const wordToVisual = (word: string): Visual => {
//     const w = word.toLowerCase();
//     if (w === "circular") return "globe";
//     if (w === "sustainability") return "globe"; // ✅ map Sustainability to Globe3D
//     if (w === "compliance") return "compliance";
//     return "octagon";
//   };

//   const handleStringTyped = useCallback(
//     (index: number) => {
//       const word = content.typedWords[index] ?? "";
//       setVisual(wordToVisual(word));
//     },
//     [content.typedWords]
//   );

//   const fadeVariants = {
//     initial: { opacity: 0, scale: 0.96, y: 8 },
//     animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35 } },
//     exit: { opacity: 0, scale: 0.98, y: -6, transition: { duration: 0.25 } },
//   };

//   return (
//     <section
//       className="relative w-full min-h-[90vh] flex items-center justify-center px-[60px] py-[40px]"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-[1280px] w-full">
//         {/* LEFT CONTENT */}
//         <div className="space-y-[16px] ">
//           <h1 className="text-[42px] leading-[60px] tracking-wide  font-bold text-black">
//             {content.heading.split(" ").map((word, i) => (
//               <span key={i} className={word === "Only" ? "text-green-500" : ""}>
//                 {word}{" "}
//               </span>
//             ))}
//             <br />
//             <span className="bg-[#6FFFA9] px-[8px] py-[2px] rounded shadow-md inline-block align-middle">
//               <div className="first-letter:uppercase">
//                 <ReactTyped
//                   typedRef={(instance) => {
//                     typedInstance.current = instance ?? null;
//                   }}
//                   strings={content.typedWords}
//                   typeSpeed={80}
//                   backSpeed={36}
//                   backDelay={5000}
//                   smartBackspace
//                   loop
//                   showCursor={false}
//                   preStringTyped={handleStringTyped}
//                 />
//               </div>
//             </span>{" "}
//             <span className="text-black">{content.subHeading}</span>
//           </h1>

//           <p className="text-[16px] leading-[24px] text-[#3F3F40] max-w-[520px] font-bold">
//             {content.description}
//           </p>

//           <button
//             onClick={scrollToContact}
//             className="bg-[#6FFFA9] hover:bg-[#5de997] transition text-black px-[20px] py-[10px] rounded shadow-md font-semibold flex items-center gap-2 w-fit"
//           >
//             See RePut in action →
//           </button>
//         </div>

//         {/* RIGHT VISUAL */}
//         <div className="relative flex justify-center mt-10 md:mt-0 mb-20">
//           <div className="relative aspect-square w-[320px] md:w-[420px] lg:w-[520px] ">
//             <AnimatePresence mode="wait">
//               {visual === "globe" ? (
//                 <motion.div
//                   key="globe"
//                   className="absolute inset-0"
//                   variants={fadeVariants}
//                   initial="initial"
//                   animate="animate"
//                   exit="exit"
//                 >
//                   {/* <Globe3D />   */}
//                   <ComplaintWidget />
//                 </motion.div>
//               ) : visual === "compliance" ? (
//                 <motion.div
//                   key="compliance"
//                   className="absolute inset-0 scale-[1.28] ml-30"
//                   variants={fadeVariants}
//                   initial="initial"
//                   animate="animate"
//                   exit="exit"
//                 >
//                   {/* <ComplaintWidget /> */}
//                   <Globe3D />
//                 </motion.div>
//               ) : (
//                 <motion.div
//                   key="octagon"
//                   className="absolute inset-0"
//                   variants={fadeVariants}
//                   initial="initial"
//                   animate="animate"
//                   exit="exit"
//                 >
//                   <AnimatedOctagon />
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }











//resp




"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { ReactTyped } from "react-typed";
import Typed from "typed.js";
import { AnimatePresence, motion } from "framer-motion";
import { useContact } from "../components/ContactContext";

import AnimatedOctagon from "./AnimatedOctagon";  
import Globe3D from "./Globe3D";                 
import ComplaintWidget from "./ComplaintWidget";

type Visual = "octagon" | "globe" | "compliance";

export default function HeroSection() {
  const backgroundImage = "/homeBack.png";
  const { scrollToContact } = useContact();

  const leftContents = [
    {
      heading: "Your Only Source Of Truth For",
      typedWords: ["Transparent", "compliance", "Circular", "Sustainable"],
      subHeading: "Supply Chains",
      description:
        "Built for global brands and trusted across industries, Reput connects end-to-end data seamlessly. Supplier data, product origin, regulatory requirements, and authenticity checks all come together in one real-time, verifiable platform.",
    },
  ];

  const [currentContent, setCurrentContent] = useState(0);
  const [visual, setVisual] = useState<Visual>("octagon");
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    const contentInterval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % leftContents.length);
    }, 6000);
    return () => clearInterval(contentInterval);
  }, [leftContents.length]);

  const content = leftContents[currentContent];

  const wordToVisual = (word: string): Visual => {
    const w = word.toLowerCase();
    if (w === "circular") return "globe";
    if (w === "sustainability") return "globe";
    if (w === "compliance") return "compliance";
    return "octagon";
  };

  const handleStringTyped = useCallback(
    (index: number) => {
      const word = content.typedWords[index] ?? "";
      setVisual(wordToVisual(word));
    },
    [content.typedWords]
  );

  const fadeVariants = {
    initial: { opacity: 0, scale: 0.96, y: 8 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35 } },
    exit: { opacity: 0, scale: 0.98, y: -6, transition: { duration: 0.25 } },
  };

  return (
    <section
      className="relative w-full min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] flex items-center justify-center px-4 sm:px-8 md:px-[60px] py-2 sm:py-4 md:py-[40px] overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-[1280px] w-full gap-4 md:gap-0">
        {/* LEFT CONTENT */}
        <div className="space-y-4 sm:space-y-6 md:space-y-[16px] text-center md:text-left">
          <h1 className="text-[24px] sm:text-[32px] md:text-[38px] leading-[32px] sm:leading-[44px] md:leading-[60px] tracking-wide font-bold text-black">
            {content.heading.split(" ").map((word, i) => (
              <span key={i} className={word === "Only" ? "text-green-500" : ""}>
                {word}{" "}
              </span>
            ))}
            <br />
            <span className="bg-[#6FFFA9] px-[6px] sm:px-[8px] py-[2px] rounded shadow-md inline-block align-middle">
              <div className="first-letter:uppercase">
                <ReactTyped
                  typedRef={(instance) => {
                    typedInstance.current = instance ?? null;
                  }}
                  strings={content.typedWords}
                  typeSpeed={80}
                  backSpeed={36}
                  backDelay={5000}
                  // backDelay={500000}
                  smartBackspace
                  loop
                  showCursor={false}
                  preStringTyped={handleStringTyped}
                />
              </div>
            </span>{" "}
            <span className="text-black">{content.subHeading}</span>
          </h1>

          <p className="text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-[#3F3F40] max-w-full sm:max-w-[520px] font-bold mx-auto md:mx-0">
            {content.description}
          </p>

          <div className="flex justify-center md:justify-start">
            <button
              onClick={scrollToContact}
              className="bg-[#6FFFA9] hover:bg-[#5de997] transition text-black px-4 sm:px-[20px] py-2 sm:py-[10px] rounded shadow-md font-semibold flex items-center gap-2 w-fit text-sm sm:text-base"
            >
              See RePut in action →
            </button>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex justify-center mt-0 sm:mt-2 md:mt-0 mb-0 sm:mb-4 md:mb-20 -translate-y-4 sm:-translate-y-2 md:translate-y-0">
          <div className="relative aspect-square w-[220px] sm:w-[260px] md:w-[420px] lg:w-[520px]">
            <AnimatePresence mode="wait">
              {visual === "globe" ? (
                <motion.div
                  key="globe"
                  className="absolute inset-0"
                  variants={fadeVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <ComplaintWidget />
                </motion.div>
              ) : visual === "compliance" ? (
                <motion.div
                  key="compliance"
                  className="absolute inset-0 scale-[1.1] sm:scale-[1.2] md:scale-[1.28] ml-0 sm:ml-4 md:ml-30"
                  variants={fadeVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Globe3D />
                </motion.div>
              ) : (
                <motion.div
                  key="octagon"
                  className="absolute inset-0 -translate-y-45 sm:-translate-y-20 md:translate-y-0"
                  variants={fadeVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <AnimatedOctagon />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}