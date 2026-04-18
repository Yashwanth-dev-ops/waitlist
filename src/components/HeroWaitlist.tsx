"use client";

import { useEffect, useState, useRef } from "react";

const features = [
  {
    title: "Zero Latency",
    description: "Sub-second edge processing for human-like conversational fluidity.",
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    title: "Custom RAG",
    description: "Strict grounding on your enterprise data. Zero hallucinations.",
    colSpan: "col-span-1",
  },
  {
    title: "Native CRM Sync",
    description: "Bi-directional integration with Salesforce, Hubspot, and more.",
    colSpan: "col-span-1 md:col-span-3",
  }
];

export default function HeroWaitlist() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    audioRef.current = new Audio('/ElevenLabs_2026-04-18T18_43_46_Rachel_pvc_sp100_s50_sb75_se0_b_m2.mp3');
    
    audioRef.current.addEventListener("ended", () => setIsPlaying(false));
    
    return () => {
      audioRef.current?.removeEventListener("ended", () => setIsPlaying(false));
      audioRef.current?.pause();
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Welcome to the Voxera AI early access list.");
  };

  return (
    <section className="relative min-h-screen pt-32 pb-24 flex flex-col items-center overflow-hidden selection:bg-[#9D4EDD] selection:text-white">
      {/* Deep Obsidian Background & Neon Ambient Glows */}
      <div className="absolute inset-0 bg-[#0A0A0C] -z-20" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#9D4EDD] opacity-[0.03] blur-[150px] -z-10 rounded-full" />
      <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(157,78,221,0.2)] to-transparent" />

      <div className="max-w-5xl mx-auto px-6 w-full animate-reveal-up" style={{ animationDelay: "0.1s" }}>
        
        {/* UPPER HERO: Text + Audio Hook side-by-side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Left Column: Headline & Form */}
          <div className="flex flex-col gap-8">
            <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-black leading-[1.05] tracking-[-0.03em] font-heading text-[#e5e2e3]">
              AI Voice Agents That Close.{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#e0b6ff] to-[#9D4EDD]">
                While You Sleep.
              </span>
            </h1>
            
            <p className="text-lg text-[#d0c2d5] max-w-lg leading-relaxed font-light">
              We build hyper-realistic, latency-free voice agents that handle inbound, outbound, and customer support round the clock.
            </p>

            <form onSubmit={handleWaitlistSubmit} className="flex flex-col gap-4 max-w-md w-full relative mt-4">
              <div className="relative group">
                {/* Glowing border effect container */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-[#9D4EDD] to-[#e0b6ff] rounded-2xl opacity-0 group-hover:opacity-30 transition duration-500 blur-sm"></div>
                <div className="relative flex items-center bg-[#131314] rounded-2xl border border-[rgba(157,78,221,0.2)] p-2 backdrop-blur-xl">
                  <input 
                    type="email" 
                    placeholder="name@company.com" 
                    required
                    className="w-full bg-transparent border-none text-white px-4 py-3 focus:outline-none placeholder:text-[#4d4353]"
                  />
                  <button 
                    type="submit"
                    className="shrink-0 bg-gradient-to-r from-[#e0b6ff] to-[#9D4EDD] text-[#2e004e] font-bold px-6 py-3 rounded-xl hover:scale-[1.02] shadow-[0_0_20px_rgba(157,78,221,0.3)] transition-all animate-glow-pulse"
                  >
                    Request Access
                  </button>
                </div>
              </div>
              <p className="text-xs text-[#4d4353] font-mono tracking-widest uppercase ml-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#9D4EDD] animate-pulse"></span>
                Join 3,400+ forward-thinking agencies
              </p>
            </form>
          </div>

          {/* Right Column: The Audio Hook */}
          <div className="relative w-full aspect-square max-w-[400px] mx-auto lg:ml-auto">
            {/* Soft backdrop for the player */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#201f20] to-[#0e0e0f] rounded-full blur-2xl opacity-50 border border-[rgba(255,255,255,0.05)]"></div>
            
            {/* Central Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
               <button 
                onClick={togglePlay}
                className="w-24 h-24 rounded-full bg-gradient-to-br from-[#e0b6ff] to-[#9D4EDD] flex items-center justify-center hover:scale-105 transition-transform text-[#2e004e] shadow-[0_0_40px_rgba(157,78,221,0.4)]"
              >
                {isPlaying ? (
                  <div className="w-8 h-8 flex gap-2 justify-center items-center">
                    <div className="w-2 h-8 bg-current rounded-sm"></div>
                    <div className="w-2 h-8 bg-current rounded-sm"></div>
                  </div>
                ) : (
                  <svg className="w-10 h-10 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Circular Waveform Visualizer */}
            <div className="absolute inset-0 border border-[rgba(157,78,221,0.1)] rounded-full animate-[spin_20s_linear_infinite]">
              {Array.from({ length: 40 }).map((_, i) => {
                const rotation = (i * 360) / 40;
                // Deterministic math for hydration stability
                const height = isPlaying ? 20 + Math.abs(Math.sin(i * 0.5)) * 60 : 5;
                return (
                  <div 
                    key={i}
                    className="absolute top-1/2 left-1/2 w-1 rounded-full bg-gradient-to-t from-[#9D4EDD] to-[#e0b6ff] origin-bottom transition-all duration-150"
                    style={{
                      height: `${height}px`,
                      transform: `rotate(${rotation}deg) translateY(-140px)`,
                      opacity: isPlaying ? 0.8 : 0.2
                    }}
                  />
                )
              })}
            </div>
            {/* Label */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono text-[#9D4EDD] tracking-widest uppercase whitespace-nowrap">
              LIVE AI DEMO
            </div>
          </div>
        </div>

        {/* LOWER SECTION: Bento Grid */}
        <div className="mt-20 border-t border-[rgba(255,255,255,0.05)] pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className={`glass-bento rounded-3xl p-8 relative overflow-hidden group ${feature.colSpan}`}
              >
                {/* Hover Shimmer Line top */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#9D4EDD] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <h3 className="text-2xl font-bold text-[#e5e2e3] mb-3">{feature.title}</h3>
                <p className="text-[#a199a5] leading-relaxed max-w-sm">{feature.description}</p>
                
                {/* Decorative corner accent */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#9D4EDD] opacity-0 group-hover:opacity-[0.05] blur-[20px] transition-opacity duration-700 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
