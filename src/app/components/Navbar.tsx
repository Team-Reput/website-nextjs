// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useContact } from "./ContactContext";
// import Image from "next/image";

// const navItems = [
//   { label: "Home", href: "/" },
//   { label: "Technology", href: "/technology" },
//   { label: "Industries", href: "/industries" },
//   { label: "News", href: "/news" },
//   { label: "About RePut", href: "/about" },
//   { label: "Platform", href: "/platform" },
//   { label: "Policies", href: "/policie" },
// ];

// export default function Navbar() {
//   const pathname = usePathname();
//   const { scrollToContact } = useContact();

//   return (
//     <header className="bg-[#ffffff] text-black">
//       <div className="w-full mx-auto px-4">
//         <nav className="max-w-[1600px] mx-auto flex justify-between items-center px-8 py-5">
//           {/* Logo */}
//           <div className="flex items-center gap-3">
//              <Link href="/" prefetch={true}>
//             <Image
//               src="/logonew.png"
//               alt="RePut logo"
//               width={70}
//               height={60}
//               priority
//             />
//             </Link>
//             {/* <span className="text-2xl font-bold tracking-tight">RePut</span> */}
//           </div>

//           {/* Navigation Links */}
//           <ul className="hidden md:flex gap-8 text-base font-medium">
//             {navItems.map((item) => (
//               <li key={item.href} className="relative group">
//                 <Link
//                   href={item.href}
//                   className={`transition-colors duration-200 hover:text-yellow-300 ${
//                     pathname === item.href ? "text-yellow-400 font-semibold" : ""
//                   }`}
//                 >
//                   {item.label}
//                 </Link>
//                 <span
//                   className={`absolute left-0 -bottom-2 h-[3px] w-full bg-yellow-400 transform transition-transform duration-300 scale-x-0 group-hover:scale-x-100 ${
//                     pathname === item.href ? "scale-x-100" : ""
//                   }`}
//                 />
//               </li>
//             ))}
//           </ul> 

//           {/* Contact Button */}
//           <div>
//             <button onClick={scrollToContact} className="bg-[#6EED88] text-black px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#6EED88] hover:text-[#0a2941] transition-colors duration-300 shadow-md">
//               Contact Us
//             </button>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// }



 






"use client";

import Link from "next/link";
import { useContact } from "./ContactContext";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  // { label: "Compliance", href: "/compliance", hasDropdown: true },
  { label: "Home", href: "/", hasDropdown: false },
  { label: "Platform", href: "/platform", hasDropdown: true },
  { label: "Industries", href: "/industries", hasDropdown: true },
  // { label: "Why RePut", href: "/why-reput" },
  { label: "About RePut", href: "/about" },
  // { label: "Resources", href: "/resources", hasDropdown: true },
  // { label: "Company", href: "/company" },
  // { label: "Join US", href: "/join-us" }
  { label: "News", href: "/news" },
  { label: "Policies", href: "/policie" }
];

 

const industriesItems = [
  { label: "Textile", image: "/ti.png" },
  { label: "Food", image: "/foodi.png" },
  // { label: "Carbon", image: "/rc.png" },
];


const resourcesItems = [
  "News letter", "Case studies", "Blogs & Articles"
];


const platformItems = [
  { label: "Tracechain", href: "/platform/tracechain", image: "/chain.png" },
  { label: "Zero Carbon", href: "/industries/carbon", image: "/e.png" },
  // { label: "RePut Circle", href: "/platform/reput-circle", image: "/rc.png" },
  // { label: "Inviselable", href: "/platform/inviselable", image: "/qrc.png" },
  // { label: "Flex-DPP", href: "/platform/flex-dpp", image: "/flexdpp.png" },
  // { label: "Smart labelling", href: "/platform/smart-labelling", image: "/rec.png" }
];



export default function Navbar() {
  const { scrollToContact } = useContact();
  const [activeDropdown, setActiveDropdown] = useState("");

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-[1600px] mx-auto flex justify-between items-center px-8 py-5 text-[#29442C]">
        
        {/* Logo */}
        <Link href="/">
          <Image src="/logonew.png" alt="RePut" width={140} height={35} />
        </Link>

        {/* Nav Items */}
        <div className="hidden lg:flex gap-8 text-[#29442C] font-bold">
          {navItems.map((item) => (
            <div 
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown("")}
            >
              <Link 
                href={item.href}
                className="text-gray-700 hover:text-black py-2"
              >
                {item.label}
              </Link>

              {/* Dropdowns */}
              {activeDropdown === item.label && item.hasDropdown && (
                <div className="absolute top-full left-0 mt-1 bg-[#F7FFF8]  rounded-lg shadow-lg p-6 z-50">


                  {/* Industries Dropdown */}
                  {item.label === "Industries" && (
                    <div className="grid grid-cols-2 gap-2 w-64 text-[#29442C]">
                      {industriesItems.map(industry => (
                        <Link 
                          key={industry.label} 
                          href={`/industries/${industry.label.toLowerCase()}`} 
                          className="flex items-center gap-2 p-2 hover:bg-[#E4FFE9] rounded text-sm"
                        >
                          <Image 
                            src={industry.image} 
                            alt={industry.label} 
                            width={24} 
                            height={24} 
                            className="rounded"
                          />
                          {industry.label}
                        </Link>
                      ))}
                    </div>
                  )}


                  {/* Resources Dropdown */}
                  {item.label === "Resources" && (
                    <div className="w-48">
                      {resourcesItems.map(resource => (
                        <Link key={resource} href={`/resources/${resource.toLowerCase().replace(/\s+/g, "-")}`}
                              className="block p-2 hover:bg-[#E4FFE9] rounded text-sm text-[#29442C]">
                          {resource}
                        </Link>
                      ))}
                    </div>
                  )}

                 
                  {item.label === "Platform" && (
                    <div className="grid grid-cols-2 gap-4 w-96">
                      {platformItems.map(platform => (
                        <Link 
                          key={platform.label} 
                          href={platform.href}
                          className="flex items-center gap-2 p-3 hover:bg-[#E4FFE9] rounded-lg text-sm text-[#29442C]"
                        >
                          <Image 
                            src={platform.image} 
                            alt={platform.label} 
                            width={28} 
                            height={28} 
                            className="rounded"
                          />
                          {platform.label}
                        </Link>
                      ))}
                    </div>
                  )}

                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <button 
          onClick={scrollToContact}
          className="bg-[#6EED88] px-6 py-2 rounded-lg font-semibold text-sm hover:bg-[#5dd477]"
        >
          Connect with us →
        </button>

      </nav>
    </header>
  );
}
