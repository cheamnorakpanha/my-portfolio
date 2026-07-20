import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Skills from "@/components/Skills";
import GitHubStats from "@/components/GitHubStats";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollControls from "@/components/ScrollControls";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/20">
      {/* Scroll controls (Progress indicator & Scroll-to-Top button) */}
      <ScrollControls />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Single-Page Layout Sections */}
      <main className="relative">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Skills />
        <GitHubStats />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
