"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, Loader2, Sparkles, ShieldCheck } from "lucide-react";

export default function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mvzdragw", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="waitlist" className="relative py-20 bg-[#000000] overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#9D4EDD] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[760px] mx-auto px-4 sm:px-5">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[1.75rem] p-5 sm:p-8 border-white/5 relative bg-[#0A0A0B]/80 backdrop-blur-3xl overflow-hidden shadow-2xl"
        >
          {/* Top Shimmer border */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#9D4EDD]/40 to-transparent" />

          {/* Header */}
          <div className="text-center mb-9">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9D4EDD]/10 border border-[#9D4EDD]/20 text-[#E0B6FF] mb-5"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">Priority Access Open</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 font-heading text-white tracking-tight">
              Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5E2E3] to-[#998D9E]">Waitlist</span>
            </h2>
            <p className="text-[#D0C2D5] text-sm sm:text-base font-light max-w-2xl mx-auto">
              Secure your spot for the next generation of voice intelligence. Early adopters receive priority onboarding.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">You&apos;re on the list!</h3>
                <p className="text-[#D0C2D5]">We&apos;ll reach out soon with your priority access link.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-sm text-[#9D4EDD] hover:underline cursor-pointer"
                >
                  Send another application
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-[#998D9E] ml-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="form-input bg-white/[0.03] border-white/10 focus:border-[#9D4EDD]/50 focus:bg-white/[0.05]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-[#998D9E] ml-1">Work Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@company.com"
                      className="form-input bg-white/[0.03] border-white/10 focus:border-[#9D4EDD]/50 focus:bg-white/[0.05]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-[#998D9E] ml-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+1 (555) 000-0000"
                      className="form-input bg-white/[0.03] border-white/10 focus:border-[#9D4EDD]/50 focus:bg-white/[0.05]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="industry" className="text-xs font-bold uppercase tracking-widest text-[#998D9E] ml-1">Business Type</label>
                    <select
                      id="industry"
                      name="industry"
                      required
                      className="form-select bg-white/[0.03] border-white/10 focus:border-[#9D4EDD]/50 focus:bg-white/[0.05]"
                    >
                      <option value="">Select your industry</option>
                      <option value="logistics">Logistics & Supply Chain</option>
                      <option value="realestate">Real Estate</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.005 }}
                  whileTap={{ scale: 0.99 }}
                  disabled={status === "submitting"}
                  type="submit"
                  className="w-full h-12 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white font-bold text-base shadow-xl shadow-purple-500/20 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    <>
                      Reserve My Spot
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>

                {/* Scarcity / Trust Indicators */}
                <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8">
                  <div className="flex items-center gap-2 text-[#998D9E] text-[10px] sm:text-xs">
                    <ShieldCheck className="w-4 h-4 text-green-500/50" />
                    <span>Your data is encrypted & secure</span>
                  </div>
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-xs text-center mt-4">Something went wrong. Please try again or email us.</p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
