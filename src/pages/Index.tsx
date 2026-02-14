import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SynthwaveGrid from "@/components/SynthwaveGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative scanlines">
      {/* Global synthwave grid background */}
      <div className="fixed inset-0 pointer-events-none">
        <SynthwaveGrid />
      </div>

      <Navbar />
      
      <main className="relative z-[1]">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
