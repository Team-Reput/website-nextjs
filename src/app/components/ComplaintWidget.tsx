import Image from "next/image";

export default function ComplaintWidget() {
  return (
    <div
      className="relative"
      style={{ width: "min(50vw, 50vh)", height: "min(50vw, 50vh)" }}
    >

      <Image
        src="/complaint.png"        // put this file in /public
        alt="Forest ring"
        fill
        priority
        className="pointer-events-none select-none z-10"
        style={{
          objectFit: "contain",
          // tiny scale lets the ring sit exactly on the globe edge; tweak 0.90–0.98 if needed
          transform: "scale(0.94)",
        }}
      />
      <div className="absolute w-1/3 h-1/3 z-20"
        style={{ bottom: "-20%", right: "-20%" }}>
      <Image
        src="/EPRhome.png"        // put this file in /public
        alt="Forest ring"
        fill
        priority
        className="pointer-events-none select-none z-10"
        style={{
          objectFit: "contain",
          // tiny scale lets the ring sit exactly on the globe edge; tweak 0.90–0.98 if needed
          transform: "scale(0.94)",
        }}
      />
      </div>
    </div>
  );
}
