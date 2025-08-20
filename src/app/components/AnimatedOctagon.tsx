"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function AnimatedOctagon() {
  // List of images to rotate in center
  const images = ["/s1.png", "/s22.png", "/s3.png", "/s5.png"];


  const [currentIndex, setCurrentIndex] = useState(0);
  //  const [fade, setFade] = useState(true);

  // Change image every 3 seconds
     useEffect(() => {
    const interval = setInterval(() => {

      setTimeout(() => {
        // change image after fade out
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 500); // 0.5s fade duration
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center p-8 relative">
      <div className="relative w-[450px] h-[450px] mb-50">
        {/* Outer rotating container */}
        <div className="absolute inset-0 animate-spin-slow">
          {/* Outer octagon */}
          <div
            className="absolute inset-8 border-2 border-green-200/40 bg-gradient-to-br from-green-50/30 to-green-100/20"
            style={{
              clipPath:
                "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            }}
          />
          {/* Middle octagon */}
          <div
            className="absolute inset-16 border-2 border-green-300/50 bg-gradient-to-br from-green-100/40 to-green-200/30"
            style={{
              clipPath:
                "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            }}
          />
          {/* Inner octagon */}
          <div
            className="absolute inset-24 border-2 border-green-400/60 bg-gradient-to-br from-green-200/50 to-green-300/40"
            style={{
              clipPath:
                "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            }}
          />

          {/* Floating dots - outer ring */}
          <div className="absolute top-12 left-1/2 w-3 h-3 bg-slate-400 rounded-full -translate-x-1/2 animate-pulse" />
          <div className="absolute top-20 right-16 w-4 h-4 bg-slate-600 rounded-full animate-pulse" />
          <div className="absolute right-12 top-1/2 w-3 h-3 bg-green-400 rounded-full -translate-y-1/2 animate-pulse" />
          <div className="absolute bottom-20 right-16 w-4 h-4 bg-slate-500 rounded-full animate-pulse" />
          <div className="absolute bottom-12 left-1/2 w-3 h-3 bg-green-500 rounded-full -translate-x-1/2 animate-pulse" />
          <div className="absolute bottom-20 left-16 w-4 h-4 bg-slate-400 rounded-full animate-pulse" />
          <div className="absolute left-12 top-1/2 w-3 h-3 bg-green-300 rounded-full -translate-y-1/2 animate-pulse" />
          <div className="absolute top-20 left-16 w-4 h-4 bg-slate-600 rounded-full animate-pulse" />

          {/* Floating dots - middle ring */}
          <div className="absolute top-24 left-1/2 w-3 h-3 bg-green-200 rounded-full -translate-x-1/2 animate-pulse delay-300" />
          <div className="absolute top-32 right-24 w-3 h-3 bg-green-600 rounded-full animate-pulse delay-300" />
          <div className="absolute right-24 top-1/2 w-3 h-3 bg-slate-500 rounded-full -translate-y-1/2 animate-pulse delay-300" />
          <div className="absolute bottom-32 right-24 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-24 left-1/2 w-3 h-3 bg-green-300 rounded-full -translate-x-1/2 animate-pulse delay-300" />
          <div className="absolute bottom-32 left-24 w-3 h-3 bg-slate-400 rounded-full animate-pulse delay-300" />
          <div className="absolute left-24 top-1/2 w-3 h-3 bg-green-500 rounded-full -translate-y-1/2 animate-pulse delay-300" />
          <div className="absolute top-32 left-24 w-3 h-3 bg-slate-600 rounded-full animate-pulse delay-300" />

          {/* Icon containers - positioned as a triangle */}
          {/* Top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center shadow-lg border-4 border-transparent">
              <Image
                src="/f1.png"
                alt="f1"
                width={80}
                height={80}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Bottom-left */}
          <div className="absolute bottom-0 left-12 translate-y-1/2">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-lg border-4 border-transparent">
              <Image
                src="/f2.png"
                alt="f2"
                width={80}
                height={80}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Bottom-right */}
          <div className="absolute bottom-0 right-12 translate-y-1/2">
            <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg border-4 border-transparent">
              <Image
                src="/f3.png"
                alt="f3"
                width={80}
                height={80}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Central content - static octagonal frame */}
        <div
          className="absolute inset-32 overflow-hidden shadow-2xl border-4 border-transparent"
          style={{
            clipPath:
              "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
          }}
        >
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Center ${index}`}
              fill
              className={`object-cover absolute transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              priority={index === currentIndex}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t " />
        </div>
      </div>
    </div>
  );
}










// "use client"


// import Image from "next/image";

// export default function AnimatedOctagon() {
//   return (
//     <div className="min-h-screen bg-transparent flex items-center justify-center p-8 relative">
//       <div className="relative w-[450px] h-[450px] mb-50">
//         {/* Outer rotating container */}
//         <div className="absolute inset-0 animate-spin-slow">
//           {/* Outer octagon */}
//           <div
//             className="absolute inset-8 border-2 border-green-200/40 bg-gradient-to-br from-green-50/30 to-green-100/20"
//             style={{
//               clipPath:
//                 "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
//             }}
//           />
//           {/* Middle octagon */}
//           <div
//             className="absolute inset-16 border-2 border-green-300/50 bg-gradient-to-br from-green-100/40 to-green-200/30"
//             style={{
//               clipPath:
//                 "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
//             }}
//           />
//           {/* Inner octagon */}
//           <div
//             className="absolute inset-24 border-2 border-green-400/60 bg-gradient-to-br from-green-200/50 to-green-300/40"
//             style={{
//               clipPath:
//                 "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
//             }}
//           />

//           {/* Floating dots - outer ring */}
//           <div className="absolute top-12 left-1/2 w-3 h-3 bg-slate-400 rounded-full -translate-x-1/2 animate-pulse" />
//           <div className="absolute top-20 right-16 w-4 h-4 bg-slate-600 rounded-full animate-pulse" />
//           <div className="absolute right-12 top-1/2 w-3 h-3 bg-green-400 rounded-full -translate-y-1/2 animate-pulse" />
//           <div className="absolute bottom-20 right-16 w-4 h-4 bg-slate-500 rounded-full animate-pulse" />
//           <div className="absolute bottom-12 left-1/2 w-3 h-3 bg-green-500 rounded-full -translate-x-1/2 animate-pulse" />
//           <div className="absolute bottom-20 left-16 w-4 h-4 bg-slate-400 rounded-full animate-pulse" />
//           <div className="absolute left-12 top-1/2 w-3 h-3 bg-green-300 rounded-full -translate-y-1/2 animate-pulse" />
//           <div className="absolute top-20 left-16 w-4 h-4 bg-slate-600 rounded-full animate-pulse" />

//           {/* Floating dots - middle ring */}
//           <div className="absolute top-24 left-1/2 w-3 h-3 bg-green-200 rounded-full -translate-x-1/2 animate-pulse delay-300" />
//           <div className="absolute top-32 right-24 w-3 h-3 bg-green-600 rounded-full animate-pulse delay-300" />
//           <div className="absolute right-24 top-1/2 w-3 h-3 bg-slate-500 rounded-full -translate-y-1/2 animate-pulse delay-300" />
//           <div className="absolute bottom-32 right-24 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-300" />
//           <div className="absolute bottom-24 left-1/2 w-3 h-3 bg-green-300 rounded-full -translate-x-1/2 animate-pulse delay-300" />
//           <div className="absolute bottom-32 left-24 w-3 h-3 bg-slate-400 rounded-full animate-pulse delay-300" />
//           <div className="absolute left-24 top-1/2 w-3 h-3 bg-green-500 rounded-full -translate-y-1/2 animate-pulse delay-300" />
//           <div className="absolute top-32 left-24 w-3 h-3 bg-slate-600 rounded-full animate-pulse delay-300" />

//           {/* Icon containers - positioned as a triangle */}
//           {/* Top */}
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
//             <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center shadow-lg border-4 border-transparent">
//               <Image
//                 src="/f1.png"
//                 alt="f1"
//                 width={80}
//                 height={80}
//                 className="rounded-xl shadow-lg"
//               />
//             </div>
//           </div>

//           {/* Bottom-left */}
//           <div className="absolute bottom-0 left-12 translate-y-1/2">
//             <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-lg border-4 border-transparent">
//               <Image
//                 src="/f2.png"
//                 alt="f2"
//                 width={80}
//                 height={80}
//                 className="rounded-xl shadow-lg"
//               />
//             </div>
//           </div>

//           {/* Bottom-right */}
//           <div className="absolute bottom-0 right-12 translate-y-1/2">
//             <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg border-4 border-transparent">
//               <Image
//                 src="/f3.png"
//                 alt="f3"
//                 width={80}
//                 height={80}
//                 className="rounded-xl shadow-lg"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Central content - static octagonal frame */}
//         <div
//           className="absolute inset-32 overflow-hidden shadow-2xl border-4 border-transparent"
//           style={{
//             clipPath:
//               "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
//             }}
//         >
//           <Image
//             src="/s1.png"
//             alt="Fashion clothing rack"
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-t " />
//         </div>
//       </div>
//     </div>
//   );
// }













// // import {  Users } from 'lucide-react';
// // import Polygon16 from '../../../public/Polygon16.png'
// import Image from "next/image";


// export default function AnimatedOctagon() {
//   return (
//     <div className="min-h-screen bg-transparent flex items-center justify-center p-8 relative">
//       <div className="relative w-[450px] h-[450px] mb-50">
//         {/* Outer rotating container */}
//         <div className="absolute inset-0 animate-spin-slow">
//           {/* Outer octagon */}
//           <div
//             className="absolute inset-8 border-2 border-green-200/40 bg-gradient-to-br from-green-50/30 to-green-100/20"
//             style={{
//               clipPath:
//                 'polygon(40% 0%, 60% 0%, 100% 40%, 100% 60%, 60% 100%, 40% 100%, 0% 60%, 0% 40%)',
//             }}
//           />
//           {/* Middle octagon */}
//           <div
//             className="absolute inset-16 border-2 border-green-300/50 bg-gradient-to-br from-green-100/40 to-green-200/30"
//             style={{
//               clipPath:
//                 'polygon(40% 0%, 60% 0%, 100% 40%, 100% 60%, 60% 100%, 40% 100%, 0% 60%, 0% 40%)',
//             }}
//           />
//           {/* Inner octagon */}
//           <div
//             className="absolute inset-24 border-2 border-green-400/60 bg-gradient-to-br from-green-200/50 to-green-300/40"
//             style={{
//               clipPath:
//                 'polygon(40% 0%, 60% 0%, 100% 40%, 100% 60%, 60% 100%, 40% 100%, 0% 60%, 0% 40%)',
//             }}
//           />

//           {/* Floating dots - outer ring */}
//           <div className="absolute top-12 left-1/2 w-3 h-3 bg-slate-400 rounded-full -translate-x-1/2 animate-pulse" />
//           <div className="absolute top-20 right-16 w-4 h-4 bg-slate-600 rounded-full animate-pulse" />
//           <div className="absolute right-12 top-1/2 w-3 h-3 bg-green-400 rounded-full -translate-y-1/2 animate-pulse" />
//           <div className="absolute bottom-20 right-16 w-4 h-4 bg-slate-500 rounded-full animate-pulse" />
//           <div className="absolute bottom-12 left-1/2 w-3 h-3 bg-green-500 rounded-full -translate-x-1/2 animate-pulse" />
//           <div className="absolute bottom-20 left-16 w-4 h-4 bg-slate-400 rounded-full animate-pulse" />
//           <div className="absolute left-12 top-1/2 w-3 h-3 bg-green-300 rounded-full -translate-y-1/2 animate-pulse" />
//           <div className="absolute top-20 left-16 w-4 h-4 bg-slate-600 rounded-full animate-pulse" />

//           {/* Floating dots - middle ring */}
//           <div className="absolute top-24 left-1/2 w-3 h-3 bg-green-200 rounded-full -translate-x-1/2 animate-pulse delay-300" />
//           <div className="absolute top-32 right-24 w-3 h-3 bg-green-600 rounded-full animate-pulse delay-300" />
//           <div className="absolute right-24 top-1/2 w-3 h-3 bg-slate-500 rounded-full -translate-y-1/2 animate-pulse delay-300" />
//           <div className="absolute bottom-32 right-24 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-300" />
//           <div className="absolute bottom-24 left-1/2 w-3 h-3 bg-green-300 rounded-full -translate-x-1/2 animate-pulse delay-300" />
//           <div className="absolute bottom-32 left-24 w-3 h-3 bg-slate-400 rounded-full animate-pulse delay-300" />
//           <div className="absolute left-24 top-1/2 w-3 h-3 bg-green-500 rounded-full -translate-y-1/2 animate-pulse delay-300" />
//           <div className="absolute top-32 left-24 w-3 h-3 bg-slate-600 rounded-full animate-pulse delay-300" />

//           {/* Icon containers */}
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
//             <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center shadow-lg border-4 border-transparent">
//               {/* <Shirt className="w-8 h-8 text-white" /> */}
//                <Image
//             src="/f1.png"
//             alt="Global map screenshot"
//             width={80}
//             height={80}
//             className="rounded-xl shadow-lg"
//             // placeholder="blur"
//           />
//             </div>
//           </div>

//           <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
//             <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-lg border-4 border-transparent">
//               {/* <Package className="w-8 h-8 text-white" /> */}
//                              <Image
//             src="/f2.png"
//             alt="Global map screenshot"
//              width={80}
//             height={80}
//             className="rounded-xl shadow-lg"
//             // placeholder="blur"
//           />
//             </div>
//           </div>

//           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
//             <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg border-4 border-transparent">
//               {/* <Scissors className="w-8 h-8 text-white" /> */}
//                                            <Image
//             src="/f3.png"
//             alt="Global map screenshot"
//              width={80}
//             height={80}
//             className="rounded-xl shadow-lg"
//             // placeholder="blur"
//           />
//             </div>
//             </div>
//           </div>

//           {/* <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
//             <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center shadow-lg border-4 border-transparent">
//               <Users className="w-8 h-8 text-white" />
//             </div>
//           </div> */}
//         </div>

//         {/* Central content - static octagonal frame */}
//         <div
//           className="absolute inset-32 overflow-hidden shadow-2xl border-4 border-transparent"
//           style={{
//             clipPath:
//               'polygon(40% 0%, 60% 0%, 100% 40%, 100% 60%, 60% 100%, 40% 100%, 0% 60%, 0% 40%)',
//           }}
//         >
//           <Image
//             src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400"
//             // src={Polygon16}
//             alt="Fashion clothing rack"
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
//         </div>
//       </div>
//     // </div>
//   );
// }












// import Image from "next/image";

// export default function AnimatedOctagon() {
//   return (
//     <div className="min-h-screen bg-transparent flex items-center justify-center p-8 relative">
//       <div className="relative w-[450px] h-[450px] mb-50">
//         {/* Outer rotating container */}
//         <div className="absolute inset-0 animate-spin-slow">
//           {/* Outer octagon */}
//           <div
//             className="absolute inset-8 border-2 border-green-200/40 bg-gradient-to-br from-green-50/30 to-green-100/20"
//             style={{
//               clipPath:
//                 "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
//             }}
//           />
//           {/* Middle octagon */}
//           <div
//             className="absolute inset-16 border-2 border-green-300/50 bg-gradient-to-br from-green-100/40 to-green-200/30"
//             style={{
//               clipPath:
//                 "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
//             }}
//           />
//           {/* Inner octagon */}
//           <div
//             className="absolute inset-24 border-2 border-green-400/60 bg-gradient-to-br from-green-200/50 to-green-300/40"
//             style={{
//               clipPath:
//                 "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
//             }}
//           />

//           {/* Floating dots - outer ring */}
//           <div className="absolute top-12 left-1/2 w-3 h-3 bg-slate-400 rounded-full -translate-x-1/2 animate-pulse" />
//           <div className="absolute top-20 right-16 w-4 h-4 bg-slate-600 rounded-full animate-pulse" />
//           <div className="absolute right-12 top-1/2 w-3 h-3 bg-green-400 rounded-full -translate-y-1/2 animate-pulse" />
//           <div className="absolute bottom-20 right-16 w-4 h-4 bg-slate-500 rounded-full animate-pulse" />
//           <div className="absolute bottom-12 left-1/2 w-3 h-3 bg-green-500 rounded-full -translate-x-1/2 animate-pulse" />
//           <div className="absolute bottom-20 left-16 w-4 h-4 bg-slate-400 rounded-full animate-pulse" />
//           <div className="absolute left-12 top-1/2 w-3 h-3 bg-green-300 rounded-full -translate-y-1/2 animate-pulse" />
//           <div className="absolute top-20 left-16 w-4 h-4 bg-slate-600 rounded-full animate-pulse" />

//           {/* Floating dots - middle ring */}
//           <div className="absolute top-24 left-1/2 w-3 h-3 bg-green-200 rounded-full -translate-x-1/2 animate-pulse delay-300" />
//           <div className="absolute top-32 right-24 w-3 h-3 bg-green-600 rounded-full animate-pulse delay-300" />
//           <div className="absolute right-24 top-1/2 w-3 h-3 bg-slate-500 rounded-full -translate-y-1/2 animate-pulse delay-300" />
//           <div className="absolute bottom-32 right-24 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-300" />
//           <div className="absolute bottom-24 left-1/2 w-3 h-3 bg-green-300 rounded-full -translate-x-1/2 animate-pulse delay-300" />
//           <div className="absolute bottom-32 left-24 w-3 h-3 bg-slate-400 rounded-full animate-pulse delay-300" />
//           <div className="absolute left-24 top-1/2 w-3 h-3 bg-green-500 rounded-full -translate-y-1/2 animate-pulse delay-300" />
//           <div className="absolute top-32 left-24 w-3 h-3 bg-slate-600 rounded-full animate-pulse delay-300" />

//           {/* Icon containers */}
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
//             <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center shadow-lg border-4 border-transparent">
//               <Image
//                 src="/f1.png"
//                 alt="f1"
//                 width={80}
//                 height={80}
//                 className="rounded-xl shadow-lg"
//               />
//             </div>
//           </div>

//           <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
//             <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-lg border-4 border-transparent">
//               <Image
//                 src="/f2.png"
//                 alt="f2"
//                 width={80}
//                 height={80}
//                 className="rounded-xl shadow-lg"
//               />
//             </div>
//           </div>

//           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
//             <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg border-4 border-transparent">
//               <Image
//                 src="/f3.png"
//                 alt="f3"
//                 width={80}
//                 height={80}
//                 className="rounded-xl shadow-lg"
//               />
//             </div>
//           </div>

//           {/* Optional left side (if you want 4th image) */}
//           {/* <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
//             <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center shadow-lg border-4 border-transparent">
//               <Image src="/f4.png" alt="f4" width={80} height={80} />
//             </div>
//           </div> */}
//         </div>

//         {/* Central content - static octagonal frame */}
//         <div
//           className="absolute inset-32 overflow-hidden shadow-2xl border-4 border-transparent"
//           style={{
//             clipPath:
//                 "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
//           }}
//         >
//           <Image
//             src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400"
//             alt="Fashion clothing rack"
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
//         </div>
//       </div>
//     </div>
//   );
// }











