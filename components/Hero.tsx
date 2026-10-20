import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-stone-950"
    >
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(180,83,9,0.25)_0,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(120,53,15,0.20)_0,transparent_60%)]" />

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      {/* Watermark text */}
      <div className="absolute top-[30%] left-[-5%] text-[12rem] lg:text-[18rem] font-black text-white/[0.025] whitespace-nowrap select-none pointer-events-none z-0 tracking-tighter">
        SAROENGAN
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 py-32 flex flex-col items-center text-center gap-8">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs sm:text-sm px-4 py-2 rounded-full backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Satu Wadah, Beragam Rasa</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.9] flex flex-col gap-2">
          <span className="text-white">Selamat Datang di</span>
          <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent drop-shadow-sm">
            Saroengan Group
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-stone-300 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed font-medium">
          Satu wadah, beragam rasa. Temukan pengalaman kuliner dan tempat nongkrong
          terbaik yang pas untuk setiap momen Anda.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <Button
            asChild
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold px-8 py-4 h-auto text-base rounded-2xl shadow-lg shadow-amber-600/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-amber-600/50"
          >
            <Link href="#businesses" className="flex items-center gap-2">
              Jelajahi Bisnis Kami
              <ChevronDown className="w-5 h-5" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-semibold px-8 py-4 h-auto text-base rounded-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <Link href="#about">Tentang Kami</Link>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-500 animate-bounce">
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
}
