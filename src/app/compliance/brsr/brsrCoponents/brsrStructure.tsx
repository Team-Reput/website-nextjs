"use client"
// app/cbam/page.tsx
import React from "react";
import Image from "next/image";



export default function BrsrStructure() {

//   type InfoCardProps = {
//   text: string;
// };

// const InfoCard = ({ text }: InfoCardProps) => {
//   return (
//     <div className="bg-green-100 text-green-800 px-6 py-4 rounded-xl shadow-md text-center">
//       {text}
//     </div>
//   );
// };


  return (
    <div className="min-h-screen bg-[#F9FEFA] p-8">
      {/* Header */}
      <div className="flex justify-between items-start mb-12 ml-38 text-[48px]">
        <div className="w-[836px]">
          <h1 className="text-2xl md:text-3xl  text-[#0C0E10] font-bold">
            The Structure of the BRSR Lite  &
            <br/>
            Full BRSR
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
      <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Column Headers */}
        <div className="bg-green-900 text-[24px] text-white text-center rounded-3xl py-2 px-6 font-medium">
          Transitional Phase <br/> (2023–2025)
        </div>
        <div></div>
        <div className="bg-green-900 text-[24px] text-white text-center rounded-3xl py-2 px-6 font-medium">
          Full Implementation (from 2026)
        </div>

        {/* Row 1 */}
        <InfoCard text="For top 1,000 listed companies below" />
        <CategoryLabel text="Applicability" />
        <InfoCard text="For top 1,000 listed companies without exemptions" />

        {/* Row 2 */}
        <InfoCard text="Basic ESG disclosures" />
        <CategoryLabel text="Disclosure Scope" />
        <InfoCard text="Detailed ESG disclosures under all nine NGRBC principles" />

        {/* Row 3 */}
        <InfoCard text="Mostly qualitative data with few metrics" />
        <CategoryLabel text="Data Depth" />
        <InfoCard text="Detailed data, KPIs, and year-on-year trends" />

        {/* Row 4 */}
        <InfoCard text="No independent assurance needed" />
        <CategoryLabel text="Assurance" />
        <InfoCard text="Assurance encouraged/required for some ESG data" />

        {/* Row 5 */}
        <InfoCard text="Introductory compliance format" />
        <CategoryLabel text="Purpose" />
        <InfoCard text="Full compliance for regulators, investors, stakeholders" />

        {/* Row 6 */}
        <InfoCard text="Focus on internal learning and transparency" />
        <CategoryLabel text="Stakeholder Engagement" />
        <InfoCard text="Focus on investor, regulator, and public reporting" />
      </div>
    </div>
  );
}

// Left/Right card component
const InfoCard = ({ text }: { text: string }) => (
  <div className="bg-white border   border-green-200 rounded-3xl shadow-sm p-3 text-[20px] text-gray-700">
    {text}
  </div>
);  

// Middle label component
const CategoryLabel = ({ text }: { text: string }) => (
  <div className="flex items-center justify-center text-center font-medium text-gray-700">
    {text}
  </div>
);
