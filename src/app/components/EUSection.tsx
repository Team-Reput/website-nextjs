"use client"
 

import React from "react";
// import Link from "next/link";
import { useContact } from "./ContactContext";


export default function EUSection() {

      const { scrollToContact } = useContact();


  return (
    <section className="flex items-center justify-center h-[80vh] px-8 bg-white">
      <div className="flex w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* LEFT SIDE - Video */}
        <div className="w-1/2 bg-green-900">
          <video
            src="/newVideo.mp4" // put your video file in /public/videos
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT SIDE - Text */}
        <div className="w-1/2 bg-[#DFF5E4] p-8 flex flex-col justify-center">
          <h4 className="text-sm font-bold text-gray-900 mb-2">
            Why We Built RePut
          </h4>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Build For Making Companies <br /> Future Ready
          </h2>
          <p className="text-gray-700 mb-4 text-sm leading-relaxed">
            In today's world supply chain is more complex than ever full of
            blind spots, from unverifiable sourcing claims to invisible carbon
            emissions and unchecked waste.
          </p>
          <p className="text-gray-700 mb-4 text-sm leading-relaxed">
            At RePut, we believe that transparency is no longer optional; it’s
            the foundation of credibility.
          </p>
          <p className="text-gray-700 mb-4 text-sm leading-relaxed">
            That’s why we’re building a future-ready platform powered by AI and
            blockchain, where every claim can be proven, every impact can be
            seen, and every product can be trusted. Whether it’s traceability,
            carbon compliance, or circularity, we turn scattered data into a
            single source of truth using predictive and prescriptive
            intelligence. For customers, it’s a seamless solution that
            simplifies transparency, eases data collection, and supports
            real-time decision-making.
          </p>
          <p className="text-gray-700 mb-6 text-sm leading-relaxed">
            Because in the age of conscious consumers, authenticity isn’t just
            good ethics, it’s good business. And sustainability is no longer a
            cost centre. It’s a revenue opportunity through tools like carbon
            credit generation and verified impact.
          </p>
          {/* <Link  
            href="#"
            className="bg-black text-white px-5 py-2 rounded-md text-sm font-semibold flex items-center gap-2 w-fit hover:bg-gray-800 transition"
          >
            Know more →
          </Link> */}

          <button onClick={scrollToContact}
            className="bg-black text-white px-5 py-2 rounded-md text-sm font-semibold flex items-center gap-2 w-fit hover:bg-gray-800 transition"
          >
            Know more →
          </button>
        </div>
      </div>
    </section>
  );
}

