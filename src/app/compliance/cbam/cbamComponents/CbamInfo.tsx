"use client"
import Image from "next/image";
import { useContact } from "../../../components/ContactContext"; 


export default function CbamInfo() {
    const { scrollToContact } = useContact(); 

  return (
    <>
    <div className="min-h-screen flex flex-col items-start  justify-start bg-white text-black px-6 py-12">
      <div className="max-w-4xl ml-32 w-[1100px] text-base md:text-lg leading-relaxed">
        <p className="mb-6 w-[1100px]">
          The <span className="font-bold">Carbon Border Adjustment Mechanism (CBAM)</span> 
          is at the heart of this transformation. It targets{" "}
          <span className="font-bold">
            high-carbon, trade–exposed sectors
          </span>{" "}
          such as steel, <span className="font-bold">aluminium, cement, fertilisers, hydrogen, and electricity</span>, 
          with future plans to expand into{" "}
          <span className="font-bold">chemicals, polymers, and additional industrial products</span>. 
          The mechanism imposes a carbon cost on imported goods equivalent to the price paid by EU 
          manufacturers under the{" "}
          <span className="font-bold">EU Emissions Trading System (EU ETS)</span>, 
          effectively levelling the playing field.
        </p>

        <p className="mb-6 w-[1100px]">
          For exporters, this means that{" "}
          <span className="font-bold">
            embedded carbon emissions are no longer a background sustainability issue — they are now a trade compliance requirement
          </span>
          . Companies will need to:
        </p>

        <ul className="w-[1100px] list-disc list-inside mb-6 space-y-2">
          <li>
            <span className="font-bold">Calculate and disclose</span> emissions embedded in their products using EU-approved methodologies.
          </li>
          <li>
            <span className="font-bold">Undergo third–party verification</span> to prove the accuracy of reported data.
          </li>
          <li>
            <span className="font-bold">Purchase CBAM certificates</span> to cover the carbon cost of imports from 2026 onwards.
          </li>
        </ul>

        <p className="mb-6 w-[1100px]">
          Failure to meet these requirements could result in penalties, reputational damage, and even{" "}
          <span className="font-bold">loss of market access</span>. At the same time, proactive compliance offers opportunities 
          to <span className="font-bold">differentiate products as low-carbon alternatives</span>, attract ESG–conscious buyers, 
          and <span className="font-bold">strengthen supply chain transparency</span>.
        </p>

        <p className="mb-6 w-[1100px]">
          In a rapidly decarbonising global economy, aligning with CBAM is not just about avoiding trade barriers — 
          it’s about securing long–term competitiveness in one of the world’s most regulated and climate–driven markets.
        </p>

        {/* Button */}
        <div className="flex mt-10 justify-start">
          <button onClick={scrollToContact} className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-md shadow-md">
            Get in touch & find out how you can comply
          </button>
        </div>
      </div>
    </div>


{/* ____________________________________________________________________________________________________________________ */}


      <div className="min-h-screen bg-white text-black px-6 py-12 flex flex-col items-center">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Image */}
        <div className="relative h-72 md:h-[400px]">
          <Image
            src="/cbamcard.png" // place your image in public/images/
            alt="Boxes and CBAM illustration"
             width={600}
            height={500}
            className="object-contain h-[100%] scale-[1.3]"
          />
        </div>

        {/* Right side - Text content */}
        <div className="bg-green-50 p-6 md:p-8 rounded-md shadow">
          <h2 className="text-[48px] md:text-3xl font-bold mb-4">
            Does My Business Qualify{" "}
            <span className="text-green-600 text-[48px]">Under CBAM?</span>
          </h2>
          <p className="text-[18px] md:text-base leading-relaxed text-gray-700">
            CBAM applies only to certain products identified by specific CN
            (Combined Nomenclature) codes. These currently include{" "}
            <span className="font-semibold text-[18px]">
              cement (2523), iron and steel (7206–7217, 7219–7229, 7301–7302),
              aluminium (7601, 7604–7609), fertilisers (3102–3105), electricity
              (2716) and hydrogen (2804 10)
            </span>
            . If your goods fall under these codes when imported into the EU,
            you are required to report embedded emissions, have the data
            verified, and, from 2026 onwards, purchase CBAM certificates.
            Correctly identifying your CN codes is the first and most important
            step to ensuring compliance.
          </p>

          {/* CTA Button */}
          <div className="mt-6">
            <button onClick={scrollToContact} className="bg-black text-[18px] text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 hover:bg-gray-900 transition">
              Know more →
            </button>
          </div>
        </div>
      </div>

     
      <div className="max-w-4xl w-full mt-16 text-start mr-80">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          Regulation <span className="text-green-600">Purpose</span>
        </h3>
        <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-4 w-[1097px]">
          The <span className="font-bold">CBAM is the EU’s flagship</span>{" "}
          carbon trade regulation designed to{" "}
          <span className="font-bold">prevent “carbon leakage”</span> by
          imposing a carbon price on imports equivalent to that paid by EU
          producers.
        </p>
        <p className="text-sm md:text-base text-gray-800 leading-relaxed">
          From 2026, importers will{" "}
          <span className="font-bold">
            be required to purchase CBAM certificates
          </span>{" "}
          based on the embedded emissions of their products, with transitional
          reporting obligations starting from 2023.
        </p>
      </div>

    </div>



      

    </>
  );
}
