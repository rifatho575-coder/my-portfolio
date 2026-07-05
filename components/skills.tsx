"use client";

import { motion } from "framer-motion";
import {
  Search,
  LineChart,
  Briefcase,
  ShieldAlert,
  Coins,
  Blocks,
  Globe,
  TrendingUp,
  Users,
} from "lucide-react";
import { SpotlightCard } from "@/components/spotlight-card";

const skills = [
  { icon: Search, label: "Crypto Research" },
  { icon: LineChart, label: "Technical Analysis" },
  { icon: Briefcase, label: "Portfolio Management" },
  { icon: ShieldAlert, label: "Risk Analysis" },
  { icon: Coins, label: "DeFi" },
  { icon: Blocks, label: "Blockchain" },
  { icon: Globe, label: "Web3" },
  { icon: TrendingUp, label: "Market Research" },
  { icon: Users, label: "Community Building" },
];

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-5xl px-6 py-32">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-cyan"
      >
        Skills
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl"
      >
        Tools of the trade
      </motion.h2>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
          >
            <SpotlightCard className="flex h-full flex-col gap-4 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue/20 via-violet/20 to-cyan/20">
                <skill.icon className="h-5 w-5 text-cyan" />
              </div>
              <span className="text-sm font-medium text-white/85">
                {skill.label}
              </span>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
