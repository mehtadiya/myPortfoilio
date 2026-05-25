import { useEffect, useRef, useState, type ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id={id} className="py-24 md:py-32 px-6 relative">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div
          className={`mb-16 max-w-2xl transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.3em] gradient-text font-medium mb-4">
              {eyebrow}
            </p>
          )}
          <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
          {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
        </div>
        <div
          className={`transition-all duration-700 delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
