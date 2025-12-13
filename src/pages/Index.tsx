import Hero from "@/components/Hero";
import ProgramTimeline from "@/components/ProgramTimeline";
import PhotoGallery from "@/components/PhotoGallery";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      {/* Fixed background image with dark overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="fixed inset-0 bg-foreground/80" />
      
      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <ProgramTimeline />
        <PhotoGallery />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
