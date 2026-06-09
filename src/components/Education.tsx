import FadeUp from "./FadeUp";

const schools = [
  {
    date: "Sep 2024 – Apr 2026",
    degree: "Computer Software Development Diploma",
    school: "Northern Alberta Institute of Technology (NAIT)",
    bullets: [
      "3.9 GPA — Dean's Honour List every semester",
      "Frontend: Next.js, React, Flutter · Backend: C#, .NET, Blazor, SQL",
    ],
  },
  {
    date: "Sep 2019 – Apr 2023",
    degree: "Bachelor of Science (partial) — minor in Business",
    school: "MacEwan University",
    bullets: [
      "Data structures, algorithms, and business foundations",
      "Business, economics, and accounting coursework",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-cream py-14">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xl tracking-[0.2em] uppercase text-tan-dark mb-8">
          Education
        </p>
        <div className="divide-y divide-black/8">
          {schools.map((s, i) => (
            <FadeUp
              key={s.degree}
              delay={i * 0.08}
              className="grid md:grid-cols-4 gap-4 py-7"
            >
              <p className="text-sm text-charcoal/45 pt-1">{s.date}</p>
              <div className="md:col-span-3">
                <h3 className="font-medium text-charcoal mb-0.5">{s.degree}</h3>
                <p className="text-tan-dark text-base mb-3">{s.school}</p>
                <ul className="text-base text-charcoal/65 space-y-1">
                  {s.bullets.map((b) => (
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
