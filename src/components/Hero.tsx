"use client";
import { motion } from "motion/react";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/social";
import { smoothScrollTo } from "@/lib/smoothScroll";

const GithubIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const ease = [0.22, 1, 0.36, 1] as const;

function Appear({
  children,
  delay,
  y = 20,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-charcoal min-h-screen flex items-center pt-16"
    >
      <div className="max-w-5xl mx-auto px-6 py-28 w-full">
        <Appear
          delay={0.2}
          className="text-tan text-xl tracking-[0.25em] uppercase mb-6"
        >
          Software Developer
        </Appear>

        <motion.h1
          className="text-[clamp(3rem,8vw,5.5rem)] font-light text-white leading-[1.05] tracking-tight mb-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease }}
        >
          Alexander
          <br />
          <span className="font-semibold">Whyte</span>
        </motion.h1>

        <motion.div
          className="w-14 h-px bg-tan my-7 origin-left"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.7, ease }}
        />

        <Appear
          delay={0.85}
          className="text-charcoal-muted text-lg max-w-lg leading-relaxed mb-8"
        >
          Recent NAIT Computer Software Development graduate with a 3.9 GPA and
          Dean&apos;s Honours every semester. Passionate about building
          real-world products with modern web technologies.
        </Appear>

        <Appear
          delay={1.0}
          className="flex flex-wrap items-center gap-6 text-lg text-charcoal-muted mb-10"
        >
          <span>Edmonton, AB</span>
          <a
            href="mailto:alexanderkwhyte@gmail.com"
            className="hover:text-tan transition-colors"
          >
            alexanderkwhyte@gmail.com
          </a>
          <a href="tel:7803184030" className="hover:text-tan transition-colors">
            (780) 318-4030
          </a>
          <span className="w-px h-4 bg-white/15 hidden sm:block" />
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center w-10 h-10 rounded border border-white/12 text-charcoal-muted hover:border-tan hover:text-tan transition-all duration-200"
          >
            <GithubIcon />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center w-10 h-10 rounded border border-white/12 text-charcoal-muted hover:border-tan hover:text-tan transition-all duration-200"
          >
            <LinkedInIcon />
          </a>
        </Appear>

        <Appear delay={1.15} className="flex flex-wrap gap-3">
          <button
            onClick={() => smoothScrollTo("projects")}
            className="px-6 py-3 bg-tan text-charcoal text-sm font-medium rounded hover:bg-tan-dark hover:text-white transition-all duration-200 cursor-pointer"
          >
            View Projects
          </button>
          <button
            onClick={() => smoothScrollTo("contact")}
            className="px-6 py-3 border border-white/15 text-white text-sm rounded hover:border-tan hover:text-tan transition-all duration-200 cursor-pointer"
          >
            Get In Touch
          </button>
        </Appear>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-charcoal-muted text-xs tracking-widest uppercase pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <span>Scroll</span>
        <svg
          width="14"
          height="20"
          viewBox="0 0 14 20"
          fill="none"
          className="animate-bounce"
        >
          <path
            d="M7 1v18M1 13l6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  );
}
