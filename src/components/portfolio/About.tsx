import { Section } from "./Section";

const HIGHLIGHTS = [
  "Full Stack Development",
  "AI Integrations",
  "React.js",
  "Node.js",
  "Express.js",
  "MSSQL",
  "PostgreSQL",
  "FastAPI",
  "Whisper AI",
  "JWT Authentication",
  "REST APIs",
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title={<>Crafting intelligent <span className="gradient-text">digital experiences</span></>}
    >
      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-start">
        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a <span className="text-foreground font-medium">Full Stack Developer</span> passionate
            about building modern web applications that blend clean engineering with
            <span className="text-foreground font-medium"> AI-powered experiences</span>.
          </p>
          <p>
            From responsive React.js interfaces to robust Node.js & FastAPI backends, I design
            end-to-end systems with secure JWT authentication, well-structured REST APIs,
            and reliable databases like MSSQL and PostgreSQL.
          </p>
          <p>
            I love bringing intelligence into products — integrating Whisper AI for voice,
            building chatbot assistants, and turning everyday workflows into smart, scalable
            tools.
          </p>
        </div>

        <div className="glass rounded-2xl p-6 space-y-3">
          <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
            Core Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {HIGHLIGHTS.map((h) => (
              <span
                key={h}
                className="px-3 py-1.5 rounded-full text-sm glass glass-hover text-foreground/90"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
