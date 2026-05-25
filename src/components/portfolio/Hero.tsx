import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const ROLES = [
  "Full Stack Developer",
  "AI-Powered App Builder",
  "React.js Engineer",
  "Backend Architect",
];

function useTyping(words: string[], speed = 90, pause = 1600) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          const next = word.slice(0, text.length + 1);
          setText(next);
          if (next === word) setTimeout(() => setDel(true), pause);
        } else {
          const next = word.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDel(false);
            setI((v) => v + 1);
          }
        }
      },
      del ? 40 : speed
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTyping(ROLES);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover opacity-40 -z-10"
      />
      <div className="absolute inset-0 grid-pattern opacity-30 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs uppercase tracking-widest text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05]">
            Hi, I'm <span className="gradient-text">Diya Mehta</span>
          </h1>
          <p className="mt-4 text-2xl md:text-3xl font-display text-foreground/90">
            <span className="text-muted-foreground">I'm a </span>
            <span className="gradient-text">{typed}</span>
            <span className="inline-block w-0.5 h-7 md:h-9 bg-primary ml-1 align-middle animate-blink" />
          </p>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Building scalable web applications with AI-powered experiences. Crafting
            intelligent interfaces, robust backends, and seamless user journeys.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full font-medium text-primary-foreground transition-all hover:scale-105 glow-ring"
              style={{ background: "var(--gradient-primary)", backgroundSize: "200% 200%" }}
            >
              View Projects →
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full font-medium glass glass-hover text-foreground"
            >
              Contact Me
            </a>
            <a
              href="https://github.com/mehtadiya"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full font-medium glass glass-hover text-foreground inline-flex items-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.5-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.6 18.4.5 12 .5z"/></svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/diya-mehta-55314b314"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full font-medium glass glass-hover text-foreground inline-flex items-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.3a1.7 1.7 0 110-3.4 1.7 1.7 0 010 3.4zM19 19h-3v-4.7c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5V19h-3v-9h2.9v1.2A3.2 3.2 0 0115.3 9.7c3.1 0 3.7 2 3.7 4.7z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="relative hidden lg:block animate-fade-up [animation-delay:200ms]">
          <div className="relative aspect-square max-w-md ml-auto">
            <div className="absolute inset-0 rounded-full" style={{ background: "var(--gradient-glow)" }} />
            <div className="absolute inset-8 rounded-full glass glow-ring animate-float flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl font-bold gradient-text font-display">AI</div>
                <div className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">Powered Stack</div>
              </div>
            </div>
            {["React", "Node", "FastAPI", "Whisper"].map((tag, idx) => (
              <div
                key={tag}
                className="absolute glass px-3 py-1.5 rounded-full text-xs font-medium animate-float"
                style={{
                  top: `${[5, 20, 70, 80][idx]}%`,
                  left: `${[70, 5, 0, 75][idx]}%`,
                  animationDelay: `${idx * 0.6}s`,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground text-xs uppercase tracking-widest flex flex-col items-center gap-2 animate-float"
      >
        Scroll
        <span className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
      </a>
    </section>
  );
}
