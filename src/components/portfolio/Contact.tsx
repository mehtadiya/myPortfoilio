import { Section } from "./Section";

const CARDS = [
  {
    label: "Email",
    value: "mehtadiya675@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=mehtadiya675@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 79906 57155",
    href: "tel:+917990657155",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012 4.2 2 2 0 014 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L7.9 9.8a16 16 0 006 6l1.4-1.4a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2.4z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/diya-mehta",
    href: "https://www.linkedin.com/in/diya-mehta-55314b314",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.3a1.7 1.7 0 110-3.4 1.7 1.7 0 010 3.4zM19 19h-3v-4.7c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5V19h-3v-9h2.9v1.2A3.2 3.2 0 0115.3 9.7c3.1 0 3.7 2 3.7 4.7z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/mehtadiya",
    href: "https://github.com/mehtadiya",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.5-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.6 18.4.5 12 .5z" />
      </svg>
    ),
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title={<>Let's <span className="gradient-text">build together</span></>}
      subtitle="Have a project, role, or idea in mind? My inbox is always open."
    >
      <div className="grid sm:grid-cols-2 gap-4">
        {CARDS.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="glass glass-hover rounded-2xl p-6 flex items-center gap-5 group"
          >
            <span className="w-12 h-12 rounded-xl flex items-center justify-center text-primary-foreground glow-ring shrink-0"
              style={{ background: "var(--gradient-primary)" }}>
              {c.icon}
            </span>
            <span className="min-w-0">
              <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                {c.label}
              </span>
              <span className="block font-medium truncate group-hover:gradient-text transition-all">
                {c.value}
              </span>
            </span>
          </a>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
  href="/Diya_Mehta_BTech_CSE_2027_Resume.pdf"
  download="Diya_Mehta_BTech_CSE_2027_Resume.pdf"
  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-primary-foreground transition-all hover:scale-105 glow-ring"
  style={{ background: "var(--gradient-primary)", backgroundSize: "200% 200%" }}
>
  Download Resume
</a>
      </div>
    </Section>
  );
}
