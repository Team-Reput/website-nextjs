 




// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

// export default function Footer() {
//   const locations = [
//     { name: "Pune", img: "/pune.png" },
//     { name: "Bangalore", img: "/banglore.png" },
//     { name: "USA", img: "/usa.png" },
//   ];

//   return (
//     <footer className="bg-gradient-to-r from-[#0F2B14] to-[#0F2B14]/90 text-white py-10 px-8">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Top Row: Logo + Social Icons */}
//         <div className="flex justify-between items-center mb-6">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <Image
//               src="/newLogoWhite.png"
//               alt="RePut.ai"
//               width={120}
//               height={40}
//               className="object-contain"
//             />
            
//           </div>

//           {/* Social Media */}
//           <div className="flex gap-4 text-green-400 text-lg">
//             <Link href="#" aria-label="LinkedIn" className="hover:text-white">
//               <FaLinkedinIn />
//             </Link>
//             <Link href="#" aria-label="YouTube" className="hover:text-white">
//               <FaYoutube />
//             </Link>
//             <Link href="#" aria-label="Instagram" className="hover:text-white">
//               <FaInstagram />
//             </Link>
//           </div>
//         </div>

//         {/* Horizontal Line */}
//         <hr className="border-gray-600 mb-6" />

//         {/* First Row */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Location */}
//           <div>
//             <h3 className="mb-4 font-semibold">Location</h3>
//             <div className="flex gap-4">
//               {locations.map((loc, index) => (
//                 <div key={index} className="flex flex-col items-center">
//                   <Image
//                     src={loc.img}
//                     alt={loc.name}
//                     width={120}
//                     height={100}
//                     className="rounded-md object-cover"
//                   />
//                   {/* <span className="mt-2 text-sm">{loc.name}</span> */}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Technologies 1 */}
//           <div>
//             <h3 className="mb-4 font-semibold">Technologies</h3>
//             <ul className="space-y-2 text-sm">
//               <li>Supply chain mapping</li>
//               <li>Transaction traceability</li>
//               <li>Supplier watchlist monitoring</li>
//               <li>Supplier engagement</li>
//               <li>ERP Integration</li>
//             </ul>
//           </div>

//           {/* Regulatory Solutions */}
//           <div>
//             <h3 className="mb-4 font-semibold">Regulatory Solutions</h3>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 America
//                 <ul className="ml-4 list-disc">
//                   <li>Regulation 1</li>
//                   <li>Regulation 2</li>
//                 </ul>
//               </li>
//               <li>
//                 India
//                 <ul className="ml-4 list-disc">
//                   <li>Regulation 1</li>
//                   <li>Regulation 2</li>
//                 </ul>
//               </li>
//             </ul>
//           </div>

//           {/* Resources */}
//           <div>
//             <h3 className="mb-4 font-semibold">Resources</h3>
//             <ul className="space-y-2 text-sm">
//               <li>Blog</li>
//               <li>Customer Stories</li>
//               <li>Webinar / Videos / Podcasts</li>
//               <li>Ebooks</li>
//               <li>Events</li>
//             </ul>
//           </div>
//         </div>

//         {/* Horizontal Line */}
//         <hr className="border-gray-600 my-6" />

//         {/* Second Row */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

//            {/* Empty */}
//           <div></div>

//            {/* Empty */}
//           <div></div>
//           {/* Technologies 2 */}
//           <div>
//             <h3 className="mb-4 font-semibold">Technologies</h3>
//             <ul className="space-y-2 text-sm">
//               <li>Mock Detention</li>
//               <li>Upstream Quality Assurance</li>
//               <li>N-Tire Risk Mapping</li>
//               <li>Supplier Due Diligence</li>
//               <li>Corporate Responsibility</li>
//               <li>Supply Chain Resilience</li>
//             </ul>
//           </div>

         

//           {/* Company */}
//           <div>
//             <h3 className="mb-4 font-semibold">Company</h3>
//             <ul className="space-y-2 text-sm">
//               <li>Compliance</li>
//               <li>Platform</li>
//               <li>Industries</li>
//               <li>Why RePut</li>
//               <li>Company</li>
//               <li>Join US</li>
//             </ul>
//           </div>
//         </div>

//         {/* Horizontal Line */}
//         <hr className="border-gray-600 my-6" />

//         {/* Footer bottom */}
//         <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
//           <p>© 2025 UPCYCLE REPUT TECH PVT LTD. All rights reserved.</p>
//           <div className="flex space-x-4 mt-2 md:mt-0">
//             <Link href="#">Privacy Policy</Link>
//             <Link href="#">Terms of Service</Link>
//             <Link href="#">Contact Us</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }































 




"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const locations = [
    { name: "Pune", img: "/pune.png" },
    { name: "Bangalore", img: "/banglore.png" },
    { name: "USA", img: "/usa.png" },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#0F2B14] to-[#0F2B14]/90 text-white py-10 px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Row: Logo + Social Icons */}
        <div className="flex justify-between items-center mb-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/newLogoWhite.png"
              alt="RePut.ai"
              width={120}
              height={40}
              className="object-contain"
            />
            
          </div>

          {/* Social Media */}
          <div className="flex gap-4 text-green-400 text-lg">
            <Link href="https://www.linkedin.com/company/reput-ai"  aria-label="LinkedIn" className="hover:text-white">
              <FaLinkedinIn />
            </Link>
            <Link href="#" aria-label="YouTube" className="hover:text-white">
              <FaYoutube />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-white">
              <FaInstagram />
            </Link>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-gray-600 mb-6" />

        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location */}
          <div>
            <h3 className="mb-4 font-semibold">Location</h3>
            <div className="flex gap-4">
              {locations.map((loc, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Image
                    src={loc.img}
                    alt={loc.name}
                    width={120}
                    height={100}
                    className="rounded-md object-cover"
                  />
                  {/* <span className="mt-2 text-sm">{loc.name}</span> */}
                </div>
              ))}
            </div>
          </div>

   
        </div>

        {/* Horizontal Line */}
        {/* <hr className="border-gray-600 my-6" /> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {/* Technologies 1 */}
          <div>
            <hr className="border-gray-600 my-6" />
            <h3 className="mb-4 font-semibold">Features</h3>
            <ul className="space-y-2 text-sm">
              <li>Supply chain mapping</li>
              <li>Transaction traceability</li>
              <li>Supplier watchlist monitoring</li>
              <li>Supplier engagement</li>
              <li>ERP Integration</li>
            </ul>
          </div>

          {/* Regulatory Solutions */}
          <div className="ml-45 " >
            <hr className="border-gray-600 my-6" />
            <h3 className="mb-4 font-semibold">Regulatory Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                USA
                <ul className="ml-4 list-disc">
                  <li>Federal Acquisition Regulation (FAR) – Supplier compliance</li>
                  <li>Dodd-Frank Act – Conflict Minerals Rule</li>
                </ul>
              </li>
              <li>
                India
                <ul className="ml-4 list-disc">
                  <li>Companies Act, 2013 – CSR & ESG compliance</li>
                  <li>SEBI Business Responsibility and Sustainability Report (BRSR)</li>
                </ul>
              </li>
              <li>
                Europe
                <ul className="ml-4 list-disc">
                  <li>EU Supply Chain Due Diligence Directive (CSDDD)</li>
                  <li>EU Taxonomy Regulation</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="ml-25">
            <hr className="border-gray-600 my-6" />
            <h3 className="mb-4 font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>Blog</li>
              <li>Customer Stories</li>
              {/* <li>Webinar / Videos / Podcasts</li> */}
              {/* <li>Ebooks</li> */}
              {/* <li>Events</li> */}
            </ul>
          </div>
        </div>


        {/* <hr className="border-gray-600 my-6" /> */}

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

           {/* Empty */}
          <div></div>

           {/* Empty */}
          <div></div>
          {/* Technologies 2 */}
          <div>
            <hr className="border-gray-600 my-6 mr-20" />

            <h3 className="mb-4 font-semibold">Technologies</h3>
            <ul className="space-y-2 text-sm">
              <li>Mock Detention</li>
              <li>Upstream Quality Assurance</li>
              <li>N-Tire Risk Mapping</li>
              <li>Supplier Due Diligence</li>
              <li>Corporate Responsibility</li>
              <li>Supply Chain Resilience</li>
            </ul>
          </div>

         

          {/* Company */}
          <div>
            <hr className="border-gray-600 my-6" />

            <h3 className="mb-4 font-semibold">Company</h3>
            {/* <ul className="space-y-2 text-sm">
              <li>Compliance</li>
              <li id="platform">Platform</li>
              <li>Industries</li>
              <li>Why RePut</li>
              <li>Company</li>
              <li>Join US</li>
            </ul> */}
            <ul className="space-y-2 text-sm">
    <li><a href="#" className="hover:text-green-400">Compliance</a></li>
    <li><a href="#" className="hover:text-green-400">Platform</a></li>
    <li><a href="#" className="hover:text-green-400">Industries</a></li>
    <li><a href="#" className="hover:text-green-400">Why RePut</a></li>
    <li><a href="#" className="hover:text-green-400">Company</a></li>
    <li><a href="#" className="hover:text-green-400">Join Us</a></li>
  </ul>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-gray-600 my-6" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2025 UPCYCLE REPUT TECH PVT LTD. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


 
