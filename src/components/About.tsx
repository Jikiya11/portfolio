"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import FadeUp from "./FadeUp";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Flutter",
  "C#",
  ".NET / Blazor",
  "SQL",
  "PostgreSQL",
  "Clerk Auth",
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};
const tagVariants = {
  hidden: { opacity: 0, scale: 0.88 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
};

export default function About() {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-64px" });

  return (
    <section id="about" className="bg-cream py-14">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <FadeUp>
            <p className="text-xl tracking-[0.2em] uppercase text-tan-dark mb-4">
              About
            </p>
            <p className="text-xl leading-relaxed text-charcoal/75">
              Accountability and passion for my work drove my academic success
              at NAIT, and I carry those same qualities into building software
              that matters. I thrive in collaborative environments and enjoy
              taking ownership of the frontend experience.
            </p>
          </FadeUp>

          <div>
            <FadeUp delay={0.1}>
              <p className="text-xl tracking-[0.2em] uppercase text-tan-dark mb-4">
                Tech Stack
              </p>
            </FadeUp>
            <motion.div
              ref={gridRef}
              className="flex flex-wrap gap-2"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={tagVariants}
                  className="inline-block px-3 py-1 text-sm rounded-full border"
                  style={{
                    background: "rgba(196,168,130,0.25)",
                    borderColor: "rgba(196,168,130,0.5)",
                    color: "#6b4f2e",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
