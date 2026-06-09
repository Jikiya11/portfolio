import FadeUp from "./FadeUp";

const jobs = [
  {
    date: "Jul 2018 – May 2026",
    title: "Casual Labourer",
    company: "City of St. Albert",
    bullets: [
      "Operated and maintained municipal equipment including Zamboni and turf machinery.",
      "Trusted with independent operation of city assets during peak workloads.",
    ],
  },
  {
    date: "May 2026 - Present",
    title: "Quality Assurance Analyst",
    company: "Costar Computer Systems",
    bullets: [
      "Worked closely with developers and designers to write items for new features.",
      "Developed a comprehensive understanding of real world enterprise software.",
      "Collaborated with a team of 15+ developers, designers and other analysts to ensure high quality code was released.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-cream-dark py-14">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xl tracking-[0.2em] uppercase text-tan-dark mb-8">
          Experience
        </p>
        <div className="divide-y divide-black/8">
          {jobs.map((job, i) => (
            <FadeUp
              key={job.title}
              delay={i * 0.08}
              className="grid md:grid-cols-4 gap-4 py-7"
            >
              <p className="text-sm text-charcoal/45 pt-1">{job.date}</p>
              <div className="md:col-span-3">
                <h3 className="font-medium text-charcoal mb-0.5">
                  {job.title}
                </h3>
                <p className="text-tan-dark text-base mb-3">{job.company}</p>
                <ul className="text-base text-charcoal/65 space-y-1">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
