"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Grounded Responses",
    subtitle: "Zero Hallucinations",
    description:
      "Custom RAG pipelines ensure the AI responds only from your verified business data. Every answer is grounded in facts — nothing made up, ever.",
    gradient: "from-accent-purple/20 to-accent-purple/5",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Ultra-Low Latency",
    subtitle: "<1 Second Response",
    description:
      "Our edge-optimized architecture delivers sub-second response times. Conversations feel natural because there's virtually zero delay.",
    gradient: "from-accent-blue/20 to-accent-blue/5",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-4.487a4.5 4.5 0 00-6.364-6.364L4.5 6.5l4.5 4.5m5.25-1.5l-1.5 1.5" />
      </svg>
    ),
    title: "Seamless Integration",
    subtitle: "Connect Everything",
    description:
      "Direct sync with your CRM, databases, and internal tools via custom APIs. Plug into your existing workflow without disruption.",
    gradient: "from-purple-500/20 to-blue-500/5",
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll(".reveal");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="relative py-16 sm:py-24" ref={sectionRef}>
      {/* Subtle divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-blue">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 font-heading">
            Why Choose{" "}
            <span className="gradient-text-static">Voxera?</span>
          </h2>
          <p className="text-text-secondary max-w-md mx-auto">
            Enterprise-grade AI voice technology built for businesses that
            can&apos;t afford to miss a single call.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <div
              key={i}
              className="reveal glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden group cursor-default"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Top gradient accent */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
              />

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-purple/10 to-accent-blue/10 border border-white/5 flex items-center justify-center text-accent-purple mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>

              {/* Badge */}
              <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-accent-purple bg-accent-purple/10 px-3 py-1 rounded-full mb-4">
                {feature.subtitle}
              </span>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
