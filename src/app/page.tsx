import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollControls from "@/components/ScrollControls";
import Ticker from "@/components/Ticker";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <div className="relative min-h-svh bg-background text-foreground antialiased">
      <CustomCursor />
      <ScrollControls />
      <Navbar />

      <main className="relative">
        <Hero />
        <Ticker />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
