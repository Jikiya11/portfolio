"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import FadeUp from "./FadeUp";

export interface Project {
  status?: string;
  title: string;
  description: string;
  roles?: string[];
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    status: "NAIT Capstone Project",
    title: "Production App for a Real-World Client",
    description:
      "Working directly with an external client to deliver a production-ready application from design through deployment. Responsible for frontend architecture and coordinating team workflow.",
    roles: ["Assistant Team Lead", "Frontend Lead"],
    tags: ["Next.js", "React", "TypeScript", "C# API", "PostgreSQL", "Clerk"],
    link: "https://www.proathletemetrics.com/",
  },
  {
    status: "Personal Project",
    title: "WingIt — Travel Trip Showcase",
    description:
      "A website that showcases previous trips developed by friends and I. It allows users to view trip details, inquire about trips they can take, and get inspired for their own travels.",
    roles: ["Developer", "Designer"],
    tags: ["Python", "Flask", "HTML", "CSS", "SQL"],
    link: "https://wingit.world/",
  },
  {
    status: "Personal Project",
    title: "Real-Time IMU Motion Visualizer",
    description:
      "A simple web application that reads data from an IMU sensor (or iPhone) and renders a 3D model in browser to track movements. Useful for visualizing and analyzing motion data in real time.",
    roles: ["Developer", "Architect", "Designer"],
    tags: ["JavaScript", "Vite", "Tailwind", "Three.js", "Websockets"],
    link: "https://laser-tilt-sensor-production.up.railway.app/",
  },
  // Add more projects here
];

const cardEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const cardVariants = {
  hidden: { opacity: 0, x: 20 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: cardEase },
  }),
};

export default function Projects() {
  const trackRef = useRef(null);
  const isInView = useInView(trackRef, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="bg-charcoal py-14 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <FadeUp>
          <p className="text-xl tracking-[0.2em] uppercase text-tan mb-8">
            Projects
          </p>
        </FadeUp>
      </div>

      {/* Horizontal scroll track — centers when content fits, scrolls when it doesn't */}
      <div className="overflow-x-auto scrollbar-hide px-6 pb-4">
        <div ref={trackRef} className="flex gap-5 w-max mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="flex-none w-[min(380px,80vw)] border border-white/8 rounded-xl p-8 hover:border-tan/35 transition-colors duration-300 flex flex-col"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                <div>
                  {project.status && (
                    <span className="text-sm text-tan tracking-widest uppercase">
                      {project.status}
                    </span>
                  )}
                  <h3 className="text-xl font-medium text-white mt-1">
                    {project.title}
                  </h3>
                </div>
                {project.roles && (
                  <div className="flex flex-wrap gap-2">
                    {project.roles.map((r) => (
                      <span
                        key={r}
                        className="text-sm border border-tan/30 text-tan px-3 py-1 rounded-full"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <p className="text-charcoal-muted text-base leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 text-sm border border-white/15 text-charcoal-muted rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 px-4 py-2 border border-tan/30 text-tan text-sm rounded hover:bg-tan/10 transition-colors duration-200 self-start"
                >
                  View project
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M1 11L11 1M11 1H4M11 1V8"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ) : (
                <span className="mt-auto inline-flex items-center gap-2 px-4 py-2 border border-white/8 text-charcoal-muted text-sm rounded opacity-40 self-start cursor-default">
                  Link coming soon
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
