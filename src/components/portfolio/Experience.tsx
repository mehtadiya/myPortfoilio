import { Section } from "./Section";

export function Experience() {
  const items = [
    {
      kind: "Experience",
      title: "Full Stack Developer Intern",
      sub: "ROCK4",
      meta: "1 Year",
      body: "Built and shipped production features across React, Node.js and Express stacks — collaborating on real-world products with secure APIs, authentication and modern UI.",
    },
    {
      kind: "Education",
      title: "BTech, Computer Engineering",
      sub: "Darshan University",
      meta: "2023 – 2027",
      body: "Coursework in software engineering, data structures, databases, web technologies and AI fundamentals.",
    },
  ];
  return (
    <Section
      id="experience"
      eyebrow="Journey"
      title={<>Experience & <span className="gradient-text">Education</span></>}
    >
      <div className="relative pl-8 md:pl-12">
        <div className="absolute left-2 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />
        <div className="space-y-8">
          {items.map((it) => (
            <div key={it.title} className="relative glass glass-hover rounded-2xl p-6 md:p-8">
              <span className="absolute -left-[26px] md:-left-[34px] top-8 w-3 h-3 rounded-full bg-primary glow-ring" />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                <span className="text-xs uppercase tracking-widest gradient-text font-medium">
                  {it.kind}
                </span>
                <span className="text-xs text-muted-foreground">• {it.meta}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold font-display">{it.title}</h3>
              <p className="text-primary mb-3">{it.sub}</p>
              <p className="text-muted-foreground leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
