"use client";
import { motion } from "motion/react";
import { smoothScrollTo } from "@/lib/smoothScroll";

const links = [
  { href: "about", label: "About" },
  { href: "experience", label: "Experience" },
  { href: "projects", label: "Projects" },
  { href: "contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 bg-charcoal/95 backdrop-blur border-b border-white/5"
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => smoothScrollTo("hero")}
          className="text-tan font-semibold tracking-widest text-xl cursor-pointer"
        >
          AW
        </button>
        <div className="flex gap-8 text-base tracking-widest uppercase text-charcoal-muted">
          {links.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => smoothScrollTo(href)}
              className="hover:text-tan transition-colors duration-200 cursor-pointer"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
