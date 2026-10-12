"use client";

import { useState } from "react";

// Layers exported from Figma frame 81:74, in stacking order. x/y/w are frame pixels.
const FRAME_WIDTH = 1512;
const fx = (px: number) => `${(px / FRAME_WIDTH) * 100}vw`;
const BACKGROUND_LAYERS = [
  { src: "bg", x: 0, y: 0, w: 1512 },
  { src: "saturn", x: 0, y: 0, w: 759.93 },
  { src: "star-small", x: 978.05, y: 902.05, w: 87.9 },
  // Raised 180px above its Figma spot so the star's core clears the pink planet.
  { src: "big-star", x: 0, y: -425.02 - 180, w: 1512 },
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

        {/* Title, date, subscribe form — Figma nodes 81:160 and 162:13 */}
        <h1
          className="absolute whitespace-nowrap"
          style={{
            left: fx(103),
            top: fx(399),
            fontFamily: "var(--font-righteous)",
            fontSize: fx(145),
            lineHeight: 0.941,
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
          className="absolute text-white whitespace-nowrap"
          style={{
            left: fx(111),
            top: fx(558),
            fontFamily: "var(--font-josefin)",
            fontSize: fx(48),
            lineHeight: 0.941,
          }}
        >
          January 22nd-24th, 2026
        </p>

        <p
          className="absolute text-white whitespace-nowrap"
          style={{
            left: fx(113),
            top: fx(714),
            fontFamily: "var(--font-josefin)",
            fontSize: fx(40),
            lineHeight: 0.941,
          }}
        >
          Subscribe for more updates coming soon!
        </p>

        <input
          type="email"
          placeholder="Email"
          aria-label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="absolute bg-white text-black/80 placeholder:text-black/[0.32] outline-none"
          style={{
            left: fx(113),
            top: fx(770),
            width: fx(750),
            height: fx(73),
            borderRadius: fx(13),
            padding: `${fx(23)} ${fx(19)} ${fx(16)}`,
            fontFamily: "var(--font-josefin)",
            fontSize: fx(40),
            lineHeight: 0.941,
            boxShadow: "inset -3px 5px 7.7px rgba(0,0,0,0.25)",
          }}
        />
        <button
          className="absolute flex items-center justify-center bg-[#11a3ba] text-white cursor-pointer hover:bg-[#0e8fa3] transition-colors"
          style={{
            left: fx(897),
            top: fx(770),
            width: fx(182),
            height: fx(73),
            borderRadius: fx(13),
            padding: `${fx(23)} ${fx(21)} ${fx(16)}`,
            fontFamily: "var(--font-josefin)",
            fontSize: fx(40),
            lineHeight: 0.941,
            filter: "drop-shadow(4px 4px 4.05px rgba(0,0,0,0.25))",
          }}
        >
          JOIN
        </button>

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
