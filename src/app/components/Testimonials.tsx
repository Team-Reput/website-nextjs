"use client";
// import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Testimonial {
  img: string;
  text: string;
  name: string;
  company: string;
}

const testimonials: Testimonial[] = [
  // {
  //   img: "/devon.png",
  //   text: "RePut helped us trace over 60% of our raw materials in less than 3 months, with full verification. Their team understands both the tech and the real-world problems of sustainability.",
  //   name: "Mr.Devon Lane",
  //   company: "Mr. Sri, Business Head, Eurotex BTP",
  // },
  {
    img: "/devon.png",
    text: "Thanks to RePut’s comprehensive mapping tools, we’ve achieved unprecedented transparency in our supply chain, bolstering consumer trust.",
    name: "Mr. Sri, Business Head",
    company: "Eurotex BTP",
  },
  {
    img: "/devon.png",
    text: "Partnering with RePut.ai has been transformative for us. Their innovative solutions and outstanding customer service have greatly improved our operational efficiency and customer satisfaction. From start to current, their professionalism and expertise shone through.",
    name: "Mr. Vijay Bhaskar",
    company: "Orkla India Private Limited",
  },
  {
    img: "/devon.png",
    text: "With RePut's platform, we’ve optimized inventory management, cutting excess stock by 15%.They have also been able to show us the clear composition of the product and thereby increasing the productivity.",
    name: "Mr. Manish Kumar",
    company: "Kumar Organics Ltd",
  },
  {
    img: "/devon.png",
    text: "RePut solution empowered us to trace raw materials and to bring transparency in our network.",
    name: "Mr. Srihari",
    company: "Molekule",
  },
];

export default function Testimonials(){
return (
    <div className="w-full bg-white">
      <h3 className="text-center text-green-700 font-medium">Testimonials</h3>
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-8">
        Appreciated by brands world wide
      </h2>

      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={20}
        slidesPerView={1}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className=" max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center md:items-start gap-6 bg-green-50 p-6 rounded-md relative">
              
              {/* Left Image with Button */}
              {/* <div className="relative w-full md:w-1/3 flex-shrink-0">
                <Image
                  src={t.img}
                  alt={t.name}
                  width={150}
                  height={150}
                  className="rounded-lg object-cover"
                />
 
              </div> */}

              {/* Right Text */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-gray-700 mb-4">{t.text}</p>
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-600">{t.company}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

