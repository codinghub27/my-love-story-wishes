import Hero from "@/components/Hero";
import MessageSection from "@/components/MessageSection";
import MemoriesGallery from "@/components/MemoriesGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <MessageSection />
      <MemoriesGallery />
      <Footer />
    </div>
  );
};

export default Index;
