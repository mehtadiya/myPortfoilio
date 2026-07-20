import { Section } from "./Section";

const PROJECTS = [
  {
    title: "AI Expense Management System",
    description:
      "A full-stack AI-powered expense management platform with authentication, budget tracking, dashboards, a chatbot assistant, and voice-enabled expense entry powered by Whisper AI.",
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "FastAPI", "Whisper AI"],
    accent: "from-cyan-400/30 to-purple-500/30",
    link: "https://youtu.be/kfvJWCyFEOc",
  },
  {
    title: "Asset Management System",
    description:
      "Complete asset tracking and management for organizational assets — categories, allocations and secure backend APIs designed for real enterprise workflows.",
    tech: ["React.js", "Node.js", "Express.js", "MSSQL"],
    accent: "from-purple-500/30 to-pink-500/30",
    link: "https://youtu.be/wqJ7Pw2k61k",
  },
  {
    title: "Jewellery Management / E-commerce",
    description:
      "A responsive jewellery e-commerce platform with rich product display, catalog management and a polished admin interface built on a modern UI foundation.",
    tech: ["React.js", "Node.js", "Express.js"],
    accent: "from-pink-500/30 to-cyan-400/30",
    link: "https://youtu.be/LNpmobL_sYI",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={<>Selected <span className="gradient-text">work</span></>}
      subtitle="A few products I've designed, engineered and shipped."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p, idx) => (
          <article
            key={p.title}
            className="group relative glass glass-hover rounded-2xl p-6 flex flex-col overflow-hidden"
          >
            <div
              className={`absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity`}
            />
            <div className="relative">
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono text-muted-foreground">
                  0{idx + 1} / 0{PROJECTS.length}
                </span>
               <a
  href={p.link}
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:rotate-45 transition-transform"
>
  <svg 
    width="14" 
    height="14" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
</a>
              </div>
              <h3 className="text-xl font-semibold font-display mb-3 group-hover:gradient-text transition-all">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-muted/60 text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
