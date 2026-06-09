import FadeUp from "./FadeUp";

const items = [
  {
    date: "Sep 2019 – Jan 2023",
    title: "Collegiate Baseball",
    org: "Edmonton Riverhawks Organization",
    description:
      "Competed at the collegiate level while maintaining academic commitments, building discipline and time-management in a high-performance environment.",
  },
  {
    date: "Dec 2024 – Dec 2025",
    title: "Social Chair & Philanthropy",
    org: "Pi Kappa Alpha Fraternity, University of Alberta",
    description:
      "Coordinated large-scale events with student organizations, managed volunteer groups, and fundraised for local charities.",
  },
  {
    date: "Ongoing",
    title: "Volunteer Coach",
    org: "St. Albert Minor Baseball Association & SAS Volleyball Club",
    description:
      "Coached U12–U18 athletes on skill development, teamwork, and sportsmanship across teams of up to 15 players.",
  },
];

export default function Extracurriculars() {
  return (
    <section id="extracurriculars" className="bg-cream-dark py-14">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xl tracking-[0.2em] uppercase text-tan-dark mb-8">
          Extracurriculars &amp; Volunteerism
        </p>
        <div className="divide-y divide-black/8">
          {items.map((item, i) => (
            <FadeUp
              key={item.title}
              delay={i * 0.08}
              className="grid md:grid-cols-4 gap-4 py-7"
            >
              <p className="text-sm text-charcoal/45 pt-1">{item.date}</p>
              <div className="md:col-span-3">
                <h3 className="font-medium text-charcoal mb-0.5">
                  {item.title}
                </h3>
                <p className="text-tan-dark text-base mb-2">{item.org}</p>
                <p className="text-base text-charcoal/65">{item.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
