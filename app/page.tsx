import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import LocationAndReviews from "@/components/LocationAndReviews";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 font-sans">
      <Navbar />
      <Hero />
      <ScrollReveal>
        <Features />
      </ScrollReveal>
      <ScrollReveal>
        <Gallery />
      </ScrollReveal>
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <LocationAndReviews />
      </ScrollReveal>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}