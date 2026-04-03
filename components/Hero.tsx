import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, Mountain } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-stone-950"
    >
      {/* Background radial gradient wrapper for subtle lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,rgba(245,158,11,0.15)_0,transparent_60%)]" />

      {/* Decorative text watermark */}
      <div className="absolute top-[40%] left-[-10%] text-[15rem] lg:text-[20rem] font-black text-white/[0.02] whitespace-nowrap select-none pointer-events-none z-0 tracking-tighter">
        KENTANG
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32 flex flex-col lg:flex-row items-center justify-between min-h-screen lg:min-h-0 gap-12 lg:gap-8">
        
        {/* === LEFT COLUMN: Text Content === */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-5 sm:gap-6 w-full lg:w-[45%] xl:w-1/2 mt-auto lg:mt-0 z-20">
          
          {/* Main Headline */}
          <h1 className="text-[3.5rem] sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.95] flex flex-col">
            <span className="text-white drop-shadow-sm">Bima Wibisono</span>
            <span className="text-amber-500 drop-shadow-sm">Kentang</span>
          </h1>

          {/* Sub-headline */}
          <h2 className="text-[15px] sm:text-lg lg:text-xl font-medium text-stone-300 max-w-[300px] sm:max-w-xl leading-snug">
            Grosir Kentang Segar Berkualitas, Langsung dari Lereng Gunung <span className="text-white font-bold">Sumbing</span>.
          </h2>

          {/* Description text */}
          <p className="text-stone-400 text-xs sm:text-sm md:text-base max-w-[90%] sm:max-w-lg lg:max-w-md leading-relaxed mt-1">
            Hasil panen terbaik dari ketinggian 1.475 MDPL Dusun Marongan, Desa Sukomakmur, Kabupaten Magelang. Segar, berkualitas, dan harga lebih jujur & kompetitif karena langsung dari kelompok tani.
          </p>

          {/* Pills / Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-2">
            <span className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-200 text-[10px] sm:text-xs px-3.5 py-1.5 rounded-full backdrop-blur-sm">
              <MapPin className="w-3 h-3 text-amber-400" /> Dusun Marongan
            </span>
            <span className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-200 text-[10px] sm:text-xs px-3.5 py-1.5 rounded-full backdrop-blur-sm">
              <MapPin className="w-3 h-3 text-amber-400" /> Sukomakmur
            </span>
            <span className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-200 text-[10px] sm:text-xs px-3.5 py-1.5 rounded-full backdrop-blur-sm">
              <Mountain className="w-3 h-3 text-amber-400" /> 1.475 MDPL
            </span>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-row items-center justify-center lg:justify-start gap-3 w-full lg:w-auto mt-4">
            <Button
              asChild
              className="bg-green-600 hover:bg-green-500 text-white font-semibold flex-1 sm:flex-none px-4 sm:px-8 py-3 h-auto text-[13px] sm:text-base rounded-2xl shadow-lg shadow-green-600/30 transition-all duration-300 hover:-translate-y-1"
            >
              <Link href="#contact" className="flex items-center justify-center gap-2">
                Pesan WhatsApp
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-white/10 bg-stone-800/60 hover:bg-stone-800 backdrop-blur-md text-white font-semibold flex-1 sm:flex-none px-4 sm:px-8 py-3 h-auto text-[13px] sm:text-base rounded-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <Link href="#gallery" className="flex items-center justify-center gap-2">
                Lihat Katalog
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* === RIGHT COLUMN: Image Context === */}
        <div className="relative w-full lg:w-[55%] xl:w-1/2 flex items-center justify-center mt-auto lg:mt-0 z-10">
          {/* subtle glow behind the image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-64 bg-amber-500/20 blur-[100px] rounded-full" />
          
          <div className="relative w-full max-w-md lg:max-w-xl aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=800&auto=format&fit=crop"
              alt="Kentang Segar Bima Wibisono"
              fill
              priority
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
