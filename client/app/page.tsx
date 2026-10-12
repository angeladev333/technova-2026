"use client";

import { useState } from "react";

// Layers exported from Figma frame 81:74, in stacking order. x/y/w are frame pixels.
const FRAME_WIDTH = 1512;
const BACKGROUND_LAYERS = [
  { src: "bg", x: 0, y: 0, w: 1512 },
  { src: "saturn", x: 0, y: 0, w: 759.93 },
  { src: "star-small", x: 978.05, y: 902.05, w: 87.9 },
  { src: "big-star", x: 0, y: 0, w: 1512 },
  { src: "pink-planet", x: 152.9, y: 511.9, w: 1641.64 },
  { src: "star-med-1", x: 0, y: 395.63, w: 819.71 },
  { src: "star-med-2", x: 0, y: 0, w: 853.26 },
  { src: "star-med-3", x: 686.09, y: 0, w: 825.91 },
  { src: "star-med-5", x: 596.16, y: 0, w: 580.02 },
  { src: "star-med-6", x: 28.16, y: 1326.16, w: 580.02 },
  { src: "green-planet", x: 0, y: 1780.21, w: 737.67 },
];

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <main
      className="relative w-full overflow-hidden bg-[#111c4c]"
      style={{ height: "182.6vw" }}
    >
      {/* ===== Background Layer ===== */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {BACKGROUND_LAYERS.map(({ src, x, y, w }) => (
          <img
            key={src}
            src={`/images/${src}.svg`}
            alt=""
            style={{
              position: "absolute",
              left: `${(x / FRAME_WIDTH) * 100}%`,
              top: `${(y / FRAME_WIDTH) * 100}vw`,
              width: `${(w / FRAME_WIDTH) * 100}%`,
              maxWidth: "none",
            }}
          />
        ))}

        {/* Coming soon shadow ellipse */}
        <img
          src="/images/coming-soon-shadow.svg"
          alt=""
          style={{
            position: "absolute",
            left: "46.2%",
            top: "123.9vw",
            width: "52%",
          }}
        />
      </div>

      {/* ===== Content Layer ===== */}
      <div className="relative z-10">
        {/* Logo — top right */}
        <img
          src="/images/logo.svg"
          alt="TechNova Logo"
          className="absolute"
          style={{ right: "2.3%", top: "2.6vw", width: "5.8%" }}
        />

        {/* Title section */}
        <div className="absolute" style={{ left: "6.8%", top: "26.4vw" }}>
          <h1
            className="leading-[0.94]"
            style={{
              fontFamily: "var(--font-righteous)",
              fontSize: "clamp(36px, 9.6vw, 145px)",
              background:
                "linear-gradient(180deg, #ffffff 0%, #ffffff 30%, #dfc5ee 55%, #c9a0e3 75%, #B782DB 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.4))",
            }}
          >
            TechNova 6
          </h1>

          <p
            className="text-white"
            style={{
              fontFamily: "var(--font-josefin)",
              fontSize: "clamp(14px, 3.2vw, 48px)",
              marginTop: "1.5vw",
            }}
          >
            January 22nd-24th, 2026
          </p>

          <p
            className="text-white"
            style={{
              fontFamily: "var(--font-josefin)",
              fontSize: "clamp(12px, 2.6vw, 40px)",
              marginTop: "7.3vw",
            }}
          >
            Subscribe for more updates coming soon!
          </p>

          <div className="flex" style={{ gap: "1vw", marginTop: "1.2vw" }}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-[8px] text-black/80 bg-white"
              style={{
                width: "clamp(120px, 33vw, 500px)",
                height: "clamp(28px, 3.2vw, 49px)",
                fontSize: "clamp(10px, 1.8vw, 27px)",
                fontFamily: "var(--font-josefin)",
                padding: "0 1vw",
                boxShadow: "inset -2px 3px 5px rgba(0,0,0,0.25)",
              }}
            />
            <button
              className="rounded-[8px] bg-[#11a3ba] text-white font-normal flex items-center justify-center cursor-pointer hover:bg-[#0e8fa3] transition-colors"
              style={{
                width: "clamp(50px, 8vw, 121px)",
                height: "clamp(28px, 3.2vw, 49px)",
                fontSize: "clamp(10px, 1.8vw, 27px)",
                fontFamily: "var(--font-josefin)",
                boxShadow: "2.66px 2.66px 2.7px rgba(0,0,0,0.25)",
              }}
            >
              JOIN
            </button>
          </div>
        </div>

        {/* Website coming soon text */}
        <p
          className="absolute text-white whitespace-nowrap"
          style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "clamp(18px, 4.2vw, 64px)",
            left: "51%",
            top: "126vw",
          }}
        >
          Website coming soon!
        </p>
      </div>
    </main>
  );
}
