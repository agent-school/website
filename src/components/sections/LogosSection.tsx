"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Logo {
  name: string;
  id: string;
  imageUrl?: string; // Optional: Add logo image URLs here
}

const LOGOS: Logo[] = [
  { name: "MIT", id: "mit", imageUrl: "/logos/mit.png" },
  { name: "Georgia Tech", id: "georgia-tech", imageUrl: "/logos/georgia-tech.png" },
  { name: "D.E. Shaw", id: "de-shaw", imageUrl: "/logos/deshaw.png" },
  { name: "QHouse", id: "qhouse", imageUrl: "/logos/qhouse.svg" },
  { name: "MIT", id: "mit-2", imageUrl: "/logos/mit.png" }, // Duplicate for seamless loop
  { name: "Georgia Tech", id: "georgia-tech-2", imageUrl: "/logos/georgia-tech.png" },
  { name: "D.E. Shaw", id: "de-shaw-2", imageUrl: "/logos/deshaw.png" },
  { name: "QHouse", id: "qhouse-2", imageUrl: "/logos/qhouse.svg" },
];

export function LogosSection() {
  return (
    <section className="py-16 border-y border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-mono uppercase tracking-widest text-slate-500">
            Trusted by Teams From
          </p>
        </div>

        {/* Infinite Scrolling Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling Logos */}
          <motion.div
            className="flex gap-12 md:gap-16"
            animate={{
              x: [0, -50 + "%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {LOGOS.map((logo) => (
              <div
                key={logo.id}
                className="flex-shrink-0 flex items-center justify-center h-20 w-48"
              >
                {logo.imageUrl ? (
                  <div className="relative w-full h-full opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                    <Image
                      src={logo.imageUrl}
                      alt={`${logo.name} logo`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 160px, 192px"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center rounded-lg border-2 border-slate-200 bg-slate-50">
                    <span className="font-semibold text-slate-700 text-sm">
                      {logo.name}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
