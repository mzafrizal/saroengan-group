import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PhoneCall, ChevronRight, MapPin, Clock } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#0a1120]"
    >
      {/* Background radial gradient wrapper for subtle lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,rgba(59,130,246,0.15)_0,transparent_60%)]" />

      {/* Decorative text watermark */}
      <div className="absolute top-[40%] left-[-10%] text-[15rem] lg:text-[20rem] font-black text-white/[0.02] whitespace-nowrap select-none pointer-events-none z-0 tracking-tighter">
        
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32 flex flex-col lg:flex-row items-center justify-between min-h-screen lg:min-h-0 gap-12 lg:gap-8">
        
        {/* === LEFT COLUMN: Text Content === */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-5 sm:gap-6 w-full lg:w-[45%] xl:w-1/2 mt-auto lg:mt-0 z-20">
          
          {/* Main Headline */}
          <h1 className="text-[3.5rem] sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.95] flex flex-col">
            <span className="text-white drop-shadow-sm">Hexa</span>
            <span className="text-[#38bdf8] drop-shadow-sm">Creative</span>
          </h1>

          {/* Sub-headline */}
          <h2 className="text-[15px] sm:text-lg lg:text-xl font-medium text-slate-300 max-w-[300px] sm:max-w-lg leading-snug">
            Solusi Transportasi & Wisata Terpercaya di{" "}
            <span className="text-white font-bold">Magelang</span> dan{" "}
            <span className="text-white font-bold">Yogyakarta</span>
          </h2>

          {/* Description text */}
          <p className="text-slate-400 text-xs sm:text-sm md:text-base max-w-[90%] sm:max-w-lg lg:max-w-md leading-relaxed mt-1">
            Layanan berkualitas tinggi memadukan kenyamanan, keamanan, dan
            kepuasan pelanggan. Driver profesional siap 24/7.
          </p>

          {/* Pills / Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-2">
            <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-slate-300 text-[10px] sm:text-xs px-3.5 py-1.5 rounded-full backdrop-blur-sm">
              <MapPin className="w-3 h-3 text-blue-400" /> Magelang
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-slate-300 text-[10px] sm:text-xs px-3.5 py-1.5 rounded-full backdrop-blur-sm">
              <MapPin className="w-3 h-3 text-blue-400" /> Yogyakarta
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-slate-300 text-[10px] sm:text-xs px-3.5 py-1.5 rounded-full backdrop-blur-sm">
              <Clock className="w-3 h-3 text-blue-400" /> 24/7
            </span>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-row items-center justify-center lg:justify-start gap-3 w-full lg:w-auto mt-4">
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold flex-1 sm:flex-none px-4 sm:px-8 py-3 h-auto text-[13px] sm:text-base rounded-2xl shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1"
            >
              <Link href="#contact" className="flex items-center justify-center gap-2">
                <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
                Hubungi Kami
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-white/10 bg-[#1e293b]/60 hover:bg-[#1e293b] backdrop-blur-md text-white font-semibold flex-1 sm:flex-none px-4 sm:px-8 py-3 h-auto text-[13px] sm:text-base rounded-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <Link href="#services" className="flex items-center justify-center gap-2">
                Lihat Layanan
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* === RIGHT COLUMN: Car Image === */}
        <div className="relative w-full lg:w-[55%] xl:w-1/2 flex items-center lg:items-end justify-center lg:justify-end mt-auto lg:mt-0 z-10">
          {/* subtle glow behind the cars */}
          <div className="absolute top-1/2 lg:bottom-10 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-0 w-[80%] h-32 lg:h-48 bg-blue-500/20 blur-[80px] rounded-full" />
          
          <Image
            src="/assets/rental3.png"
            alt="Armada Hexa Creative"
            width={800}
            height={600}
            priority
            className="relative w-full max-w-xl lg:max-w-none object-contain drop-shadow-2xl max-h-[40vh] sm:max-h-[50vh] lg:max-h-[75vh] 2xl:scale-110 lg:origin-bottom-right"
          />
        </div>

      </div>
    </section>
  );
}
