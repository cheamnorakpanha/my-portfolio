import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollControls from "@/components/ScrollControls";
import CustomCursor from "@/components/CustomCursor";
import GSAPScrollTrigger from "@/components/GSAPScrollTrigger";

export default function Home() {
  return (
    <div className="relative min-h-svh bg-background text-foreground antialiased selection:bg-primary/20">
      {/* Subtle modern custom cursor on fine pointer devices */}
      <CustomCursor />

      {/* GSAP ScrollTrigger reveals for text and images */}
      <GSAPScrollTrigger />

      {/* Scroll controls (Progress indicator & Scroll-to-Top button) */}
      <ScrollControls />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Streamlined Layout (Hero -> About -> Skills -> Projects -> Experience -> Contact) */}
      <main className="relative">
        {/* Hero with Large Typography & CUTOUT Portrait */}
        <Hero />

        {/* 1. About */}
        <About />

        {/* 2. Skills */}
        <Skills />

        {/* 3. Featured Projects */}
        <Projects />

        {/* 4. Experience */}
        <Experience />

        {/* 5. Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
