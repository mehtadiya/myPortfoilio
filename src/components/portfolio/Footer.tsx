export function Footer() {
  return (
    <footer className="border-t border-border/40 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="gradient-text font-medium">Diya Mehta</span>. Designed & built with care.
        </p>
        <div className="flex items-center gap-5 text-sm text-muted-foreground">
          <a href="https://github.com/mehtadiya" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/diya-mehta-55314b314" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="mailto:mehtadiya@gmail.com" className="hover:text-foreground transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
