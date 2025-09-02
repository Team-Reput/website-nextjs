"use client";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

const pages = [
  { id: 1, color: "bg-red-500" },
  { id: 2, color: "bg-blue-500" },
  { id: 3, color: "bg-green-500" },
  { id: 4, color: "bg-yellow-500" },
  { id: 5, color: "bg-purple-500" },
];

function Page({
  index,
  color,
  scrollYProgress,
  total,
}: {
  index: number;
  color: string;
  scrollYProgress: MotionValue<number>;
  total: number;
}) {
  const start = index / total;
  const end = (index + 1) / total;

  const y = useTransform(scrollYProgress, [start, end], ["100%", "0%"]);
  const rotateX = useTransform(scrollYProgress, [start, end], [60, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

  return (
    <motion.section
      className={`h-screen w-full flex items-center justify-center ${color} absolute top-0 left-0`}
      style={{
        y,
        rotateX,
        scale,
        opacity,
        transformStyle: "preserve-3d",
        zIndex: total - index,
      }}
    >
      <h1 className="text-5xl font-bold text-white">Page {index + 1}</h1>
    </motion.section>
  );
}

export default function Whyreput() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  return (
    <div
      ref={containerRef}
      className="h-screen w-full overflow-y-scroll relative"
      style={{ perspective: "1200px" }}
    >
      {pages.map((page, i) => (
        <Page
          key={page.id}
          index={i}
          color={page.color}
          scrollYProgress={scrollYProgress}
          total={pages.length}
        />
      ))}
    </div>
  );
}
