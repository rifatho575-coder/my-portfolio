"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SpotlightCard } from "@/components/spotlight-card";

// Sample content — replace with your real projects, write-ups, or research drops.
const projects = [
  {
    title: "DeFi Opportunity Tracker",
    description:
      "A personal research framework for surfacing early-stage DeFi protocols worth watching, scored on tokenomics, team, and on-chain traction.",
    tags: ["DeFi", "Research"],
  },
  {
    title: "Airdrop Farming Playbook",
    description:
      "A living notebook documenting testnet participation strategy, wallet hygiene, and eligibility criteria across active airdrop campaigns.",
    tags: ["Airdrops", "Strategy"],
  },
  {
    title: "Market Structure Notes",
    description:
      "Ongoing technical and on-chain analysis on major crypto assets, shared with a growing community of fellow researchers.",
    tags: ["Technical Analysis", "Community"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-5xl px-6 py-32">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-cyan"
      >
        Projects
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl"
      >
        Selected work
      </motion.h2>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <SpotlightCard className="flex h-full flex-col p-7">
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-lg font-semibold text-white">
                  {p.title}
                </h3>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-white/30 transition-colors group-hover:text-cyan" />
              </div>
              <p className="flex-1 text-sm leading-relaxed text-white/55">
                {p.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
