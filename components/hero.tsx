"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center"
      >
        <motion.div
          variants={item}
          className="glass mb-8 flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-white/70"
        >
          <Sparkles className="h-3.5 w-3.5 text-cyan" />
          Available for research collaborations
        </motion.div>

        <motion.h1
          variants={item}
          className="text-balance text-5xl font-semibold tracking-tight sm:text-7xl md:text-8xl"
        >
          <span className="text-gradient">Rifat</span>{" "}
          <span className="text-gradient-accent">Hossain</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-balance text-base text-white/60 sm:text-lg md:text-xl"
        >
          Crypto Researcher <span className="mx-2 text-white/20">/</span> Web3
          Enthusiast <span className="mx-2 text-white/20">/</span> Airdrop
          Hunter
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Get in touch
          </Button>
          <Button
            variant="outline"
            onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
          >
            View skills
          </Button>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-white/40 transition-colors hover:text-white/80"
        aria-label="Scroll to About section"
      >
        <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.button>
    </section>
  );
}
