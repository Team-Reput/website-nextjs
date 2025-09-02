"use client"
import React from "react";
import Image from "next/image";
// import { useContact } from "../../../components/ContactContext"; 


export default function EudrStructure() {
      // const { scrollToContact } = useContact(); 

  return (
    <div className="min-h-screen bg-[#EAFCF3] p-8">
      {/* Header */}
      <div className="flex justify-between items-start mb-12 ml-30 text-[48px]">
        <div className="w-[836px]">
          <h1 className="text-2xl md:text-3xl  text-[#0C0E10] font-bold">
            The Structure of the EUDR Lite  &
            <br/>
            Full EUDR
          </h1>
        </div>

        {/* Logo */}
        <div className="flex flex-col items-end  mr-30">
          <Image
            src="/logonew.png" // put your logo inside public/logo.png
            alt="RePut.ai"
            width={150}
            height={60}
          />
        </div>
      </div>

      {/* Table-like Grid */}
      <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto text-[20px]">
        {/* Column Headers */}
        <div className="bg-green-900 text-white text-center w-[366] text-[24px]  rounded-3xl py-2 px-6 font-medium">
          ( 2023–2024 for preparation, 2024–2025 for phased rollout )
        </div>
        <div></div>
        <div className="bg-green-900 text-white text-center w-[408px] text-[24px] rounded-3xl py-2 px-6 font-medium">
          ( From Dec 2024 for large companies, June 2025 for SMEs )
        </div>

        {/* Row 1 */}
        <InfoCard  text="Large companies and traders preparing compliance; SMEs not yet in scope." />
        <CategoryLabel text="Applicability" />
        <InfoCard text="All operators and traders placing EUDR commodities on EU market." />

        {/* Row 2 */}
        <InfoCard text="Basic due diligence on commodities with initial traceability efforts." />
        <CategoryLabel text="Disclosure Scope" />
        <InfoCard text="Comprehensive due diligence covering deforestation-free and legal sourcing." />

        {/* Row 3 */}
        <InfoCard text="Partial supply chain mapping, geolocation for high-risk areas only." />
        <CategoryLabel text="Data Depth" />
        <InfoCard text="Full geolocation data to plot land parcels; satellite-based risk verification." />

        {/* Row 4 */}
        <InfoCard text="No third-party assurance required; self-declarations sufficient." />
        <CategoryLabel text="Assurance" />
        <InfoCard text="Third-party checks and EU information system submissions expected." />

        {/* Row 5 */}
        <InfoCard text="Build internal systems, risk assessments, and traceability processes." />
        <CategoryLabel text="Purpose" />
        <InfoCard text="Ensure deforestation-free supply chains with legal compliance in EU." />

        {/* Row 6 */}
        <InfoCard text="Internal teams, suppliers, and early EU buyers." />
        <CategoryLabel text="Stakeholder Engagement" />
        <InfoCard text=" EU regulators, financial institutions, investors, and global buyers." />
      </div>
    </div>
  );
}

// Left/Right card component
const InfoCard = ({ text }: { text: string }) => (
  <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 text-sm text-gray-700">
    {text}
  </div>
);

// Middle label component
const CategoryLabel = ({ text }: { text: string }) => (
  <div className="flex items-center justify-center text-center font-medium text-gray-700">
    {text}
  </div>
);
