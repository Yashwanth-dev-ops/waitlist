"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

const backgroundDots = Array.from({ length: 72 }, (_, index) => ({
  id: index,
  left: 2 + ((index * 17) % 96),
  top: 8 + ((index * 11) % 72),
  size: 1.5 + (index % 3),
  duration: 7 + (index % 5),
  delay: (index % 9) * 0.35,
  tint: index % 7 === 0 ? "rgba(192,132,252,0.9)" : "rgba(255,255,255,0.7)",
  blur:
    index % 7 === 0
      ? "0 0 10px rgba(192,132,252,0.55)"
      : "0 0 8px rgba(255,255,255,0.18)",
}));

export default function HeroSection() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#070508] px-5 pb-20 pt-24 sm:px-8 sm:pt-28">
      <div className="absolute inset-0 bg-[#070508]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(157,78,221,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02)_0%,transparent_18%,transparent_80%,rgba(255,255,255,0.015)_100%)]" />

      <motion.div
        animate={{ opacity: [0.2, 0.34, 0.2], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-10 h-[28rem] w-[34rem] max-w-[92vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(157,78,221,0.24)_0%,rgba(139,92,246,0.14)_34%,rgba(59,130,246,0.06)_56%,transparent_74%)] blur-[130px]"
      />
      <motion.div
        animate={{ x: ["-7%", "7%", "-7%"], opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-14 h-32 w-[74rem] max-w-[130vw] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)] blur-3xl"
      />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {backgroundDots.map((dot) => (
          <motion.span
            key={dot.id}
            animate={{
              x: [0, dot.id % 2 === 0 ? 10 : -10, 0],
              y: [0, dot.id % 3 === 0 ? -12 : 12, 0],
              opacity: [0.18, 0.7, 0.18],
              scale: [1, 1.35, 1],
            }}
            transition={{
              duration: dot.duration,
              delay: dot.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full"
            style={{
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              backgroundColor: dot.tint,
              boxShadow: dot.blur,
            }}
          />
        ))}
      </div>
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.12, 1] }}
        transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[18%] top-[42%] hidden h-2.5 w-2.5 rounded-full bg-[#c084fc] shadow-[0_0_20px_rgba(192,132,252,0.9)] lg:block"
      />
      <motion.div
        animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.08, 1] }}
        transition={{ duration: 5.1, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute right-[19%] top-[36%] hidden h-2.5 w-2.5 rounded-full bg-[#a855f7] shadow-[0_0_18px_rgba(168,85,247,0.85)] lg:block"
      />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl -translate-y-6 flex-col items-center justify-center text-center sm:-translate-y-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mb-12 inline-flex items-center overflow-hidden rounded-full border border-white/[0.08] bg-white/[0.03] px-6 py-2.5 backdrop-blur-xl"
        >
          <motion.div
            animate={{ x: ["-120%", "140%"] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.8 }}
            className="pointer-events-none absolute inset-y-0 w-16 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent)] blur-md"
          />
          <span className="relative text-[10px] font-semibold uppercase tracking-[0.34em] text-[#e2c9f4] [font-family:var(--font-space-grotesk)] sm:text-xs">
            Next-Gen Voice Intelligence
          </span>
        </motion.div>

        <div className="relative w-full overflow-visible px-4 sm:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12 }}
            className="relative overflow-visible text-[3.5rem] font-bold leading-[1.2] tracking-tight text-white sm:text-[6rem] lg:text-[7.8rem]"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            <span className="block px-4">The Future of</span>
            <span className="relative block text-[#B97FFF] px-4">
              Voice Agents
            </span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.24 }}
          className="mt-8 max-w-2xl px-4 text-base leading-[1.7] text-[#d4c0da] [font-family:var(--font-manrope)] sm:text-lg lg:text-[1.2rem]"
        >
          Automate your customer conversations with hyper-realistic AI voice
          agents that speak, reason, and close deals exactly like your top
          performers.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.28em] text-[#786a80] [font-family:var(--font-space-grotesk)]">
            Explore
          </span>
          <div className="h-10 w-px bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
