"use client";

import { motion } from "framer-motion";
import { Database, MessageSquare, Cloud, Zap } from "lucide-react";

const services = [
  {
    icon: <Database className="w-8 h-8" />,
    title: "Live Database Sync",
    description: "We connect the AI to your live software orchestration. Interaction is real-time and context-aware—no static PDFs or outdated documentation.",
    badge: "Real-time"
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "WhatsApp Automation",
    description: "Multi-channel follow-up built in. The AI continues the conversation on WhatsApp automatically, ensuring zero lead abandonment.",
    badge: "Social Sync"
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Private Cloud",
    description: "Enterprise-grade security. We deploy and manage your AI infrastructure on isolated AWS or Azure environments to keep customer data 100% secure.",
    badge: "Secure"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "100% Done-For-You",
    description: "From strategy to deployment, we handle every technical detail. You don't lift a finger—just wake up to a calendar full of qualified leads.",
    badge: "Managed"
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-[#000000] overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-accent-purple mb-4 block">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-heading text-white">
              Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0B6FF] to-[#9D4EDD]">High-Impact</span> Teams
            </h2>
            <p className="text-[#D0C2D5] text-lg max-w-2xl mx-auto font-light leading-relaxed">
              We go beyond simple voice calls. We build the full automation engine that powers your business growth.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-8 rounded-3xl border border-white/5 relative group h-full"
              style={{ background: "rgba(10, 10, 12, 0.4)" }}
            >
              {/* Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E0B6FF]/20 to-transparent group-hover:via-[#E0B6FF]/50 transition-all duration-500" />
              
              {/* Icon Holder */}
              <div className="w-16 h-16 rounded-2xl bg-[#9D4EDD]/10 border border-[#9D4EDD]/20 flex items-center justify-center text-[#E0B6FF] mb-8 group-hover:scale-110 group-hover:bg-[#9D4EDD]/20 transition-all duration-300">
                {service.icon}
              </div>

              {/* Badge */}
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#9D4EDD] bg-[#9D4EDD]/5 px-3 py-1 rounded-full mb-4 inline-block">
                {service.badge}
              </span>

              {/* Text */}
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#E0B6FF] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#D0C2D5] text-sm leading-relaxed font-light">
                {service.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[#9D4EDD]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
