import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Diya Mehta — Full Stack Developer & AI-Powered Web Application Builder" },
      {
        name: "description",
        content:
          "Portfolio of Diya Mehta — Full Stack Developer building scalable web applications with React, Node.js, FastAPI and AI-powered experiences.",
      },
      { property: "og:title", content: "Diya Mehta — Full Stack Developer & AI Builder" },
      {
        property: "og:description",
        content: "Building scalable web applications with AI-powered experiences.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
