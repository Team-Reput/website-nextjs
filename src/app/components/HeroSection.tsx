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
      typedWords: ["Transparent", "compliance", "Circular", "Sustainability"], // ✅ added Sustainability
      subHeading: "Supply Chains",
      description:
        "Build For global brands. Trusted across industries RePut connected data. supplier data. supplier and regulations into one realtime verifiable platform",
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
    if (w === "sustainability") return "globe"; // ✅ map Sustainability to Globe3D
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
      className="relative w-full min-h-[90vh] flex items-center justify-center px-[60px] py-[40px]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-[1280px] w-full">
        {/* LEFT CONTENT */}
        <div className="space-y-[16px] ">
          <h1 className="text-[42px] leading-[60px] tracking-wide  font-bold text-black">
            {content.heading.split(" ").map((word, i) => (
              <span key={i} className={word === "Only" ? "text-green-500" : ""}>
                {word}{" "}
              </span>
            ))}
            <br />
            <span className="bg-[#6FFFA9] px-[8px] py-[2px] rounded shadow-md inline-block align-middle">
              <div className="first-letter:uppercase">
                <ReactTyped
                  typedRef={(instance) => {
                    typedInstance.current = instance ?? null;
                  }}
                  strings={content.typedWords}
                  typeSpeed={80}
                  backSpeed={36}
                  backDelay={5000}
                  smartBackspace
                  loop
                  showCursor={false}
                  preStringTyped={handleStringTyped}
                />
              </div>
            </span>{" "}
            <span className="text-black">{content.subHeading}</span>
          </h1>

          <p className="text-[16px] leading-[24px] text-[#3F3F40] max-w-[520px] font-bold">
            {content.description}
          </p>

          <button
            onClick={scrollToContact}
            className="bg-[#6FFFA9] hover:bg-[#5de997] transition text-black px-[20px] py-[10px] rounded shadow-md font-semibold flex items-center gap-2 w-fit"
          >
            See RePut in action →
          </button>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex justify-center mt-10 md:mt-0 mb-20">
          <div className="relative aspect-square w-[320px] md:w-[420px] lg:w-[520px]">
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
                  <Globe3D /> {/* ✅ Globe3D for both Circular & Sustainability */}
                </motion.div>
              ) : visual === "compliance" ? (
                <motion.div
                  key="compliance"
                  className="absolute inset-0"
                  variants={fadeVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <ComplaintWidget />
                </motion.div>
              ) : (
                <motion.div
                  key="octagon"
                  className="absolute inset-0"
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
//       typedWords: ["Transparent", "compliance", "Circular"],
//       subHeading: "Supply Chains",
//       description:
//         "Build For global brands. Trusted across industries RePut connected data. supplier data. supplier and regulations into one realtime verifiable platform",
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


// <div className="first-letter:uppercase">
//   <ReactTyped
//     typedRef={(instance) => {
//       typedInstance.current = instance ?? null;
//     }}
//     strings={content.typedWords}
//     typeSpeed={80}
//     backSpeed={36}
//     backDelay={5000}
//     smartBackspace
//     loop
//     showCursor={false}
//     preStringTyped={handleStringTyped}
//   />
// </div>




//             </span>{" "}
//             <span className="text-black">{content.subHeading}</span>
//           </h1>

//           <p className="text-[16px] leading-[24px] text-[#3F3F40] max-w-[520px] font-bold">
//             {content.description}
//           </p>

//           <button  onClick={scrollToContact}  className="bg-[#6FFFA9] hover:bg-[#5de997] transition text-black px-[20px] py-[10px] rounded shadow-md font-semibold flex items-center gap-2 w-fit">
//             See RePut in action →
//           </button>
//         </div>



//         {/* RIGHT VISUAL — fixed frame, visuals fill it */}
//         <div className="relative flex justify-center mt-10 md:mt-0 mb-20">
//           {/* The frame keeps layout constant so bg doesn't jump */}
//           <div className="relative aspect-square w-[320px] md:w-[420px] lg:w-[520px]">
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
//                   <ComplaintWidget />
//                 </motion.div>
//               ) : visual === "compliance" ? (
//                 <motion.div
//                 key="compliance"
//                 className="absolute inset-0"
//                   variants={fadeVariants}
//                   initial="initial"
//                   animate="animate"
//                   exit="exit"
//                 >
//                   {/* Swap to your actual compliance component when ready */}
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





































// "use client";
// import React, { useState, useEffect } from "react";
// import { ReactTyped } from "react-typed";
// import Image from "next/image";

// export default function HeroSection () {
//   const backgroundImage = "/homeBack.png"; // dummy background
//   const rightImages = [
//     "/images/shirts1.jpg",
//     "/images/shirts2.jpg",
//     "/images/shirts3.jpg",
//   ];
//   const leftContents = [
//     {
//       heading: "Your Only Source Of Truth For",
//       typedWords: ["Transparent", "compliance", "Circular"],
//       // typedWords: ["Transparent"],
//       subHeading: "Supply Chains",
//       description:
//         "Build For global brands. Trusted across industries RePut connected data. supplier data. supplier and regulations into one realtime verifiable platform",
//     },
//     // {
//     //   heading: "Your Only Source Of Truth For",
//     //   typedWords: ["compliance"],
//     //   subHeading: "Supply Chains",
//     //   description:
//     //     "Build For global brands. Trusted across industries RePut connected data. supplier data. supplier and regulations into one realtime verifiable platform",
//     // },
//     // {
//     //   heading: "Your Only Source Of Truth For",
//     //   typedWords: ["Circular"],
//     //   subHeading: "Supply Chains",
//     //   description:
//     //     "Build For global brands. Trusted across industries RePut connected data. supplier data. supplier and regulations into one realtime verifiable platform",
//     // },
//   ];

//   const [currentRightImage, setCurrentRightImage] = useState(0);
//   const [currentContent, setCurrentContent] = useState(0);

//   // Rotate right images every 2s
//   useEffect(() => {
//     const imgInterval = setInterval(() => {
//       setCurrentRightImage((prev) => (prev + 1) % rightImages.length);
//     }, 5000);
//     return () => clearInterval(imgInterval);
//   }, [rightImages.length]);

//   // Change left content every 6s
//   useEffect(() => {
//     const contentInterval = setInterval(() => {
//       setCurrentContent((prev) => (prev + 1) % leftContents.length);
//     }, 6000);
//     return () => clearInterval(contentInterval);
//   }, [leftContents.length]);

//   const content = leftContents[currentContent];

//   return (
//     <section
//       className="relative w-full min-h-[90vh] flex items-center justify-center px-[60px] py-[40px]"
//       style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
//     >
//       <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-[1280px] w-full">
        
//         {/* LEFT CONTENT */}
//         <div className="space-y-[16px]">
//           <h1 className="text-[36px] leading-[44px] font-bold tracking-tight text-black">
//             {content.heading.split(" ").map((word, i) => (
//               <span
//                 key={i}
//                 className={word === "Only" ? "text-green-500" : ""}
//               >
//                 {word}{" "}
//               </span>
//             ))}
//             <br />
//             <span className="bg-[#6FFFA9] px-[8px] py-[2px] rounded shadow-md inline-block align-middle">
//                <ReactTyped
//                   strings={content.typedWords}
//                   typeSpeed={250}
//                   backSpeed={40}
//                   loop
//                 />

//             </span>{" "}
//             <span className="text-black">{content.subHeading}</span>
//           </h1>

//           <p className="text-[16px] leading-[24px] text-black max-w-[520px]">
//             {content.description}
//           </p>

//           <button className="bg-[#6FFFA9] hover:bg-[#5de997] transition text-black px-[20px] py-[10px] rounded shadow-md font-semibold flex items-center gap-2 w-fit">
//             See RePut in action →
//           </button>
//         </div>

//         {/* RIGHT IMAGE & HEXAGON */}
//         <div className="relative flex justify-center mt-10 md:mt-0">
//           {/* Rotating Hexagon SVG */}
//           <div className="absolute w-[420px] h-[420px] animate-spin-slow">
//             <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <polygon
//                 points="250,20 470,140 470,360 250,480 30,360 30,140"
//                 stroke="#6FFFA9"
//                 strokeWidth="4"
//                 fill="transparent"
//               />
//               {/* Example icons around the edges */}
//               <circle cx="250" cy="20" r="14" fill="#6FFFA9" />
//               <circle cx="470" cy="140" r="14" fill="#6FFFA9" />
//               <circle cx="470" cy="360" r="14" fill="#6FFFA9" />
//               <circle cx="250" cy="480" r="14" fill="#6FFFA9" />
//               <circle cx="30" cy="360" r="14" fill="#6FFFA9" />
//               <circle cx="30" cy="140" r="14" fill="#6FFFA9" />
//             </svg>
//           </div>

//           {/* Rotating Image Carousel */}
//           <div className="relative w-[300px] h-[300px] rounded-xl overflow-hidden shadow-lg">
//             {rightImages.map((img, index) => (
//               <Image
//                 key={index}
//                 src={img}
//                 alt="Display"
//                 fill
//                 className={`object-cover transition-opacity duration-700 ${
//                   index === currentRightImage ? "opacity-100" : "opacity-0"
//                 }`}
//               />


//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };












