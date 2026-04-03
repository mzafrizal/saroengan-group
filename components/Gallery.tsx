"use client";

import { useEffect, useState } from "react";
import { Camera } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const galleries = [
  {
    title: "Proses Panen Kentang",
    description: "Petani kami memanen kentang langsung dari ladang di lereng Gunung Sumbing.",
    image: "/assets/WhatsApp%20Image%202026-03-25%20at%204.34.07%20PM.jpeg",
  },
  {
    title: "Sortir Kualitas",
    description: "Proses sortir teliti untuk memastikan tidak ada kentang busuk atau cacat.",
    image: "/assets/WhatsApp%20Image%202026-03-25%20at%204.34.25%20PM.jpeg",
  },
  {
    title: "Sistem Pengemasan",
    description: "Dikemas rapi siap dikirim ke seluruh pelanggan grosir maupun ecer.",
    image: "/assets/WhatsApp%20Image%202026-03-25%20at%204.34.26%20PM%20(1).jpeg",
  },
  {
    title: "Pesona Lereng Sumbing",
    description: "Ladang kami di Dusun Marongan.",
    image: "/assets/WhatsApp%20Image%202026-03-25%20at%204.34.26%20PM.jpeg",
  },
];

export default function Gallery() {
  const [api, setApi] = useState<CarouselApi>();

  // Implementasi Autoplay Manual karena embla-carousel-autoplay tidak di-export
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000); // 4 detik per frame

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="gallery" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto border-x border-transparent">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-amber-600 font-semibold text-sm tracking-widest uppercase mb-3 text-center">
            Katalog & Dokumentasi
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-4">
            Galeri Kegiatan Kami
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-stone-500 text-lg">
            Melihat lebih dekat proses panen, penyortiran, dan pengiriman kentang segar langsung dari tangan petani Sukomakmur.
          </p>
        </div>

        {/* Carousel Satu Frame */}
        <div className="relative mx-auto max-w-5xl px-0 md:px-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleries.map((item, idx) => (
                <CarouselItem key={idx}>
                  <div className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden group shadow-lg">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      priority={idx === 0}
                      className="object-cover transition-transform duration-[10000ms] group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 1024px"
                    />

                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Styling Navigation */}
            <CarouselPrevious className="hidden md:flex -left-0 w-14 h-14 bg-white/90 border-0 shadow-xl hover:bg-amber-50 hover:text-amber-600 transition-all z-10" />
            <CarouselNext className="hidden md:flex -right-0 w-14 h-14 bg-white/90 border-0 shadow-xl hover:bg-amber-50 hover:text-amber-600 transition-all z-10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
