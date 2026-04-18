"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, Mic2 } from "lucide-react";

export default function AudioDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(32); 
  const audioRef = useRef<HTMLAudioElement>(null);

  const bars = Array.from({ length: 40 }, (_, i) => {
    const seed = Math.sin(i * 0.5) * 0.5 + 0.5;
    return 20 + seed * 60;
  });

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((err) => {
          console.error("Audio play failed:", err);
        });
      }
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setProgress(value);
    if (audioRef.current && Number.isFinite(audioRef.current.duration)) {
      audioRef.current.currentTime = (value / 100) * audioRef.current.duration;
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const currentTime = (progress / 100) * duration;

  return (
    <section id="demo" className="relative py-24 bg-[#000000]">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent-purple mb-4 block">
              Experience the Sound
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 font-heading text-white">
              Hear the AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0B6FF] to-[#9D4EDD]">in Action</span>
            </h2>
            <p className="text-[#D0C2D5] text-base sm:text-lg font-light">
              Listen to how natural our AI voice agent sounds on a real customer call.
            </p>
          </motion.div>
        </div>

        {/* Audio Player Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-[2rem] p-5 sm:p-10 relative overflow-hidden group border-white/5"
          style={{ background: "rgba(10, 10, 12, 0.6)" }}
        >
          {/* Internal Glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#9D4EDD]/10 blur-[100px] -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3B82F6]/10 blur-[100px] -z-10" />

          {/* Caller info */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E0B6FF] to-[#9D4EDD] flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
              <Mic2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-lg font-bold text-white">Voxera AI Assistant</p>
              <p className="text-xs text-[#998D9E] tracking-wide uppercase">Logistics Automation Demo</p>
            </div>
            <div className="ml-auto flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <div className={`w-2 h-2 rounded-full ${isPlaying ? "bg-green-400 animate-pulse shadow-[0_0_8px_#4ade80]" : "bg-white/20"}`} />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#D0C2D5]">{isPlaying ? "Live" : "Ready"}</span>
            </div>
          </div>

          {/* Waveform Visualization */}
          <div className="flex items-end justify-center gap-[4px] h-20 sm:h-24 mb-8">
            {bars.map((height, i) => {
              const isActive = (i / bars.length) * 100 <= progress;
              return (
                <motion.div
                  key={i}
                  animate={{ 
                    height: isPlaying && isActive 
                      ? [`${height}%`, `${height * 1.5}%`, `${height * 0.7}%`, `${height}%`] 
                      : `${height}%`
                  }}
                  transition={{ 
                    duration: 0.5, 
                    repeat: Infinity,
                    delay: i * 0.05
                  }}
                  className="w-[4px] rounded-full transition-colors duration-300"
                  style={{
                    background: isActive
                      ? "linear-gradient(to top, #9D4EDD, #E0B6FF)"
                      : "rgba(255, 255, 255, 0.05)",
                  }}
                />
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            {/* Play Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              onClick={togglePlay}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E0B6FF] to-[#9D4EDD] flex items-center justify-center text-white shadow-2xl shadow-purple-500/40 cursor-pointer shrink-0"
            >
              <AnimatePresence mode="wait">
                {isPlaying ? (
                  <motion.div key="pause" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.2 }}>
                    <Pause className="w-8 h-8 fill-current" />
                  </motion.div>
                ) : (
                  <motion.div key="play" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.2 }}>
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Slider & Timing */}
            <div className="flex-1 w-full space-y-4">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleSeek}
                className="audio-progress w-full accent-[#9D4EDD]"
                style={{
                  background: `linear-gradient(to right, #9D4EDD 0%, #E0B6FF ${progress}%, rgba(255,255,255,0.05) ${progress}%)`,
                }}
              />
              <div className="flex justify-between items-center text-xs font-mono text-[#998D9E] tracking-widest">
                <span className="flex items-center gap-2"><Volume2 className="w-4 h-4" /> {formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>

          {/* Updated Transcript */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 p-5 rounded-2xl bg-white/[0.02] border border-white/5"
          >
            <p className="text-sm sm:text-base text-[#D0C2D5] font-light leading-relaxed italic">
              &ldquo;Hello, this is Rahul from Voxera AI. I see you&apos;re
              interested in our logistics automation solution. I&apos;d love to
              help you understand how we can handle your after-hours calls.
              How can I help you today?&rdquo;
            </p>
          </motion.div>

          <audio ref={audioRef} preload="auto">
            <source src="/demo-call.mp3" type="audio/mpeg" />
          </audio>
        </motion.div>
      </div>
    </section>
  );
}
