"use client";

import { motion } from "framer-motion";
import { PhoneCall, Calendar, Users, BarChart3 } from "lucide-react";

const useCases = [
  {
    icon: <PhoneCall className="w-6 h-6" />,
    title: "Inbound Support",
    description: "Never miss a customer call again—day, night, weekends, or holidays. Handle support requests instantly with human-like empathy.",
    color: "from-blue-500/20 to-transparent"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Lead Qualification",
    description: "AI asks the right questions and scores leads in real-time. Only send the bridge to your sales team when they are truly ready to buy.",
    color: "from-purple-500/20 to-transparent"
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Appointment Setting",
    description: "Seamlessly schedule meetings and demos directly into your calendar. The AI handles the back-and-forth negotiation automatically.",
    color: "from-indigo-500/20 to-transparent"
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Outbound Growth",
    description: "Scale your reach without scaling headcount. AI voice agents can follow up on cold leads or re-engage past customers at massive scale.",
    color: "from-pink-500/20 to-transparent"
  }
];

export default function UseCases() {
  return (
    <section id="use-cases" className="relative py-24 bg-[#000000] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 font-heading text-white">
              Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0B6FF] to-[#9D4EDD]">High-Impact</span> Teams
            </h2>
            <p className="text-[#D0C2D5] text-lg font-light max-w-2xl mx-auto">
              Whatever your industry, Voxera AI scales your voice capabilities without the overhead of a traditional call center.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300 relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#E0B6FF] mb-6 relative z-10">
                {useCase.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white relative z-10">{useCase.title}</h3>
              <p className="text-sm text-[#998D9E] leading-relaxed relative z-10 font-light">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
