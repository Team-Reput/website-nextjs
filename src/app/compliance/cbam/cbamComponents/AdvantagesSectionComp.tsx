
"use client";
import Image from "next/image";
import { useContact } from "../../../components/ContactContext"; 




const advantages = [
  {
    title: "CBAM Impact Assessment",
    desc: "A clear analysis of how CBAM applies to your product portfolio, mapped against CN codes and market destinations.",
    icon: "/onecard.png",
  },
  {
    title: "Custom Compliance Blueprint",
    desc: "A tailored step-by-step plan for setting up emissions tracking, verification processes, and data governance in line with EU regulations.",
    icon: "/twocard.png",
  },
  {
    title: "Data Integration & Automation Setup",
    desc: "Connecting your production, logistics, and supplier systems to enable seamless collection and submission of emissions data.",
    icon: "/thirdcard.png",
  },
  {
    title: "Supplier Engagement Program",
    desc: "Strategies and tools to help upstream suppliers measure and share accurate emissions data required for CBAM declarations",
    icon: "/fourcard.png",
  },
  {
    title: "Regulatory Scenario Modelling",
    desc: "Forecasting potential carbon cost exposure under different production and sourcing choices, so you can plan strategically.",
    icon: "/cbam_icon.png",
  },
  {
    title: "Onboarding & Change Management",
    desc: "Training and internal alignment sessions to prepare operational, procurement, and compliance teams for CBAM’s ongoing requirements.",
    icon: "/sixcard.png",
  },
];






export default function AdvantagesSectionComp() {
  const { scrollToContact } = useContact(); 

  return (
    <section className="bg-white w-full px-4 sm:px-6 md:px-10 py-12 md:py-16">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12 px-2">
        <h1 className="text-[48px] sm:text-3xl lg:text-[48px] font-bold text-black mb-4 w-[744px]">
          CBAM compliance <span className="text-[#008000]">doesn’t have to be overwhelming.</span>
        </h1>

      </div>

      <div className="w-[1026px] h-[90px] mx-48 flex justify-start mb-12 ">
        <p className="text-[36px] sm:text-base md:text-[36px] text-black  ">
          Prepare to meet CBAM obligations within 3 months with the RePut.ai CBAM Readiness Package, including:
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {advantages.map((adv, index) => (
          <div
            key={index}
            className="relative bg-green-900 text-white rounded-xl shadow-lg hover:scale-105 transform transition duration-300 p-6 sm:p-8 md:p-9"
            style={{ boxShadow: "0px 0px 15px 2px rgba(0,255,0,0.4)" }}
          >
            {/* Text Content */}
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 mt-6">
              {adv.title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed">
              {adv.desc}
            </p>

            {/* Diagonal Top-Right with Icon */}
            <div className="absolute top-0  right-0 w-16 h-16 sm:w-30 sm:h-30 overflow-hidden">
              <div className="w-full h-full bg-white clip-diagonal flex items-start justify-end">
                <Image
                  src={adv.icon}
                  alt={adv.title}
                  width={40}
                  height={40}
                  className="absolute top-3 right-3"
                />
              </div>
            </div>
          </div>
        ))}


      </div>

      {/* Button */}

      <div className="mt-10 flex justify-start top-35 mx-auto ml-36">
        <button onClick={scrollToContact} className="px-5 sm:px-6 py-2  sm:py-3 bg-black text-white rounded-lg shadow hover:bg-gray-800 flex items-center gap-2 transition text-sm sm:text-base">
          Discuss Our  CBAM Regulation Reediness Package Today →
        </button>
      </div>


      {/* Custom CSS for Diagonal Cut */}
      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(100% 0, 100% 100%, 0 0);
        }
      `}</style>
    </section>
  );
}
