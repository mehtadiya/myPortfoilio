import { Section } from "./Section";

const GROUPS = [
  {
    title: "Frontend",
    icon: "◆",
    items: [
      { name: "React.js", level: 92 },
      { name: "JavaScript", level: 90 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    icon: "◈",
    items: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 88 },
      { name: "FastAPI", level: 82 },
    ],
  },
  {
    title: "Database",
    icon: "◉",
    items: [
      { name: "MSSQL", level: 85 },
      { name: "PostgreSQL", level: 85 },
    ],
  },
  {
    title: "Other",
    icon: "✦",
    items: [
      { name: "JWT", level: 88 },
      { name: "GitHub", level: 90 },
      { name: "AI Integration", level: 85 },
      { name: "REST APIs", level: 92 },
    ],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>The <span className="gradient-text">toolkit</span> I build with</>}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {GROUPS.map((g) => (
          <div key={g.title} className="glass glass-hover rounded-2xl p-6 group">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl gradient-text">{g.icon}</span>
              <h3 className="text-xl font-semibold font-display">{g.title}</h3>
            </div>
            <ul className="space-y-4">
              {g.items.map((s) => (
                <li key={s.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-foreground/90">{s.name}</span>
                    <span className="text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 group-hover:scale-x-100"
                      style={{
                        width: `${s.level}%`,
                        background: "var(--gradient-primary)",
                        backgroundSize: "200% 200%",
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
