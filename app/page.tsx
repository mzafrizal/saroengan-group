import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import PrivateVehicles from "@/components/PrivateVehicles";
import GroupVehicles from "@/components/GroupVehicles";
import TourPackages from "@/components/TourPackages";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <Services />
      </ScrollReveal>
      <ScrollReveal>
        <PrivateVehicles />
      </ScrollReveal>
      <ScrollReveal>
        <GroupVehicles />
      </ScrollReveal>
      <ScrollReveal>
        <TourPackages />
      </ScrollReveal>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
