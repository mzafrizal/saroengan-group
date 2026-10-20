import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Businesses from "@/components/Businesses";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import LocationAndReviews from "@/components/LocationAndReviews";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 font-sans">
      <Navbar />
      {/* 1. Hero Section */}
      <Hero />
      {/* 2. Tentang Kami */}
      <ScrollReveal>
        <About />
      </ScrollReveal>
      {/* 3. Unit Bisnis */}
      <ScrollReveal>
        <Businesses />
      </ScrollReveal>
      {/* 4. Value Proposition */}
      <ScrollReveal>
        <Features />
      </ScrollReveal>
      {/* 5. Galeri Highlight */}
      <ScrollReveal>
        <Gallery />
      </ScrollReveal>
      {/* 6. Lokasi & Kontak */}
      {/* <ScrollReveal>
        <LocationAndReviews />
      </ScrollReveal> */}
      {/* 7. Footer */}
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}