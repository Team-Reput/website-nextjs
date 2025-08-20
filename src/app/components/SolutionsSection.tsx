// export default function SolutionsSection() {
//   return (
//     <section
//       className="relative bg-cover bg-center text-white min-h-screen flex items-center"
//       style={{ backgroundImage: "url('/thread.jpg')" }}
//     >
//       <div className="bg-black/50 w-full h-full absolute top-0 left-0 z-0" />
//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
//         <h2 className="text-4xl md:text-5xl font-bold mb-4">
//           Ultimate suite for your sustainability needs
//         </h2>

//         <p className="text-sm uppercase font-semibold bg-white/20 inline-block px-4 py-1 rounded-full mt-2 mb-6 tracking-widest">
//           TRACING A GREENER PATH
//         </p>

//         <p className="text-lg md:text-xl max-w-3xl mb-12">
//           In the ever-evolving tapestry of supply chain management, staying ahead means embracing the needs of tomorrow. We&apos;re committed to designing the future of supply chain management for you.
//         </p>

//         <div className="grid md:grid-cols-3 gap-6">
//           {[
//             {
//               title: "TraceChain",
//               points: [
//                 "Traceability up to the nth tier",
//                 "Tamper-proof with blockchain technology",
//                 "Real-time predictive and prescriptive analytics",
//               ],
//             },
//             {
//               title: "Zero Carbon",
//               points: [
//                 "Real-time carbon footprint visualizations",
//                 "Scope 1, Scope 2, and Scope 3 emissions analysis",
//                 "70K+ custom emission factor database",
//               ],
//             },
//             {
//               title: "Circle",
//               points: [
//                 "Vast network of verified and trustworthy recyclers",
//                 "Efficient online price discovery mechanism",
//                 "Modular platform with increased agility and flexibility",
//               ],
//             },
//           ].map((card, index) => (
//             <div
//               key={index}
//               className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/30 hover:scale-105"
//             >
//               <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
//               <ul className="text-sm space-y-2">
//                 {card.points.map((point, idx) => (
//                   <li key={idx}>• {point}</li>
//                 ))}
//               </ul>
//               <a
//                 href="#"
//                 className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-white hover:text-yellow-400 transition"
//               >
//                 Learn more →
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Image from "next/image";

export default function SolutionsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { id: 1, value: 5, label: "Used across", suffix: "+ Countries" },
    { id: 2, value: 12, label: "Used by", suffix: "+ Brands" },
    { id: 3, value: 112, label: "", suffix: "+ suppliers Onboarded" },
  ];

  const logos = [
    { id: 1, src: "/client1.png", alt: "Vedanta" },
    { id: 2, src: "/client2.png", alt: "Vidya Herbs" },
    { id: 3, src: "/client3.png", alt: "Gokaldas Exports" },
    { id: 4, src: "/client4.png", alt: "Griffith" },
    { id: 5, src: "/client5.png", alt: "MTR" },
  ];

  return (
    <section className="bg-white py-12 px-6" ref={ref}>
      {/* Heading */}
      <div className="text-center mb-6">
        <p className="text-gray-800 italic">
          Trusted by <span className="text-green-700 font-semibold">Global brands</span>{" "}
          <span className="text-gray-600">
            Across Industries, Geographies, and sizes
          </span>
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
        {stats.map((item) => (
          <div
            key={item.id}
            className="bg-gradient-to-b from-green-100 to-green-50 rounded-lg shadow p-6 text-center"
          >
            <p className="text-lg font-semibold text-gray-700">
              {item.label}{" "}
              <span className="font-bold text-black">
                {inView ? <CountUp end={item.value} duration={2} /> : 0}
                {item.suffix}
              </span>
            </p>
          </div>
        ))}
      </div>

      {/* Logos */}
      <div className="flex flex-wrap justify-center gap-10 items-center mt-6">
        {logos.map((logo) => (
          <Image
            key={logo.id}
            src={logo.src}
            alt={logo.alt}
            width={170}
            height={110}
            className="object-contain"
          />
        ))}
      </div>
    </section>
  );
}
