
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectGallery from "@/components/ProjectGallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProjectGallery />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
