"use client";

import { useEffect, useRef, useState } from "react";

export default function WhyCustody( ) {

  const [iframeKey, setIframeKey] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef              = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const currentRef = containerRef.current;

    const observer = new IntersectionObserver(
      (entries)=>{
        entries.forEach((entry) => {
          if(entry.isIntersecting){
            
            setIsVisible(true);
            setIframeKey(prev => prev+1);

          }
          else{
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    if(currentRef){
      observer.observe(currentRef);
    }

    return ()=>{
      if(currentRef){
        observer.unobserve(currentRef);
      }
    };
  },[])
 
    return (
              <section ref={containerRef} className=" md:h-screen flex flex-col md:flex-row justify-center items-center bg-white py-8 md:py-0 ">
              
              
                {/* <div className="relative w-[469px] h-full left-0 md:left-1/4 md:-translate-x-1/2 text-2xl text-[#29442C] px-4 md:px-0  md:mb-0">
                  <h1 className="text-[14px] mt-20 md:text-[16px] p-1 bg-[#29442C] text-white  rounded-[40px] w-[80px] md:w-[110px] px-2 outline-1 outline-[#29442C]">
                    TraceChain
                  </h1>
        
                  <div className="text-sm md:text-base w-[467px] md:w-[34em] mb-4 text-[14px] md:text-[16px] leading-relaxed">
                    <h1 className="font-semibold text-base md:text-[40px] mb-2 w-[598px]">
                      Chain of Custody
                    </h1>
                    <p className="text-base md:text-[16px] mb-2 w-[598px]">
                        In industries where product integrity and authenticity are critical, knowing the exact journey of every item is non-negotiable. Our Chain of Custody feature creates a secure, tamper-proof record of each handoff, transformation, and transaction from origin to final delivery. Every movement is timestamped, verified, and linked to a blockchain ledger—ensuring you can prove compliance, authenticity, and ethical sourcing at every stage.
                        Designed for complex supply chains, this system makes tracking seamless and trustworthy. Key benefits include:
                    </p>
 
                    <ul className="list-disc pl-4 md:pl-6 space-y-2 w-[598px]">
                      <li>
                         <span className="font-bold text-[#29442C] text-[16px] w-[598px]">Immutable blockchain records  </span>that preserve every transfer of ownership or custody.
                      </li>
                      <li>
                         <span className="font-bold text-[#29442C] text-[16px] w-[598px]">•Real-time tracking  </span> for products and materials as they move through the chain.
                      </li>
                      <li>
                         <span className="font-bold text-[#29442C] text-[16px] w-[598px]">Customizable checkpoints  </span>to capture location, quality, and compliance data.
                      </li>
                      <li>
                         <span className="font-bold text-[#29442C] text-[16px] w-[598px]">Audit-ready reports  </span>for regulators, buyers, and certification bodies.
                      </li>
                    </ul>
        
                    <p className="font-semibold text-base md:text-lg mt-2 mb-2 text-[16px] w-[598px]">With Chain of Custody, you gain irrefutable proof of a product’s journey—protecting your brand, building consumer trust, and meeting the most stringent certification requirements.</p>
        
                  </div>
        
                </div> */}


                <div className="relative w-[469px] h-full  left-0 md:left-[22%] md:-translate-x-1/2 text-2xl text-[#29442C] px-4 md:px-0  md:mb-0">
  <h1 className="text-[14px] mt-20 md:text-[16px] p-1 bg-[#29442C] text-white rounded-[40px] w-[80px] md:w-[110px] px-2 outline-1 outline-[#29442C]">
    TraceChain
  </h1>

  <div className="text-sm md:text-base w-[467px] md:w-[34em] mb-4 text-[14px] md:text-[16px] leading-relaxed">
    <h1 className="font-semibold text-base md:text-[40px] mb-2 w-[598px]">
      Chain of Custody
    </h1>
    <p className="text-base md:text-[16px] mb-2 w-[598px]">
      TraceChain ensures a secure, tamper-proof record of every product’s journey 
      from origin to final delivery. Each step is timestamped, verified, and stored 
      on blockchain—guaranteeing authenticity, compliance, and ethical sourcing.
      Built for complex supply chains, it makes tracking seamless and trustworthy. 
      Key benefits include:
    </p>

    <ul className="list-disc pl-4 md:pl-6 space-y-2 w-[598px]">
      <li>
        <span className="font-bold text-[#29442C] text-[16px] w-[598px]">
          Immutable blockchain records
        </span>
        that permanently preserve every ownership transfer.
      </li>
      <li>
        <span className="font-bold text-[#29442C] text-[16px] w-[598px]">
          Real-time tracking
        </span>
        of products and materials across the supply chain.
      </li>
      <li>
        <span className="font-bold text-[#29442C] text-[16px] w-[598px]">
          Customizable checkpoints
        </span>
        to capture location, quality, and compliance data.
      </li>
      <li>
        <span className="font-bold text-[#29442C] text-[16px] w-[598px]">
          Audit-ready reports
        </span>
        for regulators, buyers, and certification bodies.
      </li>
    </ul>

    <p className="font-semibold text-base md:text-lg mt-2 mb-2 text-[16px] w-[598px]">
      With Chain of Custody, you gain irrefutable proof of a product’s journey—protecting 
      your brand, building trust, and meeting strict certification standards.
    </p>
  </div>
</div>


                <div className="flex justify-center items-center w-full h-full mt-20">
                   
                    {/* <iframe
                      src="/cubeHand.html"
                      title="Cube"
                      className="w-[90%] ml-50 md:w-[78%] h-[60%] md:h-[100vh] transition-all duration-1000 ease-out"
                    /> */}


                            {/* Show loading state when not visible */}
                     {!isVisible && (
                       <div className="w-[90%] ml-50 md:w-[78%] h-[60%] md:h-[100vh] bg-gray-100 flex items-center justify-center rounded-lg">
                         <div className="text-gray-500 text-lg">Loading animation...</div>
                       </div>
                     )}

                     {/* Iframe that reloads when key changes */}
                     {isVisible && (
                       <iframe
                         key={iframeKey} // This forces a complete reload when changed
                         src="/cubeHand.html"
                         title="Cube"
                         className="w-[90%] ml-50 md:w-[78%] h-[60%] md:h-[100vh] transition-all duration-1000 ease-out"
                       />
                     )}
                 
                </div>
              </section>
    )
}












