"use client";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import Image from "next/image";
import { useContact } from "../../../components/ContactContext";
import { useRouter } from "next/navigation"; 



export default function Trace() {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
          const { scrollToContact } = useContact();


  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollSpring = useSpring({
    transform: windowHeight > 0 ? `scale(${1 + scrollY / windowHeight / 2})` : "scale(1)",
    opacity: windowHeight > 0 ? Math.min(1, scrollY / windowHeight) : 1,
    translateY:
      windowHeight > 0 ? (scrollY > windowHeight ? `${scrollY - windowHeight}px` : "0px") : "0px",
  });

  const scrollSpringThirdSection = useSpring({
    transform:
      windowHeight > 0
        ? scrollY > windowHeight * 2
          ? "scale(1)"
          : `scale(${1 + (scrollY - windowHeight) / windowHeight / 3})`
        : "scale(1)",
    opacity:
      windowHeight > 0
        ? scrollY > windowHeight * 2
          ? 1
          : Math.min(1, (scrollY - windowHeight) / windowHeight)
        : 1,
    translateY:
      windowHeight > 0 ? (scrollY > windowHeight * 2 ? "0px" : `${scrollY - windowHeight}px`) : "0px",
  });

  const scrollSpringOurPlatform = useSpring({
    opacity: windowHeight > 0 ? (scrollY > windowHeight ? 1 : Math.min(1, scrollY / windowHeight)) : 1,
  });

    const router = useRouter();
  

  return (
    <div className="font-sans leading-relaxed overflow-x-hidden">
      {/* First Section */}
      <section className="h-screen relative overflow-hidden bg-gray-100">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 text-center text-2xl">
          <div className="flex items-center justify-center ml-33 mb-5 bg-white rounded-[25px] px-2 py-1 w-70   outline-2 outline-gray-200">
            {/* <Image src="/rocket-icon.png" alt="Rocket Icon" width={20} height={20} /> */}
            <p className="ml-2 text-black text-lg">AI Powered Technology</p>
          </div>
          <h1 className=" mb-4 text-[#29442C] text-[56px] font-semibold">TraceChain</h1>
          <p className="text-lg mb-4 text-[#071030] text-[18px] font-bold">Trace Every Tier, Every Time</p>
          <span className="block w-[34em] text-[16px] mb-5 text-[#071030]  ">
            Build a digital twin of your supply chain for full, real-time visibility and end-to-end traceability.
          </span>
          <button onClick={scrollToContact}  className="px-5 py-2 text-white bg-[#29442C] rounded hover:bg-[#29442cd5] transition">
            Request a demo
          </button>
        </div>
        <div className="w-full h-1/2 flex justify-center items-center mt-[30em]">
          <Image src="/scroll-trace.png" alt="TraceChain" width={800} height={600} className="w-full h-3/5 object-cover" />
        </div>
      </section>

      {/* Second Section */}
      <section className="h-screen flex justify-center items-center relative overflow-hidden">
        <animated.div style={scrollSpring} className="flex justify-center items-center w-full h-full">
          <Image src="/scroll-trace.png" alt="TraceChain" width={800} height={600} className="w-[69%] h-[65%] object-contain transition-all duration-1000 ease-out" />
        </animated.div>
      </section>

      {/* Third Section */}
      <section className="h-screen flex justify-center items-center bg-gray-50">
        <animated.div style={scrollSpringThirdSection} className="flex justify-center items-center w-full h-full">
          <Image src="/tracechain-bg.png" alt="TraceChain" width={1200} height={800} className="w-full h-auto object-cover" />
        </animated.div>
      </section>

      {/* Fourth Section */}
      <section className="h-screen flex justify-center items-center bg-gray-50">
        <div className="relative left-1/4 -translate-x-1/2 text-2xl text-[#29442C]">
          <h1 className="text-[16px] mb-4 text-[#29442C] rounded-[40px] w-[100px] px-2  outline-1 outline-[#29442C]">
            TraceChain
          </h1>
          <h5 className="mb-4 text-[24px]">Trace Every Tier, Every Time</h5>
          {/* <p className="text-base w-[34em] mb-4 text-[16px]">
             Build a complete digital twin of your supply chain — from raw materials to the nᵗʰ tier. Our platform gives you full visibility into every supplier, enabling you to track production in real time, assess performance, and manage resource allocation with precision. Detect issues early, make informed decisions faster, and strengthen supply chain resilience through transparent, end-to-end traceability.
          </p> */}
          <p className="text-base w-[34em] mb-4 text-[16px]">
            Trace Every Tier, Every Time
Build a complete digital twin of your supply chain — from raw materials to the nᵗʰ tier. Our platform gives you full visibility into every supplier, enabling you to track production in real time, assess performance, and manage resource allocation with precision. Detect issues early, make informed decisions faster, and strengthen supply chain resilience through transparent, end-to-end traceability.
Why TraceChain?
Consumer Trust & Transparency – Strengthen brand reputation by proving product authenticity and offering full traceability from source to shelf.
AI-Driven Intelligence – Predict disruptions before they occur and gain proactive insights into supply chain risks.
Sustainability & Compliance – Track ESG metrics across suppliers and ensure alignment with global reporting standards.
Cost & Risk Optimization – Reduce inefficiencies, manage risks, and improve supplier performance with data-backed decisions.
Seamless Integration – Connect effortlessly with ERP and procurement systems, creating a scalable, future-ready supply chain.
          </p>
        </div>
        <div className="flex justify-center items-center w-full h-full">
          <Image src="/section-4.png" alt="TraceChain" width={1000} height={800} className="w-[75%] h-[75%] object-cover transition-all duration-1000 ease-out" />
        </div>
      </section>

      {/* Our Platform */}
      <section className="text-center py-12 bg-gradient-to-b from-[#29442C] to-white">
        <div className="flex justify-between items-center mb-8 text-white px-5">
          <div className="flex items-center bg-white rounded-[25px] p-1 pr-2">
            {/* <Image src="/rocket-icon.png" alt="Rocket Icon" width={20} height={20} /> */}
            <p className="ml-2 text-black text-lg">RePut.ai</p>
          </div>
          <h2 className="text-4xl ml-2 font-bold">Our Platform</h2>
        </div>
        <div className="flex  justify-center">
          <animated.div style={scrollSpringOurPlatform} className="w-[27%] text-center">
            <Image onClick={() => router.push(`/platform/circle`)} src="/reput-circle.png" alt="RePut Circle" width={100} height={100} className="w-4/5 rounded-lg" />
            <h3 className="mt-2 text-lg text-black  mr-15  font-bold">RePut Circle</h3>
          </animated.div>
          <animated.div style={scrollSpringOurPlatform} className="w-[27%] text-center">
            <Image onClick={() => router.push(`/platform/zerocarbon`)} src="/zero-carbon.png" alt="Zero Carbon" width={200} height={200} className="w-4/5 rounded-lg" />
            <h3 className="mt-2 text-lg text-black  mr-15  font-bold">Zero Carbon</h3>
          </animated.div>
          {/* <animated.div style={scrollSpringOurPlatform} className="w-[27%] text-center">
            <Image src="/flex-dpp.png" alt="Flex-DPP" width={200} height={200} className="w-4/5 rounded-lg" />
            <h3 className="mt-2 text-lg text-black mr-15 font-bold">Flex-DPP</h3>
          </animated.div> */}
        </div>
      </section>

      {/* Get In Touch */}
      {/* <section className="flex justify-between items-center p-12 bg-white">
        <div className="w-1/2">
          <h2 className="text-2xl mb-2">Get In Touch</h2>
          <p className="text-base mb-5">We’re here to help you elevate your business...</p>
          <form>
            <input type="text" name="name" placeholder="Enter your name" className="w-full p-2 my-2 border border-gray-300 rounded" />
            <input type="email" name="email" placeholder="e.g. johndoe@gmail.com" className="w-full p-2 my-2 border border-gray-300 rounded" />
            <textarea name="message" placeholder="Type your message..." className="w-full p-2 my-2 border border-gray-300 rounded" />
            <button type="submit" className="px-5 py-2 bg-green-600 text-white rounded mt-2">Submit</button>
          </form>
        </div>
        <div className="w-2/5">
          <Image src="/contact-us.png" alt="Contact Image" width={600} height={400} className="w-full rounded-lg" />
        </div>
      </section> */}
    </div>
  );
}






















// "use client";
// import { useEffect, useState } from "react";
// import { useSpring, animated } from "react-spring";
// import Image from "next/image";   // ✅ Import Image from next/image
// import "../componentsTraceChain/trace.css";

// export default function Trace(){
//   const [scrollY, setScrollY] = useState(0);
//   const [windowHeight, setWindowHeight] = useState(0);

//   const handleScroll = () => {
//     setScrollY(window.scrollY);
//   };

//   useEffect(() => {
//     setWindowHeight(window.innerHeight);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollSpring = useSpring({
//     transform: windowHeight > 0 ? `scale(${1 + scrollY / windowHeight / 2})` : "scale(1)",
//     opacity: windowHeight > 0 ? Math.min(1, scrollY / windowHeight) : 1,
//     translateY: windowHeight > 0 ? (scrollY > windowHeight ? `${scrollY - windowHeight}px` : "0px") : "0px",
//   });

//   const scrollSpringThirdSection = useSpring({
//     transform: windowHeight > 0
//       ? scrollY > windowHeight * 2
//         ? "scale(1)"
//         : `scale(${1 + (scrollY - windowHeight) / windowHeight / 3})`
//       : "scale(1)",
//     opacity: windowHeight > 0 ? (scrollY > windowHeight * 2 ? 1 : Math.min(1, (scrollY - windowHeight) / windowHeight)) : 1,
//     translateY: windowHeight > 0 ? (scrollY > windowHeight * 2 ? "0px" : `${scrollY - windowHeight}px`) : "0px",
//   });

//   const scrollSpringOurPlatform = useSpring({
//     opacity: windowHeight > 0 ? (scrollY > windowHeight ? 1 : Math.min(1, scrollY / windowHeight)) : 1,
//   });

//   return (
//     <div>
//       {/* First Section */}
//       <section className="sectionOne">
//         <div className="textOverlay">
//           <div className="aiicon">
//             <Image src="/rocket-icon.png" alt="Rocket Icon" width={50} height={50} className="rocket" /> {/* ✅ */}
//             <p>AI Powered Technology</p>
//           </div>
//           <h1>TraceChain</h1>
//           <p>Trace Every Tier, Every Time</p>
//           <span className="description">Build a digital twin...</span>
//           <button>Request a demo</button>
//         </div>

//         <div className="imageWrapper">
//           <Image src="/scroll-trace.png" alt="TraceChain" width={800} height={600} className="image" /> {/* ✅ */}
//         </div>
//       </section>

//       {/* Second Section */}
//       <section className="sectionTwo">
//         <animated.div style={scrollSpring} className="imageWrapperExpand">
//           <Image src="/scroll-trace.png" alt="TraceChain" width={800} height={600} className="imageExpand" /> {/* ✅ */}
//         </animated.div>
//       </section>

//       {/* Third Section */}
//       <section className="sectionThree">
//         <animated.div style={scrollSpringThirdSection} className="fullImageWrapper">
//           <Image src="/tracechain-bg.png" alt="TraceChain" width={1200} height={800} className="fullImage" /> {/* ✅ */}
//         </animated.div>
//       </section>

//       {/* Fourth Section */}
//       <section className="sectionFour">
//         <div className="textOverlay1">
//           <h1>TraceChain</h1>
//           <h5>Trace Every Tier, Every Time</h5>
//           <p>Build a complete digital twin...</p>
//         </div>

//         <div className="imageWrapperExpand">
//           <Image src="/section-4.png" alt="TraceChain" width={800} height={600} className="imageExpand" /> {/* ✅ */}
//         </div>
//       </section>

//       {/* Our Platform */}
//       <section className="ourPlatform">
//         <div className="platformTitle">
//           <div className="rocketIcon">
//             <Image src="/rocket-icon.png" alt="Rocket Icon" width={50} height={50} className="rocket" /> {/* ✅ */}
//             <p>RePut.ai</p>
//           </div>
//           <h2>Our Platform</h2>
//         </div>
//         <div className="platformItems">
//           <animated.div style={scrollSpringOurPlatform} className="platformItem">
//             <Image src="/reput-circle.png" alt="RePut Circle" width={200} height={200} /> {/* ✅ */}
//             <h3>RePut Circle</h3>
//           </animated.div>
//           <animated.div style={scrollSpringOurPlatform} className="platformItem">
//             <Image src="/zero-carbon.png" alt="Zero Carbon" width={200} height={200} /> {/* ✅ */}
//             <h3>Zero Carbon</h3>
//           </animated.div>
//           <animated.div style={scrollSpringOurPlatform} className="platformItem">
//             <Image src="/flex-dpp.png" alt="Flex-DPP" width={200} height={200} /> {/* ✅ */}
//             <h3>Flex-DPP</h3>
//           </animated.div>
//         </div>
//       </section>

//       {/* Get In Touch */}
//       <section className="getInTouch">
//         <div className="contactForm">
//           <h2>Get In Touch</h2>
//           <p>We’re here to help...</p>
//           <form>
//             <input type="text" name="name" placeholder="Enter your name" />
//             <input type="email" name="email" placeholder="e.g. johndoe@gmail.com" />
//             <textarea name="message" placeholder="Type your message..." />
//             <button type="submit">Submit</button>
//           </form>
//         </div>
//         <div className="contactImage">
//           <Image src="/contact-us.png" alt="Contact Image" width={600} height={400} /> {/* ✅ */}
//         </div>
//       </section>
//     </div>
//   );
// };

















// "use client";
// import { useEffect, useState } from "react";
// import { useSpring, animated } from "react-spring";

// const Home = () => {
//   const [scrollY, setScrollY] = useState(0);
//   const [windowHeight, setWindowHeight] = useState(0);

//   // Handle scroll event to update scrollY
//   const handleScroll = () => {
//     setScrollY(window.scrollY);
//   };

//   useEffect(() => {
//     // Set the window height once the component mounts
//     setWindowHeight(window.innerHeight);

//     // Add event listener on mount
//     window.addEventListener("scroll", handleScroll);

//     // Cleanup the event listener on component unmount
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []); // Empty dependency array ensures this effect runs only once after the initial render

//   // Scroll effect for image expansion and movement (First and Second Section)
//   const scrollSpring = useSpring({
//     transform: windowHeight > 0 ? `scale(${1 + scrollY / windowHeight / 2})` : "scale(1)", // Image expands as you scroll
//     opacity: windowHeight > 0 ? Math.min(1, scrollY / windowHeight) : 1, // Fade effect based on scroll position
//     translateY: windowHeight > 0 ? (scrollY > windowHeight ? `${scrollY - windowHeight}px` : "0px") : "0px", // Move image down
//   });

//   // Scroll effect for the transition to the Third Section
//   const scrollSpringThirdSection = useSpring({
//     transform: windowHeight > 0
//       ? scrollY > windowHeight * 2
//         ? "scale(1)"
//         : `scale(${1 + (scrollY - windowHeight) / windowHeight / 3})`
//       : "scale(1)", // Expanding image
//     opacity: windowHeight > 0 ? (scrollY > windowHeight * 2 ? 1 : Math.min(1, (scrollY - windowHeight) / windowHeight)) : 1, // Fade in image
//     translateY: windowHeight > 0 ? (scrollY > windowHeight * 2 ? "0px" : `${scrollY - windowHeight}px`) : "0px", // Keep the image transitioning smoothly
//   });

//   // Scroll effect for the transition to the Fourth Section
// //   const scrollSpringFourthSection = useSpring({
// //     transform: windowHeight > 0
// //       ? scrollY > windowHeight * 3
// //         ? "scale(1)"
// //         : `scale(${1 + (scrollY - windowHeight * 2) / windowHeight / 3})`
// //       : "scale(1)", // Expanding image
// //     opacity: windowHeight > 0 ? (scrollY > windowHeight * 3 ? 1 : Math.min(1, (scrollY - windowHeight * 2) / windowHeight)) : 1, // Fade in image
// //     translateY: windowHeight > 0 ? (scrollY > windowHeight * 3 ? "0px" : `${scrollY - windowHeight * 2}px`) : "0px", // Keep the image transitioning smoothly
// //   });

//     const scrollSpringOurPlatform = useSpring({
//       opacity: windowHeight > 0 ? (scrollY > windowHeight ? 1 : Math.min(1, scrollY / windowHeight)) : 1, // Ensure windowHeight is not 0
//     });


//   return (
//     <div>
//       {/* First Section with Scrolling Image */}
//       <section className="sectionOne">
//         <div className="textOverlay">

//             <div className="aiicon">
//               <img src="/rocket-icon.png" alt="Rocket Icon" className="rocket" />
//               <p>AI Powered Technology</p>
//             </div>
//           <h1>TraceChain</h1>
//           <p>Trace Every Tier, Every Time</p>
//           <span className="description">Build a digital twin of your supply chain for full, real-time visibility and end-to-end traceability.</span>
//           <button>Request a demo</button>
//         </div>

//         <div className="imageWrapper">
//           <img
//             src="/scroll-trace.png" // Full image path
//             alt="TraceChain"
//             className="image"
//           />
//         </div>
//       </section>

//       {/* Second Section with Expanding Image */}
//       <section className="sectionTwo">
//         <animated.div style={scrollSpring} className="imageWrapperExpand">
//           <img
//             src="/scroll-trace.png" // Same image for expanding effect
//             alt="TraceChain"
//             className="imageExpand"
//           />
//         </animated.div>
//       </section>

//       {/* Third Section with Reduced Image */}
//       <section className="sectionThree">
//         <animated.div style={scrollSpringThirdSection} className="fullImageWrapper">
//           <img
//             src="/tracechain-bg.png" // Same image for the third section, appearing larger
//             alt="TraceChain"
//             className="fullImage"
//           />
//         </animated.div>
//       </section>

//       {/* Fourth Section with New Image and Content */}
//       <section className="sectionFour">
//         <div className="textOverlay1">
//           <h1>TraceChain</h1>
//           <h5>Trace Every Tier, Every Time</h5>
//           <p>Build a complete digital twin of your supply chain — from raw materials to the nᵗʰ tier. Our platform gives you full visibility into every supplier, enabling you to track production in 
//             real time, assess performance, and manage resource allocation with precision. Detect issues early, make informed decisions faster, and strengthen supply chain resilience through transparent, end-to-end traceability.</p>
//         </div>

//         <div  className="imageWrapperExpand">
//           <img
//             src="/section-4.png" // Uploaded image used here
//             alt="TraceChain"
//             className="imageExpand"
//           />
//         </div>
//       </section>


//       {/* Our Platform Section */}
//       <section className="ourPlatform">
//         <div className="platformTitle">
//             <div className="rocketIcon">
//               <img src="/rocket-icon.png" alt="Rocket Icon" className="rocket" />
//               <p>RePut.ai</p>
//             </div>
//           <h2>Our Platform</h2>
//         </div>
//         <div className="platformItems">
//           <animated.div style={scrollSpringOurPlatform} className="platformItem">
//             <img src="/reput-circle.png" alt="RePut Circle" />
//             <h3>RePut Circle</h3>
//           </animated.div>
//           <animated.div style={scrollSpringOurPlatform} className="platformItem">
//             <img src="/zero-carbon.png" alt="Zero Carbon" />
//             <h3>Zero Carbon</h3>
//           </animated.div>
//           <animated.div style={scrollSpringOurPlatform} className="platformItem">
//             <img src="/flex-dpp.png" alt="Flex-DPP" />
//             <h3>Flex-DPP</h3>
//           </animated.div>
//         </div>
//       </section>

//       {/* Get In Touch Section */}
//       <section className="getInTouch">
//         <div className="contactForm">
//           <h2>Get In Touch</h2>
//           <p>We’re here to help you elevate your business. Reach out to us for expert guidance, tailored solutions, or any questions you may have.</p>
//           <form>
//             <input type="text" name="name" placeholder="Enter your name" />
//             <input type="email" name="email" placeholder="e.g. johndoe@gmail.com" />
//             <textarea name="message" placeholder="Type your message..." />
//             <button type="submit">Submit</button>
//           </form>
//         </div>
//         <div className="contactImage">
//           <img
//             src="/contact-us.png" // Your uploaded image path
//             alt="Contact Image"
//           />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;
