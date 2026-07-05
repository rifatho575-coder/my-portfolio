"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/spotlight-card";

const stats = [
  { value: "5+", label: "Years in crypto" },
  { value: "Ongoing", label: "Continuing education" },
  { value: "DeFi", label: "Primary focus" },
];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-5xl px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-cyan">
          About
        </p>
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Five years deep in the crypto ecosystem
          <span className="text-white/40">, and still studying.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
          I&apos;m a Web3 enthusiast with over five years of experience
          exploring the crypto ecosystem. My focus is on DeFi, airdrops,
          market research, and blockchain technologies — discovering new
          opportunities, analyzing emerging projects, and sharing what I
          learn with the community.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3"
      >
        {stats.map((s) => (
          <SpotlightCard key={s.label} className="p-6">
            <div className="text-3xl font-semibold text-gradient">
              {s.value}
            </div>
            <div className="mt-2 text-sm text-white/50">{s.label}</div>
          </SpotlightCard>
        ))}
      </motion.div>
    </section>
  );
}
