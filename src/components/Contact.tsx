import FadeUp from "./FadeUp";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/social";

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

export default function Contact() {
  return (
    <section id="contact" className="bg-charcoal py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <FadeUp>
          <p className="text-lg tracking-[0.2em] uppercase text-tan mb-5">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-10 leading-snug">
            Let&apos;s build something
            <br />
            <span className="text-tan font-medium">together.</span>
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="mailto:alexanderkwhyte@gmail.com"
              className="px-8 py-3.5 bg-tan text-charcoal text-lg font-medium rounded hover:bg-tan-dark hover:text-white transition-all duration-200"
            >
              alexanderkwhyte@gmail.com
            </a>
            <a
              href="tel:7803184030"
              className="px-8 py-3.5 border border-white/15 text-white text-lg rounded hover:border-tan hover:text-tan transition-all duration-200"
            >
              (780) 318-4030
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/15 text-white text-lg rounded hover:border-tan hover:text-tan transition-all duration-200"
            >
              <GithubIcon />
              GitHub
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/15 text-white text-lg rounded hover:border-tan hover:text-tan transition-all duration-200"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </FadeUp>

        <div className="mt-20 pt-8 border-t border-white/8 text-charcoal-muted text-sm tracking-widest">
          © 2026 Alexander Whyte
        </div>
      </div>
    </section>
  );
}
