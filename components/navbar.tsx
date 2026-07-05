"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 flex justify-center transition-all duration-300 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <nav
        className={`flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-300 ${
          scrolled ? "glass-strong shadow-lg shadow-black/20" : ""
        }`}
      >
        <a
          href="#top"
          className="mr-2 pl-3 text-sm font-semibold tracking-tight text-gradient"
        >
          RH
        </a>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
