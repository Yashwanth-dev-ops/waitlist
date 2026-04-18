"use client";

import { useEffect, useRef } from "react";

export default function Proof() {
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
      { threshold: 0.2 }
    );

    const items = sectionRef.current?.querySelectorAll(".reveal");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="proof" className="relative py-16 sm:py-24" ref={sectionRef}>
      {/* Subtle divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-purple">
            Real Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 font-heading">
            Proof It <span className="gradient-text-static">Works</span>
          </h2>
        </div>

        {/* Proof Card */}
        <div className="reveal relative">
          <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            {/* Background gradient glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent-purple/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent-blue/10 rounded-full blur-3xl" />

            {/* Top accent line */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent" />

            <div className="relative z-10">
              {/* Quote mark */}
              <div className="text-6xl text-accent-purple/20 font-serif leading-none mb-4">
                &ldquo;
              </div>

              {/* Quote */}
              <blockquote className="text-xl sm:text-2xl font-medium text-white leading-relaxed mb-10 max-w-3xl">
                A logistics company missing{" "}
                <span className="stat-number text-2xl sm:text-3xl">30%</span>{" "}
                of calls automated{" "}
                <span className="stat-number text-2xl sm:text-3xl">100%</span>{" "}
                of them and converted{" "}
                <span className="stat-number text-2xl sm:text-3xl">18%</span>{" "}
                into paying customers.
              </blockquote>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-white/5">
                <div className="text-center">
                  <div className="stat-number text-3xl sm:text-4xl font-bold mb-1">
                    30%
                  </div>
                  <p className="text-xs sm:text-sm text-text-muted">
                    Calls Previously Missed
                  </p>
                </div>
                <div className="text-center">
                  <div className="stat-number text-3xl sm:text-4xl font-bold mb-1">
                    100%
                  </div>
                  <p className="text-xs sm:text-sm text-text-muted">
                    Now Automated
                  </p>
                </div>
                <div className="text-center">
                  <div className="stat-number text-3xl sm:text-4xl font-bold mb-1">
                    18%
                  </div>
                  <p className="text-xs sm:text-sm text-text-muted">
                    Converted to Revenue
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
