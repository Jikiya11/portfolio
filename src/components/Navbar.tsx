"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { smoothScrollTo } from "@/lib/smoothScroll";

const links = [
  { href: "about",           label: "About" },
  { href: "experience",      label: "Experience" },
  { href: "projects",        label: "Projects" },
  { href: "contact",         label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function handleNav(id: string) {
    setOpen(false);
    // slight delay so the menu closes before scroll starts
    setTimeout(() => smoothScrollTo(id), 80);
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 bg-charcoal/95 backdrop-blur border-b border-white/5"
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav("hero")}
          className="text-tan font-semibold tracking-widest text-xl cursor-pointer"
        >
          AW
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 text-base tracking-widest uppercase text-charcoal-muted">
          {links.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => handleNav(href)}
              className="hover:text-tan transition-colors duration-200 cursor-pointer"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 cursor-pointer"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-6 h-px bg-charcoal-muted origin-center"
          />
          <motion.span
            animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-px bg-charcoal-muted origin-center"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-6 h-px bg-charcoal-muted origin-center"
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-white/5"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {links.map(({ href, label }, i) => (
                <motion.button
                  key={href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.25 }}
                  onClick={() => handleNav(href)}
                  className="text-left py-3 text-base tracking-widest uppercase text-charcoal-muted hover:text-tan transition-colors duration-200 cursor-pointer border-b border-white/5 last:border-0"
                >
                  {label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
