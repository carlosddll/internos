import Hero from "@/components/Hero";
import ProgramTimeline from "@/components/ProgramTimeline";
import PhotoGallery from "@/components/PhotoGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProgramTimeline />
      <PhotoGallery />
      <Footer />
    </main>
  );
};

export default Index;
