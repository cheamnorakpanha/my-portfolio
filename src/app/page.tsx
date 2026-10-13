import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollControls from "@/components/ScrollControls";
import CustomCursor from "@/components/CustomCursor";
import GSAPScrollTrigger from "@/components/GSAPScrollTrigger";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/20">
      {/* Subtle modern custom cursor on fine pointer devices */}
      <CustomCursor />

      {/* GSAP ScrollTrigger reveals for text and images */}
      <GSAPScrollTrigger />

      {/* Scroll controls (Progress indicator & Scroll-to-Top button) */}
      <ScrollControls />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Streamlined Single-Page Layout (5 High-Impact Sections) */}
      <main className="relative">
        {/* 1. Full-screen Hero with Large Typography & CUTOUT Portrait */}
        <Hero />

        {/* 2. Flagship Projects Showcase with Performance Metrics */}
        <Projects />

        {/* 3. Developer Story, Philosophy & Core Technical Capabilities */}
        <About />

        {/* 4. Career Journey, Dual Degrees, Certifications & CV Download */}
        <Experience />

        {/* 5. Contact Dispatch Form & Direct Inquiries */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
